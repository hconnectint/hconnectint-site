"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ReactLenis } from "lenis/dist/lenis-react";
import { Providers } from "./providers";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import CookieConsentBanner from "./components/CookieConsentBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { geoRedirect } from "./utils/GeoUtils";

export default function ClientLayout({ children }) {
  const [isClient, setIsClient] = useState(false);
  const [geoChecked, setGeoChecked] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !geoChecked) {
      geoRedirect(router, pathname);
      setGeoChecked(true);
    }
  }, [isClient, geoChecked, router, pathname]);

  return (
    <Providers>
      <ReactLenis root options={{ lerp: 0.35 }}>
        <Header />
        {children}
      </ReactLenis>
      <Footer />
      <CookieConsentBanner />
      <GoogleAnalytics />
    </Providers>
  );
}
