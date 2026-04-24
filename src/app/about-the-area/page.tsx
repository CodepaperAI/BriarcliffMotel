import { DetailPageTemplate } from "@/components/marketing";
import { detailPages } from "@/lib/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(detailPages.area.meta);

export default function AboutTheAreaPage() {
  return <DetailPageTemplate page={detailPages.area} />;
}

