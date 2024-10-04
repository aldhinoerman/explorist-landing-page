import { PackageComponent } from "@/components";

interface PackagePageProps {
  params: { slug: string };
}

const PackagePage = async ({ params }: PackagePageProps) => {
  const { slug } = params;

  return <PackageComponent slug={slug} />;
};

export default PackagePage;
