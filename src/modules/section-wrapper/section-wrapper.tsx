import React from "react";

interface WrapperProps extends React.PropsWithChildren {
  id?: string;
}

const SectionWrapper = ({ children, id, ...props }: WrapperProps) => {
  return (
    <section id={id ?? "#"} className="my-28" {...props}>
      {children}
    </section>
  );
};

export default SectionWrapper;
