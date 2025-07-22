# H-Connect International Website Documentation

This document provides comprehensive documentation for the H-Connect International website application.

## 1. Project Overview

This project is the official website for H-Connect International, built with Next.js. It serves as the main informational and marketing platform for the company, showcasing its services, leadership, and resources. The application is structured to support multiple regions (e.g., AU, UK) with tailored content.

## 2. Tech Stack

The application is built with a modern web development stack:

- **Framework**: [Next.js](https://nextjs.org/) (v14)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://reactjs.org/) (v18)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with PostCSS and Autoprefixer.
- **UI Components**: [NextUI](https://nextui.org/) for a set of pre-built, customizable components.
- **Animations**:
  - [Framer Motion](https://www.framer.com/motion/) for complex animations and transitions.
  - [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) for high-performance animations.
  - [Embla Carousel](https://www.embla-carousel.com/) for carousels.
- **Forms**: [@formspree/react](https://formspree.io/libraries/react) for handling form submissions.
- **Icons**:
  - [Font Awesome](https://fontawesome.com/)
  - [Lucide React](https://lucide.dev/)
  - [React Icons](https://react-icons.github.io/react-icons/)
- **Sitemap**: [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) for generating sitemaps for SEO.
- **Linting**: [ESLint](https://eslint.org/) configured for Next.js.

## 3. Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/adrianwaliwita/site.git
    cd site
    ```

2.  **Install dependencies:**
    This project uses npm for package management.

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

## 4. Project Structure

The project follows the Next.js App Router structure. Here is an overview of the key directories:

- `app/`: The main application directory.
  - `layout.jsx`: The root layout for the entire application.
  - `page.jsx`: The main landing page.
  - `globals.css`: Global styles for the application.
  - `(views)/`: Contains the different regional views of the site.
    - `au/`: Contains pages specific to the Australian region.
    - `uk/`: Contains pages specific to the UK region.
    - `(global)/`: Contains pages that are shared across all regions.
  - `components/`: Contains all reusable React components.
  - `assets/`: Static assets like images and icons.
  - `constants/`: Application-wide constants.
  - `lib/`: Utility functions and libraries.
  - `public/`: Publicly accessible files like images, fonts, and `robots.txt`.

## 5. Components

The `app/components/` directory houses a wide range of reusable components. Below is a breakdown of the key components and their functions.

### Navigation and Layout

- **`Menu.tsx`**: The main navigation menu for the application.
- **`AboutNav.jsx`**: Navigation specific to the "About" pages.
- **`RegionSwitcher.tsx`**: A component that allows users to switch between different regional versions of the site.
- **`GridPattern.tsx`**: A component for creating grid patterns in the background.
- **`Divider.jsx`**: A simple horizontal divider.
- **`Portal.tsx`**: A component to render children into a new subtree, often used for modals and overlays.
- **`SearchModal.tsx`**: A modal for the search functionality.

### UI Elements

- **`Button.jsx`**, **`ButtonFoot.jsx`**, **`ButtonHead.jsx`**: Different variations of button components.
- **`Card.jsx`**: A generic card component for displaying content.
- **`ShineBorder.tsx`**, **`ShineCard.tsx`**: Components that add a shine or hover effect.
- **`HyperText.tsx`**: A component for rendering styled text.
- **`icons.jsx`**: A collection of SVG icons used throughout the application.

### Carousels and Marquees

- **`Carousel.tsx`**, **`CarouselUse.jsx`**: Components for creating image or content carousels.
- **`PostCarousel.jsx`**: A carousel specifically for blog posts or articles.
- **`Marquee.tsx`**, **`MarqueeFront.jsx`**, **`MarqueeHori.jsx`**, **`MarqueeHoriLogo.jsx`**, **`MarqueeHoriLogoSingle.jsx`**, **`MarqueeHoriLogoSingleReverse.jsx`**, **`MarqueeVert.jsx`**: A suite of components for creating various scrolling marquee effects.

### Content Display

- **`AwardsText.jsx`**, **`AwardWinning.jsx`**: Components for displaying awards and accolades.
- **`CaseStudy.jsx`**: A component for showcasing case studies.
- **`FeaturedBlogList.jsx`**: A list of featured blog posts.
- **`ImageGrid.jsx`**: A component for displaying a grid of images.
- **`LightweightResourceCard.jsx`**: A card component for displaying resources.
- **`LogoCloud.tsx`**: A component to display a cloud of logos.
- **`Testimonials.jsx`**: A component for displaying customer testimonials.

### Page Sections and Features

- **`GrowWithoutLimits.jsx`**: A section of the page with this title.
- **`PartnershipFeatures.jsx`**, **`PartnershipFeaturesAus.jsx`**: Components detailing partnership features, with a specific version for Australia.
- **`ProvenProcesses.jsx`**, **`ProvenProcessesAus.jsx`**: Components explaining proven processes, with a specific version for Australia.
- **`SecuringInterests.jsx`**, **`SecuringInterestsAus.jsx`**: Components related to securing interests, with a specific version for Australia.
- **`Security.jsx`**: A component focused on security features.
- **`ServiceBeyond.jsx`**, **`ServiceBeyondBorders.jsx`**, **`ServiceBeyondBordersAus.jsx`**, **`ServiceBeyondBordersLon.jsx`**: Components describing services, with regional variations.
- **`TopTierTalent.jsx`**, **`TopTierTalentAus.jsx`**: Components about top-tier talent, with a specific version for Australia.

### Utilities and Effects

- **`CookieConsentBanner.jsx`**: A banner for obtaining cookie consent from users.
- **`GoogleAnalytics.jsx`**: Integration for Google Analytics.
- **`Meta.jsx`**: A component for managing HTML meta tags for SEO.
- **`Reveal.tsx`**, **`ScrollReveal.tsx`**: Components for revealing elements on scroll.

## 6. Routing

Routing is handled by the Next.js App Router. The file system inside the `app` directory defines the routes. The `(views)` directory is a route group and does not affect the URL path. This allows for organizing routes by region without adding `/views` to the URL.

For example:

- `app/(views)/au/about/page.jsx` maps to the `/au/about` route.
- `app/(views)/uk/services/page.jsx` maps to the `/uk/services` route.

## 7. Styling

Styling is handled primarily by **Tailwind CSS**, a utility-first CSS framework. The configuration is located in `tailwind.config.js`.

### Key Features of the Styling Setup:

- **Custom Theme**: The `theme.extend` object in the Tailwind config includes custom colors, fonts, animations, and border radiuses to match the site's design system.
- **Content Sources**: Tailwind scans all `.js`, `.ts`, `.jsx`, `.tsx`, and `.mdx` files in the `app`, `pages`, and `components` directories to purge unused styles in production.
- **Plugins**:
  - `tailwindcss-motion`: Adds animation utilities.
  - `tailwindcss-animate`: Provides animation utilities.
  - `@nextui-org/theme`: Integrates the NextUI component library.

### PostCSS

**PostCSS** is used to transform CSS with JavaScript plugins. The configuration in `postcss.config.mjs` is straightforward, with only the `tailwindcss` plugin enabled.

### Global Styles

Global styles and CSS variable definitions are located in `app/globals.css`. This file is where the base Tailwind styles are imported and where any custom global styles should be defined.

## 8. Fonts

The application uses local fonts to ensure consistent typography and performance. The primary font used is **GT America**.

### Font Loading

The fonts are loaded in `app/layout.jsx` using `next/font/local`. The `GTAmerica` font object is configured with different weights and styles, and its CSS variable (`--font-GTAmerica`) is applied to the `<html>` element.

```javascript
const GTAmerica = localFont({
  src: [
    {
      path: "./fonts/GT-America-Compressed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GT-America-Standard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GT-America-Standard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-GTAmerica",
  display: "swap",
});
```

### Usage in Tailwind CSS

The `GTAmerica` font is integrated with Tailwind CSS in `tailwind.config.js` under `theme.extend.fontFamily`. This allows the font to be used throughout the application with the `font-GTAmerica` utility class.

```javascript
// tailwind.config.js
// ...
theme: {
  extend: {
    fontFamily: {
      GTAmerica: ["var(--font-GTAmerica)"],
      arial: ["Arial"],
    },
  },
},
// ...
```

## 9. Regions

The application is designed to serve different content based on the user's region. This is managed through the `app/(views)` directory, which contains subdirectories for each supported region:

- **`au/`**: Australia
- **`uk/`**: United Kingdom
- **`(global)/`**: Content that is not region-specific.

The `RegionSwitcher.tsx` component allows users to navigate between these different regional versions of the site. This setup enables tailored content, services, and features for each locale while maintaining a consistent overall structure.

## 10. SEO and Metadata

The application has several features to improve search engine optimization (SEO).

### Metadata

The root layout in `app/layout.jsx` defines the default metadata for the application, including the title, description, keywords, and canonical URL.

```javascript
// app/layout.jsx
export const metadata = {
  title: "H Connect International | Business Process Management",
  description:
    "We offer cost-effective outsourcing services in finance, accounting, procurement, technology, and marketing to streamline and scale your business operations.",
  keywords: [
    "H Connect",
    "Business Process Management",
    "Outsourcing",
    "BPM Sri Lanka",
    "H Connect International",
  ],
  alternates: {
    canonical: "https://hconnectint.com",
  },
};
```

Individual pages can export their own `metadata` object to override these defaults.

### Sitemap

A sitemap is automatically generated after a production build using the `next-sitemap` package. The configuration is located in `next-sitemap.config.js`.

- **`siteUrl`**: The base URL for the site.
- **`generateRobotsTxt`**: A `robots.txt` file is also generated.

The sitemap is generated by the `postbuild` script in `package.json`.

## 11. Deployment

The application can be built for production using the following command:

```bash
npm run build
```

This command compiles the application and optimizes it for production. The `postbuild` script will automatically generate a sitemap.

To start the production server, run:

```bash
npm run start
```

## 12. Scripts

The following scripts are available in `package.json`:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run postbuild`: Generates a sitemap after the build is complete.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using ESLint.
