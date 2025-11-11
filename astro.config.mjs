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
import astroExpressiveCode, { createInlineSvgUrl } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import rehypeMermaid from "rehype-mermaid";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

const isProd = process.env.NODE_ENV === "production";
if (isProd) {
  dotenv.config({ path: path.resolve("./.env.production") });
} else {
  dotenv.config({ path: path.resolve("./.env.development") });
}

// function svgToDataUri(svg) {
//   return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
// }

const rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M17.5 14H19C20.1046 14 21 13.1046 21 12V5C21 3.89543 20.1046 3 19 3H12C10.8954 3 10 3.89543 10 5V6.5M5 10H12C13.1046 10 14 10.8954 14 12V19C14 20.1046 13.1046 21 12 21H5C3.89543 21 3 20.1046 3 19V12C3 10.8954 3.89543 10 5 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

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
    shikiConfig: {
      wrap: true,
      // theme: "dracula"
    },
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: "(Table of contents)|(Spis treści)",
          tight: true,
          ordered: true,
          maxDepth: 3,
        },
      ],
      remarkReadingTime,
      remarkModifiedTime,
    ],
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeMermaid,
      rehypeAccessibleEmojis,
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
        frames: {
          copyIcon: createInlineSvgUrl(
            `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M17.5 14H19C20.1046 14 21 13.1046 21 12V5C21 3.89543 20.1046 3 19 3H12C10.8954 3 10 3.89543 10 5V6.5M5 10H12C13.1046 10 14 10.8954 14 12V19C14 20.1046 13.1046 21 12 21H5C3.89543 21 3 20.1046 3 19V12C3 10.8954 3.89543 10 5 10Z"
                        stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
            `,
          ),
          inlineButtonBorderOpacity: 0.0,
        },
        textMarkers: {},
      },
      tabWidth: 4,

      defaultProps: {
        showLineNumbers: true,
        wrap: true,
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
