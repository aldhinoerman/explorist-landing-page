"use client";
import { bookDetails, IBookDetails } from "@/data";
import { Button, Loading, TabContent, TabItem, Tabs } from "@/modules";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface BookDetailProps {
  slug: string;
}

const BookDetail: React.FC<BookDetailProps> = ({ slug }) => {
  const [data, setData] = useState<IBookDetails | undefined>(undefined);
  const [activeTab, setActiveTab] = useState("activities");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setData(() => {
      const response = bookDetails?.find((x) => x.key === slug) ?? undefined;

      return response;
    });
  };

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
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
              <Button variant="primary" size="large">
                Book Now
              </Button>
            </div>
          </div>

          <div className="max-w-screen-sm">
            <Tabs>
              {[
                {
                  value: "activities",
                  txt: "Activities",
                  content: data.activity,
                },
                {
                  value: "terms",
                  txt: "Term & Conditions",
                  content: data.terms,
                },
                {
                  value: "itinerary",
                  txt: "Itinerary",
                  content: data.itinerary,
                },
                { value: "pricing", txt: "Pricing", content: data.pricing },
              ].map((obj, idx) => (
                <>
                  <TabItem
                    title={obj.txt}
                    isActive={Boolean(obj.value === activeTab)}
                    onClick={() => handleChangeTab(obj.value)}
                    key={idx}
                  />
                  {/* <TabContent type={obj.value} data={obj.content} /> */}
                </>
              ))}
            </Tabs>
          </div>
          <div>
            {[
              {
                value: "activities",
                txt: "Activities",
                content: data.activity,
              },
              {
                value: "terms",
                txt: "Term & Conditions",
                content: data.terms,
              },
              {
                value: "itinerary",
                txt: "Itinerary",
                content: data.itinerary,
              },
              { value: "pricing", txt: "Pricing", content: data.pricing },
            ].map((val, index) => (
              <TabContent
                isActive={Boolean(val.value === activeTab)}
                type={val.value}
                data={val.content}
                key={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="large">
              Book Now
            </Button>
          </div>
        </>
      ) : (
        <Loading size="large" />
      )}
    </>
  );
};

export default BookDetail;
