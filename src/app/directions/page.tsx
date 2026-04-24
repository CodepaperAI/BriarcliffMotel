import { DetailPageTemplate } from "@/components/marketing";
import { detailPages } from "@/lib/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(detailPages.directions.meta);

export default function DirectionsPage() {
  return <DetailPageTemplate page={detailPages.directions} />;
}

