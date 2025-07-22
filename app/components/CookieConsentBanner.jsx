"use client";

import { useState, useEffect } from "react";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
    // Allow Google Analytics to run
    window.gtag &&
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
  };

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowBanner(false);
    // Disable Google Analytics
    window.gtag &&
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <p className="text-[10px] md:text-sm text-gray-700 text-center md:text-left">
            This website uses cookies to enhance your browsing experience and
            analyze site traffic. By clicking &quot;Accept&quot;, you consent to
            our use of cookies as described in our Cookie Policy.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-gradient-to-r from-[#4050ab] to-[#0000ff] text-white rounded hover:bg-blue-700 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
