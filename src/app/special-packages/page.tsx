import { DetailPageTemplate } from "@/components/marketing";
import { detailPages } from "@/lib/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(detailPages.specials.meta);

export default function SpecialPackagesPage() {
  return <DetailPageTemplate page={detailPages.specials} />;
}

