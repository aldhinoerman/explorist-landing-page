"use client";
import { Button, Collapse, Loading } from "@/modules";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { CardItem } from "../card-item";
import Link from "next/link";
import {
  IPackageItem,
  PackageItemProps,
  TourPackagesProps,
  useRequest,
} from "@/utils";
import { NotFound } from "../error";

interface DetailBannerProps {
  slug: string;
}

const DetailBanner: React.FC<DetailBannerProps> = ({ slug }) => {
  const initialParams = {
    param: "populate=*",
  };
  const { data: pack, loading } = useRequest<TourPackagesProps>(
    `tour-packages/${slug}`,
    {
      ...initialParams,
    }
  );

  const [content, setContent] = useState<PackageItemProps | undefined>(
    undefined
  );

  const getData = useCallback(() => {
    const response: TourPackagesProps | undefined = pack ?? undefined;

    if (
      response &&
      response?.package_items?.data &&
      response?.package_items?.data[0] &&
      !content
    ) {
      handleSetContent(response?.package_items?.data[0]);
    }
  }, [content, pack]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleSetContent = (content: IPackageItem) => {
    setContent({ id: content?.id, ...content?.attributes });
  };

  return (
    <>
      {pack && content ? (
        <>
          <div className="flex flex-col md:flex-row gap-12 justify-center align-middle my-12 md:my-20">
            <div>
              <div className="w-full">
                <Image
                  src={
                    content && content?.pict
                      ? content.pict
                      : pack?.pict
                      ? pack.pict
                      : ""
                  }
                  alt="detail-pict"
                  width={575}
                  height={375}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-primary">{pack?.title}</h3>
              <h4 className="font-light text-secondary mb-4">
                {pack?.location}
              </h4>
              <Link href={`/book-now/${slug}`}>
                <Button variant="primary" size="large">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 align-middle my-12 md:my-20">
            {pack &&
              pack?.package_items?.data &&
              pack?.package_items?.data?.length > 0 &&
              pack.package_items.data.map((obj: any, idx: number) => (
                <CardItem
                  data={obj.attributes}
                  key={idx}
                  onClick={() => handleSetContent(obj)}
                />
              ))}
          </div>

          <div className="my-12 md:my-20">
            <div>
              <Collapse title="Activities" isOpen={Boolean(content?.activity)}>
                {content?.activity}
              </Collapse>
            </div>
            <div className="my-4">
              <Collapse title="About" isOpen={Boolean(content?.about)}>
                {content?.about}
              </Collapse>
            </div>
            <div className="my-4">
              <Collapse
                title="Description"
                isOpen={Boolean(content?.description)}
              >
                {content?.description}
              </Collapse>
            </div>
            <div className="my-4">
              <Collapse
                title="Nearest Amenities"
                isOpen={Boolean(content?.amenities)}
              >
                {content?.amenities}
              </Collapse>
            </div>
          </div>

          <div className="text-center my-12">
            <Link href={`/book-now/${slug}`}>
              <Button variant="primary" size="large">
                Book Now
              </Button>
            </Link>
          </div>
        </>
      ) : loading ? (
        <Loading size="large" />
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DetailBanner;
