import type { AuthorPath, SiteIdentity } from "seo-core";

/**
 * Canonical origin. Non-www is a working default.
 * OPEN (intake): confirm www vs non-www before launch.
 */
export const SITE_URL = "https://thehomeschoolbarn.com";
export const SITE_NAME = "The Homeschool Barn";

/** Short brand tagline (brand promise). Shown in the footer and hero. */
export const SITE_TAGLINE = "Beautifully crafted learning experiences for curious children.";

/** Site description: Organization schema, llms.txt, llms-full.txt and RSS. */
export const SITE_DESCRIPTION =
  "The Homeschool Barn offers thoughtfully crafted, beautifully designed educational materials and practical learning experiences for curious children. Families can explore and use individual printable resources and curated collections across a range of subjects, seasons and themes.";

/** URL segment for articles. Changing it requires redirects for every article. */
export const ARTICLES_BASE = "articles";

/**
 * Organization `sameAs` profiles. Only verified company URLs.
 * OPEN (intake): no social or company profiles supplied yet.
 */
export const SAME_AS: string[] = [];

/** Organization logo (512×512 PNG, square brand icon). */
export const LOGO_PATH = "/logo.png";

/**
 * Other names the company goes by. Set on every Organization node (BaseLayout).
 * OPEN (intake): confirm whether any abbreviation should be used.
 */
export const ORG_ALTERNATE_NAMES: string[] = ["The Home School Barn", "thehomeschoolbarn.com"];

/** Initial content pillars (Organization knowsAbout). */
export const ORG_KNOWS_ABOUT: string[] = [
  "History & Civilizations",
  "Science & The Natural World",
  "Mathematics & Discovery",
  "Seasons, Holidays & Traditions",
  "Geography, Culture & The World",
];

/** Who the resources are for (Organization audience). */
export const ORG_AUDIENCE =
  "Homeschooling parents and families with children aged approximately 3 to 10, and parents supplementing their children's education.";

export const SITE_IDENTITY: SiteIdentity = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  logo: LOGO_PATH,
  sameAs: SAME_AS,
};

/** Article bylines are profiled on the About page, anchored by slug ("/about/#editorial"). */
export const AUTHOR_PATH: AuthorPath = (slug) => `/about/#${slug}`;

/** Default marketing Open Graph image (1200×630). */
export const DEFAULT_OG_IMAGE = "/og-default.png";

/**
 * Public contact email.
 * OPEN (intake): no address chosen yet. Empty keeps it out of the schema and pages.
 */
export const CONTACT_EMAIL = "";
