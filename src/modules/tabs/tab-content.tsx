import React, { useCallback } from "react";
import { Table } from "../table";
import moment from "moment";
import { Card } from "../card";
import { formatCurrency } from "@/utils";

interface TabContentProps {
  isActive: boolean;
  type: string;
  data: any;
}

const TabContent: React.FC<TabContentProps> = ({ type, isActive, data }) => {
  const columnsItineraries = [
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
  }, [data]);

  return (
    isActive && (
      <>
        <div className="my-8">
          {type === "activities" || type === "terms" ? (
            <ul>
              {data?.length > 0 &&
                data.map((obj: any, idx: number) => (
                  <li key={idx}>
                    <p className="font-bold">{obj?.title ?? ""}</p>
                    <p>
                      {type === "activities"
                        ? obj?.activity
                        : obj?.description || ""}
                    </p>
                  </li>
                ))}
            </ul>
          ) : (
            ""
          )}
          {type === "itinerary" && (
            <>
              <div className="max-w-[500px]">
                <Table columns={columnsItineraries} dataSource={data} />
              </div>
            </>
          )}
          {type === "pricing" && (
            <>
              <div className="flex flex-wrap gap-8 justify-center">
                {groupedItems() && groupedItems()?.inclusion && (
                  <Card>
                    <h4 className="text-center">Price</h4>
                    <ol className="my-8">
                      {groupedItems()?.inclusion.map((inc, indexInc) => (
                        <li key={indexInc} className="my-2 text-center">
                          {inc.pax} person(s): {formatCurrency(inc.price)}/pax
                        </li>
                      ))}
                    </ol>
                  </Card>
                )}
                {data?.inclusions && data?.inclusions?.length > 0 && (
                  <Card>
                    <h4 className="text-center">Inclusion</h4>
                    <ol className="my-8">
                      {data?.inclusions.map((incl, indexIncl) => (
                        <li key={indexIncl} className="my-2 text-center">
                          {incl.name}
                        </li>
                      ))}
                    </ol>
                  </Card>
                )}
                {groupedItems() && groupedItems()?.regular && (
                  <Card>
                    <h4 className="text-center">Regular</h4>
                    <ol className="my-8">
                      {groupedItems()?.regular.map((reg, indexReg) => (
                        <li key={indexReg} className="my-2 text-center">
                          Car: {reg.car} - {formatCurrency(reg.price)}
                        </li>
                      ))}
                    </ol>
                  </Card>
                )}
                {data?.regulars && data?.regulars?.length > 0 && (
                  <Card>
                    <h4 className="text-center">Exclusion</h4>
                    <ol className="my-8">
                      {data?.regulars.map((regu, indexRegu) => (
                        <li key={indexRegu} className="my-2 text-center">
                          {regu.name}
                        </li>
                      ))}
                    </ol>
                  </Card>
                )}
              </div>
            </>
          )}
        </div>
      </>
    )
  );
};

export default TabContent;
