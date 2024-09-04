import React, { PropsWithChildren } from "react";

interface TabItemProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ isActive, title, onClick }) => {
  return (
    <>
      <label
        onClick={onClick}
        role="tab"
        className={`tab tab-bordered cursor-pointer ${
          isActive
            ? "border-primary text-primary"
            : "border-transparent text-secondary"
        }`}
        aria-label={title}
      >
        {title}
      </label>
    </>
  );
};

export default TabItem;
