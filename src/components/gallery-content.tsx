import { getPhotos } from "@/data/queries/photos";
import { PhotoGrid } from "@/components/photo-grid";
import type { SortKey } from "@/lib/photos";
import { sortPhotos } from "@/lib/photos";

export async function GalleryContent({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string }>;
}) {
  const { q = "", sort = "title" } = await searchParams;
  const photos = await getPhotos();

  const filtered = photos.filter((p) => {
    const query = q.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.photographer.toLowerCase().includes(query)
    );
  });

  const sorted = sortPhotos(filtered, sort as SortKey);

  return <PhotoGrid photos={sorted} q={q} />;
}

export function GalleryContentSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-lg"
            style={{ aspectRatio: "4/3" }}
          />
        ))}
      </div>
    </div>
  );
}
