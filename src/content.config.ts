import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import type { CollectionEntry } from "astro:content";
import { tagIds } from "./components/content/Tags";

export type ExtendedProjectEntry = CollectionEntry<"projects"> & {
  filePath?: string;
  assetImports?: string[];
  digest?: string;
  rendered?: {
    html: string;
    metadata?: {
      headings?: {
        depth: number;
        slug: string;
        text: string;
      }[];
      frontmatter?: Record<string, any>;
      imagePaths?: string[];
      localImagePaths?: string[];
      remoteImagePaths?: string[];
    };
  };
};

export const collections = {
  projects: defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
    schema: ({ image }) =>
      z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        repository: z.string().optional(),
        externalUrl: z.string().optional(),
        publishDate: z.coerce.date().optional(),
        tags: z.array(z.enum(tagIds)).optional(),
        image: image().optional(),
        imageAlt: z.string().optional(),
        img: z.string().optional(),
        imgAlt: z.string().optional(),
      }),
  }),
};
