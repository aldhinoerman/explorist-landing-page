import React, { PropsWithChildren } from "react";

const Tabs: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      {children}
    </div>
  );
};

export default Tabs;
