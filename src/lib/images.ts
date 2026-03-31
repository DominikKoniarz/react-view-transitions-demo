import type { StaticImageData } from "next/image";
import alps from "@/images/alps.jpg";
import brooklyn from "@/images/brooklyn.jpg";
import cafe from "@/images/cafe.jpg";
import canyon from "@/images/canyon.jpg";
import desert from "@/images/desert.jpg";
import forest from "@/images/forest.jpg";
import harbor from "@/images/harbor.jpg";
import market from "@/images/market.jpg";
import ocean from "@/images/ocean.jpg";
import rooftop from "@/images/rooftop.jpg";
import seoul from "@/images/seoul.jpg";
import tokyo from "@/images/tokyo.jpg";

const images: Record<string, StaticImageData> = {
  alps,
  brooklyn,
  cafe,
  canyon,
  desert,
  forest,
  harbor,
  market,
  ocean,
  rooftop,
  seoul,
  tokyo,
};

export function getPhotoImage(seed: string): StaticImageData {
  return images[seed];
}
