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
    syntaxHighlight: "shiki",
    // shikiConfig: { theme: "dracula" },
    remarkPlugins: [remarkToc],
    gfm: true,
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
  },
  integrations: [
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
  },
});
