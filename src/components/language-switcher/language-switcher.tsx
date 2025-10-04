"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { getStrapiLocalesWithDisplayClient } from "@/utils/strapiLocalesClient";
import { LocaleWithDisplay } from "@/utils/strapiLocales";

const LanguageSwitcher = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [availableLocales, setAvailableLocales] = useState<LocaleWithDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { locale } = params;
  const router = useRouter();

  // Load available locales from Strapi
  useEffect(() => {
    const loadLocales = async () => {
      try {
        const locales = await getStrapiLocalesWithDisplayClient();
        setAvailableLocales(locales);
      } catch (error) {
        console.error("Failed to load locales:", error);
        // Fallback to English if API fails
        setAvailableLocales([{
          code: "en",
          name: "English (en)",
          isDefault: true,
          flag: "🇬🇧",
          label: "English"
        }]);
      } finally {
        setLoading(false);
      }
    };

    loadLocales();
  }, []);

  const currentLang = availableLocales.find((x) => x.code === locale);

  const handleLocaleChange = (newLocale: string) => {
    setIsDropdownOpen(false);
    router.push(`/${newLocale}`);
  };

  // Show loading state or fallback
  if (loading) {
    return (
      <div className="fixed bottom-0 z-30 left-0">
        <div className="m-2 md:m-8">
          <div className="btn bg-white hover:bg-white">
            🌐 Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed bottom-0 z-30 left-0">
        <div
          className={`dropdown dropdown-top m-2 md:m-8 ${
            isDropdownOpen ? "dropdown-open" : ""
          }`}
        >
          <label
            tabIndex={0}
            className="btn bg-white hover:bg-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen ? (
              <XMarkIcon className="size-6" />
            ) : (
              currentLang?.flag + " " + currentLang?.label
            )}
          </label>

          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {availableLocales.map((lang, key) => (
                <li key={key}>
                  <button
                    onClick={() => handleLocaleChange(lang.code)}
                    className={locale === lang.code ? "font-bold" : ""}
                  >
                    {lang.flag + " " + lang.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
