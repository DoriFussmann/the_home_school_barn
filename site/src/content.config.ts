import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { articleSchema, serviceSchema, teamSchema } from "seo-core";
import { TOPICS } from "./lib/topics";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: ({ image }) => articleSchema(image),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: ({ image }) =>
    teamSchema(image).extend({
      slug: z.string().optional(),
    }),
});

// Kept so the seo-core contract stays intact; this business has no services.
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: serviceSchema,
});

const pillarNames = TOPICS.map((topic) => topic.name) as [string, ...string[]];

/**
 * One file per resource (printable PDF), src/content/resources/<slug>.md.
 * Body = full description. Most metadata is optional because the product-page
 * field list is still OPEN in the intake; fill only what is true.
 */
const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One or two sentences: card text and meta description source. */
      summary: z.string().min(40).max(200),
      /** Page <title>, 50–60 characters (enforced by the post-build audit). */
      seoTitle: z.string().min(50).max(60),
      /** Meta description, 140–160 characters (enforced by the post-build audit). */
      seoDescription: z.string().min(140).max(160),
      /** Free download (email required) or paid. */
      free: z.boolean(),
      /** Display price with currency, e.g. "$8". Paid resources only; leave empty until decided. */
      price: z.string().optional(),
      /** Checkout link for paid resources (commerce platform OPEN). */
      buyUrl: z.string().url().optional(),
      /** Per-resource override for the free-download form endpoint. */
      downloadFormUrl: z.string().url().optional(),
      /** Age range as shown, e.g. "Ages 5–7". */
      ages: z.string().optional(),
      /** Content pillars (topic names from src/lib/topics.ts). */
      subjects: z.array(z.enum(pillarNames)).default([]),
      /** Themes or seasons, e.g. "Autumn", "Ancient Egypt". */
      themes: z.array(z.string()).default([]),
      format: z.string().default("Printable PDF"),
      pages: z.number().int().positive().optional(),
      fileSize: z.string().optional(),
      includes: z.array(z.string()).default([]),
      includesParentGuide: z.boolean().default(false),
      printingNotes: z.string().optional(),
      /** Permitted use (OPEN in the intake: household, classroom, co-op...). */
      licence: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      previews: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

/** Curated bundles, src/content/collections/<slug>.md. Body = full description. */
const bundles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/collections" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().min(40).max(200),
      /** Page <title>, 50–60 characters (enforced by the post-build audit). */
      seoTitle: z.string().min(50).max(60),
      /** Meta description, 140–160 characters (enforced by the post-build audit). */
      seoDescription: z.string().min(140).max(160),
      resources: z.array(reference("resources")).default([]),
      price: z.string().optional(),
      buyUrl: z.string().url().optional(),
      ages: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articles, team, services, resources, collections: bundles };
