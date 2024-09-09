"use client";
import { Button, Loading, Modal, TabContent, TabItem, Tabs } from "@/modules";
import { useRequest } from "@/utils";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { NotFound } from "../error";

interface BookDetailProps {
  slug: string;
}

const BookDetail: React.FC<BookDetailProps> = ({ slug }) => {
  const initialParams = {
    param: "populate=*",
  };
  const { data: pack, loading } = useRequest(`tour-packages/${slug}`, {
    ...initialParams,
  });
  const [activeTab, setActiveTab] = useState("activities");
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleShowModal = () => {
    setModalShow((prevState) => !prevState);
  };

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const contents = useCallback(
    () => [
      {
        value: "activities",
        txt: "Activities",
        content:
          pack?.package_items?.data?.length > 0
            ? pack.package_items.data.map((val: any) => ({
                id: val.id,
                ...val.attributes,
              }))
            : [],
      },
      {
        value: "terms",
        txt: "Term & Conditions",
        content:
          pack?.terms_conditions?.data?.length > 0
            ? pack.terms_conditions.data.map((val: any) => ({
                id: val.id,
                ...val.attributes,
              }))
            : [],
      },
      {
        value: "itinerary",
        txt: "Itinerary",
        content:
          pack?.itineraries?.data?.length > 0
            ? pack.itineraries.data.map((val: any) => ({
                id: val.id,
                ...val.attributes,
              }))
            : [],
      },
      {
        value: "pricing",
        txt: "Pricing",
        content:
          pack?.pricings?.data?.length > 0
            ? {
                pricing: pack.pricings.data.map((val: any) => ({
                  id: val.id,
                  ...val.attributes,
                })),
                inclusions: pack.inclusions.data.map((valInc: any) => ({
                  id: valInc.id,
                  ...valInc.attributes,
                })),
                regulars: pack.regulars.data.map((valReg: any) => ({
                  id: valReg.id,
                  ...valReg.attributes,
                })),
              }
            : [],
      },
    ],
    [pack]
  );

  return (
    <>
      {pack ? (
        <>
          <div className="flex flex-col md:flex-row gap-12 justify-center align-middle my-12 md:my-20">
            <div>
              <div className="w-full">
                <Image
                  src={pack?.pict ?? ""}
                  alt="detail-pict"
                  width={575}
                  height={375}
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-primary">{pack.title}</h3>
              <h4 className="font-light text-secondary mb-4">
                {pack.location}
              </h4>
              <Button variant="primary" size="large" onClick={handleShowModal}>
                Book Now
              </Button>
            </div>
          </div>

          <div className="max-w-screen-sm">
            <Tabs>
              {contents().map((obj, idx) => (
                <React.Fragment key={idx}>
                  <TabItem
                    title={obj.txt}
                    isActive={Boolean(obj.value === activeTab)}
                    onClick={() => handleChangeTab(obj.value)}
                  />
                </React.Fragment>
              ))}
            </Tabs>
          </div>
          <div>
            {contents().map((val, index) => (
              <TabContent
                isActive={Boolean(val.value === activeTab)}
                type={val.value}
                data={val.content}
                key={index}
              />
            ))}
          </div>

          <div className="text-center my-12">
            <Button variant="primary" size="large" onClick={handleShowModal}>
              Book Now
            </Button>
          </div>
        </>
      ) : loading ? (
        <Loading size="large" />
      ) : (
        <NotFound />
      )}

      <Modal isOpen={modalShow} title="test" onClose={handleShowModal}>
        Test
      </Modal>
    </>
  );
};

export default BookDetail;
