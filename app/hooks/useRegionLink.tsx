// app/hooks/useRegionLink.ts

import { usePathname } from "next/navigation";

type Region = "global" | "au" | "uk";

// Helper function to normalize paths (same as in RegionSwitcher)
function normalizePath(path: string): string {
  if (path !== "/" && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path;
}

// Helper function to get current region from pathname
function getCurrentRegion(pathname: string): Region {
  if (pathname.startsWith("/au")) return "au";
  if (pathname.startsWith("/uk")) return "uk";
  return "global";
}

// Helper function to build path with region prefix
function buildRegionPath(region: Region, basePath: string): string {
  const normalizedBasePath = normalizePath(basePath);

  switch (region) {
    case "global":
      return normalizedBasePath;
    case "au":
      return normalizedBasePath === "/" ? "/au" : `/au${normalizedBasePath}`;
    case "uk":
      return normalizedBasePath === "/" ? "/uk" : `/uk${normalizedBasePath}`;
    default:
      return normalizedBasePath;
  }
}

/**
 * Hook that provides a function to generate region-aware links
 * Use this in your Link components to ensure they respect the current region
 */
export function useRegionLink() {
  const pathname = usePathname();
  const currentRegion = getCurrentRegion(pathname);

  return (path: string): string => {
    // Don't modify external links or anchors
    if (
      path.startsWith("http") ||
      path.startsWith("#") ||
      path.startsWith("mailto:")
    ) {
      return path;
    }

    // Normalize the input path
    const normalizedPath = normalizePath(path);

    // Build the region-aware path
    return buildRegionPath(currentRegion, normalizedPath);
  };
}

/**
 * Hook to get the current region
 */
export function useCurrentRegion(): Region {
  const pathname = usePathname();
  return getCurrentRegion(pathname);
}

/**
 * HOC to wrap Next.js Link component with region awareness
 */
import Link from "next/link";
import { ComponentProps } from "react";

export function RegionLink({ href, ...props }: ComponentProps<typeof Link>) {
  const buildRegionLink = useRegionLink();

  return (
    <Link
      {...props}
      href={typeof href === "string" ? buildRegionLink(href) : href}
    />
  );
}
