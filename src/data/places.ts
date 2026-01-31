import placesJson from "./places.json";

export type Place = {
  name: string;
  slug: string;
  area: string;
  address: string;
  nearestTube?: string;
  website?: string;
  hoursNote: string;
  lateNightFriendly: boolean;
  amenities: string[];
  blurb: string;
  updatedAt: string;
  _source?: unknown;
};

export const PLACES = placesJson as Place[];

export function listAreas(): string[] {
  return Array.from(new Set(PLACES.map((p) => p.area))).sort();
}
