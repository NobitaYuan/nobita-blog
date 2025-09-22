import {
  u as r,
  _ as o,
} from "./WrapperPost.vue_vue_type_script_setup_true_lang-d5S1uDSL.js";
import { _ as i } from "./commentBox.vue_vue_type_style_index_0_lang-BMSLJoC-.js";
import {
  o as p,
  c as d,
  w as g,
  a as s,
  b as t,
  d as h,
} from "./app-CVuLZ3l0.js";
const u = { class: "prose m-auto slide-enter-content" },
  A = {
    __name: "read-g6-source-code",
    setup(c) {
      const l = {
        title: "学习AntV/G6",
        subtitle: "关于阅读G6文档以及源码所获得的知识",
        lang: "zh",
        duration: "3min",
        type: "blog",
        date: "Thu Jul 10 2025 10:52:24 GMT+0800 (中国标准时间)",
        place: "长沙",
        art: "radom",
        meta: [
          { property: "og:title", content: "学习AntV/G6" },
          { name: "twitter:title", content: "学习AntV/G6" },
        ],
      };
      return (
        r({
          title: "学习AntV/G6",
          meta: [
            { property: "og:title", content: "学习AntV/G6" },
            { name: "twitter:title", content: "学习AntV/G6" },
          ],
        }),
        (k, e) => {
          const a = i,
            n = o;
          return (
            p(),
            d(
              n,
              { frontmatter: l },
              {
                default: g(() => [
                  s("div", u, [
                    e[0] ||
                      (e[0] = s(
                        "h3",
                        { id: "一些概念", tabindex: "-1" },
                        [
                          t("一些概念 "),
                          s(
                            "a",
                            {
                              class: "header-anchor",
                              href: "#一些概念",
                              "aria-hidden": "true",
                            },
                            "#",
                          ),
                        ],
                        -1,
                      )),
                    e[1] ||
                      (e[1] = s(
                        "ol",
                        null,
                        [
                          s("li", null, [
                            s("p", null, "图形的基本继承顺序"),
                            s("p", null, [
                              t("源码："),
                              s(
                                "a",
                                {
                                  href: "https://github.com/antvis/G6/tree/v5/packages/g6/src/elements",
                                  target: "_blank",
                                  rel: "noopener",
                                },
                                "https://github.com/antvis/G6/tree/v5/packages/g6/src/elements",
                              ),
                            ]),
                            s("blockquote", null, [
                              s("p", null, "CustomElement 来自更底层的 AntV/g"),
                            ]),
                            s("p", null, [
                              s("strong", null, "CustomElement"),
                              t(" -> "),
                              s("strong", null, "Shape"),
                              t(
                                "[baseShape, badege, icon, label, polygon…] -> ",
                              ),
                              s("strong", null, "Node"),
                              t(
                                "[baseNode, rect, circle, ellipse, html, image…]",
                              ),
                            ]),
                            s("p", null, [
                              s("strong", null, "baseNode"),
                              t(" -> "),
                              s("strong", null, "Combo"),
                              t(" [BaseCombo, circle, rect]"),
                            ]),
                            s(
                              "p",
                              null,
                              "元素（节点Node/边Edge） 是由一个或多个 Shape 组成的。Shape 是构成 Node 的基本单元。因此，Shape 是 Node 的基本组成部分。 而Combo则是由基本的baseNode组成。",
                            ),
                            s("ul", null, [
                              s("li", null, [
                                t(
                                  "每一个基本的Node都有各自继承并实现的两个关键函数： ",
                                ),
                                s("ul", null, [
                                  s("li", null, [
                                    s("strong", null, "drawKeyShape："),
                                    t(
                                      " 用于绘制关键图形,例如五角星star、diamond钻石的关键图形其实都是Shape中的多边形polygon，因此主要的交互检测、样式随 元素状态 自动更新、包围盒（Bounding Box）等都继承自polygon",
                                    ),
                                  ]),
                                  s("li", null, [
                                    s("strong", null, "getKeyStyle："),
                                    t(" 获取该图形特有的一些样式"),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ],
                        -1,
                      )),
                    e[2] || (e[2] = s("hr", null, null, -1)),
                    e[3] ||
                      (e[3] = s(
                        "h3",
                        { id: "一些代码", tabindex: "-1" },
                        [
                          t("一些代码 "),
                          s(
                            "a",
                            {
                              class: "header-anchor",
                              href: "#一些代码",
                              "aria-hidden": "true",
                            },
                            "#",
                          ),
                        ],
                        -1,
                      )),
                    e[4] ||
                      (e[4] = s(
                        "ol",
                        null,
                        [
                          s("li", null, [
                            s(
                              "p",
                              null,
                              "如何剔除对象中某些的属性，获取剩余属性？",
                            ),
                            s("p", null, [
                              t("源码："),
                              s(
                                "a",
                                {
                                  href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/utils/style.ts#L69",
                                  target: "_blank",
                                  rel: "noopener",
                                },
                                "https://github.com/antvis/G6/blob/v5/packages/g6/src/utils/style.ts#L69",
                              ),
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
                                s("code", { class: "language-ts" }, [
                                  s("span", { class: "line" }, [
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#CB7676",
                                          "--s-light": "#AB5959",
                                        },
                                      },
                                      "function",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#80A665",
                                          "--s-light": "#59873A",
                                        },
                                      },
                                      " getSubShapeStyle",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#666666",
                                          "--s-light": "#999999",
                                        },
                                      },
                                      "(",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      " style",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#666666",
                                          "--s-light": "#999999",
                                        },
                                      },
                                      " ){",
                                    ),
                                  ]),
                                  t(`
`),
                                  s("span", { class: "line" }, [
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#CB7676",
                                          "--s-light": "#AB5959",
                                        },
                                      },
                                      "    const ",
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
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      " x",
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
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      " y",
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
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      " z",
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
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      " zIndex",
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
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      " visibility",
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
                                          "--s-dark": "#666666",
                                          "--s-light": "#999999",
                                        },
                                      },
                                      " ...",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      "rest",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#666666",
                                          "--s-light": "#999999",
                                        },
                                      },
                                      " }",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#666666",
                                          "--s-light": "#999999",
                                        },
                                      },
                                      " =",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      " style",
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
                                      "    // 在剔除主动声明的属性后，其余属性会收集到 rest 对象中",
                                    ),
                                  ]),
                                  t(`
`),
                                  s("span", { class: "line" }, [
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#4D9375",
                                          "--s-light": "#1E754F",
                                        },
                                      },
                                      "    return",
                                    ),
                                    s(
                                      "span",
                                      {
                                        style: {
                                          "--s-dark": "#BD976A",
                                          "--s-light": "#B07D48",
                                        },
                                      },
                                      " rest",
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
                          ]),
                        ],
                        -1,
                      )),
                    h(a),
                  ]),
                ]),
                _: 1,
              },
            )
          );
        }
      );
    },
  };
export { A as default };
