import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({})],
  site: process.env.URL,
  output: "static",
  base: "/",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  markdown: {
    syntaxHighlight: "shiki",
    gfm: true,
  },
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
});
