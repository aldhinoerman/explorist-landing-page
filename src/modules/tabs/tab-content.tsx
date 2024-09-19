import React, { useCallback } from "react";
import { Table } from "../table";
import moment from "moment";
import { Card } from "../card";
import { formatCurrency, PriceItemProps, PricingProps } from "@/utils";
import ReactMarkdown from "react-markdown";

interface TabContentProps {
  isActive: boolean;
  type: string;
  data: any;
}

const TabContent: React.FC<TabContentProps> = ({ type, isActive, data }) => {
  const columnsItineraries: any = [
    {
      title: "Time",
      dataIndex: "time",
      align: "center",
      render: (v: string) => (v ? moment(v, "HH:mm").format("HH:mm") : "-"),
    },
    {
      title: "Description",
      align: "center",
      dataIndex: "description",
    },
  ];

  const groupedItems = useCallback(() => {
    if (type === "pricing") {
      const reducedItem = data?.pricing
        ? data.pricing.reduce((acc: any, item: any) => {
            // Check if the type already exists in the accumulator
            if (!acc[item.type]) {
              acc[item.type] = []; // Create a new array for this type if it doesn't exist
            }
            // Add the item to the appropriate group
            acc[item.type].push(item);
            return acc;
          }, {})
        : undefined;

      return reducedItem;
    }
  }, [data.pricing, type]);

  return (
    isActive && (
      <>
        <div className="my-8">
          {type === "activities" || type === "terms" ? (
            <ul>
              {data?.length > 0 &&
                data.map((obj: any, idx: number) => (
                  <li key={idx} className="my-4">
                    <p className="font-bold">{obj?.title ?? ""}</p>
                    <div className="flex flex-col gap-4">
                      <ReactMarkdown>
                        {type === "activities"
                          ? obj?.activity
                          : obj?.description || ""}
                      </ReactMarkdown>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            ""
          )}
          {type === "itinerary" && (
            <>
              <div className="max-w-[500px] mx-auto">
                <Table columns={columnsItineraries} dataSource={data} />
              </div>
            </>
          )}
          {type === "pricing" && (
            <>
              <div className="flex flex-wrap gap-8 justify-center">
                {groupedItems() && groupedItems()?.inclusion && (
                  <Card mobileWidth={250} bodyClass="p-4">
                    <h4 className="text-center">Price</h4>
                    <ol className="list-none">
                      {groupedItems()?.inclusion.map(
                        (inc: PricingProps, indexInc: number) => (
                          <li key={indexInc} className="my-2">
                            {inc.pax} person(s): {formatCurrency(inc.price)}/pax
                          </li>
                        )
                      )}
                    </ol>
                  </Card>
                )}
                {(data?.price_inclusions &&
                  data?.price_inclusions?.length > 0) ||
                (data?.price_exclusions &&
                  data?.price_exclusions?.length > 0) ? (
                  <Card mobileWidth={250} bodyClass="p-4">
                    <h4 className="text-center text-success">Inclusions</h4>
                    <ol className="list-none">
                      {data?.price_inclusions?.map(
                        (valInc: PriceItemProps, idxInc: number) => (
                          <li key={idxInc} className="my-2">
                            {valInc.inclusion}
                          </li>
                        )
                      )}
                    </ol>
                    <h4 className="text-center text-danger">Exclusions</h4>
                    <ol className="list-none">
                      {data?.price_exclusions?.map(
                        (valExc: PriceItemProps, idxExc: number) => (
                          <li key={idxExc} className="my-2">
                            {valExc.exclusion}
                          </li>
                        )
                      )}
                    </ol>
                  </Card>
                ) : null}
                {groupedItems() && groupedItems()?.regular && (
                  <Card mobileWidth={250} bodyClass="p-4">
                    <h4 className="text-center">Regular</h4>
                    <ol className="list-none">
                      {groupedItems()?.regular.map(
                        (reg: PricingProps, indexReg: number) => (
                          <li key={indexReg} className="my-2">
                            Car: {reg.car} - {formatCurrency(reg.price)}
                          </li>
                        )
                      )}
                    </ol>
                  </Card>
                )}
                {(data?.regular_inclusions &&
                  data?.regular_inclusions?.length > 0) ||
                (data?.regular_exclusions &&
                  data?.regular_exclusions?.length > 0) ? (
                  <Card mobileWidth={250} bodyClass="p-4">
                    <h4 className="text-center text-success">
                      Regular Inclusions
                    </h4>
                    <ol className="list-none">
                      {data?.regular_inclusions?.map(
                        (valRegInc: PriceItemProps, idxRegInc: number) => (
                          <li key={idxRegInc} className="my-2">
                            {valRegInc.inclusion}
                          </li>
                        )
                      )}
                    </ol>
                    <h4 className="text-center text-danger">
                      Regular Exclusions
                    </h4>
                    <ol className="list-none">
                      {data?.regular_exclusions?.map(
                        (valRegExc: PriceItemProps, idxRegExc: number) => (
                          <li key={idxRegExc} className="my-2">
                            {valRegExc.exclusion}
                          </li>
                        )
                      )}
                    </ol>
                  </Card>
                ) : null}
              </div>
            </>
          )}
        </div>
      </>
    )
  );
};

export default TabContent;
