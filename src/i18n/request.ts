import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // In next-intl 4.x, the parameter is called requestLocale and needs to be awaited
  const requested = await requestLocale;

  // Use hasLocale helper for type-safety
  if (!hasLocale(routing.locales, requested)) notFound();

  return {
    locale: requested,
    messages: (await import(`../../locales/${requested}/dictionaries.json`))
      .default,
  };
});
