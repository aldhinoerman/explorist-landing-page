"use client";
import React from "react";
import { socialLinks } from "./utils";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import { Icon } from "../icon";

const SocialLink = () => {
  const router = useRouter();
  const handleRouter = (link: string | null | undefined) => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="flex align-middle gap-4">
      {socialLinks?.length > 0 &&
        socialLinks.map((obj, idx) => (
          <Button
            icon={<Icon type={obj.icon} />}
            key={idx}
            onClick={() => handleRouter(obj.link)}
            size="small"
          />
        ))}
    </div>
  );
};

export default SocialLink;
