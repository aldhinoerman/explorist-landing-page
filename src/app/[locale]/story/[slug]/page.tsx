import { StoryComponent } from "@/components";
import React from "react";

interface StoryProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

const Story = async ({ params }: StoryProps) => {
  const { slug, locale } = await params;

  return <StoryComponent slug={slug} locale={locale} />;
};

export default Story;
