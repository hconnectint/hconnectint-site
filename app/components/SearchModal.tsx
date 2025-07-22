// app/components/SearchModal.tsx

"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Type declarations for Google CSE
declare global {
  interface Window {
    google: {
      search: {
        cse: {
          element: {
            render: (options: { div: string; tag: string }) => void;
          };
        };
      };
    };
    setOnLoadCallback?: (callback: () => void, opt_useNewDom?: boolean) => void;
  }
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const modalMountedRef = useRef(false);
  const scrollPositionRef = useRef(0);
  const [hasSearchResults, setHasSearchResults] = useState(false);

  // Enhanced body scroll lock that preserves scroll position
  const lockBodyScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    // Store current scroll position
    scrollPositionRef.current = window.scrollY;

    // Apply body lock styles
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
  }, []);

  const unlockBodyScroll = useCallback(() => {
    if (typeof window === "undefined") return;

    // Restore body styles
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";

    // Restore scroll position
    window.scrollTo(0, scrollPositionRef.current);
  }, []);

  // Clean up function to remove Google CSE elements
  const cleanupGoogleCSE = useCallback(() => {
    const elementsToRemove = [
      ".gsc-control-cse",
      ".gsc-results-wrapper-overlay",
      ".gsc-above-wrapper-area",
      ".gsc-results-wrapper-nooverlay",
      ".gsc-tabsArea",
      ".gsc-search-box",
      ".gsc-results",
    ];

    elementsToRemove.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => el.remove());
    });

    if (searchContainerRef.current) {
      searchContainerRef.current.innerHTML = '<div class="gcse-search"></div>';
    }

    setHasSearchResults(false);
  }, []);

  // Monitor for search results appearance
  useEffect(() => {
    if (!isOpen) return;

    const checkForResults = () => {
      const results = document.querySelector(
        ".gsc-results-wrapper-overlay, .gsc-results-wrapper-nooverlay, .gsc-webResult, .gsc-results"
      );
      const hasResults = !!results && results.children.length > 0;
      setHasSearchResults(hasResults);

      // Apply scroll styles more aggressively
      if (hasResults) {
        setTimeout(() => {
          const resultsWrappers = document.querySelectorAll(
            ".gsc-results-wrapper-overlay, .gsc-results-wrapper-nooverlay"
          );
          resultsWrappers.forEach((wrapper) => {
            const element = wrapper as HTMLElement;
            element.style.setProperty("overflow-y", "auto", "important");
            element.style.setProperty(
              "max-height",
              "calc(80vh - 200px)",
              "important"
            );
            element.style.setProperty(
              "-webkit-overflow-scrolling",
              "touch",
              "important"
            );
            element.style.setProperty("pointer-events", "auto", "important");
          });
        }, 200);
      }
    };

    const observer = new MutationObserver(checkForResults);
    if (searchContainerRef.current) {
      observer.observe(searchContainerRef.current, {
        childList: true,
        subtree: true,
      });
    }

    // Also check periodically
    const interval = setInterval(checkForResults, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [isOpen]);

  // Add direct event listener for Google CSE scrolling
  useEffect(() => {
    if (!isOpen || !hasSearchResults) return;

    const addScrollListeners = () => {
      const searchResults = document.querySelector(
        ".gsc-results-wrapper-overlay, .gsc-results-wrapper-nooverlay"
      );
      if (searchResults) {
        const handleWheel = (e: WheelEvent) => {
          e.stopPropagation();
        };

        searchResults.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
          searchResults.removeEventListener("wheel", handleWheel);
        };
      }
    };

    const cleanup = addScrollListeners();

    return cleanup;
  }, [isOpen, hasSearchResults]);

  // Initialize Google CSE with proper error handling
  const initializeGoogleCSE = useCallback(() => {
    if (!isOpen || !searchContainerRef.current) return;

    cleanupGoogleCSE();

    const existingScript = document.querySelector(
      'script[src*="cse.google.com"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    setTimeout(() => {
      const script = document.createElement("script");
      script.src = `https://cse.google.com/cse.js?cx=43befa45494ee4d98&t=${Date.now()}`;
      script.async = true;
      script.setAttribute("data-cfasync", "false");

      script.onload = () => {
        try {
          if (
            typeof window !== "undefined" &&
            window.google &&
            window.google.search &&
            window.google.search.cse &&
            window.google.search.cse.element
          ) {
            window.google.search.cse.element.render({
              div: "gcse-search",
              tag: "search",
            });
          }
        } catch (error) {
          console.warn("Google CSE initialization failed:", error);
        }

        // Auto-focus the search input after rendering
        setTimeout(() => {
          try {
            const inputElement = document.querySelector(
              ".gsc-input-box .gsc-input"
            ) as HTMLInputElement | null;

            if (inputElement) {
              inputElement.focus();
            }
          } catch (error) {
            console.warn("Failed to focus search input:", error);
          }
        }, 300);
      };

      script.onerror = () => {
        console.error("Failed to load Google CSE script");
      };

      document.head.appendChild(script);
    }, 100);
  }, [isOpen, cleanupGoogleCSE]);

  // Handle modal open/close effects
  useEffect(() => {
    if (isOpen) {
      lockBodyScroll();
      modalMountedRef.current = true;
      initializeGoogleCSE();
    } else {
      unlockBodyScroll();
      modalMountedRef.current = false;
      setTimeout(() => {
        if (!modalMountedRef.current) {
          cleanupGoogleCSE();
        }
      }, 300);
    }

    return () => {
      if (isOpen) {
        unlockBodyScroll();
      }
    };
  }, [
    isOpen,
    lockBodyScroll,
    unlockBodyScroll,
    initializeGoogleCSE,
    cleanupGoogleCSE,
  ]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Fixed scroll handling - always allow scrolling when search results are present
  const handleModalScroll = useCallback(
    (e: React.WheelEvent) => {
      // Always allow scrolling when search results are present
      if (hasSearchResults) {
        e.stopPropagation();
        return;
      }

      // Only handle scroll boundaries when no search results
      const modalContent = modalContentRef.current;
      if (!modalContent) return;

      const { scrollTop, scrollHeight, clientHeight } = modalContent;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
        e.preventDefault();
      }
    },
    [hasSearchResults]
  );

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "100vh",
              margin: 0,
              padding: "1rem",
            }}
            onClick={handleOverlayClick}
          >
            <motion.div
              ref={modalContentRef}
              initial={{ y: -50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-white dark:bg-black w-full max-w-4xl max-h-[80vh] rounded-2xl shadow-xl border border-black/[0.2] dark:border-white/[0.2] p-6 mx-auto"
              onClick={(e) => e.stopPropagation()}
              onWheel={handleModalScroll}
              style={{
                maxHeight: "80vh",
                overflow: hasSearchResults ? "visible" : "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "#888 transparent",
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white transition-colors z-10 bg-white dark:bg-black rounded-full p-1 shadow-md"
                aria-label="Close search"
              >
                <X size={24} />
              </button>

              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 pr-12">
                Search Our Site
              </h3>

              <div
                ref={searchContainerRef}
                className="min-h-[50px] search-results-container"
                style={{
                  maxHeight: "calc(80vh - 120px)",
                  overflow: "visible",
                  position: "relative",
                }}
              >
                <div className="gcse-search"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchModal;
