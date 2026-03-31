import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { photos, getPhoto, getPicsum } from "@/lib/photos";
import { MetadataSkeleton } from "@/components/skeletons";
import { PhotoMetadata } from "./photo-metadata";

export async function generateStaticParams() {
  return photos.map((photo) => ({ id: photo.id }));
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = getPhoto(id);

  if (!photo) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-white transition-colors mb-8"
      >
        ← Gallery
      </Link>

      {/* Photo */}
      <div className="flex justify-center mb-8">
        <Image
          data-photo-id={photo.id}
          src={getPicsum(photo.seed, photo.w, photo.h)}
          alt={`${photo.title} — ${photo.location}`}
          width={photo.w}
          height={photo.h}
          className="max-h-[80vh] w-auto object-contain rounded-lg"
          priority
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
      </div>

      {/* Metadata — streams in after delay */}
      <Suspense fallback={<MetadataSkeleton />}>
        <PhotoMetadata id={id} />
      </Suspense>
    </div>
  );
}
