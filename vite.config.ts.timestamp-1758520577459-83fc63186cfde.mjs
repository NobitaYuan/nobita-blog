// vite.config.ts
import { resolve } from "node:path";
import MarkdownItShiki from "file:///D:/coding/nobita-blog/node_modules/.pnpm/@shikijs+markdown-it@1.17.7/node_modules/@shikijs/markdown-it/dist/index.mjs";
import { rendererRich, transformerTwoslash } from "file:///D:/coding/nobita-blog/node_modules/.pnpm/@shikijs+twoslash@1.17.7_typescript@5.6.2/node_modules/@shikijs/twoslash/dist/index.mjs";
import Vue from "file:///D:/coding/nobita-blog/node_modules/.pnpm/@vitejs+plugin-vue@5.1.3_vite@5.4.5_@types+node@22.5.5_terser@5.33.0__vue@3.5.6_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import fs2 from "file:///D:/coding/nobita-blog/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
import matter2 from "file:///D:/coding/nobita-blog/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import anchor from "file:///D:/coding/nobita-blog/node_modules/.pnpm/markdown-it-anchor@9.2.0_@types+markdown-it@14.1.2_markdown-it@14.1.0/node_modules/markdown-it-anchor/dist/markdownItAnchor.js";
import GitHubAlerts from "file:///D:/coding/nobita-blog/node_modules/.pnpm/markdown-it-github-alerts@0.3.0_markdown-it@14.1.0/node_modules/markdown-it-github-alerts/dist/index.mjs";
import LinkAttributes from "file:///D:/coding/nobita-blog/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import MarkdownItMagicLink from "file:///D:/coding/nobita-blog/node_modules/.pnpm/markdown-it-magic-link@0.1.4/node_modules/markdown-it-magic-link/dist/index.mjs";
import UnoCSS from "file:///D:/coding/nobita-blog/node_modules/.pnpm/unocss@0.62.3_postcss@8.4.47_rollup@4.21.3_vite@5.4.5_@types+node@22.5.5_terser@5.33.0_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/coding/nobita-blog/node_modules/.pnpm/unplugin-auto-import@0.18.3_@vueuse+core@11.1.0_vue@3.5.6_typescript@5.6.2___rollup@4.21.3/node_modules/unplugin-auto-import/dist/vite.js";
import IconsResolver from "file:///D:/coding/nobita-blog/node_modules/.pnpm/unplugin-icons@0.19.3_@vue+compiler-sfc@3.5.6/node_modules/unplugin-icons/dist/resolver.js";
import Icons from "file:///D:/coding/nobita-blog/node_modules/.pnpm/unplugin-icons@0.19.3_@vue+compiler-sfc@3.5.6/node_modules/unplugin-icons/dist/vite.js";
import Components from "file:///D:/coding/nobita-blog/node_modules/.pnpm/unplugin-vue-components@0.27.4_@babel+parser@7.25.6_rollup@4.21.3_vue@3.5.6_typescript@5.6.2_/node_modules/unplugin-vue-components/dist/vite.js";
import Markdown from "file:///D:/coding/nobita-blog/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.21.3_vite@5.4.5_@types+node@22.5.5_terser@5.33.0_/node_modules/unplugin-vue-markdown/dist/vite.js";
import { VueRouterAutoImports } from "file:///D:/coding/nobita-blog/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.21.3_vue-router@4.2.5_vue@3.5.6_typescript@5.6.2___vue@3.5.6_typescript@5.6.2_/node_modules/unplugin-vue-router/dist/index.js";
import VueRouter from "file:///D:/coding/nobita-blog/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.21.3_vue-router@4.2.5_vue@3.5.6_typescript@5.6.2___vue@3.5.6_typescript@5.6.2_/node_modules/unplugin-vue-router/dist/vite.js";
import { defineConfig } from "file:///D:/coding/nobita-blog/node_modules/.pnpm/vite@5.4.5_@types+node@22.5.5_terser@5.33.0/node_modules/vite/dist/node/index.js";
import Inspect from "file:///D:/coding/nobita-blog/node_modules/.pnpm/vite-plugin-inspect@0.8.7_rollup@4.21.3_vite@5.4.5_@types+node@22.5.5_terser@5.33.0_/node_modules/vite-plugin-inspect/dist/index.mjs";
import Exclude from "file:///D:/coding/nobita-blog/node_modules/.pnpm/vite-plugin-optimize-exclude@0.0.1_vite@5.4.5_@types+node@22.5.5_terser@5.33.0_/node_modules/vite-plugin-optimize-exclude/dist/index.mjs";
import SVG from "file:///D:/coding/nobita-blog/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.5.6_typescript@5.6.2_/node_modules/vite-svg-loader/index.js";
import TOC from "file:///D:/coding/nobita-blog/node_modules/.pnpm/markdown-it-table-of-contents@0.6.0/node_modules/markdown-it-table-of-contents/index.js";
import vueDevTools from "file:///D:/coding/nobita-blog/node_modules/.pnpm/vite-plugin-vue-devtools@7.4.5_rollup@4.21.3_vite@5.4.5_@types+node@22.5.5_terser@5.33.0__vue@3.5.6_typescript@5.6.2_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";

