/**
 * Public environment hooks. Empty until real values are provided.
 * Do not invent endpoints, tracking IDs, or verification tokens.
 */

/**
 * POST endpoint for the standalone newsletter signup form (email platform OPEN).
 * Receives `email`. Empty: the signup block says signups open soon and shows no form.
 */
export const NEWSLETTER_ENDPOINT = (
  import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT ?? ""
).trim();

/**
 * POST endpoint for free-resource downloads (delivery platform OPEN).
 * Receives `email`, `resource` (slug) and `newsletter_consent` ("yes" only when
 * the separate box is ticked). A resource's own `downloadFormUrl` overrides it.
 */
export const FREE_DOWNLOAD_ENDPOINT = (
  import.meta.env.PUBLIC_FREE_DOWNLOAD_ENDPOINT ?? ""
).trim();

/** GA4 measurement ID (public). No fallback: analytics stay off until it is set. */
export const ANALYTICS_ID = (
  import.meta.env.PUBLIC_ANALYTICS_ID ?? ""
).trim();

/** Optional Google Search Console verification token. */
export const SEARCH_CONSOLE_VERIFICATION = (
  import.meta.env.PUBLIC_SEARCH_CONSOLE_VERIFICATION ?? ""
).trim();
