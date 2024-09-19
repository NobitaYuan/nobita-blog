---
title: 前端工程—配置husky提交前格式化
subtitle: 用于新项目快速配置
lang: zh
duration: 2min
type: blog
date: 2023-11-21
---

### Git commit 的预先格式化

1. 安装

```shell
pnpm i -d husky
pnpm i -d lint-staged
```

2. package.json中添加命令

```json
 "scripts": {
        ...
        "prepare": "husky install"
    },
```

3. 执行

```
pnpm run prepare
```

4. 添加文件

在文件根目录中的.husky文件夹中添加pre-commit文件

```shell
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm exec lint-staged
```

5. 完事儿~
