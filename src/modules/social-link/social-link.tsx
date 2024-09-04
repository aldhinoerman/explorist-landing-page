"use client";
import React from "react";
import { socialLinks } from "./utils";
import { Button } from "../button";
import { Icon } from "../icon";
import Link from "next/link";

const SocialLink = () => {
  return (
    <div className="flex align-middle gap-4">
      {socialLinks?.length > 0 &&
        socialLinks.map((obj, idx) => (
          <Link
            href={obj.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              icon={
                <Icon
                  className={
                    obj.icon === "whatsapp" || obj.icon === "instagram"
                      ? "size-6"
                      : ""
                  }
                  type={obj.icon}
                />
              }
              key={idx}
              size="small"
            />
          </Link>
        ))}
    </div>
  );
};

export default SocialLink;
