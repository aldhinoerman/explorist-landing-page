import classNames from "classnames";
import React from "react";

interface LoadingProps {
  size?: "tiny" | "small" | "large" | undefined;
}

const Loading: React.FC<LoadingProps> = ({ size }) => {
  const loadingStyles = classNames({
    "loading loading-ball": true,
    "loading-xs": size === "tiny",
    "loading-sm": size === "small",
    "loading-md": !size,
    "loading-lg": size === "large",
  });
  return (
    <div className="text-center">
      <span className={loadingStyles}></span>
    </div>
  );
};

export default Loading;
