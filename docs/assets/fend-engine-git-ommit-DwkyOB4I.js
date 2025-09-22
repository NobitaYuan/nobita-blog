import {
  u as e,
  _ as n,
} from "./WrapperPost.vue_vue_type_script_setup_true_lang-d5S1uDSL.js";
import { o as r, c as y, w as d, a as s, b as t } from "./app-CVuLZ3l0.js";
const h = "/images/cz_example.png",
  B = {
    __name: "fend-engine-git-ommit",
    setup(g) {
      const a = {
        title: "前端工程—Git Commit 提交规范化",
        subtitle: "用于新项目快速配置",
        lang: "zh",
        duration: "5min",
        type: "blog",
        date: "2023-8-7",
        meta: [
          { property: "og:title", content: "前端工程—Git Commit 提交规范化" },
          { name: "twitter:title", content: "前端工程—Git Commit 提交规范化" },
        ],
      };
      return (
        e({
          title: "前端工程—Git Commit 提交规范化",
          meta: [
            { property: "og:title", content: "前端工程—Git Commit 提交规范化" },
            {
              name: "twitter:title",
              content: "前端工程—Git Commit 提交规范化",
            },
          ],
        }),
        (k, l) => {
          const i = n;
          return (
            r(),
            y(
              i,
              { frontmatter: a },
              {
                default: d(
                  () =>
                    l[0] ||
                    (l[0] = [
                      s(
                        "div",
                        { class: "prose m-auto slide-enter-content" },
                        [
                          s("p", null, [
                            s("div", { class: "table-of-contents" }, [
                              s("div", { class: "table-of-contents-anchor" }, [
                                s("div", { class: "i-ri-menu-2-fill" }),
                              ]),
                              s("ul", null, [
                                s("li", null, [
                                  s(
                                    "a",
                                    { href: "#需要的工具" },
                                    "需要的工具 ",
                                  ),
                                  s("ul", null, [
                                    s("li", null, [
                                      s(
                                        "a",
                                        { href: "#commitlint" },
                                        "commitlint ",
                                      ),
                                    ]),
                                    s("li", null, [
                                      s("a", { href: "#cz-git" }, "cz-git "),
                                    ]),
                                  ]),
                                ]),
                                s("li", null, [
                                  s(
                                    "a",
                                    { href: "#快速一套配置" },
                                    "快速一套配置 ",
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                          s("h2", { id: "需要的工具", tabindex: "-1" }, [
                            t("需要的工具 "),
                            s(
                              "a",
                              {
                                class: "header-anchor",
                                href: "#需要的工具",
                                "aria-hidden": "true",
                              },
                              "#",
                            ),
                          ]),
                          s("h3", { id: "commitlint", tabindex: "-1" }, [
                            t("commitlint "),
                            s(
                              "a",
                              {
                                class: "header-anchor",
                                href: "#commitlint",
                                "aria-hidden": "true",
                              },
                              "#",
                            ),
                          ]),
                          s("blockquote", null, [
                            s("p", null, [
                              s(
                                "a",
                                {
                                  href: "https://github.com/commitizen/cz-cli",
                                  target: "_blank",
                                  rel: "noopener",
                                },
                                "Github",
                              ),
                              t(" | "),
                              s(
                                "a",
                                {
                                  href: "https://commitizen.github.io/cz-cli/",
                                  target: "_blank",
                                  rel: "noopener",
                                },
                                "官方文档",
                              ),
                            ]),
                            s("p", null, "检查提交消息是否符合常规提交格式"),
                          ]),
                          s("h3", { id: "cz-git", tabindex: "-1" }, [
                            t("cz-git "),
                            s(
                              "a",
                              {
                                class: "header-anchor",
                                href: "#cz-git",
                                "aria-hidden": "true",
                              },
                              "#",
                            ),
                          ]),
                          s("blockquote", null, [
                            s("p", null, [
                              s(
                                "a",
                                {
                                  href: "https://github.com/Zhengqbbb/cz-git",
                                  target: "_blank",
                                  rel: "noopener",
                                },
                                "Github",
                              ),
                              t(" | "),
                              s(
                                "a",
                                {
                                  href: "https://cz-git.qbb.sh/zh/",
                                  target: "_blank",
                                  rel: "noopener",
                                },
                                "官方文档",
                              ),
                            ]),
                            s(
                              "p",
                              null,
                              "工程性更强，轻量级，高度自定义， 输出标准格式的 Commitizen 适配器和 CLI",
                            ),
                            s("p", null, "可与commitlint配合"),
                          ]),
                          s("h2", { id: "快速一套配置", tabindex: "-1" }, [
                            t("快速一套配置 "),
                            s(
                              "a",
                              {
                                class: "header-anchor",
                                href: "#快速一套配置",
                                "aria-hidden": "true",
                              },
                              "#",
                            ),
                          ]),
                          s("ol", null, [s("li", null, "安装 commitizen")]),
                          s(
                            "pre",
                            {
                              class:
                                "shiki shiki-themes vitesse-dark vitesse-light",
                              style: {
                                "--s-dark": "#dbd7caee",
                                "--s-light": "#393a34",
                                "--s-dark-bg": "#121212",
                                "--s-light-bg": "#ffffff",
                              },
                              tabindex: "0",
                            },
                            [
                              s("code", { class: "language-shell" }, [
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#80A665",
                                        "--s-light": "#59873A",
                                      },
                                    },
                                    "pnpm",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    " i",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C99076",
                                        "--s-light": "#A65E2B",
                                      },
                                    },
                                    " -d",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    " commitizen",
                                  ),
                                ]),
                              ]),
                            ],
                          ),
                          s("ol", { start: "2" }, [
                            s("li", null, "安装 cz-git"),
                          ]),
                          s(
                            "pre",
                            {
                              class:
                                "shiki shiki-themes vitesse-dark vitesse-light",
                              style: {
                                "--s-dark": "#dbd7caee",
                                "--s-light": "#393a34",
                                "--s-dark-bg": "#121212",
                                "--s-light-bg": "#ffffff",
                              },
                              tabindex: "0",
                            },
                            [
                              s("code", { class: "language-shell" }, [
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#80A665",
                                        "--s-light": "#59873A",
                                      },
                                    },
                                    "pnpm",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    " install",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C99076",
                                        "--s-light": "#A65E2B",
                                      },
                                    },
                                    " -D",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    " cz-git",
                                  ),
                                ]),
                              ]),
                            ],
                          ),
                          s("ol", { start: "3" }, [
                            s("li", null, "配置package.json"),
                          ]),
                          s(
                            "pre",
                            {
                              class:
                                "shiki shiki-themes vitesse-dark vitesse-light",
                              style: {
                                "--s-dark": "#dbd7caee",
                                "--s-light": "#393a34",
                                "--s-dark-bg": "#121212",
                                "--s-light-bg": "#ffffff",
                              },
                              tabindex: "0",
                            },
                            [
                              s("code", { class: "language-json" }, [
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#DBD7CAEE",
                                        "--s-light": "#393A34",
                                      },
                                    },
                                    "...",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "scripts",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#DBD7CAEE",
                                        "--s-light": "#393A34",
                                      },
                                    },
                                    ": ",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "{",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "    ...",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A96577",
                                        "--s-light": "#99841877",
                                      },
                                    },
                                    '    "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A965",
                                        "--s-light": "#998418",
                                      },
                                    },
                                    "cz",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A96577",
                                        "--s-light": "#99841877",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "cz",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "}",
                                  ),
                                ]),
                              ]),
                            ],
                          ),
                          s(
                            "pre",
                            {
                              class:
                                "shiki shiki-themes vitesse-dark vitesse-light",
                              style: {
                                "--s-dark": "#dbd7caee",
                                "--s-light": "#393a34",
                                "--s-dark-bg": "#121212",
                                "--s-light-bg": "#ffffff",
                              },
                              tabindex: "0",
                            },
                            [
                              s("code", { class: "language-json" }, [
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "config",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#DBD7CAEE",
                                        "--s-light": "#393A34",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "{",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A96577",
                                        "--s-light": "#99841877",
                                      },
                                    },
                                    '    "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A965",
                                        "--s-light": "#998418",
                                      },
                                    },
                                    "commitizen",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A96577",
                                        "--s-light": "#99841877",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " {",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A96577",
                                        "--s-light": "#99841877",
                                      },
                                    },
                                    '        "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A965",
                                        "--s-light": "#998418",
                                      },
                                    },
                                    "path",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A96577",
                                        "--s-light": "#99841877",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "node_modules/cz-git",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "    }",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "}",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#DBD7CAEE",
                                        "--s-light": "#393A34",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                              ]),
                            ],
                          ),
                          s("ol", { start: "4" }, [
                            s("li", null, "添加配置文件.commitlintrc.js"),
                          ]),
                          s(
                            "pre",
                            {
                              class:
                                "shiki shiki-themes vitesse-dark vitesse-light",
                              style: {
                                "--s-dark": "#dbd7caee",
                                "--s-light": "#393a34",
                                "--s-dark-bg": "#121212",
                                "--s-light-bg": "#ffffff",
                              },
                              tabindex: "0",
                            },
                            [
                              s("code", { class: "language-json" }, [
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#758575DD",
                                        "--s-light": "#A0ADA0",
                                      },
                                    },
                                    "// .commitlintrc.js",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#758575DD",
                                        "--s-light": "#A0ADA0",
                                      },
                                    },
                                    "/** @type {import('cz-git').UserConfig} */",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#DBD7CAEE",
                                        "--s-light": "#393A34",
                                      },
                                    },
                                    "module.exports = ",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "{",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "    rules",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " {",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#758575DD",
                                        "--s-light": "#A0ADA0",
                                      },
                                    },
                                    "        // @see: https://commitlint.js.org/#/reference-rules",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "    },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "    prompt",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " {",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        alias",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " fd",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "docs: fix typos",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        messages",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " {",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            type",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "选择你要提交的类型 :",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            scope",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "选择一个提交范围（可选）:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            customScope",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "请输入自定义的提交范围 :",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            subject",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "填写简短精炼的变更描述 :",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C99076",
                                        "--s-light": "#A65E2B",
                                      },
                                    },
                                    "\\n",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            body",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " '填写更加详细的变更描述（可选）。使用",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "|",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " 换行",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " :\\n'",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            breaking",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " '列举非兼容性重大的变更（可选）。使用",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "|",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " 换行",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " :\\n'",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            footerPrefixesSelect",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "选择关联issue前缀（可选）:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            customFooterPrefix",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "输入自定义issue前缀 :",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            footer",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "列举关联issue (可选) 例如: #31, #I3244 :",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C99076",
                                        "--s-light": "#A65E2B",
                                      },
                                    },
                                    "\\n",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "            confirmCommit",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "是否提交或修改commit ?",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "        },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        types",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " [",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "feat✨",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "feat:     ✨   新增功能 | A new feature",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":sparkles:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "fix🪲",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "fix:      🪲    修复缺陷 | A bug fix",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":bug:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "update🆙",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "update:   🆙   更新修改 | Update and Modify",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":update:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "docs📝",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "docs:     📝   文档更新 | Documentation only changes",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":memo:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "style💄",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "style:    💄   代码格式 | Changes that do not affect the meaning of the code",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":lipstick:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "refactor♻️",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "refactor: ♻️    代码重构 | A code change that neither fixes a bug nor adds a feature",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":recycle:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "perf⚡️",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "perf:     ⚡️   性能提升 | A code change that improves performance",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":zap:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "test✅",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "test:     ✅   测试相关 | Adding missing tests or correcting existing tests",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":white_check_mark:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "build📦️",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "build:    📦️   构建相关 | Changes that affect the build system or external dependencies",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":package:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "ci🎡",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "ci:       🎡   持续集成 | Changes to our CI configuration files and scripts",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":ferris_wheel:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "revert🔙",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "revert:   🔙   回退代码 | Revert to a commit",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":back:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "chore🧹",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "chore:    🧹   其他修改 | Other changes that do not modify src or test files",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":rewind:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "merge📊",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "merge:    📊   合并分支 | Merge feature branch into main branch",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " emoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    ":tree:",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "        ],",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#758575DD",
                                        "--s-light": "#A0ADA0",
                                      },
                                    },
                                    "        // 是否使用Emoji",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        useEmoji",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " false",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        emojiAlign",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "center",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        useAI",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " false",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        aiNumber",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4C9A91",
                                        "--s-light": "#2F798A",
                                      },
                                    },
                                    " 1",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        themeColorCode",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' ""',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        scopes",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " [],",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        allowCustomScopes",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " true",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        allowEmptyScopes",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " true",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        customScopesAlign",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "bottom",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        customScopesAlias",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "custom",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        emptyScopesAlias",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "empty",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        upperCaseSubject",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " false",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        markBreakingChangeMode",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " false",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        allowBreakingChanges",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " [",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "feat",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "fix",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "],",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        breaklineNumber",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4C9A91",
                                        "--s-light": "#2F798A",
                                      },
                                    },
                                    " 100",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        breaklineChar",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "|",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        skipQuestions",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " [],",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        issuePrefixes",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " [",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#758575DD",
                                        "--s-light": "#A0ADA0",
                                      },
                                    },
                                    "            // 如果使用 gitee 作为开发管理",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "link",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "link:     链接 ISSUES 进行中",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "            {",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " value",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "closed",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " name",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "closed:   标记 ISSUES 已完成",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    " },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "        ],",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        customIssuePrefixAlign",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "top",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        emptyIssuePrefixAlias",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "skip",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        customIssuePrefixAlias",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' "',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    "custom",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    '"',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        allowCustomIssuePrefix",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " true",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        allowEmptyIssuePrefix",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " true",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        confirmColorize",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4D9375",
                                        "--s-light": "#1E754F",
                                      },
                                    },
                                    " true",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        maxHeaderLength",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " Infinity",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        maxSubjectLength",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " Infinity",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        minSubjectLength",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#4C9A91",
                                        "--s-light": "#2F798A",
                                      },
                                    },
                                    " 0",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        scopeOverrides",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    " undefined",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        defaultBody",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' ""',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        defaultIssues",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' ""',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        defaultScope",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' ""',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#FDAEB7",
                                        "--s-light": "#B31D28",
                                        "--s-dark-font-style": "italic",
                                        "--s-light-font-style": "italic",
                                      },
                                    },
                                    "        defaultSubject",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ":",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D77",
                                        "--s-light": "#B5695977",
                                      },
                                    },
                                    ' ""',
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    ",",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "    },",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#666666",
                                        "--s-light": "#999999",
                                      },
                                    },
                                    "}",
                                  ),
                                ]),
                              ]),
                            ],
                          ),
                          s("ol", { start: "5" }, [s("li", null, "使用")]),
                          s(
                            "pre",
                            {
                              class:
                                "shiki shiki-themes vitesse-dark vitesse-light",
                              style: {
                                "--s-dark": "#dbd7caee",
                                "--s-light": "#393a34",
                                "--s-dark-bg": "#121212",
                                "--s-light-bg": "#ffffff",
                              },
                              tabindex: "0",
                            },
                            [
                              s("code", { class: "language-shell" }, [
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#80A665",
                                        "--s-light": "#59873A",
                                      },
                                    },
                                    "git",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    " add",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    " .",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#80A665",
                                        "--s-light": "#59873A",
                                      },
                                    },
                                    "pnpm",
                                  ),
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#C98A7D",
                                        "--s-light": "#B56959",
                                      },
                                    },
                                    " cz",
                                  ),
                                ]),
                                t(`
`),
                                s("span", { class: "line" }, [
                                  s(
                                    "span",
                                    {
                                      style: {
                                        "--s-dark": "#B8A965",
                                        "--s-light": "#998418",
                                      },
                                    },
                                    "...",
                                  ),
                                ]),
                              ]),
                            ],
                          ),
                          s("ol", { start: "6" }, [
                            s("li", null, [
                              t("效果如下 "),
                              s("img", { src: h, alt: "" }),
                            ]),
                          ]),
                        ],
                        -1,
                      ),
                    ]),
                ),
                _: 1,
              },
            )
          );
        }
      );
    },
  };
export { B as default };
