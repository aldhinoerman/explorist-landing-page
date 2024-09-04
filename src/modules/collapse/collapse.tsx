import React, { PropsWithChildren } from "react";

interface CollapseProps extends PropsWithChildren {
  title: string;
  isOpen?: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ children, title, isOpen }) => {
  return (
    <div
      className={`collapse ${
        isOpen ? "collapse-open" : "collapse-arrow"
      } bg-white shadow-xl text-primary`}
    >
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content text-dark">{children}</div>
    </div>
  );
};

export default Collapse;
