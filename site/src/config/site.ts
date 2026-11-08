import type { AuthorPath, SiteIdentity } from "seo-core";

export const SITE_URL = "https://noblackswan.com";
export const SITE_NAME = "No Black Swan";

/** Short brand tagline. Shown in the footer. */
export const SITE_TAGLINE = "Less AI Hype. More Impact.";

/** Site description: Organization schema, llms.txt, llms-full.txt and RSS. */
export const SITE_DESCRIPTION =
  "No Black Swan is a small AI integration agency that helps startups and growing businesses put AI to work in their operations, workflows and everyday decisions.";

/** URL segment for articles. Changing it requires redirects for every article. */
export const ARTICLES_BASE = "articles";

/** Public LinkedIn profile for Dori. Used on Person schema and the founder panel. */
export const DORI_LINKEDIN =
  "https://www.linkedin.com/in/dori-fussmann-663ba242";

/** Dori's official profiles: Person sameAs on both the About page and article bylines. */
export const DORI_PROFILES: string[] = [
  DORI_LINKEDIN,
  "https://bluemark.co/team/dori-fussmann/",
  "https://www.crunchbase.com/person/dori-fussmann",
];

/** Company LinkedIn page. Footer link and Organization sameAs. */
export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/144122085/";

/**
 * Organization `sameAs` profiles. Only verified company URLs.
 * Dori's personal LinkedIn belongs on Person schema, not here.
 */
export const SAME_AS: string[] = [COMPANY_LINKEDIN];

/** Organization logo (512×512 PNG of the No Black Swan mark). */
export const LOGO_PATH = "/logo.png";

/** Other names the company goes by. Set on every Organization node (BaseLayout). */
export const ORG_ALTERNATE_NAMES: string[] = ["No Black Swan", "No Black Swan AI", "noblackswan.com"];

/** What the agency is known for (Organization knowsAbout). */
export const ORG_KNOWS_ABOUT: string[] = [
  "AI integration",
  "AI implementation",
  "AI consulting",
  "Workflow automation",
  "AI adoption",
  "Forward deployed engineering",
  "Operational AI",
];

export const SITE_IDENTITY: SiteIdentity = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  logo: LOGO_PATH,
  sameAs: SAME_AS,
};

/** Authors are profiled on the About page, anchored by slug ("/about/#dori-fussmann"). */
export const AUTHOR_PATH: AuthorPath = (slug) => `/about/#${slug}`;

/** Default marketing Open Graph image (1200×630). */
export const DEFAULT_OG_IMAGE = "/og-default.png";

/** Contact email for the business. */
export const CONTACT_EMAIL = "dori@noblackswan.com";
