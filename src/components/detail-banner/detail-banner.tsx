"use client";
import { IDetails, itemDetails, ITrips } from "@/data";
import { Button, Collapse, Loading } from "@/modules";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardItem } from "../card-item";
import Link from "next/link";

interface DetailBannerProps {
  slug: string;
}

const DetailBanner: React.FC<DetailBannerProps> = ({ slug }) => {
  const [data, setData] = useState<IDetails | undefined>(undefined);
  const [content, setContent] = useState<ITrips | undefined>(undefined);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setData(() => {
      const response = itemDetails?.find((x) => x.key === slug) ?? undefined;

      if (response && !content) {
        handleSetContent(response?.trips[0]);
      }
      return response;
    });
  };

  const handleSetContent = (content: ITrips) => {
    setContent(content);
    setData((prevState) => {
      if (!prevState) return prevState;
      return { ...prevState, pict: content?.pict };
    });
  };

  return (
    <>
      {data ? (
        <>
          <div className="flex flex-col md:flex-row gap-12 justify-center align-middle my-12 md:my-20">
            <div>
              <div className="w-full">
                <Image
                  src={data?.pict ?? ""}
                  alt="detail-pict"
                  width={575}
                  height={375}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-primary">{data.title}</h3>
              <h4 className="font-light text-secondary mb-4">
                {data.location}
              </h4>
              <Link href={`/book-now/${slug}`}>
                <Button variant="primary" size="large">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center gap-8 align-middle my-12 md:my-20">
            {data.trips.map((obj, idx) => (
              <CardItem
                data={obj}
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
      ) : (
        <Loading size="large" />
      )}
    </>
  );
};

export default DetailBanner;
