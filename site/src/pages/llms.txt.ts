import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { generateLlmsTxt } from "seo-core";
import { ARTICLES_BASE, AUTHOR_PATH, SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "../config/site";

export const GET: APIRoute = async () => {
  const articles = (await getCollection("articles", ({ data }) => data.draft !== true)).sort(
    (a, b) => (b.data.updatedDate || b.data.date).localeCompare(a.data.updatedDate || a.data.date),
  );
  const team = await getCollection("team");

  const body = generateLlmsTxt({
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    siteTagline: SITE_DESCRIPTION,
    articlesBase: ARTICLES_BASE,
    articles,
    team,
    authorPath: AUTHOR_PATH,
    extraPages: [
      { path: "/services/", title: "Services", description: "AI integration services: assess the business, find where AI fits, then build, connect and refine it in real workflows." },
      { path: "/how-it-works/", title: "How it works", description: "The process in three stages: understand the business and identify AI opportunities, design and implement, then measure and optimize month to month." },
      { path: "/pricing/", title: "Pricing", description: "Setup and assessment from $250 for the first month; ongoing engagement typically from $2,000 a month, scaled to project size and pace. Exact scope and fee agreed after a free 30-minute call." },
      { path: "/about/", title: "About", description: "No Black Swan is a small AI integration agency run by founder Dori Fussmann, an entrepreneur, fractional CFO and operator." },
      { path: "/book-call/", title: "Book a free consultation", description: "A free 30-minute call with Dori: we tell you what we would do for your business." },
    ],
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
