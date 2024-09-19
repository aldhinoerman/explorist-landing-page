"use client";
import { SectionWrapper } from "@/modules";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Testimoni = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=679&locationId=28155585&lang=in&rating=true&nreviews=5&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2";
    script.setAttribute("data-loadtrk", "onload");
    script.onload = () => {
      (window as any).loadtrk = true;
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SectionWrapper id="testimoni">
      <div id="TA_selfserveprop679" className="TA_selfserveprop flex justify-center">
        <ul
          id="Vu5S4lAwwf"
          className="TA_links uwXVZG list-none flex justify-center"
        >
          <li id="2ckem1Z" className="hYA3vQupn flex justify-center">
            <Link
              target="_blank"
              href="https://www.tripadvisor.co.id/Attraction_Review-g297694-d28155585-Reviews-Explorist_Tour_Bali-Denpasar_Bali.html"
              rel="noopener noreferrer"
            >
              <Image
                src="https://www.tripadvisor.co.id/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
                width={250}
                height={125}
              />
            </Link>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Testimoni;
