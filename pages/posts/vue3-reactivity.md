---
title: 一看就懂的 Vue 3 响应式原理
subtitle: 从 Proxy 到 effect，一条链路讲透响应式
lang: zh
duration: 15min
type: blog
date: 2025-04-17
art: random
---

# Vue 3 响应式原理

## 一句话概括

**Proxy 拦截读写 → get 时收集依赖（track）→ set 时触发更新（trigger）**

---

## 核心 API

| API | 作用 |
|---|---|
| `Proxy` | 拦截对象的 get/set，自动触发 track/trigger |
| `Reflect` | 配合 Proxy，保证 this 指向 proxy 而非原始对象 |
| `WeakMap + Map + Set` | 三层结构存储依赖关系 |

---

## 依赖存储结构

```
targetMap: WeakMap<target, Map<key, Set<effect>>>
```

- **WeakMap** — 区分对象，弱引用防内存泄漏
- **Map** — 区分属性
- **Set** — 存多个 effect，自动去重

### 具体示例

```ts
const obj1 = reactive({ name: '张三', age: 25 });
const obj2 = reactive({ title: '标题' });

effect(() => { console.log(obj1.name); });  // effect A
effect(() => { console.log(obj1.name); });  // effect B
effect(() => { console.log(obj1.age); });   // effect C
effect(() => { console.log(obj2.title); }); // effect D
```

存储结构：

```
targetMap (WeakMap)
  │
  ├── obj1 → (Map)
  │           ├── "name" → Set [ effectA, effectB ]
  │           └── "age"  → Set [ effectC ]
  │
  └── obj2 → (Map)
              └── "title" → Set [ effectD ]
```

少一层都不行：

| 去掉哪层 | 问题 |
|---|---|
| 去掉外层 WeakMap | 无法区分不同对象，obj1.name 变了可能触发 obj2 的 effect |
| 去掉中间 Map | 无法区分属性，name 变了会把 age 的 effect 也触发 |
| 去掉内层 Set | 同一个属性只能记一个 effect，后注册的覆盖前面的 |

---

## 三个核心函数

### effect — 注册副作用

```ts
function effect(fn) {
  activeEffect = fn;   // 标记当前函数
  fn();                 // 执行过程中读响应式数据 → 自动触发 get → 收集依赖
  activeEffect = null;
}
```

副作用 = 一个函数依赖了响应式数据，数据变了，这个函数就该重新跑。

"注册"不是手动告诉系统"我依赖什么"，而是 **函数执行时自动被收集**。只要通过 Proxy 对象访问属性，就一定走 get 拦截器，拦截器里就能记录这个函数。

### track — 依赖收集（get 时调用）

```ts
function track(target, key) {
  if (!activeEffect) return;
  deps.add(activeEffect);  // 把当前 effect 存进 target.key 的依赖集合
}
```

### trigger — 派发更新（set 时调用）

```ts
function trigger(target, key) {
  deps.forEach(fn => fn());  // 把 target.key 下所有 effect 重新执行一遍
}
```

---

## 完整执行链路

```
effect(() => console.log(state.count))
  │
  ├─① activeEffect = fn
  ├─② 执行 fn → 读 state.count
  │       │
  │       ▼ (state 是 Proxy，读属性走 get 拦截器)
  │     get() → track(target, 'count') → 把 fn 收进 Set
  │       │
  │       ▼
  │     return Reflect.get(target, 'count', receiver)
  │                    ↑ receiver 保证 getter 里 this 指向 proxy
  ├─③ activeEffect = null
  │
  ▼ 后续 state.count = 1
  │
  ▼ set() → trigger(target, 'count') → 从 Set 里取出 fn 重新执行
```

---

## 为什么用 Reflect

### 1. 保证 this 指向正确（最关键）

```ts
const obj = {
  _count: 0,
  get count() {
    return this._count; // this 是谁？
  },
};

const proxy = new Proxy(obj, {
  get(target, key) {
    // ❌ 不用 Reflect → this 指向原始对象 target
    //    getter 里 this._count 不会触发 proxy 拦截 → 依赖收集丢失
    return target[key];

    // ✅ 用 Reflect + receiver → this 指向 proxy
    //    getter 里 this._count 再次触发 proxy 的 get → 正确收集依赖
    return Reflect.get(target, key, receiver);
  },
});
```

