---
title: 学习AntV/G6
subtitle: 关于阅读G6文档以及源码所获得的知识
lang: zh
duration: 3min
type: blog
date: Thu Jul 10 2025 10:52:24 GMT+0800 (中国标准时间)
place: 长沙
art: radom
---

### 一些概念

1. 图形的基本继承顺序

    源码：https://github.com/antvis/G6/tree/v5/packages/g6/src/elements

    > CustomElement 来自更底层的 AntV/g

    **CustomElement** -> **Shape**[baseShape, badege, icon, label, polygon...] -> **Node**[baseNode, rect, circle, ellipse, html, image...]

    **baseNode** -> **Combo** [BaseCombo, circle, rect]

    元素（节点Node/边Edge） 是由一个或多个 Shape 组成的。Shape 是构成 Node 的基本单元。因此，Shape 是 Node 的基本组成部分。
    而Combo则是由基本的baseNode组成。

    - 每一个基本的Node都有各自继承并实现的两个关键函数：
        - **drawKeyShape：** 用于绘制关键图形,例如五角星star、diamond钻石的关键图形其实都是Shape中的多边形polygon，因此主要的交互检测、样式随 元素状态 自动更新、包围盒（Bounding Box）等都继承自polygon
        - **getKeyStyle：** 获取该图形特有的一些样式

<hr/>

### 一些代码

1.  如何剔除对象中某些的属性，获取剩余属性？

    源码：https://github.com/antvis/G6/blob/v5/packages/g6/src/utils/style.ts#L69

    ```ts
    function getSubShapeStyle( style ){
        const { x, y, z, zIndex, visibility, ...rest } = style
        // 在剔除主动声明的属性后，其余属性会收集到 rest 对象中
        return rest
    }
    ```

<commentBox/>
