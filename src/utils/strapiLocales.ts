// Edge Runtime compatible fetch instead of axios for middleware usage
const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://api.exploristtourbali.com/api";
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export interface StrapiLocale {
  id: number;
  documentId: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isDefault: boolean;
}

export interface LocaleWithDisplay {
  code: string;
  name: string;
  isDefault: boolean;
  flag: string;
  label: string;
}

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
 * Fetch available locales from Strapi using fetch (Edge Runtime compatible)
 */
export async function fetchStrapiLocales(): Promise<StrapiLocale[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/i18n/locales`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      // Add cache control for better performance
      next: { revalidate: 300 }, // 5 minutes cache
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
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
 * Get locales with display information for UI components
 */
export async function getStrapiLocalesWithDisplay(): Promise<LocaleWithDisplay[]> {
  const strapiLocales = await fetchStrapiLocales();
  
  return strapiLocales.map((locale) => ({
    code: locale.code,
    name: locale.name,
    isDefault: locale.isDefault,
    flag: localeDisplayMap[locale.code]?.flag || "🌐",
    label: localeDisplayMap[locale.code]?.label || locale.name,
  }));
}

/**
 * Get available locale codes from Strapi
 */
export async function getStrapiLocaleCodes(): Promise<string[]> {
  const locales = await fetchStrapiLocales();
  return locales.map((locale) => locale.code);
}

/**
 * Get default locale from Strapi
 */
export async function getStrapiDefaultLocale(): Promise<string> {
  const locales = await fetchStrapiLocales();
  const defaultLocale = locales.find((locale) => locale.isDefault);
  return defaultLocale?.code || "en";
}

/**
 * Check if a locale code is available in Strapi
 */
export async function isStrapiLocaleAvailable(code: string): Promise<boolean> {
  const localeCodes = await getStrapiLocaleCodes();
  return localeCodes.includes(code);
}