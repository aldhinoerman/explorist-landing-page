import { PackageComponent } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";

interface PackagePageProps {
  params: { slug: string; locale: string };
}

const PackagePage = async ({ params }: PackagePageProps) => {
  const { slug, locale } = params;

  return <PackageComponent slug={slug} locale={locale} />;
};

export default PackagePage;
