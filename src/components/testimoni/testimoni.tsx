import { Carousel, SectionWrapper } from "@/modules";
import React from "react";
import { testimonies } from "./utils";

const Testimoni = () => {
  return (
    <SectionWrapper id="testimoni">
      <h2 className="text-center">What customers say about us</h2>

      <div>
        <Carousel type="testi" items={testimonies} />
      </div>
    </SectionWrapper>
  );
};

export default Testimoni;
