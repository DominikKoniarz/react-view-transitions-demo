import { cache } from "react";
import { notFound } from "next/navigation";
import { photos, type Photo } from "@/lib/photos";

const SIMULATED_DELAY_MS = 800;

export const getPhotos = cache(async (): Promise<Photo[]> => {
  return photos;
});

export const getPhoto = cache(async (id: string): Promise<Photo> => {
  const photo = photos.find((p) => p.id === id);
  if (!photo) notFound();
  return photo;
});

export const getPhotoAsync = cache(async (id: string): Promise<Photo> => {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
  const photo = photos.find((p) => p.id === id);
  if (!photo) notFound();
  return photo;
});

export const getCollection = cache(async (slug: string): Promise<Photo[]> => {
  return photos.filter((p) => p.collection === slug);
});
