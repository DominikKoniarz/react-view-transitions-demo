export type Photo = {
  id: string;
  seed: string;
  title: string;
  location: string;
  photographer: string;
  year: number;
  w: number;
  h: number;
  collection: string;
};

export type SortKey = "title" | "year" | "photographer";

export const photos: Photo[] = [
  { id: "1", seed: "alps", title: "Alpine Morning", location: "Swiss Alps", photographer: "Mia Kern", year: 2024, w: 1200, h: 800, collection: "mia-kern" },
  { id: "2", seed: "tokyo", title: "Shinjuku Rain", location: "Tokyo, Japan", photographer: "Kenji Mori", year: 2025, w: 800, h: 1200, collection: "kenji-mori" },
  { id: "3", seed: "desert", title: "Sahara Dusk", location: "Morocco", photographer: "Leila Osei", year: 2024, w: 1200, h: 800, collection: "leila-osei" },
  { id: "4", seed: "brooklyn", title: "Bedford Ave", location: "Brooklyn, NY", photographer: "Sam Rivera", year: 2025, w: 800, h: 1000, collection: "sam-rivera" },
  { id: "5", seed: "ocean", title: "Pacific Horizon", location: "Big Sur, CA", photographer: "Mia Kern", year: 2024, w: 1200, h: 675, collection: "mia-kern" },
  { id: "6", seed: "market", title: "Spice Market", location: "Marrakech", photographer: "Leila Osei", year: 2025, w: 900, h: 900, collection: "leila-osei" },
  { id: "7", seed: "forest", title: "Redwood Path", location: "Northern California", photographer: "Sam Rivera", year: 2024, w: 800, h: 1200, collection: "sam-rivera" },
  { id: "8", seed: "seoul", title: "Hongdae Night", location: "Seoul, South Korea", photographer: "Kenji Mori", year: 2025, w: 1200, h: 800, collection: "kenji-mori" },
  { id: "9", seed: "harbor", title: "Lisbon Harbor", location: "Lisbon, Portugal", photographer: "Mia Kern", year: 2024, w: 1200, h: 800, collection: "mia-kern" },
  { id: "10", seed: "canyon", title: "Slot Canyon", location: "Arizona, USA", photographer: "Sam Rivera", year: 2025, w: 800, h: 1200, collection: "sam-rivera" },
  { id: "11", seed: "cafe", title: "Morning Ritual", location: "Paris, France", photographer: "Leila Osei", year: 2024, w: 900, h: 900, collection: "leila-osei" },
  { id: "12", seed: "rooftop", title: "Manhattan Dusk", location: "New York, NY", photographer: "Kenji Mori", year: 2025, w: 1200, h: 800, collection: "kenji-mori" },
];

const SORT_COMPARATORS: Record<SortKey, (a: Photo, b: Photo) => number> = {
  title: (a, b) => a.title.localeCompare(b.title),
  year: (a, b) => b.year - a.year,
  photographer: (a, b) => a.photographer.localeCompare(b.photographer),
};

export function sortPhotos(list: Photo[], key: SortKey): Photo[] {
  return [...list].sort(SORT_COMPARATORS[key]);
}
