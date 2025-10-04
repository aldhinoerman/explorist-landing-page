import React from "react";
import Link from "next/link";
import { Button } from "@/modules";
import { ICTAButton } from "@/utils";

interface HeroProps {
  title: string;
  description?: string;
  ctas?: ICTAButton[];
}

const Hero: React.FC<HeroProps> = ({ title, description, ctas }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl !text-white">{title ?? ""}</h1>
        {description && (
          <p className="my-8 max-w-[550px] text-white">{description ?? ""}</p>
        )}
        {ctas && ctas.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            {ctas.map((cta) => (
              <React.Fragment key={cta.id}>
                {cta.asLink && cta.href ? (
                  cta.externalUrl ? (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant={cta.variants}>{cta.label}</Button>
                    </a>
                  ) : (
                    <Link href={cta.href} className="inline-block">
                      <Button variant={cta.variants}>{cta.label}</Button>
                    </Link>
                  )
                ) : (
                  <Button variant={cta.variants}>{cta.label}</Button>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
