import { PackageComponent } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";

interface PackagePageProps {
  params: { slug: string };
}

const PackagePage = async ({ params }: PackagePageProps) => {
  const { slug } = params;

  return <PackageComponent slug={slug} />;
};

export default PackagePage;
