"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-3ZND83NMR7";

export default function GoogleAnalytics() {
  useEffect(() => {
    // Check if user has previously accepted cookies on component mount
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

    // If we have window and gtag available, update consent based on stored preference
    if (typeof window !== "undefined" && window.gtag) {
      if (hasAcceptedCookies === "true") {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      } else {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Default to denied consent until user accepts
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
}
