import React from "react";

interface WrapperProps extends React.PropsWithChildren {
  id?: string;
}

const SectionWrapper = ({ children, id, ...props }: WrapperProps) => {
  return (
    <section
      id={id ?? "#"}
      className="my-12 md:my-28 max-w-[1440px] md:px-12"
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
