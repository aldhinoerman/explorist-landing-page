import { PackageComponent } from "@/components";
import { fetchPackages } from "./utils";

interface PackagePageProps {
  params: { slug: string };
}

const PackagePage = async ({ params }: PackagePageProps) => {
  const { slug } = params;

  return <PackageComponent slug={slug} />;
};

export async function generateStaticParams() {
  const packages = await fetchPackages();

  return packages.map((pack) => ({
    slug: pack.key,
  }));
}

export default PackagePage;
