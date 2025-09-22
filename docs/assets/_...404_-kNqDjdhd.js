import {
  u as a,
  _ as r,
} from "./WrapperPost.vue_vue_type_script_setup_true_lang-d5S1uDSL.js";
import { o as s, c, w as l, a as e } from "./app-CVuLZ3l0.js";
const _ = {
  __name: "[...404]",
  setup(i) {
    const o = {
      title: "404 NOT FOUND！",
      subtitle: null,
      meta: [
        { property: "og:title", content: "404 NOT FOUND！" },
        { name: "twitter:title", content: "404 NOT FOUND！" },
      ],
    };
    return (
      a({
        title: "404 NOT FOUND！",
        meta: [
          { property: "og:title", content: "404 NOT FOUND！" },
          { name: "twitter:title", content: "404 NOT FOUND！" },
        ],
      }),
      (m, t) => {
        const n = r;
        return (
          s(),
          c(
            n,
            { frontmatter: o },
            {
              default: l(
                () =>
                  t[0] ||
                  (t[0] = [
                    e(
                      "div",
                      { class: "prose m-auto slide-enter-content" },
                      [e("p", null, "这里什么都没有哦，快回去吧~")],
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
export { _ as default };
