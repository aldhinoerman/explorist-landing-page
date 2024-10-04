"use client";
import { useParams } from "next/navigation";
import React from "react";

const HTML = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const { locale } = params;
  return (
    <html lang={String(locale ?? "en")} data-theme="mytheme">
      {children}
    </html>
  );
};

export default HTML;