// scripts/generate-search-index.ts
import { join } from "node:path";
import fs from "file:///D:/coding/nobita-blog/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
import matter from "file:///D:/coding/nobita-blog/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
var __vite_injected_original_dirname = "D:\\coding\\nobita-blog\\scripts";
var postsDir = join(__vite_injected_original_dirname, "../pages");
var saveDir = join(__vite_injected_original_dirname, "../src/data/search-index.json");
async function getMarkdownFiles(dir) {
  const allDir = await fs.readdir(dir, { withFileTypes: true });
  const markdownFiles = await Promise.all(allDir.map(async (entry) => {
    const filePath = join(dir, entry.name);
    if (entry.isDirectory()) {
      return getMarkdownFiles(filePath);
    } else if (entry.name.endsWith(".md") && entry.name !== "index.md") {
      return filePath;
    }
    return [];
  }));
  return markdownFiles.flat();
}
async function generateSearchIndex() {
  try {
    const filePaths = await getMarkdownFiles(postsDir);
    const jsonItem = await Promise.all(filePaths.map(async (path) => {
      const mdFile = await fs.readFile(path, "utf-8");
      const { data, content } = matter(mdFile);
      return {
        title: data.title || "Untitled",
        data,
        path: path.replace(postsDir, "").replace(/\.md$/, ""),
        content
      };
    }));
    await fs.ensureDir(join(__vite_injected_original_dirname, "../src/data"));
    await fs.writeJson(saveDir, jsonItem);
  } catch (error) {
    console.error("\u{1F62B}\u{1F62B}\u{1F62B} generateSearchIndex \u{1F62B}\u{1F62B}\u{1F62B} ");
    console.error("postsDir:", postsDir);
    console.error("error:", error);
    console.error("\u{1F62B}\u{1F62B}\u{1F62B}  generateSearchIndex \u{1F62B}\u{1F62B}\u{1F62B} ", error);
  }
}

// scripts/slugify.ts
import { remove } from "file:///D:/coding/nobita-blog/node_modules/.pnpm/diacritics@1.3.0/node_modules/diacritics/index.js";
var rControl = /[\u0000-\u001F]/g;
var rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;
function slugify(str) {
  return remove(str).replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
}

