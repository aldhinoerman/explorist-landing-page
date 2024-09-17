"use client";
import { CardItem, Destinations, Nusped, Testimoni } from "@/components";
import { Button, Collapse, Loading, SectionWrapper } from "@/modules";
import {
  IPackageItem,
  PackageItemProps,
  TourPackagesProps,
  useRequest,
} from "@/utils";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";

interface StoryProps {
  params: {
    slug: string;
  };
}

const Story: React.FC<StoryProps> = ({ params }) => {
  const { slug } = params;
  const router = useRouter();

  const initialParams = {
    param: "populate=*",
  };
  const { data: packItem, loading } = useRequest<PackageItemProps>(
    `package-items/${slug}`,
    {
      ...initialParams,
    }
  );

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <SectionWrapper id={`pack-details-${slug}`}>
        <div>
          <Button
            variant="primary"
            icon={<ChevronLeftIcon className="w-6 h-6" />}
            size="large"
            onClick={handleBack}
          >
            Back
          </Button>

          <div className="flex flex-col md:flex-row gap-12 justify-center align-middle mt-8 mb-4 md:mt-12">
            <div>
              {packItem?.pict ? (
                <div className="w-full">
                  <Image
                    src={packItem?.pict ?? ""}
                    alt="detail-pict"
                    width={575}
                    height={375}
                    className="rounded-xl"
                  />
                </div>
              ) : (
                loading && <Loading />
              )}
            </div>
            <div className="flex flex-col justify-center md:max-w-[425px]">
              <h3 className="text-primary">{packItem?.title}</h3>
              <p className="font-light text-secondary">{packItem?.caption}</p>
            </div>
          </div>
        </div>
        <div className="my-8 max-w-6xl mx-auto flex flex-col gap-4">
          <ReactMarkdown>{packItem?.description ?? ""}</ReactMarkdown>
        </div>
        {packItem?.stories?.data && packItem?.stories?.data?.length > 0 && (
          <div className="mt-4 md:mt-8">
            {packItem?.stories?.data?.map((obj, idx) => (
              <div key={idx}>
                <Collapse
                  title={obj?.attributes?.title ?? ""}
                  isOpen={Boolean(obj?.attributes?.title)}
                >
                  <div className="flex flex-col gap-4">
                    <ReactMarkdown>
                      {obj?.attributes?.description}
                    </ReactMarkdown>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>

      <div className="flex justify-center my-12">
        <Button
          variant="primary"
          icon={<ChevronLeftIcon className="w-6 h-6" />}
          size="large"
          onClick={handleBack}
        >
          Back
        </Button>
      </div>

      <SectionWrapper id={`pack-package-${slug}`}>
        <h2 className="text-center">Package</h2>

        {packItem?.tour_packages?.data &&
          packItem?.tour_packages?.data?.length > 0 && (
            <div className="mt-20 flex flex-wrap gap-4 justify-center">
              {packItem?.tour_packages?.data.map(
                (obj: IPackageItem, idx: number) => (
                  <CardItem
                    data={{ id: obj?.id, ...obj.attributes }}
                    key={idx}
                    to="book-now"
                    btnText="Book Now"
                    useId
                  />
                )
              )}
            </div>
          )}
      </SectionWrapper>

      <Nusped />
      <Destinations />
      <Testimoni />
    </>
  );
};

export default Story;
