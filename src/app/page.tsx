import { HomeTemplate } from "@/components/marketing";
import { homePage } from "@/lib/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(homePage.meta);

export default function Page() {
  return <HomeTemplate page={homePage} />;
}

