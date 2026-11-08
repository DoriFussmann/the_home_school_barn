import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { generateLlmsTxt } from "seo-core";
import { ARTICLES_BASE, AUTHOR_PATH, SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "../config/site";
import { getPublishedCollections, getPublishedResources } from "../lib/resources";

export const GET: APIRoute = async () => {
  const articles = (await getCollection("articles", ({ data }) => data.draft !== true)).sort(
    (a, b) => (b.data.updatedDate || b.data.date).localeCompare(a.data.updatedDate || a.data.date),
  );
  const team = await getCollection("team");
  const resources = await getPublishedResources();
  const collections = await getPublishedCollections();

  const body = generateLlmsTxt({
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    siteTagline: SITE_DESCRIPTION,
    articlesBase: ARTICLES_BASE,
    articles,
    team,
    authorPath: AUTHOR_PATH,
    extraPages: [
      { path: "/resources/", title: "Resource library", description: "Printable learning resources (PDFs) for children aged roughly 3 to 10, free and paid, across history, science, math, the seasons and geography. Free resources need an email address." },
      ...resources.map((r) => ({
        path: `/resources/${r.id}/`,
        title: r.data.title,
        description: `${r.data.free ? "Free" : r.data.price ?? "Paid"} printable resource${r.data.ages ? `, ${r.data.ages}` : ""}. ${r.data.summary}`,
      })),
      { path: "/collections/", title: "Collections", description: "Curated sets of printable resources gathered around a season, subject or theme." },
      ...collections.map((c) => ({
        path: `/collections/${c.id}/`,
        title: c.data.title,
        description: `Collection${c.data.price ? `, ${c.data.price}` : ""}. ${c.data.summary}`,
      })),
      { path: "/about/", title: "About", description: "An independent resource brand: not a curriculum, not tied to one educational method, and not a personal influencer brand. Resources stand alone and free ones are made with the same care as paid ones." },
      { path: "/download-policy/", title: "Downloads and refunds", description: "What you receive (digital PDF files, nothing shipped), delivery, downloading again, printing and refunds." },
    ],
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
