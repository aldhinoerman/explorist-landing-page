import { Images } from "@/assets";
import { Destinations, Hero } from "@/components";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPackages, fetchPackagesBySlug } from "./utils";

interface PackagePageProps {
  params: { slug: string };
}

const PackagePage = async ({ params }: PackagePageProps) => {
  const { slug } = params;

  // Fetch the package data based on the slug
  const packageData = await fetchPackagesBySlug(slug);

  if (!packageData) {
    return notFound(); // This will show a 404 page if the package is not found
  }

  return (
    <>
      <div className="absolute z-0 top-0 left-0 w-full h-full max-h-[425px] md:max-h-[675px]">
        <div className="relative h-full">
          <Image
            src={Images.Mountain}
            fill
            style={{ objectFit: "cover", filter: "brightness(75%)" }}
            priority
            alt="Mountain Background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center mt-16 min-h-[275px]">
        <Hero title="Package" description="Test" />
      </div>

      <Destinations />
    </>
  );
};

export async function generateStaticParams() {
  // Fetch your list of packages (slugs) from an API or database
  const packages = await fetchPackages();

  return packages.map((pack) => ({
    slug: pack.slug,
  }));
}

export default PackagePage;
