/**
 * Public environment hooks. Empty until real values are provided.
 * Do not invent endpoints, tracking IDs, or verification tokens.
 */

/** POST endpoint for the Book a Call form (Formspree, HubSpot, serverless, etc.). */
export const BOOKING_ENDPOINT = (
  import.meta.env.PUBLIC_BOOKING_ENDPOINT ?? ""
).trim();

/** Public Cal.com event URL for the discovery-call scheduler. */
export const CAL_COM_URL = (
  import.meta.env.PUBLIC_CAL_COM_URL ??
  "https://cal.com/dori-fussmann-lqbqlb/30-minutes-consultation-call-w-dori-fussmann-no-black-swan"
).trim();

/** GA4 measurement ID (public). PUBLIC_ANALYTICS_ID overrides it. */
export const ANALYTICS_ID = (
  import.meta.env.PUBLIC_ANALYTICS_ID || "G-Y6F50YVGTR"
).trim();

/** Optional Google Search Console verification token. */
export const SEARCH_CONSOLE_VERIFICATION = (
  import.meta.env.PUBLIC_SEARCH_CONSOLE_VERIFICATION ?? ""
).trim();
