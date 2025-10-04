import axiosInstance from "./request";
import { StrapiLocale, LocaleWithDisplay } from "./strapiLocales";

// Mapping from Strapi locale codes to display information
const localeDisplayMap: Record<string, { flag: string; label: string }> = {
  en: { flag: "🇬🇧", label: "English" },
  de: { flag: "🇩🇪", label: "Deutsch" },
  fr: { flag: "🇫🇷", label: "France" },
  hi: { flag: "🇮🇳", label: "हिन्दी" },
  ja: { flag: "🇯🇵", label: "日本語" },
  ko: { flag: "🇰🇷", label: "한국어" },
  nl: { flag: "🇳🇱", label: "Nederlands" },
  ru: { flag: "🇷🇺", label: "Русский" },
  tl: { flag: "🇵🇭", label: "Filipino" },
  zh: { flag: "🇨🇳", label: "中文" },
};

/**
 * Client-side fetch for available locales from Strapi using axios
 */
export async function fetchStrapiLocalesClient(): Promise<StrapiLocale[]> {
  try {
    const response = await axiosInstance.get("/i18n/locales");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch locales from Strapi:", error);
    // Fallback to default English locale if API fails
    return [
      {
        id: 1,
        documentId: "fallback",
        name: "English (en)",
        code: "en",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        isDefault: true,
      },
    ];
  }
}

/**
 * Get locales with display information for UI components (client-side)
 */
export async function getStrapiLocalesWithDisplayClient(): Promise<LocaleWithDisplay[]> {
  const strapiLocales = await fetchStrapiLocalesClient();
  
  return strapiLocales.map((locale) => ({
    code: locale.code,
    name: locale.name,
    isDefault: locale.isDefault,
    flag: localeDisplayMap[locale.code]?.flag || "🌐",
    label: localeDisplayMap[locale.code]?.label || locale.name,
  }));
}