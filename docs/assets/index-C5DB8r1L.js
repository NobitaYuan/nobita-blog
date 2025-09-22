import {
  u as Y,
  _ as S,
} from "./WrapperPost.vue_vue_type_script_setup_true_lang-d5S1uDSL.js";
import {
  e as b,
  u as B,
  f as C,
  g as F,
  o as a,
  h as n,
  i as c,
  j as r,
  F as h,
  r as G,
  n as y,
  a as s,
  t as i,
  c as w,
  w as k,
  k as L,
  m as P,
  l as $,
  d as x,
} from "./app-CVuLZ3l0.js";
import { _ as R } from "./SubNav.vue_vue_type_script_setup_true_lang-qd_WKTXo.js";
const V = { key: 0, py2: "", op50: "" },
  W = {
    "text-8em": "",
    "color-transparent": "",
    absolute: "",
    "left--3rem": "",
    "top--2rem": "",
    "font-bold": "",
    "text-stroke-2": "",
    "text-stroke-hex-aaa": "",
    op15: "",
  },
  z = { class: "no-underline", flex: "~ col md:row gap-2 md:items-center" },
  E = { class: "title text-lg leading-1.2em", flex: "~ gap-2 wrap" },
  j = { "align-middle": "" },
  H = {
    key: 0,
    "align-middle": "",
    op50: "",
    "flex-none": "",
    "text-xs": "",
    "ml--1.5": "",
    "i-carbon-arrow-up-right": "",
    title: "External",
  },
  I = { flex: "~ gap-2 items-center" },
  O = {
    key: 0,
    "align-middle": "",
    op50: "",
    "flex-none": "",
    "i-ri:group-2-line": "",
    title: "In person",
  },
  U = {
    key: 1,
    "align-middle": "",
    op50: "",
    "flex-none": "",
    "i-ri:film-line": "",
    title: "Provided in video",
  },
  q = {
    key: 2,
    "align-middle": "",
    op50: "",
    "flex-none": "",
    "i-ri:radio-line": "",
    title: "Provided in radio",
  },
  A = { "text-sm": "", op50: "", "ws-nowrap": "" },
  J = { key: 3, "text-sm": "", op40: "", "ws-nowrap": "" },
  K = { key: 4, "text-sm": "", op40: "", "ws-nowrap": "" },
  M = { key: 5, "text-sm": "", op40: "", "ws-nowrap": "", "md:hidden": "" },
  Q = {
    key: 0,
    op50: "",
    "text-sm": "",
    hidden: "",
    "mt--2": "",
    "md:block": "",
  },
  T = b({
    __name: "ListGame",
    props: { type: {}, posts: {}, extra: {} },
    setup(u) {
      const l = u,
        g = B()
          .getRoutes()
          .filter(
            (e) =>
              e.path.startsWith("/game") &&
              e.meta.frontmatter.date &&
              !e.meta.frontmatter.draft,
          )
          .filter(
            (e) =>
              !e.path.endsWith(".html") &&
              (e.meta.frontmatter.type || "game").split("+").includes(l.type),
          )
          .map((e) => ({
            path: e.meta.frontmatter.redirect || e.path,
            title: e.meta.frontmatter.title,
            date: e.meta.frontmatter.date,
            lang: e.meta.frontmatter.lang,
            duration: e.meta.frontmatter.duration,
            recording: e.meta.frontmatter.recording,
            upcoming: e.meta.frontmatter.upcoming,
            redirect: e.meta.frontmatter.redirect,
            place: e.meta.frontmatter.place,
          })),
        p = C(() =>
          [...(l.posts || g), ...(l.extra || [])]
            .sort((e, o) => +new Date(o.date) - +new Date(e.date))
            .filter((e) => !F.value || e.lang !== "zh"),
        ),
        m = (e) => new Date(e).getFullYear(),
        d = (e) => e && new Date(e) > new Date(),
        _ = (e, o) => e && o && m(e) === m(o);
      function N(e, o) {
        return (
          d(e.date) === d(o == null ? void 0 : o.date) &&
          _(e.date, o == null ? void 0 : o.date)
        );
      }
      function D(e) {
        return d(e.date)
          ? "Upcoming"
          : e.date === "now"
            ? m(new Date())
            : m(e.date);
      }
      return (e, o) => (
        a(),
        n("ul", null, [
          c(p).length
            ? r("", !0)
            : (a(), n("div", V, " { nothing here yet } ")),
          (a(!0),
          n(
            h,
            null,
            G(
              c(p),
              (t, f) => (
                a(),
                n(
                  h,
                  { key: t.path },
                  [
                    N(t, c(p)[f - 1])
                      ? r("", !0)
                      : (a(),
                        n(
                          "div",
                          {
                            key: 0,
                            "select-none": "",
                            relative: "",
                            h20: "",
                            "pointer-events-none": "",
                            "slide-enter": "",
                            style: y({
                              "--enter-stage": f - 2,
                              "--enter-step": "60ms",
                            }),
                          },
                          [s("span", W, i(D(t)), 1)],
                          4,
                        )),
                    s(
                      "div",
                      {
                        class: "slide-enter",
                        style: y({
                          "--enter-stage": f,
                          "--enter-step": "60ms",
                        }),
                      },
                      [
                        (a(),
                        w(
                          $(t.path.includes("://") ? "a" : "RouterLink"),
                          P(
                            { ref_for: !0 },
                            t.path.includes("://")
                              ? {
                                  href: t.path,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : { to: t.path },
                            {
                              class:
                                "item block font-normal mb-6 mt-2 no-underline",
                            },
                          ),
                          {
                            default: k(() => [
                              s("li", z, [
                                s("div", E, [
                                  s("span", j, i(t.title), 1),
                                  t.redirect ? (a(), n("span", H)) : r("", !0),
                                ]),
                                s("div", I, [
                                  t.inperson ? (a(), n("span", O)) : r("", !0),
                                  t.recording || t.video
                                    ? (a(), n("span", U))
                                    : r("", !0),
                                  t.radio ? (a(), n("span", q)) : r("", !0),
                                  s("span", A, i(c(L)(t.date, !0)), 1),
                                  t.duration
                                    ? (a(),
                                      n("span", J, "· " + i(t.duration), 1))
                                    : r("", !0),
                                  t.platform
                                    ? (a(),
                                      n("span", K, "· " + i(t.platform), 1))
                                    : r("", !0),
                                  t.place
                                    ? (a(), n("span", M, "· " + i(t.place), 1))
                                    : r("", !0),
                                ]),
                              ]),
                              t.place
                                ? (a(), n("div", Q, i(t.place), 1))
                                : r("", !0),
                            ]),
                            _: 2,
                          },
                          1040,
                        )),
                      ],
                      4,
                    ),
                  ],
                  64,
                )
              ),
            ),
            128,
          )),
        ])
      );
    },
  }),
  X = { class: "prose m-auto slide-enter-content" },
  ae = {
    __name: "index",
    setup(u) {
      const l = {
        title: "game - Nobita Yuan",
        display: "",
        art: "random",
        meta: [
          { property: "og:title", content: "game - Nobita Yuan" },
          { name: "twitter:title", content: "game - Nobita Yuan" },
        ],
      };
      return (
        Y({
          title: "game - Nobita Yuan",
          meta: [
            { property: "og:title", content: "game - Nobita Yuan" },
            { name: "twitter:title", content: "game - Nobita Yuan" },
          ],
        }),
        (g, p) => {
          const m = R,
            d = T,
            _ = S;
          return (
            a(),
            w(
              _,
              { frontmatter: l },
              {
                default: k(() => [
                  s("div", X, [x(m), x(d, { "only-date": "", type: "game" })]),
                ]),
                _: 1,
              },
            )
          );
        }
      );
    },
  };
export { ae as default };
