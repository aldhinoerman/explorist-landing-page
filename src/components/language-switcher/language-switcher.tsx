"use client";

import { useParams, useRouter } from "next/navigation";
import { languages } from "@/utils";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const LanguageSwitcher = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const params = useParams();
  const { locale } = params;
  const router = useRouter();

  const currentLang = languages.find((x) => x.lang === locale);

  const handleLocaleChange = (newLocale: string) => {
    setIsDropdownOpen(false);
    router.push(`/${newLocale}`);
  };

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
            className="btn bg-white"
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
              {languages.map((lang, key) => (
                <li key={key}>
                  <button
                    onClick={() => handleLocaleChange(lang.lang)}
                    className={locale === lang.lang ? "font-bold" : ""}
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
