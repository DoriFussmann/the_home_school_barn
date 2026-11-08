/**
 * Topic hubs: one page per core keyword. `name` must match articles' pillarKeyword exactly.
 * `pillar` is the slug of the topic's core article; check it once that article is published.
 * A hub is only built once it has at least one published article (see liveTopics).
 */
export const TOPICS = [
  {
    "name": "fractional ai",
    "slug": "fractional-ai",
    "pillar": "who-should-own-ai-in-a-company",
    "title": "Who Owns AI: Head of AI or Fractional Lead | No Black Swan",
    "h1": "Fractional AI and the head of AI",
    "description": "Who should own AI in a startup or growing company: a full-time head of AI, a fractional AI lead, or an outside partner who implements the work with your team.",
    "intro": "Your team already uses AI, but nobody owns it. These guides compare a head of AI, a fractional AI lead and an outside partner, and what each costs you in time and focus."
  },
  {
    "name": "ai integration",
    "slug": "ai-integration",
    "pillar": "ai-integration",
    "title": "How to Integrate AI Into Your Business | No Black Swan",
    "h1": "AI integration",
    "description": "Step-by-step guides to integrating AI into a business: readiness, finding the right opportunities, building a roadmap, automation, systems and pilots.",
    "intro": "How to bring AI into the way your business actually works: from checking readiness and picking opportunities to running pilots and connecting it to your systems."
  },
  {
    "name": "ai consulting",
    "slug": "ai-consulting",
    "pillar": "ai-consulting",
    "title": "AI Consulting: Options, Cost, Vetting | No Black Swan",
    "h1": "AI consulting and implementation partners",
    "description": "What AI consulting is, what you should get from it, how the options compare, what drives the cost, and how to vet an AI implementation partner.",
    "intro": "Before you hire outside help with AI: the kinds of partners available, what each delivers, how fees are structured, and the questions to ask before you sign."
  },
  {
    "name": "ai for operations",
    "slug": "ai-for-operations",
    "pillar": "ai-for-operations",
    "title": "AI for Operations-Heavy Businesses | No Black Swan",
    "h1": "AI for operations-heavy businesses",
    "description": "Where AI helps construction, trucking, field service and distribution businesses: dispatch, scheduling, calls, estimates, inventory and back-office work.",
    "intro": "Practical AI for businesses that run on crews, trucks and inventory: where to start, which workflows pay back first, and where AI doesn't belong yet."
  },
  {
    "name": "ai for professional services",
    "slug": "ai-for-professional-services",
    "pillar": "ai-for-professional-services",
    "title": "AI for Professional Services Firms | No Black Swan",
    "h1": "AI for professional services firms",
    "description": "How agencies, accounting and law firms and clinic groups use AI to cut admin, speed up client delivery and protect billable hours and margin.",
    "intro": "For founder-led services firms: where AI removes admin, shortens delivery and improves margin without changing what clients pay you for."
  },
  {
    "name": "ai adoption",
    "slug": "ai-adoption",
    "pillar": "ai-adoption",
    "title": "AI Adoption: Getting Your Team to Use AI | No Black Swan",
    "h1": "AI adoption",
    "description": "How to get a team to change how it works with AI: training, change management, AI policy, handling resistance and building internal champions.",
    "intro": "Tools are the easy part. These guides cover the people side of AI: training, policy, resistance, and turning a few early users into champions."
  },
  {
    "name": "ai roi",
    "slug": "ai-roi",
    "pillar": "ai-roi",
    "title": "AI ROI: Measuring Whether AI Pays Off | No Black Swan",
    "h1": "AI ROI and cost",
    "description": "How to measure whether AI pays off: real costs, avoiding wasted tools, AI versus hiring, and how to tell where AI doesn't belong in your business.",
    "intro": "What AI really costs and how to tell whether it pays back, including the tools that go unused and the cases where hiring or doing nothing is the better call."
  }
] as const satisfies readonly {
  name: string;
  slug: string;
  pillar: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
}[];

export type Topic = (typeof TOPICS)[number];

export function topicByName(name: string | undefined): Topic | undefined {
  if (!name) return undefined;
  return TOPICS.find((topic) => topic.name === name.trim());
}

const ACRONYMS: Record<string, string> = { ai: "AI", roi: "ROI", fde: "FDE", crm: "CRM", erp: "ERP" };
const SMALL_WORDS = new Set(["a", "an", "and", "for", "in", "of", "or", "the", "to", "vs"]);

/** Display label for a lowercase topic name: "ai for operations" -> "AI for Operations". */
export function topicLabel(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (ACRONYMS[lower]) return ACRONYMS[lower];
      if (i > 0 && SMALL_WORDS.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}
