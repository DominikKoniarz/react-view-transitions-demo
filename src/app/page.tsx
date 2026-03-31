import { getPhotos } from "@/data/queries/photos";
import { PhotoGrid } from "@/components/photo-grid";

export default async function GalleryPage() {
  const photos = await getPhotos();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PhotoGrid photos={photos} />
    </div>
  );
}
