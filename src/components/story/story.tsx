"use client";
import { Button, Collapse, Loading, SectionWrapper } from "@/modules";
import { PackageItemProps, useRequest } from "@/utils";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { CardItem } from "../card-item";
import { Nusped } from "../nusped";
import { Destinations } from "../destinations";
import { Testimoni } from "../testimoni";

interface PackageComponentProps {
  slug: string;
  locale: string;
}

function StoryComponent({ slug, locale }: PackageComponentProps) {
  const router = useRouter();
  const t = useTranslations();

  const initialParams = {
    param: "populate=*",
  };
  const { data: packItem, loading } = useRequest<PackageItemProps>(
    `package-items/${slug}`,
    {
      ...initialParams,
    },
    locale
  );

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    if (packItem && packItem?.title) {
      document.title = `Explorist Tour Bali - ${packItem.title}`;
    }
  }, [packItem]);
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
            {t("common.back")}
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
              <div key={idx} className="mb-4 md:mb-8">
                <Collapse title={obj?.title ?? ""} isOpen={Boolean(obj?.title)}>
                  <div className="flex flex-col gap-4">
                    <ReactMarkdown>{obj?.description}</ReactMarkdown>
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
          {t("common.back")}
        </Button>
      </div>

      <SectionWrapper id={`pack-package-${slug}`}>
        <h2 className="text-center">{t("common.package")}</h2>

        {packItem?.tour_packages?.data &&
          packItem?.tour_packages?.data?.length > 0 && (
            <div className="mt-20 flex flex-wrap gap-4 justify-center">
              {packItem?.tour_packages?.data.map((obj: any, idx: number) => (
                <CardItem
                  data={obj}
                  key={idx}
                  to="book-now"
                  btnText={t("common.book-now")}
                  useId
                />
              ))}
            </div>
          )}
      </SectionWrapper>

      <Nusped />
      <Destinations />
      <Testimoni />
    </>
  );
}

export default StoryComponent;
