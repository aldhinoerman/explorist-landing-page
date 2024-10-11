import type { Metadata } from "next";
import "../../assets/styles/index.scss";
import { ContactUs, CookieConfirm, LanguageSwitcher } from "@/components";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  params: any;
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  unstable_setRequestLocale(params.locale);
  return (
    <html lang={String(params?.locale ?? "en")} data-theme="mytheme">
      <body className="bg-white">
        <NextIntlClientProvider messages={messages}>
          {children}
          <ContactUs />
          <LanguageSwitcher />
          {process.env.NODE_ENV === "production" && <CookieConfirm />}
        </NextIntlClientProvider>
      </body>
      {process.env.NODE_ENV === "production" && (
        <>
          <GoogleAnalytics gaId={String(process.env.NEXT_PUBLIC_GAID)} />
          <GoogleTagManager gtmId={String(process.env.NEXT_PUBLIC_GTMID)} />
        </>
      )}
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  unstable_setRequestLocale(locale);
  return {
    metadataBase: new URL("https://exploristtourbali.com"),
    title: "Explorist Tour Bali",
    description: "Explore More Discover More",
    authors: [
      {
        name: "Explorist Tour Bali",
        url: "https://exploristtourbali.com",
      },
    ],
    robots: "index, follow",
    keywords: [
      "explore",
      "discover",
      "bali",
      "travel",
      "tour",
      "activity",
      "culture",
      "art",
      "kuta",
      "uluwatu",
      "canggu",
      "ubud",
      "uluwatu",
      "bedugul",
      "lovina",
    ],
    alternates: {
      canonical: `https://exploristtourbali.com/${locale ?? "en"}`,
      languages: {
        en: "https://exploristtourbali.com/en",
        de: "https://exploristtourbali.com/de",
        fr: "https://exploristtourbali.com/fr",
        hi: "https://exploristtourbali.com/hi",
        ja: "https://exploristtourbali.com/ja",
        ko: "https://exploristtourbali.com/ko",
        nl: "https://exploristtourbali.com/nl",
        ru: "https://exploristtourbali.com/ru",
        tl: "https://exploristtourbali.com/tl",
        zh: "https://exploristtourbali.com/zh",
      },
    },
  };
}
