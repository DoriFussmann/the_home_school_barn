import { getCollection, getEntries, type CollectionEntry } from "astro:content";

export type Resource = CollectionEntry<"resources">;
export type ResourceCollection = CollectionEntry<"collections">;

const byOrder = <T extends { data: { order: number; title: string } }>(a: T, b: T) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);

/** Published resources (drafts excluded), in display order. */
export async function getPublishedResources(): Promise<Resource[]> {
  return (await getCollection("resources", ({ data }) => data.draft !== true)).sort(byOrder);
}

/** Published collections (drafts excluded), in display order. */
export async function getPublishedCollections(): Promise<ResourceCollection[]> {
  return (await getCollection("collections", ({ data }) => data.draft !== true)).sort(byOrder);
}

/** The published resources a collection contains. */
export async function resourcesIn(collection: ResourceCollection): Promise<Resource[]> {
  if (collection.data.resources.length === 0) return [];
  return (await getEntries(collection.data.resources)).filter(
    (entry): entry is Resource => Boolean(entry) && entry.data.draft !== true,
  );
}

/** Numeric price for schema.org offers ("$8" -> "8.00"), or undefined when not set or not parseable. */
export function schemaPrice(price: string | undefined): string | undefined {
  if (!price) return undefined;
  const match = price.replace(/,/g, "").match(/\d+(\.\d+)?/);
  return match ? Number(match[0]).toFixed(2) : undefined;
}

/**
 * ISO currency for schema.org offers, read from the price symbol.
 * Free items and prices without a symbol fall back to USD (the likely
 * US-first market; the market itself is OPEN in the intake).
 */
export function schemaCurrency(price: string | undefined): string {
  if (price?.includes("£")) return "GBP";
  if (price?.includes("€")) return "EUR";
  if (price?.match(/\bCA\$|C\$/)) return "CAD";
  if (price?.match(/\bA\$|AU\$/)) return "AUD";
  return "USD";
}