// vite.config.ts
var __vite_injected_original_dirname2 = "D:\\coding\\nobita-blog";
var promises = [];
var vite_config_default = defineConfig({
  resolve: {
    alias: [
      { find: "~/", replacement: `${resolve(__vite_injected_original_dirname2, "src")}/` }
    ]
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "@vueuse/core",
      "dayjs",
      "dayjs/plugin/localizedFormat"
    ]
  },
  plugins: [
    UnoCSS(),
    vueDevTools(),
    VueRouter({
      extensions: [".vue", ".md"],
      routesFolder: "pages",
      logs: true,
      extendRoute(route) {
        const path = route.components.get("default");
        if (!path)
          return;
        if (!path.includes("projects.md") && path.endsWith(".md")) {
          const { data } = matter2(fs2.readFileSync(path, "utf-8"));
          route.addToMeta({
            frontmatter: data
          });
        }
      }
    }),
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      wrapperComponent: (id) => id.includes("/demo/") ? "WrapperDemo" : "WrapperPost",
      wrapperClasses: (id, code) => code.includes("@layout-full-width") ? "" : "prose m-auto slide-enter-content",
      headEnabled: true,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItOptions: {
        quotes: `""''`
      },
      async markdownItSetup(md) {
        md.use(await MarkdownItShiki({
          themes: {
            dark: "vitesse-dark",
            light: "vitesse-light"
          },
          defaultColor: false,
          cssVariablePrefix: "--s-",
          transformers: [
            transformerTwoslash({
              explicitTrigger: true,
              renderer: rendererRich()
            })
          ]
        }));
        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: "#",
            renderAttrs: () => ({ "aria-hidden": "true" })
          })
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(TOC, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>'
        });
        md.use(MarkdownItMagicLink, {
          linksMap: {
            "\u7981\u5B57\u51B3\u65E0\u4F24\u8BC6\u7834\u5BC5\u864E": "https://www.bilibili.com/video/BV17YswexE9g",
            "bilibili": "https://www.bilibili.com",
            "\u95EA\u5149\u7B80\u5386": "https://www.shineresume.com",
            "TypeScript": "https://www.typescriptlang.org",
            "Vim": "https://www.vim.org",
            "NuxtLabs": "https://nuxtlabs.com",
            "Vitest": "https://github.com/vitest-dev/vitest",
            "Slidev": "https://github.com/slidevjs/slidev",
            "VueUse": "https://github.com/vueuse/vueuse",
            "UnoCSS": "https://github.com/unocss/unocss",
            "Elk": "https://github.com/elk-zone/elk",
            "Type Challenges": "https://github.com/type-challenges/type-challenges",
            "Vue": "https://github.com/vuejs/core",
            "Nuxt": "https://github.com/nuxt/nuxt",
            "Vite": "https://github.com/vitejs/vite",
            "Shiki": "https://github.com/shikijs/shiki",
            "Twoslash": "https://github.com/twoslashes/twoslash",
            "ESLint Stylistic": "https://github.com/eslint-stylistic/eslint-stylistic",
            "Unplugin": "https://github.com/unplugin",
            "Nuxt DevTools": "https://github.com/nuxt/devtools",
            "Vite PWA": "https://github.com/vite-pwa",
            "i18n Ally": "https://github.com/lokalise/i18n-ally",
            "ESLint": "https://github.com/eslint/eslint",
            "Astro": "https://github.com/withastro/astro",
            "TwoSlash": "https://github.com/twoslashes/twoslash",
            "Anthony Fu Collective": { link: "https://opencollective.com/antfu", imageUrl: "https://github.com/antfu-collective.png" },
            "Anthony Fu": { link: "https://antfu.me" },
            "Netlify": { link: "https://netlify.com", imageUrl: "https://github.com/netlify.png" },
            "Stackblitz": { link: "https://stackblitz.com", imageUrl: "https://github.com/stackblitz.png" },
            "Vercel": { link: "https://vercel.com", imageUrl: "https://github.com/vercel.png" }
          },
          imageOverrides: [
            ["https://github.com/vuejs/core", "https://vuejs.org/logo.svg"],
            ["https://github.com/nuxt/nuxt", "https://nuxt.com/assets/design-kit/icon-green.svg"],
            ["https://github.com/vitejs/vite", "https://vitejs.dev/logo.svg"],
            ["https://nuxtlabs.com", "https://github.com/nuxtlabs.png"],
            [/opencollective\.com\/vite/, "https://github.com/vitejs.png"],
            [/opencollective\.com\/elk/, "https://github.com/elk-zone.png"]
          ]
        });
        md.use(GitHubAlerts);
      }
      // frontmatterPreprocess(frontmatter, options, id, defaults) {
      //     (() => {
      //         if (!id.endsWith('.md'))
      //             return
      //         const route = basename(id, '.md')
      //         if (route === 'index' || frontmatter.image || !frontmatter.title)
      //             return
      //         const path = `og/${route}.png`
      //         promises.push(
      //             fs.existsSync(`${id.slice(0, -3)}.png`)
      //                 ? fs.copy(`${id.slice(0, -3)}.png`, `public/${path}`)
      //                 : generateOg(frontmatter.title!.replace(/\s-\s.*$/, '').trim(), `public/${path}`),
      //         )
      //         frontmatter.image = `https://antfu.me/${path}`
      //     })()
      //     const head = defaults(frontmatter, options)
      //     return { head, frontmatter }
      // },
    }),
    AutoImport({
      imports: [
        "vue",
        VueRouterAutoImports,
        "@vueuse/core"
      ]
    }),
    Components({
      extensions: ["vue", "md"],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: ""
        })
      ]
    }),
    Inspect(),
    Icons({
      defaultClass: "inline",
      defaultStyle: "vertical-align: sub;"
    }),
    SVG({
      svgo: false,
      defaultImport: "url"
    }),
    Exclude(),
    {
      name: "await",
      async closeBundle() {
        await Promise.all(promises);
      }
    },
    // 生成全栈文本搜索json
    {
      name: "generate-search-index",
      buildStart() {
        generateSearchIndex();
      }
    }
  ],
  build: {
    rollupOptions: {
      onwarn(warning, next) {
        if (warning.code !== "UNUSED_EXTERNAL_IMPORT")
          next(warning);
      }
    }
  },
  ssgOptions: {
    formatting: "minify"
  },
  server: {
    proxy: {
      "/bing-api": {
        target: "https://cn.bing.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bing-api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9nZW5lcmF0ZS1zZWFyY2gtaW5kZXgudHMiLCAic2NyaXB0cy9zbHVnaWZ5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY29kaW5nXFxcXG5vYml0YS1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RpbmdcXFxcbm9iaXRhLWJsb2dcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGluZy9ub2JpdGEtYmxvZy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCBNYXJrZG93bkl0U2hpa2kgZnJvbSAnQHNoaWtpanMvbWFya2Rvd24taXQnXHJcbmltcG9ydCB7IHJlbmRlcmVyUmljaCwgdHJhbnNmb3JtZXJUd29zbGFzaCB9IGZyb20gJ0BzaGlraWpzL3R3b3NsYXNoJ1xyXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJ1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xyXG5pbXBvcnQgYW5jaG9yIGZyb20gJ21hcmtkb3duLWl0LWFuY2hvcidcclxuaW1wb3J0IEdpdEh1YkFsZXJ0cyBmcm9tICdtYXJrZG93bi1pdC1naXRodWItYWxlcnRzJ1xyXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xyXG5pbXBvcnQgTWFya2Rvd25JdE1hZ2ljTGluayBmcm9tICdtYXJrZG93bi1pdC1tYWdpYy1saW5rJ1xyXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcclxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCBNYXJrZG93biBmcm9tICd1bnBsdWdpbi12dWUtbWFya2Rvd24vdml0ZSdcclxuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcclxuaW1wb3J0IEV4Y2x1ZGUgZnJvbSAndml0ZS1wbHVnaW4tb3B0aW1pemUtZXhjbHVkZSdcclxuaW1wb3J0IFNWRyBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXHJcblxyXG4vLyBAdHMtZXhwZWN0LWVycm9yIG1pc3NpbmcgdHlwZXNcclxuaW1wb3J0IFRPQyBmcm9tICdtYXJrZG93bi1pdC10YWJsZS1vZi1jb250ZW50cydcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuaW1wb3J0IHsgZ2VuZXJhdGVTZWFyY2hJbmRleCB9IGZyb20gJy4vc2NyaXB0cy9nZW5lcmF0ZS1zZWFyY2gtaW5kZXgnXHJcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuL3NjcmlwdHMvc2x1Z2lmeSdcclxuXHJcbmNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiBbXHJcbiAgICAgICAgICAgIHsgZmluZDogJ34vJywgcmVwbGFjZW1lbnQ6IGAke3Jlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgICAgICAgJ0B2dWV1c2UvY29yZScsXHJcbiAgICAgICAgICAgICdkYXlqcycsXHJcbiAgICAgICAgICAgICdkYXlqcy9wbHVnaW4vbG9jYWxpemVkRm9ybWF0JyxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBVbm9DU1MoKSxcclxuICAgICAgICB2dWVEZXZUb29scygpLFxyXG4gICAgICAgIFZ1ZVJvdXRlcih7XHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFsnLnZ1ZScsICcubWQnXSxcclxuICAgICAgICAgICAgcm91dGVzRm9sZGVyOiAncGFnZXMnLFxyXG4gICAgICAgICAgICBsb2dzOiB0cnVlLFxyXG4gICAgICAgICAgICBleHRlbmRSb3V0ZShyb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IHJvdXRlLmNvbXBvbmVudHMuZ2V0KCdkZWZhdWx0JylcclxuICAgICAgICAgICAgICAgIGlmICghcGF0aClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhdGguaW5jbHVkZXMoJ3Byb2plY3RzLm1kJykgJiYgcGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0Zi04JykpXHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGUuYWRkVG9NZXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnRtYXR0ZXI6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgVnVlKHtcclxuICAgICAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBNYXJrZG93bih7XHJcbiAgICAgICAgICAgIHdyYXBwZXJDb21wb25lbnQ6IGlkID0+IGlkLmluY2x1ZGVzKCcvZGVtby8nKVxyXG4gICAgICAgICAgICAgICAgPyAnV3JhcHBlckRlbW8nXHJcbiAgICAgICAgICAgICAgICA6ICdXcmFwcGVyUG9zdCcsXHJcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzc2VzOiAoaWQsIGNvZGUpID0+IGNvZGUuaW5jbHVkZXMoJ0BsYXlvdXQtZnVsbC13aWR0aCcpXHJcbiAgICAgICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgICAgICA6ICdwcm9zZSBtLWF1dG8gc2xpZGUtZW50ZXItY29udGVudCcsXHJcbiAgICAgICAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBleHBvcnRGcm9udG1hdHRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4cG9zZUZyb250bWF0dGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgZXhwb3NlRXhjZXJwdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG1hcmtkb3duSXRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBxdW90ZXM6ICdcIlwiXFwnXFwnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgbWFya2Rvd25JdFNldHVwKG1kKSB7XHJcbiAgICAgICAgICAgICAgICBtZC51c2UoYXdhaXQgTWFya2Rvd25JdFNoaWtpKHtcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogJ3ZpdGVzc2UtZGFyaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiAndml0ZXNzZS1saWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc1ZhcmlhYmxlUHJlZml4OiAnLS1zLScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZXJzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybWVyVHdvc2xhc2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwbGljaXRUcmlnZ2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6IHJlbmRlcmVyUmljaCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSkpXHJcblxyXG4gICAgICAgICAgICAgICAgbWQudXNlKGFuY2hvciwge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsdWdpZnksXHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWFsaW5rOiBhbmNob3IucGVybWFsaW5rLmxpbmtJbnNpZGVIZWFkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICcjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXR0cnM6ICgpID0+ICh7ICdhcmlhLWhpZGRlbic6ICd0cnVlJyB9KSxcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgbWQudXNlKExpbmtBdHRyaWJ1dGVzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogJ19ibGFuaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBtZC51c2UoVE9DLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUxldmVsOiBbMSwgMiwgMywgNF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z2lmeSxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJIZWFkZXJIdG1sOiAnPGRpdiBjbGFzcz1cInRhYmxlLW9mLWNvbnRlbnRzLWFuY2hvclwiPjxkaXYgY2xhc3M9XCJpLXJpLW1lbnUtMi1maWxsXCIgLz48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBtZC51c2UoTWFya2Rvd25JdE1hZ2ljTGluaywge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzTWFwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcdTc5ODFcdTVCNTdcdTUxQjNcdTY1RTBcdTRGMjRcdThCQzZcdTc4MzRcdTVCQzVcdTg2NEUnOiAnaHR0cHM6Ly93d3cuYmlsaWJpbGkuY29tL3ZpZGVvL0JWMTdZc3dleEU5ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiaWxpYmlsaSc6ICdodHRwczovL3d3dy5iaWxpYmlsaS5jb20nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXHU5NUVBXHU1MTQ5XHU3QjgwXHU1Mzg2JzogJ2h0dHBzOi8vd3d3LnNoaW5lcmVzdW1lLmNvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUeXBlU2NyaXB0JzogJ2h0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdWaW0nOiAnaHR0cHM6Ly93d3cudmltLm9yZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOdXh0TGFicyc6ICdodHRwczovL251eHRsYWJzLmNvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdWaXRlc3QnOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVzdC1kZXYvdml0ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1NsaWRldic6ICdodHRwczovL2dpdGh1Yi5jb20vc2xpZGV2anMvc2xpZGV2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1Z1ZVVzZSc6ICdodHRwczovL2dpdGh1Yi5jb20vdnVldXNlL3Z1ZXVzZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdVbm9DU1MnOiAnaHR0cHM6Ly9naXRodWIuY29tL3Vub2Nzcy91bm9jc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRWxrJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9lbGstem9uZS9lbGsnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVHlwZSBDaGFsbGVuZ2VzJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90eXBlLWNoYWxsZW5nZXMvdHlwZS1jaGFsbGVuZ2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1Z1ZSc6ICdodHRwczovL2dpdGh1Yi5jb20vdnVlanMvY29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOdXh0JzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9udXh0L251eHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVml0ZSc6ICdodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnU2hpa2knOiAnaHR0cHM6Ly9naXRodWIuY29tL3NoaWtpanMvc2hpa2knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVHdvc2xhc2gnOiAnaHR0cHM6Ly9naXRodWIuY29tL3R3b3NsYXNoZXMvdHdvc2xhc2gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRVNMaW50IFN0eWxpc3RpYyc6ICdodHRwczovL2dpdGh1Yi5jb20vZXNsaW50LXN0eWxpc3RpYy9lc2xpbnQtc3R5bGlzdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1VucGx1Z2luJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS91bnBsdWdpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOdXh0IERldlRvb2xzJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9udXh0L2RldnRvb2xzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1ZpdGUgUFdBJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aXRlLXB3YScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdpMThuIEFsbHknOiAnaHR0cHM6Ly9naXRodWIuY29tL2xva2FsaXNlL2kxOG4tYWxseScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdFU0xpbnQnOiAnaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXN0cm8nOiAnaHR0cHM6Ly9naXRodWIuY29tL3dpdGhhc3Ryby9hc3RybycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUd29TbGFzaCc6ICdodHRwczovL2dpdGh1Yi5jb20vdHdvc2xhc2hlcy90d29zbGFzaCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBbnRob255IEZ1IENvbGxlY3RpdmUnOiB7IGxpbms6ICdodHRwczovL29wZW5jb2xsZWN0aXZlLmNvbS9hbnRmdScsIGltYWdlVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1LWNvbGxlY3RpdmUucG5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQW50aG9ueSBGdSc6IHsgbGluazogJ2h0dHBzOi8vYW50ZnUubWUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdOZXRsaWZ5JzogeyBsaW5rOiAnaHR0cHM6Ly9uZXRsaWZ5LmNvbScsIGltYWdlVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL25ldGxpZnkucG5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnU3RhY2tibGl0eic6IHsgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20nLCBpbWFnZVVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdGFja2JsaXR6LnBuZycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1ZlcmNlbCc6IHsgbGluazogJ2h0dHBzOi8vdmVyY2VsLmNvbScsIGltYWdlVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC5wbmcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZU92ZXJyaWRlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy9jb3JlJywgJ2h0dHBzOi8vdnVlanMub3JnL2xvZ28uc3ZnJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaHR0cHM6Ly9naXRodWIuY29tL251eHQvbnV4dCcsICdodHRwczovL251eHQuY29tL2Fzc2V0cy9kZXNpZ24ta2l0L2ljb24tZ3JlZW4uc3ZnJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy92aXRlJywgJ2h0dHBzOi8vdml0ZWpzLmRldi9sb2dvLnN2ZyddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2h0dHBzOi8vbnV4dGxhYnMuY29tJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9udXh0bGFicy5wbmcnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWy9vcGVuY29sbGVjdGl2ZVxcLmNvbVxcL3ZpdGUvLCAnaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy5wbmcnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWy9vcGVuY29sbGVjdGl2ZVxcLmNvbVxcL2Vsay8sICdodHRwczovL2dpdGh1Yi5jb20vZWxrLXpvbmUucG5nJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgbWQudXNlKEdpdEh1YkFsZXJ0cylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gZnJvbnRtYXR0ZXJQcmVwcm9jZXNzKGZyb250bWF0dGVyLCBvcHRpb25zLCBpZCwgZGVmYXVsdHMpIHtcclxuICAgICAgICAgICAgLy8gICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKCFpZC5lbmRzV2l0aCgnLm1kJykpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHJvdXRlID0gYmFzZW5hbWUoaWQsICcubWQnKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlmIChyb3V0ZSA9PT0gJ2luZGV4JyB8fCBmcm9udG1hdHRlci5pbWFnZSB8fCAhZnJvbnRtYXR0ZXIudGl0bGUpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHBhdGggPSBgb2cvJHtyb3V0ZX0ucG5nYFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZzLmV4aXN0c1N5bmMoYCR7aWQuc2xpY2UoMCwgLTMpfS5wbmdgKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPyBmcy5jb3B5KGAke2lkLnNsaWNlKDAsIC0zKX0ucG5nYCwgYHB1YmxpYy8ke3BhdGh9YClcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDogZ2VuZXJhdGVPZyhmcm9udG1hdHRlci50aXRsZSEucmVwbGFjZSgvXFxzLVxccy4qJC8sICcnKS50cmltKCksIGBwdWJsaWMvJHtwYXRofWApLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIClcclxuICAgICAgICAgICAgLy8gICAgICAgICBmcm9udG1hdHRlci5pbWFnZSA9IGBodHRwczovL2FudGZ1Lm1lLyR7cGF0aH1gXHJcbiAgICAgICAgICAgIC8vICAgICB9KSgpXHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBoZWFkID0gZGVmYXVsdHMoZnJvbnRtYXR0ZXIsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4geyBoZWFkLCBmcm9udG1hdHRlciB9XHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICAgICAgIFZ1ZVJvdXRlckF1dG9JbXBvcnRzLFxyXG4gICAgICAgICAgICAgICAgJ0B2dWV1c2UvY29yZScsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxyXG4gICAgICAgICAgICBkdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXHJcbiAgICAgICAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgICAgICAgICAgSWNvbnNSZXNvbHZlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UHJlZml4OiAnJyxcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBJbnNwZWN0KCksXHJcblxyXG4gICAgICAgIEljb25zKHtcclxuICAgICAgICAgICAgZGVmYXVsdENsYXNzOiAnaW5saW5lJyxcclxuICAgICAgICAgICAgZGVmYXVsdFN0eWxlOiAndmVydGljYWwtYWxpZ246IHN1YjsnLFxyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICBTVkcoe1xyXG4gICAgICAgICAgICBzdmdvOiBmYWxzZSxcclxuICAgICAgICAgICAgZGVmYXVsdEltcG9ydDogJ3VybCcsXHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIEV4Y2x1ZGUoKSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYXdhaXQnLFxyXG4gICAgICAgICAgICBhc3luYyBjbG9zZUJ1bmRsZSgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gXHU3NTFGXHU2MjEwXHU1MTY4XHU2ODA4XHU2NTg3XHU2NzJDXHU2NDFDXHU3RDIyanNvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ2dlbmVyYXRlLXNlYXJjaC1pbmRleCcsXHJcbiAgICAgICAgICAgIGJ1aWxkU3RhcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZVNlYXJjaEluZGV4KClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBidWlsZDoge1xyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgb253YXJuKHdhcm5pbmcsIG5leHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3YXJuaW5nLmNvZGUgIT09ICdVTlVTRURfRVhURVJOQUxfSU1QT1JUJylcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KHdhcm5pbmcpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc3NnT3B0aW9uczoge1xyXG4gICAgICAgIGZvcm1hdHRpbmc6ICdtaW5pZnknLFxyXG4gICAgfSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgICcvYmluZy1hcGknOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdodHRwczovL2NuLmJpbmcuY29tJyxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvYmluZy1hcGkvLCAnJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pXHJcblxyXG4vLyBjb25zdCBvZ1NWZyA9IGZzLnJlYWRGaWxlU3luYygnLi9zY3JpcHRzL29nLXRlbXBsYXRlLnN2ZycsICd1dGYtOCcpXHJcblxyXG4vLyBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZU9nKHRpdGxlOiBzdHJpbmcsIG91dHB1dDogc3RyaW5nKSB7XHJcbi8vICAgICBpZiAoZnMuZXhpc3RzU3luYyhvdXRwdXQpKVxyXG4vLyAgICAgICAgIHJldHVyblxyXG5cclxuLy8gICAgIGF3YWl0IGZzLm1rZGlyKGRpcm5hbWUob3V0cHV0KSwgeyByZWN1cnNpdmU6IHRydWUgfSlcclxuLy8gICAgIC8vIGJyZWFrbGluZSBldmVyeSAzMCBjaGFyc1xyXG4vLyAgICAgY29uc3QgbGluZXMgPSB0aXRsZS50cmltKCkuc3BsaXQoLyguezAsMzB9KSg/Olxcc3wkKS9nKS5maWx0ZXIoQm9vbGVhbilcclxuXHJcbi8vICAgICBjb25zdCBkYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4vLyAgICAgICAgIGxpbmUxOiBsaW5lc1swXSxcclxuLy8gICAgICAgICBsaW5lMjogbGluZXNbMV0sXHJcbi8vICAgICAgICAgbGluZTM6IGxpbmVzWzJdLFxyXG4vLyAgICAgfVxyXG4vLyAgICAgY29uc3Qgc3ZnID0gb2dTVmcucmVwbGFjZSgvXFx7XFx7KFtefV0rKVxcfVxcfS9nLCAoXywgbmFtZSkgPT4gZGF0YVtuYW1lXSB8fCAnJylcclxuXHJcbi8vICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4vLyAgICAgY29uc29sZS5sb2coYEdlbmVyYXRpbmcgJHtvdXRwdXR9YClcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgYXdhaXQgc2hhcnAoQnVmZmVyLmZyb20oc3ZnKSlcclxuLy8gICAgICAgICAgICAgLnJlc2l6ZSgxMjAwICogMS4xLCA2MzAgKiAxLjEpXHJcbi8vICAgICAgICAgICAgIC5wbmcoKVxyXG4vLyAgICAgICAgICAgICAudG9GaWxlKG91dHB1dClcclxuLy8gICAgIH1cclxuLy8gICAgIGNhdGNoIChlKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIG9nIGltYWdlJywgZSlcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGluZ1xcXFxub2JpdGEtYmxvZ1xcXFxzY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RpbmdcXFxcbm9iaXRhLWJsb2dcXFxcc2NyaXB0c1xcXFxnZW5lcmF0ZS1zZWFyY2gtaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGluZy9ub2JpdGEtYmxvZy9zY3JpcHRzL2dlbmVyYXRlLXNlYXJjaC1pbmRleC50c1wiO2ltcG9ydCB7IGpvaW4gfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcidcclxuXHJcbmNvbnN0IHBvc3RzRGlyID0gam9pbihfX2Rpcm5hbWUsICcuLi9wYWdlcycpXHJcbmNvbnN0IHNhdmVEaXIgPSBqb2luKF9fZGlybmFtZSwgJy4uL3NyYy9kYXRhL3NlYXJjaC1pbmRleC5qc29uJylcclxuXHJcbi8vIFx1ODNCN1x1NTNENlx1NjI0MFx1NjcwOW1kXHU2NTg3XHU0RUY2XHU3Njg0XHU4REVGXHU1Rjg0XHJcbmFzeW5jIGZ1bmN0aW9uIGdldE1hcmtkb3duRmlsZXMoZGlyOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGFsbERpciA9IGF3YWl0IGZzLnJlYWRkaXIoZGlyLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcclxuICAgIGNvbnN0IG1hcmtkb3duRmlsZXM6IGFueSA9IGF3YWl0IFByb21pc2UuYWxsKGFsbERpci5tYXAoYXN5bmMgKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBqb2luKGRpciwgZW50cnkubmFtZSlcclxuICAgICAgICBpZiAoZW50cnkuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0TWFya2Rvd25GaWxlcyhmaWxlUGF0aClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gXHU0RTBEXHU4MEZEXHU0RTNBaW5kZXgubWRcclxuICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcubWQnKSAmJiBlbnRyeS5uYW1lICE9PSAnaW5kZXgubWQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWxlUGF0aFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH0pKVxyXG4gICAgcmV0dXJuIG1hcmtkb3duRmlsZXMuZmxhdCgpIGFzIHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVNlYXJjaEluZGV4KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlUGF0aHMgPSBhd2FpdCBnZXRNYXJrZG93bkZpbGVzKHBvc3RzRGlyKVxyXG4gICAgICAgIGNvbnN0IGpzb25JdGVtID0gYXdhaXQgUHJvbWlzZS5hbGwoZmlsZVBhdGhzLm1hcChhc3luYyAocGF0aCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZEZpbGUgPSBhd2FpdCBmcy5yZWFkRmlsZShwYXRoLCAndXRmLTgnKVxyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihtZEZpbGUpXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSB8fCAnVW50aXRsZWQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgucmVwbGFjZShwb3N0c0RpciwgJycpLnJlcGxhY2UoL1xcLm1kJC8sICcnKSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgICAgICAvLyBcdTUyMUJcdTVFRkFcdTY1ODdcdTRFRjZcdTU5MzlcclxuICAgICAgICBhd2FpdCBmcy5lbnN1cmVEaXIoam9pbihfX2Rpcm5hbWUsICcuLi9zcmMvZGF0YScpKVxyXG4gICAgICAgIC8vIFx1NTE5OVx1NTE2NVx1NjU4N1x1NEVGNlxyXG4gICAgICAgIGF3YWl0IGZzLndyaXRlSnNvbihzYXZlRGlyLCBqc29uSXRlbSlcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1RDgzRFx1REUyQlx1RDgzRFx1REUyQlx1RDgzRFx1REUyQiBnZW5lcmF0ZVNlYXJjaEluZGV4IFx1RDgzRFx1REUyQlx1RDgzRFx1REUyQlx1RDgzRFx1REUyQiAnKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Bvc3RzRGlyOicsIHBvc3RzRGlyKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicsIGVycm9yKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1x1RDgzRFx1REUyQlx1RDgzRFx1REUyQlx1RDgzRFx1REUyQiAgZ2VuZXJhdGVTZWFyY2hJbmRleCBcdUQ4M0RcdURFMkJcdUQ4M0RcdURFMkJcdUQ4M0RcdURFMkIgJywgZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RpbmdcXFxcbm9iaXRhLWJsb2dcXFxcc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kaW5nXFxcXG5vYml0YS1ibG9nXFxcXHNjcmlwdHNcXFxcc2x1Z2lmeS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kaW5nL25vYml0YS1ibG9nL3NjcmlwdHMvc2x1Z2lmeS50c1wiOy8vIHN0cmluZy5qcyBzbHVnaWZ5IGRyb3BzIG5vbiBhc2NpaSBjaGFycyBzbyB3ZSBoYXZlIHRvXHJcbi8vIHVzZSBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiBoZXJlXHJcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJ2RpYWNyaXRpY3MnXHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxyXG5jb25zdCByQ29udHJvbCA9IC9bXFx1MDAwMC1cXHUwMDFGXS9nXHJcbmNvbnN0IHJTcGVjaWFsID0gL1tcXHN+YCFAIyQlXiYqKClcXC1fKz1bXFxde318XFxcXDs6XCInPD4sLj8vXSsvZ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICByZW1vdmUoc3RyKVxyXG4gICAgICAgIC8vIFJlbW92ZSBjb250cm9sIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgLnJlcGxhY2UockNvbnRyb2wsICcnKVxyXG4gICAgICAgIC8vIFJlcGxhY2Ugc3BlY2lhbCBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKHJTcGVjaWFsLCAnLScpXHJcbiAgICAgICAgLy8gUmVtb3ZlIGNvbnRpbnVvcyBzZXBhcmF0b3JzXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8tezIsfS9nLCAnLScpXHJcbiAgICAgICAgLy8gUmVtb3ZlIHByZWZpeGluZyBhbmQgdHJhaWxpbmcgc2VwYXJ0b3JzXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eLSt8LSskL2csICcnKVxyXG4gICAgICAgIC8vIGVuc3VyZSBpdCBkb2Vzbid0IHN0YXJ0IHdpdGggYSBudW1iZXIgKCMxMjEpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eKFxcZCkvLCAnXyQxJylcclxuICAgICAgICAvLyBsb3dlcmNhc2VcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgIClcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVQLFNBQVMsZUFBZTtBQUMvUSxPQUFPLHFCQUFxQjtBQUM1QixTQUFTLGNBQWMsMkJBQTJCO0FBQ2xELE9BQU8sU0FBUztBQUNoQixPQUFPQSxTQUFRO0FBQ2YsT0FBT0MsYUFBWTtBQUNuQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyx5QkFBeUI7QUFDaEMsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGNBQWM7QUFDckIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBR2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjs7O0FDekI2USxTQUFTLFlBQVk7QUFDMVQsT0FBTyxRQUFRO0FB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QixpQ0FBaUM7QUFBQSxZQUMxRCxDQUFDLDZCQUE2QiwrQkFBK0I7QUFBQSxZQUM3RCxDQUFDLDRCQUE0QixpQ0FBaUM7QUFBQSxVQUNsRTtBQUFBLFFBQ0osQ0FBQztBQUVELFdBQUcsSUFBSSxZQUFZO0FBQUEsTUFDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW1CSixDQUFDO0FBQUEsSUFFRCxXQUFXO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1AsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLE1BQ3hCLEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxVQUFVLGNBQWMsT0FBTztBQUFBLE1BQ3pDLFdBQVc7QUFBQSxRQUNQLGNBQWM7QUFBQSxVQUNWLGlCQUFpQjtBQUFBLFFBQ3JCLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDSixDQUFDO0FBQUEsSUFFRCxRQUFRO0FBQUEsSUFFUixNQUFNO0FBQUEsTUFDRixjQUFjO0FBQUEsTUFDZCxjQUFjO0FBQUEsSUFDbEIsQ0FBQztBQUFBLElBRUQsSUFBSTtBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQ04sZUFBZTtBQUFBLElBQ25CLENBQUM7QUFBQSxJQUVELFFBQVE7QUFBQSxJQUVSO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFNLGNBQWM7QUFDaEIsY0FBTSxRQUFRLElBQUksUUFBUTtBQUFBLE1BQzlCO0FBQUEsSUFDSjtBQUFBO0FBQUEsSUFFQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUNULDRCQUFvQjtBQUFBLE1BQ3hCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNILGVBQWU7QUFBQSxNQUNYLE9BQU8sU0FBUyxNQUFNO0FBQ2xCLFlBQUksUUFBUSxTQUFTO0FBQ2pCLGVBQUssT0FBTztBQUFBLE1BQ3BCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUVBLFlBQVk7QUFBQSxJQUNSLFlBQVk7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osT0FBTztBQUFBLE1BQ0gsYUFBYTtBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxVQUFRLEtBQUssUUFBUSxlQUFlLEVBQUU7QUFBQSxNQUNuRDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFsiZnMiLCAibWF0dGVyIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIm1hdHRlciIsICJmcyJdCn0K
