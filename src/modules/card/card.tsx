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
  const maxWidth = width ? `md:max-w-[${width}px]` : "md:max-w-[285px] lg:max-w-[325px]";
  const maxMobileWidth = mobileWidth
    ? `max-w-[${mobileWidth}px]`
    : "max-w-[165px] sm:max-w-[175px]";
  return (
    <div
      className={classNames(
        "w-full rounded-3xl min-w-[75px] shadow-xl",
        maxMobileWidth,
        maxWidth
      )}
      style={{ background: "white" }}
      {...rest}
    >
      <div className={`px-6 py-8 min-h-full ${bodyClass ?? ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
