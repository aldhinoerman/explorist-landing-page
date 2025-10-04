"use client";
import { Button, SectionWrapper } from "@/modules";
import { CategoryProps, renderImage, useRequest } from "@/utils";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Nusped = (props: any) => {
  const { penida } = props;
  const params = useParams();
  let { locale } = params;

  if (Array.isArray(locale)) {
    locale = locale[0];
  }

  const t = useTranslations();
  const paramsFetch = {
    param: "areas[slug]=nusa-penida",
  };
  const { data: nusped } = useRequest<CategoryProps[]>(
    "tour-packages",
    {
      ...paramsFetch,
    },
    locale
  );
  return (
    <>
      <SectionWrapper id="nusped">
        <div className="flex flex-wrap align-middle justify-center gap-4 mt-16">
          <div className="w-full md:min-w-[350px] max-w-[500px]">
            <Image
              src={renderImage(penida.image.url)}
              alt="nusped-pict"
              width={475}
              height={350}
              className="rounded-3xl"
            />
          </div>
          <div className="w-full md:min-w-[350px] max-w-[675px] my-auto">
            <h2 className="mb-8">{penida?.title ?? t("home.nusped.title")}</h2>
            <p className="text-xl font-light mb-8">
              {penida.description ?? t("home.nusped.description")}
            </p>

            {penida.cta && (
              <Link
                href={`/${locale}/${
                  penida?.cta?.href ??
                  `package/${
                    nusped && nusped?.length > 0 && nusped[0]?.id
                      ? String(nusped[0].id)
                      : ""
                  }`
                }`}
              >
                <Button
                  variant={penida?.cta?.variant ?? "ghost"}
                  icon={<ArrowRightCircleIcon className="w-4 h-4 my-auto" />}
                >
                  {penida?.cta?.label ?? t("common.more")}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Nusped;
