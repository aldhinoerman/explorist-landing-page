import { PackageComponent } from "@/components";
import { setRequestLocale } from "next-intl/server";

interface PackagePageProps {
  params: Promise<{ slug: string; locale: string }>;
}

const PackagePage = async ({ params }: PackagePageProps) => {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  return <PackageComponent slug={slug} locale={locale} />;
};

export default PackagePage;
