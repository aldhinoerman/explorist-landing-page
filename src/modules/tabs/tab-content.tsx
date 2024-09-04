import React from "react";

interface TabContentProps {
  isActive: boolean;
  type: string;
  data: any;
}

const TabContent: React.FC<TabContentProps> = ({ type, isActive, data }) => {
  return (
    isActive && (
      <>
        <div className="my-8">
          {type === "activities" || type === "terms" ? data : ""}
          {/* <div>TabContent</div> */}
        </div>
      </>
    )
  );
};

export default TabContent;
