const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ArtPlum-BeGeifYi.js",
      "assets/app-CVuLZ3l0.js",
      "assets/app-CQYh3aQz.css",
      "assets/ArtDots-Dmo220aB.js",
    ]),
) => i.map((i) => d[i]);
import {
  A as D,
  p as k,
  B as E,
  C as B,
  q as I,
  D as L,
  E as T,
  G as O,
  H as P,
  e as V,
  u as H,
  s as K,
  z as U,
  I as w,
  f as j,
  J as g,
  v as b,
  o as n,
  h as i,
  i as f,
  c as C,
  w as q,
  l as N,
  j as l,
  y as x,
  a as c,
  t as h,
  b as R,
  k as S,
  K as _,
  d as z,
  F,
  L as A,
} from "./app-CVuLZ3l0.js";
function at(t, d = {}) {
  const o = d.head || D();
  if (o) return o.ssr ? o.push(t, d) : M(o, t, d);
}
function M(t, d, o = {}) {
  const u = k(!1),
    m = k({});
  E(() => {
    m.value = u.value ? {} : O(d);
  });
  const e = t.push(m.value, o);
  return (
    B(m, (a) => {
      e.patch(a);
    }),
    P() &&
      (I(() => {
        e.dispose();
      }),
      L(() => {
        u.value = !0;
      }),
      T(() => {
        u.value = !1;
      })),
    e
  );
}
const $ = { class: "mb-0 slide-enter-50" },
  G = { key: 0, class: "opacity-50 !-mt-4 italic slide-enter" },
  J = { class: "flex gap-4 items-center !-mt-8 it" },
  W = { key: 0, class: "opacity-50 slide-enter-50" },
  Y = { key: 0 },
  Q = { key: 1, class: "" },
  X = ["href"],
  Z = {
    key: 1,
    class: "slide-enter",
    "bg-orange-4:10": "",
    "text-orange-4": "",
    border: "l-3 orange-4",
    px4: "",
    py2: "",
  },
  tt = {
    key: 2,
    class: "prose m-auto mt-8 mb-6 slide-enter animate-delay-500 print:hidden",
  },
  nt = V({
    __name: "WrapperPost",
    props: { frontmatter: { type: Object, required: !0 } },
    setup(t) {
      const d = H(),
        o = K(),
        u = k();
      U(() => {
        const e = () => {
            if (location.hash) {
              const a = document.querySelector(
                decodeURIComponent(location.hash),
              );
              if (a) {
                const r = a.getBoundingClientRect(),
                  p = window.scrollY + r.top - 40;
                return window.scrollTo({ top: p, behavior: "smooth" }), !0;
              }
            }
          },
          s = (a) => {
            const r = a.target.closest("a");
            if (
              !a.defaultPrevented &&
              r &&
              a.button === 0 &&
              r.target !== "_blank" &&
              r.rel !== "external" &&
              !r.download &&
              !a.metaKey &&
              !a.ctrlKey &&
              !a.shiftKey &&
              !a.altKey
            ) {
              const p = new URL(r.href);
              if (p.origin !== window.location.origin) return;
              a.preventDefault();
              const { pathname: y, hash: v } = p;
              v && (!y || y === location.pathname)
                ? (window.history.replaceState({}, "", v), e())
                : d.push({ path: y, hash: v });
            }
          };
        w(window, "hashchange", e),
          w(u.value, "click", s, { passive: !1 }),
          setTimeout(() => {
            e() || setTimeout(e, 1e3);
          }, 1);
      });
      const m = j(() => {
        let e = t.frontmatter.art;
        if (
          (e === "random" && (e = Math.random() > 0.1 ? "plum" : "dots"),
          typeof window < "u")
        ) {
          if (e === "plum")
            return g(() =>
              A(
                () => import("./ArtPlum-BeGeifYi.js"),
                __vite__mapDeps([0, 1, 2]),
              ),
            );
          if (e === "dots")
            return g(() =>
              A(
                () => import("./ArtDots-Dmo220aB.js"),
                __vite__mapDeps([3, 1, 2]),
              ),
            );
        }
      });
      return (e, s) => {
        const a = b("ClientOnly"),
          r = b("RouterLink");
        return (
          n(),
          i(
            F,
            null,
            [
              f(m)
                ? (n(),
                  C(
                    a,
                    { key: 0 },
                    { default: q(() => [(n(), C(N(f(m))))]), _: 1 },
                  ))
                : l("", !0),
              (t.frontmatter.display ?? t.frontmatter.title)
                ? (n(),
                  i(
                    "div",
                    {
                      key: 1,
                      class: x([
                        "prose m-auto mb-8",
                        [t.frontmatter.wrapperClass],
                      ]),
                    },
                    [
                      c(
                        "h1",
                        $,
                        h(t.frontmatter.display ?? t.frontmatter.title),
                        1,
                      ),
                      t.frontmatter.subtitle
                        ? (n(), i("p", G, h(t.frontmatter.subtitle), 1))
                        : l("", !0),
                      c("div", J, [
                        t.frontmatter.date
                          ? (n(),
                            i("p", W, [
                              R(h(f(S)(t.frontmatter.date, !1)) + " ", 1),
                              t.frontmatter.duration
                                ? (n(),
                                  i(
                                    "span",
                                    Y,
                                    "· " + h(t.frontmatter.duration),
                                    1,
                                  ))
                                : l("", !0),
                            ]))
                          : l("", !0),
                        t.frontmatter.place
                          ? (n(),
                            i("p", Q, [
                              c(
                                "a",
                                {
                                  class: "opacity-50",
                                  href: `https://ditu.amap.com/search?query=${t.frontmatter.place}`,
                                  target: "_blank",
                                },
                                [
                                  s[0] ||
                                    (s[0] = c(
                                      "span",
                                      { class: "text-3" },
                                      [
                                        c("i", {
                                          "i-simple-line-icons-location-pin":
                                            "",
                                        }),
                                      ],
                                      -1,
                                    )),
                                  R(" " + h(t.frontmatter.place), 1),
                                ],
                                8,
                                X,
                              ),
                            ]))
                          : l("", !0),
                      ]),
                      t.frontmatter.draft
                        ? (n(),
                          i(
                            "p",
                            Z,
                            " This is a draft post, the content may be incomplete. Please check back later. ",
                          ))
                        : l("", !0),
                    ],
                    2,
                  ))
                : l("", !0),
              c(
                "article",
                {
                  ref_key: "content",
                  ref: u,
                  class: x([
                    t.frontmatter.tocAlwaysOn ? "toc-always-on" : "",
                    t.frontmatter.class,
                  ]),
                },
                [_(e.$slots, "default")],
                2,
              ),
              f(o).path !== "/"
                ? (n(),
                  i("div", tt, [
                    s[1] || (s[1] = c("br", null, null, -1)),
                    s[2] ||
                      (s[2] = c(
                        "span",
                        { "font-mono": "", op50: "" },
                        "> ",
                        -1,
                      )),
                    z(
                      r,
                      {
                        to: f(o).path.split("/").slice(0, -1).join("/") || "/",
                        class: "font-mono op50 hover:op75",
                        textContent: "cd ..",
                      },
                      null,
                      8,
                      ["to"],
                    ),
                  ]))
                : l("", !0),
            ],
            64,
          )
        );
      };
    },
  });
export { nt as _, at as u };
