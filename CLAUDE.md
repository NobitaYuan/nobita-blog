# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概览

个人博客/主页，fork 自 antfu.me，基于 Vue 3 + Vite + vite-ssg（静态站点生成）。推送 main 分支后通过 GitHub Actions 自动构建并部署到 GitHub Pages（`.github/workflows/deploy.yml`）。

## 常用命令

- `pnpm dev` — 启动开发服务器，端口 3333
- `pnpm build` — 生产构建（vite-ssg + 复制 _redirects）
- `pnpm preview` — 本地预览生产构建
- `pnpm lint` — ESLint 检查，使用 @antfu/eslint-config

## 架构

### 路由

基于文件的路由，使用 `unplugin-vue-router`。`pages/` 目录下的文件自动生成路由，支持 `.vue` 和 `.md`。Markdown 的 frontmatter 通过 `vite.config.ts` 的 `extendRoute` 提取到 route meta 中。

### 内容结构

- `pages/posts/` — 博客文章
- `pages/notes/` — 笔记
- `pages/game/` — 游戏相关
- `demo/` — 示例 markdown 文件

Markdown frontmatter 字段：`title`、`subtitle`、`type`（blog/notes/game）、`date`、`duration`、`lang`、`place`、`art`（random/plum/dots）、`draft`。

### 核心目录

- `src/components/` — Vue 组件（艺术动画、评论区、shiki 代码块、图标）
- `src/store/` — Pinia 状态管理（nav、shiki）
- `src/styles/` — 样式文件（main.css、prose.css、markdown.css）
- `src/utils/` — 工具函数
- `scripts/` — 构建脚本（搜索索引、RSS、图片压缩、slugify）

### 样式方案

UnoCSS，使用 Uno、Attributify、Icons、Web Fonts 预设。字体：Inter、DM Mono、Roboto Condensed、Bad Script。

### 评论系统

基于 Utterances，组件位于 `src/components/comment/commentBox.vue`。在文章中手动添加 `<commentBox/>` 开启评论。

### 主要集成

- Shiki + Twoslash — 代码高亮与类型标注
- markdown-it — 锚点、GitHub alerts、magic links
- Matter.js — 视觉特效
- Auto-import — Vue/Router/VueUse API 和组件自动导入
- 构建时搜索索引生成（`scripts/generate-search-index.ts`）

## 规范

- 包管理器使用 pnpm
- 提交风格：`blog📑: 描述` 或 `chore: 描述`
- ESLint 使用 @antfu/eslint-config（无分号、单引号）
- 路径别名：`~/` 映射到 `src/`

## 自定义 Skill

- `/new-post` — 博客文章生成器。接收文章内容，询问标题/副标题/类型，自动生成 frontmatter 并保存到 `pages/` 对应目录。


## 提交代码规范

- 除了特地声明，否则每次提交代码都git add . 
- 使用pnpm cz commit代码，选择合适的提交类型（如blog、 feat、fix、docs、chore 等），并在提交信息中简洁描述更改内容。避免在提交信息中包含敏感信息或水印。

不要在commit信息里写claudeCode水印！！！
不要在commit信息里写claudeCode水印！！！
不要在commit信息里写claudeCode水印！！！