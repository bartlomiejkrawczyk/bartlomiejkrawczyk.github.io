import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import { remarkModifiedTime } from "./remark-modified-time.mjs";
import { visualizer } from "rollup-plugin-visualizer";
import remarkToc from "remark-toc";
import rehypePresetMinify from "rehype-preset-minify";
import sitemap from "@astrojs/sitemap";
import dotenv from "dotenv";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import astroExpressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import rehypeMermaid from "rehype-mermaid";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

const isProd = process.env.NODE_ENV === "production";
if (isProd) {
  dotenv.config({ path: path.resolve("./.env.production") });
} else {
  dotenv.config({ path: path.resolve("./.env.development") });
}

// https://astro.build/config
export default defineConfig({
  site: process.env.URL,
  output: "static",
  base: "/",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  markdown: {
    // https://docs.astro.build/en/reference/configuration-reference/#markdownshikiconfig
    syntaxHighlight: "shiki",
    // shikiConfig: { theme: "dracula" },
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
    rehypePlugins: [
      rehypeSlug,
      rehypeMermaid,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["heading-link"],
            ariaHidden: true,
          },
          content: {
            type: "element",
            tagName: "span",
            properties: {
              className: "heading-link-symbol",
            },
            children: [
              {
                type: "text",
                value: "#",
              },
            ],
          },
        },
      ],
    ],
    gfm: true,
  },
  integrations: [
    astroExpressiveCode({
      // https://expressive-code.com/guides/themes/
      // themes: [
      //  "dracula",
      //  "dark-plus",
      //  "github-dark-default",
      //  "material-theme-darker",
      //  "min-dark",
      // ],
      // themes: ["dark-plus"],
      shiki: {},
      frames: {
        showCopyToClipboardButton: true,
      },
      styleOverrides: {
        frames: {},
        textMarkers: {},
      },
      tabWidth: 4,
      defaultProps: {
        showLineNumbers: true,
      },
      plugins: [pluginLineNumbers()],
    }),
    mdx({ extendMarkdownConfig: true, rehypePlugins: [rehypePresetMinify] }),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          pl: "pl-PL",
        },
      },
    }),
  ],
  env: {
    schema: {
      URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
        default: "https://bartlomiejkrawczyk.github.io",
      }),
    },
  },
  devToolbar: {
    enabled: false,
  },
  i18n: {
    locales: ["en", "pl"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
      fallbackType: "rewrite",
    },
    fallback: {
      pl: "en",
    },
  },
  vite: {
    plugins: [
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
      tailwindcss(),
    ],
    build: {},
  },
});
