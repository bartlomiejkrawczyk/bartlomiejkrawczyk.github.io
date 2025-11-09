import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({})],
  site: process.env.URL,
  base: "/",
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
});
