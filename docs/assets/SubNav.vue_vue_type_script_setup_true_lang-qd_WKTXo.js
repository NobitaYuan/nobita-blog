import {
  e as r,
  s as c,
  v as l,
  o as t,
  h as a,
  a as i,
  F as p,
  r as u,
  i as o,
  x as _,
  c as m,
  w as d,
  b as h,
  t as v,
  y as x,
} from "./app-CVuLZ3l0.js";
const y = { class: "prose m-auto mb-8 select-none animate-none! op100!" },
  f = { "mb-0": "", flex: "~ col gap-1 sm:row sm:gap-3 wrap", "text-3xl": "" },
  k = "opacity-20 hover:opacity-50",
  b = "opacity-100 underline",
  L = r({
    __name: "SubNav",
    setup(g) {
      const s = c();
      return (w, B) => {
        const n = l("RouterLink");
        return (
          t(),
          a("div", y, [
            i("div", f, [
              (t(!0),
              a(
                p,
                null,
                u(
                  o(_),
                  (e) => (
                    t(),
                    m(
                      n,
                      {
                        key: e.path,
                        to: e.path,
                        class: x([
                          "!border-none",
                          o(s).path === e.path ? b : k,
                        ]),
                        title: e.name,
                      },
                      { default: d(() => [h(v(e.name), 1)]), _: 2 },
                      1032,
                      ["to", "title", "class"],
                    )
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      };
    },
  });
export { L as _ };
