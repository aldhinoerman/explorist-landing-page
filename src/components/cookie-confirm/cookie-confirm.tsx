"use client";
import { useTranslations } from "next-intl";
import Script from "next/script";
import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieConfirm = () => {
  const t = useTranslations();
  return (
    <>
      <Script id="google-consent-mode" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
          `}
      </Script>
      <CookieConsent
        location="bottom"
        buttonText={t("common.accept")}
        declineButtonText={t("common.decline")}
        cookieName="explorist-cookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        declineButtonStyle={{
          color: "#ffffff",
          background: "#f44336",
          fontSize: "13px",
        }}
        expires={150}
        enableDeclineButton
        onAccept={() => {
          if (typeof window !== "undefined") {
            window.gtag("consent", "update", {
              ad_storage: "granted",
              analytics_storage: "granted",
            });
          }
        }}
        onDecline={() => {
          if (typeof window !== "undefined") {
            window.gtag("consent", "update", {
              ad_storage: "denied",
              analytics_storage: "denied",
            });
          }
        }}
      >
        {t("cookie.confirm")}
      </CookieConsent>
    </>
  );
};

export default CookieConfirm;
