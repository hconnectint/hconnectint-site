"use client";
import React, { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
// Assuming these components are correctly imported from your project structure
import { HoveredLink, Menu, MenuItem, ProductItem } from "app/components/Menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function NavbarMain() {
  const { scrollY } = useScroll();
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastY.current;
    // Only update state if the scroll difference is significant
    if (Math.abs(delta) > 5) {
      setScrollingDown(delta > 0);
    }
    lastY.current = latest;
  });

  // Hide mobile menu on scroll down as well
  const navbarVisibilityClass = scrollingDown ? "hidden" : "visible";

  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Pass scrollingDown state to Navbar to potentially hide mobile menu on scroll */}
      <Navbar
        className={cn("top-0", navbarVisibilityClass)} // Apply visibility class here
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </div>
  );
}

// --- Navbar Component ---
function Navbar({ className, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [active, setActive] = useState(null);
  const pathname = usePathname(); // Get current pathname

  // Determine current region based on pathname
  const getCurrentRegion = () => {
    if (pathname?.startsWith("/au")) return "au";
    if (pathname?.startsWith("/uk")) return "uk";
    return "global";
  };

  const currentRegion = getCurrentRegion();

  // Helper function to generate the correct path based on the current site context
  const getPath = (path) => {
    // Ensure the base path starts with a '/'
    const basePath = path.startsWith("/") ? path : `/${path}`;

    // Handle root path
    if (basePath === "/") {
      return currentRegion === "global" ? "/" : `/${currentRegion}`;
    }

    // Add region prefix if not global
    return currentRegion === "global"
      ? basePath
      : `/${currentRegion}${basePath}`;
  };

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setActive(null); // Reset active desktop menu item if any
  };

  // Close mobile menu if window resizes to desktop size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Tailwind's md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileMenuOpen]);

  return (
    <>
      {/* --- Desktop Menu --- */}
      <div
        // Note: The parent component's `navbarVisibilityClass` controls visibility
        // This className only adds positioning and base styles
        className={cn(
          "fixed top-10 inset-x-0 shadow-lg mx-auto z-50 hidden md:block",
          className // Apply visibility class passed from parent
        )}
      >
        <Menu setActive={setActive}>
          {/* Apply getPath to all hrefs */}
          <MenuItem active={active} href={getPath("/")} item="Home" />
          {/* About Dropdown Menu */}
          <MenuItem
            setActive={setActive}
            href={getPath("/about")} // Main about link
            active={active}
            item="About Us"
          >
            <div className="text-sm grid grid-cols-2 gap-6 p-4 max-w-3xl mx-auto">
              <ProductItem
                title="Company Overview"
                description="Learn about our company, mission, and values."
                href={getPath("/about")}
                src="/about/company.jpg"
                onClick={() => setActive(null)}
              />

              <ProductItem
                title="Leadership"
                description="Meet our executive team and leadership."
                href={getPath("/about/leadership")}
                src="/about/leadership.jpg"
                onClick={() => setActive(null)}
              />

              <ProductItem
                title="Corporate Social Responsibility"
                description="Discover our commitment to social responsibility."
                href={getPath("/about/csr")}
                src="/about/csr.jpg"
                onClick={() => setActive(null)}
              />

              <ProductItem
                title="Awards & Partnerships"
                description="Explore our achievements and strategic partnerships."
                href={getPath("/about/awards-partnerships")}
                src="/about/awards.jpg"
                onClick={() => setActive(null)}
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            href={getPath("/services")} // Main services link
            active={active}
            item="Services"
          >
            <div className="text-sm grid grid-cols-2 gap-6 p-4 max-w-4xl mx-auto">
              <ProductItem
                title="Finance & Accounting"
                description="Discover our finance and accounting services."
                href={getPath("/services/finance-and-accounting")}
                src="/serv/financeAcc.jpg"
              >
                <div className="flex flex-col space-y-2 ">
                  <Link
                    href={getPath(
                      "/services/finance-and-accounting/accounts-payable/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)} // Close menu on link click
                  >
                    Accounts Payable
                  </Link>
                  <Link
                    href={getPath(
                      "/services/finance-and-accounting/invoice-to-cash/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    Invoice to Cash
                  </Link>
                  <Link
                    href={getPath(
                      "/services/finance-and-accounting/record-to-report/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    Record to Report
                  </Link>
                  <Link
                    href={getPath(
                      "/services/finance-and-accounting/enterprise-performance-systems/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    Enterprise Performance Management
                  </Link>
                  <Link
                    href={getPath(
                      "/services/finance-and-accounting/finance-and-accounts-consulting/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    Finance & Accounting Consulting
                  </Link>
                </div>
              </ProductItem>

              <ProductItem
                title="Technology"
                href={getPath("/services/technology")}
                src="/serv/tech.jpg"
                description="Discover our technology services."
                onClick={() => setActive(null)}
              />
              <ProductItem
                title="Consultancy & Projects"
                href={getPath("/services/consultancy-and-projects")}
                src="/serv/projects.jpg"
                description="Discover our consultancy & projects services."
                onClick={() => setActive(null)}
              />
              <ProductItem
                title="Admin Support"
                href={getPath("/services/admin-support")}
                src="/serv/admin.jpg"
                description="Discover our admin support services."
                onClick={() => setActive(null)}
              />
              <ProductItem
                title="Australian Accounting & Financial Services"
                href={getPath("/services/australian-finance-and-accounting")}
                src="/serv/aus.jpg"
                description="Discover our Australian accounting & financial Services."
              >
                <div className="flex flex-col space-y-2">
                  <Link
                    href={getPath(
                      "/services/australian-finance-and-accounting/accounting-and-tax/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    Accounting & Tax
                  </Link>
                  <Link
                    href={getPath(
                      "/services/australian-finance-and-accounting/audit-and-assurance/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    Audit & Assurance
                  </Link>
                  <Link
                    href={getPath(
                      "/services/australian-finance-and-accounting/business-services/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    Business Services
                  </Link>
                  <Link
                    href={getPath(
                      "/services/australian-finance-and-accounting/smsf/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    SMSF
                  </Link>
                  <Link
                    href={getPath(
                      "/services/australian-finance-and-accounting/paraplanning/"
                    )}
                    className="hover:text-blue-500"
                    onClick={() => setActive(null)}
                  >
                    Paraplanning
                  </Link>
                </div>
              </ProductItem>
              <ProductItem
                title="Digital Marketing"
                href={getPath("/services/digital-marketing")}
                src="/serv/DigitalMarketing.jpg"
                description="Discover our digital marketing services."
                onClick={() => setActive(null)}
              />
              <ProductItem
                title="Human Resources"
                href={getPath("/services/human-resources")}
                src="/serv/HumanResources.jpg"
                description="Discover our human resources services."
                onClick={() => setActive(null)}
              />

              <ProductItem
                title="Remote Teams"
                href={getPath("/services/remote-teams")}
                src="/serv/remote.jpg"
                description="Discover our remote teams services."
                onClick={() => setActive(null)}
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Join Us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href={getPath("/join-us")}
                onClick={() => setActive(null)} // Use onClick here for HoveredLink if needed
              >
                Careers
              </HoveredLink>
              <HoveredLink
                href={getPath("/life-at-hci")}
                onClick={() => setActive(null)}
              >
                Life at HCI
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            href={getPath("/resources")}
            item="Resources"
            setActive={setActive}
            active={active}
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href={getPath("/resources/blogs")}
                onClick={() => setActive(null)} // Use onClick here for HoveredLink if needed
              >
                Blogs
              </HoveredLink>
              <HoveredLink
                href={getPath("/resources/newsletters")}
                onClick={() => setActive(null)}
              >
                Newsletters
              </HoveredLink>
              <HoveredLink
                href={getPath("/resources/case-studies")}
                onClick={() => setActive(null)}
              >
                Case Studies
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem href={getPath("/contact")} item="Contact Us" />{" "}
          {/* Added Contact Link */}
        </Menu>
      </div>

      {/* --- Mobile Menu Hamburger with Side Logo --- */}
      <div
        // Apply visibility class passed from parent
        className={cn(
          "fixed top-0 inset-x-0 z-50 md:hidden flex items-center justify-between px-4 h-20 bg-white shadow-lg", // Use top-0, standard height, justify-between
          className // Apply visibility class passed from parent
        )}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          {" "}
          {/* Prevent logo from shrinking too much */}
          <Link href={getPath("/")} className="inline-block">
            {" "}
            {/* Use Link component */}
            <img
              src="/logo/2.png" // Ensure this path is correct relative to the public folder
              alt="Company Logo"
              className="h-16 w-auto object-contain" // Adjusted height, auto width
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="z-60 relative p-2 pt-[3vh]" // Add padding for easier tapping, negative margin to align visually
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} // Accessibility
          aria-expanded={isMobileMenuOpen}
        >
          {/* Increased size for better visibility/tap target */}
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="relative w-6 h-6">
              {" "}
              {/* Container for lines */}
              <span
                aria-hidden="true"
                className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-[0px]"
                    : "-translate-y-1.5" // Adjusted rotation point
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out",
                  isMobileMenuOpen
                    ? "-rotate-45 translate-y-[0px]"
                    : "translate-y-1.5" // Adjusted rotation point
                )}
              ></span>
            </div>
          </div>
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-40 md:hidden overflow-y-auto pt-20" // Add padding-top equal to header height
          // Removed onClick handler here to prevent closing when clicking inside the content
        >
          {/* Content container */}
          <div
            className="flex flex-col space-y-4 p-6 " // Reduced vertical spacing a bit
            // Removed stopPropagation as the parent onClick is removed
          >
            {/* Use getPath for all mobile links */}
            <MobileSectionAccordion
              title="Home"
              href={getPath("/")}
              onItemClick={handleMobileMenuItemClick}
            />

            {/* About Mobile Accordion */}
            <MobileSectionAccordion
              title="About"
              onItemClick={handleMobileMenuItemClick}
            >
              <div className="space-y-2 pl-4">
                <ProductItemMobile
                  title="Company Overview"
                  href={getPath("/about")}
                  description="Learn about our company, mission, and values."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Leadership"
                  href={getPath("/about/leadership")}
                  description="Meet our executive team and leadership."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Corporate Social Responsibility"
                  href={getPath("/about/csr")}
                  description="Discover our commitment to social responsibility."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Awards & Partnerships"
                  href={getPath("/about/awards-partnerships")}
                  description="Explore our achievements and strategic partnerships."
                  onItemClick={handleMobileMenuItemClick}
                />
              </div>
            </MobileSectionAccordion>

            <MobileSectionAccordion
              title="Services"
              // Main services link optional here, can be first item inside
              onItemClick={handleMobileMenuItemClick} // Keep onItemClick for closing logic
            >
              {/* Use getPath for all ProductItemMobile hrefs */}
              <div className="space-y-2 pl-4">
                {" "}
                {/* Indent sub-items */}
                <ProductItemMobile
                  title="All Services"
                  href={getPath("/services")}
                  description="View all our service offerings." // Slightly different description
                  onItemClick={handleMobileMenuItemClick} // Pass down click handler
                />
                <ProductItemMobile
                  title="Finance & Accounting"
                  href={getPath("/services/finance-and-accounting")}
                  description="Streamline your financial operations."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Technology"
                  href={getPath("/services/technology")}
                  description="Leverage cutting-edge tech solutions."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Consultancy & Projects"
                  href={getPath("/services/consultancy-and-projects")}
                  description="Expert guidance for your projects."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Australian Accounting & Financial Services"
                  href={getPath("/services/australian-finance-and-accounting")}
                  description="Specialized services for AU businesses."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Admin Support"
                  href={getPath("/services/admin-support")}
                  description="Efficient administrative assistance."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Digital Marketing"
                  href={getPath("/services/digital-marketing")}
                  description="Boost your online presence."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Human Resources"
                  href={getPath("/services/human-resources")}
                  description="Optimize your HR processes."
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Remote Teams"
                  href={getPath("/services/remote-teams")}
                  description="Build and manage effective remote teams."
                  onItemClick={handleMobileMenuItemClick}
                />
              </div>
            </MobileSectionAccordion>
            <MobileSectionAccordion
              title="Careers"
              onItemClick={handleMobileMenuItemClick} // Keep onItemClick for closing logic
            >
              <div className="space-y-2 pl-4">
                {" "}
                {/* Indent sub-items */}
                <ProductItemMobile
                  title="Join Us"
                  href={getPath("/join-us")}
                  description="Explore career opportunities." // Add description
                  onItemClick={handleMobileMenuItemClick}
                />
                <ProductItemMobile
                  title="Life at HCI"
                  href={getPath("/life-at-hci")}
                  description="Discover our company culture." // Add description
                  onItemClick={handleMobileMenuItemClick}
                />
              </div>
            </MobileSectionAccordion>
            <MobileSectionAccordion
              title="Resources"
              href={getPath("/resources")}
              onItemClick={handleMobileMenuItemClick}
            >
              <ProductItemMobile
                title="Blogs"
                href={getPath("/resources/blogs")}
                description="Insights, tutorials, and industry updates from our team."
                onItemClick={handleMobileMenuItemClick}
              />
              <ProductItemMobile
                title="Newsletters"
                href={getPath("/resources/newsletters")}
                description="Stay updated with our latest news and announcements."
                onItemClick={handleMobileMenuItemClick}
              />
              <ProductItemMobile
                title="Case Studies"
                href={getPath("/resources/case-studies")}
                description="Real-world examples of our solutions in action."
                onItemClick={handleMobileMenuItemClick}
              />
            </MobileSectionAccordion>
            <MobileSectionAccordion
              title="Contact Us"
              href={getPath("/contact")}
              onItemClick={handleMobileMenuItemClick}
            />
          </div>
          {/* Optional: Add a close button at the bottom or top within the overlay */}
          {/* <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-5 p-2 text-2xl">×</button> */}
        </div>
      )}
    </>
  );
}

// --- Mobile Accordion Component ---
function MobileSectionAccordion({ title, children, href, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling if nested
    if (!children && href) {
      // Navigate directly if no children
      // Use Next Link's behavior if possible, otherwise fallback
      window.location.href = href; // Simple navigation
      onItemClick(); // Close menu
    } else {
      // Toggle accordion if it has children
      setIsOpen(!isOpen);
    }
  };

  // If it's a direct link (no children), render as a simple link-like button
  if (!children && href) {
    return (
      <div className="border-b pb-2">
        <a // Use <a> for direct navigation
          href={href}
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor navigation
            handleHeaderClick(e); // Use our handler for navigation + closing
          }}
          className="w-full text-left font-semibold text-xl flex justify-between items-center py-2" // Add padding
        >
          {title}
        </a>
      </div>
    );
  }

  // If it has children, render as an accordion button
  return (
    <div className="border-b pb-2">
      <button
        onClick={handleHeaderClick}
        className="w-full text-left font-semibold text-xl flex justify-between items-center py-2" // Add padding
        aria-expanded={isOpen} // Accessibility
      >
        {title}
        {/* Render plus/minus only if it's an accordion */}
        {children && (
          <span className="text-2xl ml-2">{isOpen ? "−" : "+"}</span>
        )}
      </button>
      {/* Conditional rendering with smooth transition (optional) */}
      {/* You might want to add framer-motion here for animations */}
      {isOpen && children && (
        <div
          className="mt-2 space-y-1" // Reduced spacing
          // Removed onClick handler here - clicks on items inside should handle closing
        >
          {/* Pass onItemClick down to children that need it (like ProductItemMobile) */}
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              // Check if the child component accepts onItemClick prop
              // This requires ProductItemMobile to accept and use onItemClick
              return React.cloneElement(child, { onItemClick });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
}

// --- Mobile Product Item Component ---
function ProductItemMobile({ title, href, description, onItemClick }) {
  // Accept onItemClick
  return (
    // Use Next Link for client-side navigation
    <Link
      href={href}
      className="block p-3 hover:bg-gray-100 rounded-lg transition-colors"
      onClick={onItemClick} // Call the passed handler to close the menu
    >
      <div className="font-medium text-lg">{title}</div>
      {description && ( // Only render description if provided
        <div className="text-sm text-gray-600 mt-1">{description}</div>
      )}
    </Link>
  );
}
