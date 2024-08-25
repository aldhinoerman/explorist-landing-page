import React from "react";

interface CardProps extends React.PropsWithChildren {}

const Card = ({ children, ...rest }: CardProps) => {
  return (
    <div
      className="w-full h-full rounded-3xl min-w-[175px] min-h-[150px] shadow-lg md:max-w-[350px]"
      style={{ background: "white" }}
      {...rest}
    >
      <div className="px-6 py-8">{children}</div>
    </div>
  );
};

export default Card;
