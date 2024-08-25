import { Images } from "@/assets";
import { Header, Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="text-dark max-w-[1440px] mx-auto px-4 md:px-12">
        <Header />
        <div className="absolute -z-10 top-0 left-0 w-full h-full max-h-[680px]">
          <div className="relative h-full">
            <Image
              src={Images.Mountain}
              fill
              style={{ objectFit: "cover", filter: "brightness(75%)" }}
              // quality={100}
              priority
              alt="Mountain Background"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
            {/* Optional: Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
              <Hero />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
