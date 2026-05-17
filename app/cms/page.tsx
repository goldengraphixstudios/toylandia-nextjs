import type { Metadata } from "next";
import ToylandiaCmsAdminApp from "@/components/ToylandiaCmsAdminApp";

export const metadata: Metadata = {
  title: "ToyLandia CMS",
  description: "ToyLandia article management dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CmsPage() {
  return <ToylandiaCmsAdminApp />;
}
