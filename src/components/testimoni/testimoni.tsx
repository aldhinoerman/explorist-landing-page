"use client";
import { SectionWrapper } from "@/modules";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Testimoni = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure this code only runs on the client-side
  useEffect(() => {
    setIsClient(true); // Mark that we are on the client side
    if (
      typeof window !== "undefined" &&
      window.TA &&
      typeof window.TA.init === "function"
    ) {
      window.TA.init();
    }
  }, []);

  if (!isClient) {
    // Prevent rendering of the widget on the server-side
    return null;
  }

  return (
    <SectionWrapper id="testimoni">
      <div
        id="TA_cdswritereviewnew438"
        className="TA_cdswritereviewnew flex justify-center"
      >
        <ul id="cqZYPTIAV" className="TA_links RrYpikr">
          <li id="rorTCKeU582u" className="B989GtPHfZ1">
            <a target="_blank" href="https://www.tripadvisor.com/">
              <Image
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                alt="TripAdvisor"
                width={250}
                height={125}
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Load the widget only on the client side */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<script async src="https://www.jscache.com/wejs?wtype=cdswritereviewnew&uniq=438&locationId=28155585&lang=en_US&display_version=2"></script>`,
        }}
      />
    </SectionWrapper>
  );
};

export default Testimoni;
