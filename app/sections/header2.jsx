"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "app/components/icons";

import ButtonUser from "app/components/Button";
export const Header = ({ navItems, className, logoSrc }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll tracking for navbar visibility
  const { scrollY } = useScroll();
  const [scrollingDown, setScrollingDown] = useState(false);
  const lastY = useRef(0);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  // Detect scroll direction with debounce logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - lastY.current;
    if (Math.abs(delta) > 5) {
      setScrollingDown(delta > 0);
    }
    lastY.current = latest;
  });

  const menuItems = ["Home", "About", "Services"];

  const navbarAnimation = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const menuAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      variants={navbarAnimation}
      initial="visible"
      animate={scrollingDown ? "hidden" : "visible"}
      className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white py-4"
      style={{ height: "90px" }}
    >
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={false}
        shouldHideOnScroll={false}
        className="transition-all duration-500"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden pt"
          />
          <NavbarBrand>
            <Link href="/">
              <div className="flex items-center gap-2">
                {logoSrc && (
                  <Image src={logoSrc} alt="Logo" width={180} height={200} />
                )}
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-14" justify="center">
          <NavbarItem>
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/services">Services</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/resources">Resources</Link>
          </NavbarItem>

          {/* <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Services
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="services"
              className="w-[340px] bg-white p-4 border rounded-lg"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales"
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>{" "}
          Add the Dropdown here */}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <ButtonUser text="Contact" href="/contact" />
          </NavbarItem>
        </NavbarContent>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuAnimation}
              className="absolute top-[90px] w-full bg-white shadow-lg z-50"
            >
              <NavbarMenu className="mt-10">
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                      color={
                        index === 2
                          ? "primary"
                          : index === menuItems.length - 1
                          ? "danger"
                          : "foreground"
                      }
                      className="w-full "
                      href="#"
                      size="lg"
                    >
                      {item}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </motion.div>
          )}
        </AnimatePresence>
      </Navbar>
    </motion.div>
  );
};
