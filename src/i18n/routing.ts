import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { getStrapiLocaleCodes, getStrapiDefaultLocale } from "@/utils/strapiLocales";

// Static fallback locales for build time
const fallbackLocales = ["en", "zh", "fr", "de", "ru", "ja", "hi", "tl", "nl", "ko"];
const fallbackDefaultLocale = "en";

// Dynamic routing configuration
let dynamicLocales: string[] | null = null;
let dynamicDefaultLocale: string | null = null;

/**
 * Initialize dynamic locales from Strapi
 * This should be called on app startup
 */
export async function initializeDynamicRouting() {
  try {
    dynamicLocales = await getStrapiLocaleCodes();
    dynamicDefaultLocale = await getStrapiDefaultLocale();
  } catch (error) {
    console.warn("Failed to load dynamic locales, using fallback:", error);
    dynamicLocales = fallbackLocales;
    dynamicDefaultLocale = fallbackDefaultLocale;
  }
}

/**
 * Get current available locales (dynamic if loaded, otherwise fallback)
 */
export function getAvailableLocales(): string[] {
  return dynamicLocales || fallbackLocales;
}

/**
 * Get current default locale (dynamic if loaded, otherwise fallback)
 */
export function getDefaultLocale(): string {
  return dynamicDefaultLocale || fallbackDefaultLocale;
}

// Create routing with fallback locales for build time
export const routing = defineRouting({
  locales: fallbackLocales,
  defaultLocale: fallbackDefaultLocale,
});

// Create dynamic routing function for runtime
export function createDynamicRouting() {
  return defineRouting({
    locales: getAvailableLocales(),
    defaultLocale: getDefaultLocale(),
  });
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
