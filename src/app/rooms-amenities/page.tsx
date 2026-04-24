import { DetailPageTemplate } from "@/components/marketing";
import { detailPages } from "@/lib/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(detailPages.rooms.meta);

export default function RoomsAmenitiesPage() {
  return <DetailPageTemplate page={detailPages.rooms} />;
}

