import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPicsum } from "@/lib/photos";
import { getPhoto, getPhotos } from "@/data/queries/photos";
import { Badge } from "@/components/ui/badge";
import { PhotoDetailsToggle } from "@/components/photo-details-toggle";

export async function PhotoContent({ id }: { id: string }) {
  const [photo, allPhotos] = await Promise.all([getPhoto(id), getPhotos()]);

  const currentIndex = allPhotos.findIndex((p) => p.id === id);
  const prevPhoto = currentIndex > 0 ? allPhotos[currentIndex - 1] : null;
  const nextPhoto =
    currentIndex < allPhotos.length - 1 ? allPhotos[currentIndex + 1] : null;

  return (
    <>
      <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
        {prevPhoto ? (
          <Link
            href={`/photo/${prevPhoto.id}`}
            transitionTypes={["nav-back"]}
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            ←
          </Link>
        ) : (
          <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/5 text-white/20 cursor-not-allowed">
            ←
          </span>
        )}

        <ViewTransition name={`photo-${photo.id}`} share="morph">
          <div
            className="relative flex-1 max-h-[25vh] md:max-h-[30vh] lg:max-h-[40vh] overflow-hidden rounded-lg"
            style={{ aspectRatio: `${photo.w}/${photo.h}` }}
          >
            <Image
              data-photo-id={photo.id}
              src={getPicsum(photo.seed, photo.w, photo.h)}
              alt={`${photo.title} — ${photo.location}`}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 80vw, 70vw"
            />
          </div>
        </ViewTransition>

        {nextPhoto ? (
          <Link
            href={`/photo/${nextPhoto.id}`}
            transitionTypes={["nav-forward"]}
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            →
          </Link>
        ) : (
          <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/5 text-white/20 cursor-not-allowed">
            →
          </span>
        )}
      </div>

      <div>
        <div className="border-t border-white/10 pt-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              {photo.title}
            </h1>
            <p className="font-mono text-sm text-white/40">{photo.location}</p>
            <p className="text-sm text-white/60">
              {photo.photographer} &middot; {photo.year}
            </p>
            <div className="pt-1">
              <Link
                href={`/collection/${photo.collection}`}
                transitionTypes={["nav-forward"]}
              >
                <Badge variant="outline" className="font-mono text-xs">
                  {photo.photographer}
                </Badge>
              </Link>
            </div>
          </div>
        </div>
        <PhotoDetailsToggle />
      </div>
    </>
  );
}

export function PhotoContentSkeleton() {
  return (
    <>
      <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8 animate-pulse">
        <div className="shrink-0 w-10 h-10 rounded-full border border-white/5 bg-white/5" />
        <div
          className="flex-1 max-h-[25vh] md:max-h-[30vh] lg:max-h-[40vh] overflow-hidden rounded-lg bg-white/5"
          style={{ aspectRatio: "4/3" }}
        />
        <div className="shrink-0 w-10 h-10 rounded-full border border-white/5 bg-white/5" />
      </div>
      <div className="border-t border-white/10 pt-8 animate-pulse">
        <div className="space-y-3">
          <div className="h-8 w-48 bg-white/10 rounded" />
          <div className="h-4 w-32 bg-white/5 rounded" />
          <div className="h-4 w-40 bg-white/5 rounded" />
          <div className="h-5 w-20 bg-white/5 rounded mt-2" />
        </div>
      </div>
    </>
  );
}
