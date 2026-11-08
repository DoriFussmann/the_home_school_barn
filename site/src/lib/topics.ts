/**
 * Topic hubs: one page per content pillar (the five initial pillars in the intake).
 * `name` must match articles' pillarKeyword exactly.
 * `pillar` is the slug of the topic's core article; nothing is published yet, so
 * each is set to the hub slug. Check it once that article is published.
 * A hub is only built once it has at least one published article (see liveTopics).
 */
export const TOPICS = [
  {
    "name": "history and civilizations",
    "slug": "history-and-civilizations",
    "pillar": "history-and-civilizations",
    "title": "Teaching History to Children | The Homeschool Barn",
    "h1": "History and civilizations",
    "description": "Ways to explore history and ancient civilizations with children aged 3 to 10: thoughtful ideas, conversations and printable learning resources for families.",
    "intro": "How to bring the past to life for young children: people, places and civilizations, explored through stories, conversation and hands-on discovery."
  },
  {
    "name": "science and the natural world",
    "slug": "science-and-the-natural-world",
    "pillar": "science-and-the-natural-world",
    "title": "Science and Nature for Children | The Homeschool Barn",
    "h1": "Science and the natural world",
    "description": "Ideas for exploring science and nature with young children: observation, discovery and printable resources that explain how the world works at their level.",
    "intro": "Helping curious children understand the world around them, from how the Earth formed to the plants and animals outside the door."
  },
  {
    "name": "mathematics and discovery",
    "slug": "mathematics-and-discovery",
    "pillar": "mathematics-and-discovery",
    "title": "Hands-On Math for Young Children | The Homeschool Barn",
    "h1": "Mathematics and discovery",
    "description": "Hands-on ways to explore numbers, shapes, patterns and fractions with children aged 3 to 10, with practical activities and printable learning resources.",
    "intro": "Practical, hands-on ways to explore numbers, patterns and shapes, so that math becomes something children discover rather than just practice."
  },
  {
    "name": "seasons, holidays and traditions",
    "slug": "seasons-holidays-and-traditions",
    "pillar": "seasons-holidays-and-traditions",
    "title": "Seasonal Learning for Children | The Homeschool Barn",
    "h1": "Seasons, holidays and traditions",
    "description": "Meaningful learning activities for the seasons, holidays and traditions through the year, with ideas and printable resources for children aged 3 to 10.",
    "intro": "Learning that follows the year: seasons, holidays and traditions explored with children through activities, conversation and observation."
  },
  {
    "name": "geography, culture and the world",
    "slug": "geography-culture-and-the-world",
    "pillar": "geography-culture-and-the-world",
    "title": "Geography and Cultures for Children | The Homeschool Barn",
    "h1": "Geography, culture and the world",
    "description": "Ideas for exploring geography, maps and cultures around the world with young children, with thoughtful activities and printable learning resources.",
    "intro": "Exploring the wider world with children: places, maps, peoples and cultures, approached with curiosity and care."
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

const ACRONYMS: Record<string, string> = {};
const SMALL_WORDS = new Set(["a", "an", "and", "for", "in", "of", "or", "the", "to", "vs"]);

/** Display label for a lowercase topic name: "history and civilizations" -> "History and Civilizations". */
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