### 2. set 返回值正确性

```ts
// ❌ 赋值后直接 return true，属性不可写时谎报成功
target[key] = value;
return true;

// ✅ 返回 Reflect 的结果，严格遵循规范
return Reflect.set(target, key, value, receiver);
```

---

## 为什么 effect 要包一层 effectFn

最小实现可以直接用 `fn`，但真实系统需要在函数外挂控制逻辑：

```ts
function effect(fn) {
  const effectFn = () => {
    if (!effectFn.active) return;   // 可以停止
    activeEffect = effectFn;
    fn();
    activeEffect = null;
  };
  effectFn.active = true;           // 挂状态
  effectFn.deps = [];               // 记录自己被哪些依赖收集了
  effectFn();
  return effectFn;                  // 返回出去，外部可以控制
}
```

**effectFn 是壳，fn 是核。壳上挂控制逻辑，核里才是用户代码。**

---

## 关键设计点总结

| 设计 | 为什么 |
|---|---|
| 用 `Reflect` | 让 getter/setter 内的 `this` 指向 proxy，嵌套属性也能被拦截 |
| `effect` 包一层 `effectFn` | 壳上挂控制逻辑（停止、调度、清理），核里是用户代码 |
| `WeakMap` 做最外层 | 对象销毁时依赖树自动被 GC 回收 |
| `Set` 存 effect | 自动去重 + O(1) 添加删除 |
| 收集时机在 `get` | 不需要手动声明依赖，执行时读了什么就自动订阅什么 |

---

## 最小完整实现

```ts
const targetMap = new WeakMap<object, Map<PropertyKey, Set<() => void>>>();
let activeEffect: (() => void) | null = null;

function effect(fn: () => void) {
  const effectFn = () => {
    activeEffect = effectFn;
    fn();
    activeEffect = null;
  };
  effectFn();
}

function track(target: object, key: PropertyKey) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) targetMap.set(target, (depsMap = new Map()));
  let deps = depsMap.get(key);
  if (!deps) depsMap.set(key, (deps = new Set()));
  deps.add(activeEffect);
}

function trigger(target: object, key: PropertyKey) {
  targetMap.get(target)?.get(key)?.forEach(fn => fn());
}

function reactive<T extends object>(obj: T): T {
  return new Proxy(obj, {
    get(target, key, receiver) {
      track(target, key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver);
      trigger(target, key);
      return true;
    },
  });
}
```

`ref`、`computed`、`watch` 都是在这个骨架之上组装的。

---

## 使用示例

```ts
// ============ 基础使用 ============

// 创建响应式对象
const state = reactive({ count: 0, name: '张三' });

// 注册副作用，首次立即执行一次，后续依赖变化时自动重新执行
effect(() => {
  console.log(`count: ${state.count}`);
});
// 立即输出: count: 0

state.count++;
// 自动输出: count: 1

state.name = '李四';
// 不输出，因为上面的 effect 没有读取 name


// ============ 多个 effect 订阅同一属性 ============

effect(() => {
  console.log(`effect1: ${state.count}`);
});

effect(() => {
  console.log(`effect2: ${state.count}`);
});

state.count++;
// 输出:
// effect1: 1
// effect2: 1


// ============ 嵌套对象 ============

const user = reactive({
  profile: { name: '张三', age: 25 },
});

effect(() => {
  console.log(`name: ${user.profile.name}`);
});
// 输出: name: 张三

user.profile.name = '李四';
// 输出: name: 李四

// 注意：最小实现中的 reactive 只代理了第一层
// 深层响应式需要递归代理，Vue 3 的真实实现会在 get 时懒加载深层代理


// ============ 在浏览器中运行 ============

// HTML
// <div id="app"></div>
// <button id="btn">+1</button>

const app = document.getElementById('app')!;
const btn = document.getElementById('btn')!;

const state = reactive({ count: 0 });

// 副作用：自动更新 DOM
effect(() => {
  app.textContent = `点击次数: ${state.count}`;
});

// 事件触发时修改数据，副作用自动重跑
btn.addEventListener('click', () => {
  state.count++;
});
```

<commentBox/>
