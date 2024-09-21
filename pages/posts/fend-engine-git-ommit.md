---
title: 前端工程—Git Commit 提交规范化
subtitle: 用于新项目快速配置
lang: zh
duration: 5min
type: blog
date: 2023-8-7
---

[[toc]]

## 需要的工具

### commitlint

> [Github](https://github.com/commitizen/cz-cli) | [官方文档](https://commitizen.github.io/cz-cli/)
>
> 检查提交消息是否符合常规提交格式

### cz-git

> [Github](https://github.com/Zhengqbbb/cz-git) | [官方文档](https://cz-git.qbb.sh/zh/)
>
> 工程性更强，轻量级，高度自定义， 输出标准格式的 Commitizen 适配器和 CLI
>
> 可与commitlint配合

## 快速一套配置

1. 安装 commitizen

```shell
pnpm i -d commitizen
```

2. 安装 cz-git

```shell
pnpm install -D cz-git
```

3. 配置package.json

```json
...
"scripts": {
    ...
    "cz": "cz"
}
```

```json
"config":{
    "commitizen": {
        "path": "node_modules/cz-git",
    }
},
```

4. 添加配置文件.commitlintrc.js

```json
// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    rules: {
        // @see: https://commitlint.js.org/#/reference-rules
    },
    prompt: {
        alias: { fd: "docs: fix typos" },
        messages: {
            type: "选择你要提交的类型 :",
            scope: "选择一个提交范围（可选）:",
            customScope: "请输入自定义的提交范围 :",
            subject: "填写简短精炼的变更描述 :\n",
            body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
            breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
            footerPrefixesSelect: "选择关联issue前缀（可选）:",
            customFooterPrefix: "输入自定义issue前缀 :",
            footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
            confirmCommit: "是否提交或修改commit ?",
        },
        types: [
            { value: "feat✨", name: "feat:     ✨   新增功能 | A new feature", emoji: ":sparkles:" },
            { value: "fix🪲", name: "fix:      🪲    修复缺陷 | A bug fix", emoji: ":bug:" },
            { value: "update🆙", name: "update:   🆙   更新修改 | Update and Modify", emoji: ":update:" },
            { value: "docs📝", name: "docs:     📝   文档更新 | Documentation only changes", emoji: ":memo:" },
            { value: "style💄", name: "style:    💄   代码格式 | Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
            { value: "refactor♻️", name: "refactor: ♻️    代码重构 | A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
            { value: "perf⚡️", name: "perf:     ⚡️   性能提升 | A code change that improves performance", emoji: ":zap:" },
            { value: "test✅", name: "test:     ✅   测试相关 | Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
            { value: "build📦️", name: "build:    📦️   构建相关 | Changes that affect the build system or external dependencies", emoji: ":package:" },
            { value: "ci🎡", name: "ci:       🎡   持续集成 | Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
            { value: "revert🔙", name: "revert:   🔙   回退代码 | Revert to a commit", emoji: ":back:" },
            { value: "chore🧹", name: "chore:    🧹   其他修改 | Other changes that do not modify src or test files", emoji: ":rewind:" },
            { value: "merge📊", name: "merge:    📊   合并分支 | Merge feature branch into main branch", emoji: ":tree:" },
        ],
        // 是否使用Emoji
        useEmoji: false,
        emojiAlign: "center",
        useAI: false,
        aiNumber: 1,
        themeColorCode: "",
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: "bottom",
        customScopesAlias: "custom",
        emptyScopesAlias: "empty",
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ["feat", "fix"],
        breaklineNumber: 100,
        breaklineChar: "|",
        skipQuestions: [],
        issuePrefixes: [
            // 如果使用 gitee 作为开发管理
            { value: "link", name: "link:     链接 ISSUES 进行中" },
            { value: "closed", name: "closed:   标记 ISSUES 已完成" },
        ],
        customIssuePrefixAlign: "top",
        emptyIssuePrefixAlias: "skip",
        customIssuePrefixAlias: "custom",
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: "",
        defaultIssues: "",
        defaultScope: "",
        defaultSubject: "",
    },
}
```

5. 使用

```shell
git add .
pnpm cz
...
```

6. 效果如下
   ![](/images/cz_example.png)
