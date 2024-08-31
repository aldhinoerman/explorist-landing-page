import classNames from "classnames";
import React from "react";

interface CardProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  mobileWidth?: number;
  width?: number;
  bodyClass?: string;
}

const Card = ({
  children,
  width,
  mobileWidth,
  bodyClass,
  ...rest
}: CardProps) => {
  const maxWidth = width ? `md:max-w-[${width}px]` : "md:max-w-[325px]";
  const maxMobileWidth = mobileWidth
    ? `max-w-[${mobileWidth}px]`
    : "max-w-[165px]";
  const style = {
    maxWidth: width ? `${width}px` : "165px",
  };
  return (
    <div
      className={classNames(
        "w-full h-full rounded-3xl min-w-[75px] min-h-[150px] shadow-lg",
        maxMobileWidth,
        maxWidth
      )}
      style={{ background: "white" }}
      {...rest}
    >
      <div className={`px-6 py-8 ${bodyClass ?? ""}`}>{children}</div>
    </div>
  );
};

export default Card;
