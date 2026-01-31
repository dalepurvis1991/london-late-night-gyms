export type Place = {
  name: string;
  slug: string;
  area: string;
  address: string;
  nearestTube?: string;
  website?: string;
  hoursNote: string; // e.g. "24/7" / "Closes 11pm"
  lateNightFriendly: boolean;
  amenities: string[]; // e.g. "Showers", "Free weights"
  blurb: string;
  updatedAt: string; // YYYY-MM-DD
};

export const PLACES: Place[] = [
  {
    name: "Example Late-Night Gym — Canary Wharf",
    slug: "example-late-night-gym-canary-wharf",
    area: "Canary Wharf",
    address: "Canary Wharf, London",
    nearestTube: "Canary Wharf",
    website: "https://example.com",
    hoursNote: "24/7",
    lateNightFriendly: true,
    amenities: ["Showers", "Free weights", "Cardio"],
    blurb:
      "Useful template listing. Always verify opening times on the gym’s website.",
    updatedAt: "2026-01-31",
  },
  {
    name: "Example Gym — Soho",
    slug: "example-gym-soho",
    area: "Soho",
    address: "Soho, London",
    nearestTube: "Tottenham Court Road",
    website: "https://example.com",
    hoursNote: "Closes 11pm",
    lateNightFriendly: true,
    amenities: ["Free weights"],
    blurb: "Central gym with late closing time (check weekends/holidays).",
    updatedAt: "2026-01-31",
  },
];

export function listAreas(): string[] {
  return Array.from(new Set(PLACES.map((p) => p.area))).sort();
}
