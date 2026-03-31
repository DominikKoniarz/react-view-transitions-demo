import Link from "next/link";
import { getPhotoAsync, getPhotos } from "@/data/queries/photos";
import { Badge } from "@/components/ui/badge";
import { PhotoDetailsToggle } from "@/components/photo-details-toggle";

export async function PhotoMetadata({ id }: { id: string }) {
  const [photo, allPhotos] = await Promise.all([
    getPhotoAsync(id),
    getPhotos(),
  ]);

  const currentIndex = allPhotos.findIndex((p) => p.id === id);
  const prevPhoto = currentIndex > 0 ? allPhotos[currentIndex - 1] : null;
  const nextPhoto =
    currentIndex < allPhotos.length - 1 ? allPhotos[currentIndex + 1] : null;

  return (
    <div>
      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6 border-t border-white/10 pt-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            {photo.title}
          </h1>
          <p className="font-mono text-sm text-white/40">{photo.location}</p>
          <p className="text-sm text-white/60">
            {photo.photographer} &middot; {photo.year}
          </p>
          <div className="pt-1">
            <Link href={`/collection/${photo.collection}`}>
              <Badge variant="outline" className="font-mono text-xs">
                {photo.photographer}
              </Badge>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {prevPhoto ? (
            <Link
              href={`/photo/${prevPhoto.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/30 transition-colors"
            >
              <span>←</span>
              <span className="font-mono text-xs">{prevPhoto.title}</span>
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 rounded border border-white/5 text-sm text-white/20 cursor-not-allowed">
              <span>←</span>
              <span className="font-mono text-xs">First</span>
            </span>
          )}
          {nextPhoto ? (
            <Link
              href={`/photo/${nextPhoto.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/30 transition-colors"
            >
              <span className="font-mono text-xs">{nextPhoto.title}</span>
              <span>→</span>
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2 rounded border border-white/5 text-sm text-white/20 cursor-not-allowed">
              <span className="font-mono text-xs">Last</span>
              <span>→</span>
            </span>
          )}
        </div>
      </div>
      <PhotoDetailsToggle />
    </div>
  );
}
