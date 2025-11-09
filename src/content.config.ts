import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  projects: defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      publishDate: z.coerce.date().optional(),
      tags: z.array(z.string()).optional(),
      img: z.string().optional(),
      img_alt: z.string().optional(),
    }),
  }),
};
