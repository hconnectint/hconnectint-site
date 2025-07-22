"use client";
export const geoRedirect = async (router, pathname) => {
  try {
    // Check if already on a country path to prevent redirect loops
    if (
      pathname.startsWith("/lk") ||
      pathname.startsWith("/au") ||
      pathname.startsWith("/global")
    ) {
      return;
    }

    const res = await fetch(
      "https://api.ipdata.co?api-key=dd7d36c08f435def1e15f6486dac31137a7206321a1f9e9c740f6eb6"
    );
    const data = await res.json();

    // Handle Sri Lanka redirection
    if (data.country_code === "AU") {
      // Ensure pathname starts with a slash
      const formattedPath = pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
      router.replace(`/au${formattedPath}`);
    }
    // Optional: Add handling for other countries
    // else if (data.country_code === "UK") {
    //   const formattedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    //   router.replace(`/au${formattedPath}`);
    // }
    // Default case - no redirect for other countries
  } catch (error) {
    console.error("Geolocation fetch failed:", error);
    const formattedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    router.replace(`/${formattedPath}`);
  }
};
