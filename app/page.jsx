// app/page.jsx
"use client";
import { useState, useEffect, lazy, Suspense } from "react";
import Container from "./sections/Container";
import MarqueeFront from "app/components/MarqueeFront";
import PostCarousel from "app/components/PostCarousel";
import Testimonials from "app/components/Testimonials";

import { DividerBlueCenter } from "app/components/Divider";

import ProgressSection from "app/sections/progressSection";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

import Button from "./components/Button";

// Lazy loaded components
const GrowWithoutLimits = lazy(() => import("./components/GrowWithoutLimits"));

const accredit = [
  { img: "/accredit/ACCA.webp" },
  { img: "/accredit/CIMA.webp" },
  { img: "/accredit/CMA.webp" },
  { img: "/accredit/GPTW-2025.webp" },
  { img: "/accredit/CPA.webp" },
  { img: "/accredit/ISO.webp" },

  { img: "/accredit/AMCHAM.webp" },
  { img: "/accredit/BRIT.webp" },

  { img: "/accredit/ACCU.webp" },
  { img: "/accredit/SLASSCOM.webp" },

  { img: "/accredit/EDB.webp" },
];
const award = [
  { img: "/award/pinnacle.jpg" },
  { img: "/award/digiTransform.jpg" },
  { img: "/award/innovation.jpg" },
  { img: "/award/leadership.jpg" },
  { img: "/award/partner.jpg" },
  { img: "/award/sustain.jpg" },

  { img: "/award/GPTW-WOMEN.jpg" },
  { img: "/award/SATYN-2.jpg" },
];

const featuresData = [
  {
    title: "Best-in-class Talent",
    description:
      "Work with a team of certified, driven, and expertly trained professionals",
  },
  {
    title: "70% Cost Arbitrage",
    description:
      "Inclusive of initial setup, hiring, infrastructure, employee benefits, and account management",
  },
  {
    title: "Scalability",
    description:
      "Grow your business with confidence and efficiency with our world-class operating model",
  },
  {
    title: "A True Extension",
    description: "Seamless integration into your existing team and goals",
  },
];

// Loading fallback components
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isAccreditVisible, setIsAccreditVisible] = useState(false);
  const [isGrowSectionVisible, setIsGrowSectionVisible] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=3"
      );
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();

    // Intersection Observer for lazy loading
    const accreditObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAccreditVisible(true);
          accreditObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const growSectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsGrowSectionVisible(true);
          growSectionObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const accreditSection = document.getElementById("accredit-section");
    const growSection = document.getElementById("grow-section");

    if (accreditSection) {
      accreditObserver.observe(accreditSection);
    }

    if (growSection) {
      growSectionObserver.observe(growSection);
    }

    return () => {
      accreditObserver.disconnect();
      growSectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="pt-[10vh] md:pt-[10vh] ">
        {/* Main Content Section */}
        <Container className="max-w-7xl pt-[10vh] md:pt-0 lg:max-w-[180rem] flex flex-wrap h-[40vh] md:h-dvh w-[100%]  overflow-x-clip relative mb-20 md:mb-0 ">
          {/* First column */}
          <div className="flex items-center text-center md:text-left w-full  md:w-2/3 lg:w-1/2 px-5 md:px-[5%] lg:px-[5%] order-2 md:order-1">
            <div className="max-w-full md:w-full mb-8">
              <h1 className="text-[13vw] leading-[13vw] md:text-[7.5vw] font-GTAmerica md:leading-[7.5vw] font-bold mt-[3vh] md:mt-0">
                <span className={headingStyles.gradient}>SCALE</span> WITH
                CONFIDENCE
              </h1>
              <div className={bodyTextStyles.primary}>
                Our world-class operating model and top-tier talent enable
                agility, resilience, and efficiency. We provide tailored
                solutions for a transforming world.
              </div>
              <Button
                text="View Details"
                href="/about"
                ariaLabel="Learn more about H Connect International"
              />
            </div>
          </div>

          {/* Second column - 2x2 grid */}
          <div className="hidden  md:flex items-center md:w-1/3 lg:w-1/2  justify-center  md:rotate-45 mt-10 order-1 md:order-2">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] lg:w-[50vw] lg:h-[50vw] md:mt-[-70%] md:mr-[-50%]">
              <div className="bg-image1 bg-[length:300%] bg-center md:w-200 pt-[100%] rounded-3xl scroll-move "></div>
              <div className="bg-image1 bg-[length:300%] bg-center md:w-full pt-[100%] rounded-3xl scroll-move"></div>
              <div className="bg-image1 bg-[length:300%] bg-center md:w-full pt-[100%] rounded-3xl"></div>
              <div className="bg-image1 bg-[length:300%] bg-center md:w-full pt-[100%] rounded-3xl"></div>
            </div>
          </div>
        </Container>

        <div className="mt-[-5vh] md:pt-[10vh] mb-[-5vh] md:mb-[-15vh] mr-[5%]">
          <ProgressSection></ProgressSection>
        </div>

        <Container>
          <section id="grow-section">
            <div className="pt-0 md:pt-[10vh]">
              <div className=" mx-auto  bg-white">
                <div className="flex flex-col">
                  <div className="">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                      <div>
                        <div className={`${headingStyles.primaryCenter}`}>
                          <span className={headingStyles.gradient}>GROW</span>{" "}
                          WITHOUT LIMITS{" "}
                        </div>
                        <DividerBlueCenter />

                        <div
                          className={`space-y-4 mt-4 ${bodyTextStyles.descriptionCenter}`}
                        >
                          <div>
                            Reduce costs and scale confidently with our
                            world-class operating model and people practices.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-[5vh]">
                      {isGrowSectionVisible ? (
                        <Suspense fallback={<LoadingSpinner />}>
                          <GrowWithoutLimits features={featuresData} />
                        </Suspense>
                      ) : (
                        <div className="h-64"></div> // Placeholder space
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
        <div className="pt-[5vh] md:pt-[10vh] md:pb-[10vh] "></div>

        <div className="relative py-2 bg-gradient-to-bl from-[#000000] to-[#0000ff]">
          {/* Background Image with parallax effect */}
          <div
            className="absolute inset-0 w-full h-full md:h-full bg-cover bg-center z-0"
            style={{
              backgroundImage: "url(/Site-Wave-FIN.jpg)",
              backgroundAttachment: "fixed",
              opacity: 0.6,
            }}
          ></div>

          {/* Overlay with 50% opacity */}
          <div className="absolute inset-0 bg-gradient-to-bl from-black to-blue opacity-50 z-10"></div>

          {/* Content on top of the overlay */}
          <div className="relative z-20">
            <Container>
              <div className="py-12">
                <PostCarousel
                  items={blogs}
                  title="LATEST FROM H CONNECT INTERNATIONAL"
                />
              </div>
            </Container>
          </div>
        </div>

        <section id="accredit-section" className="md:pb-[5vh]">
          <div className="pt-[5vh] md:pt-[10vh] ">
            <div className="px-8 mx-auto bg-white">
              <div className="flex flex-col">
                <div className="">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                    <div>
                      <div className={headingStyles.primaryCenter}>
                        <span className={headingStyles.gradient}>
                          ACCREDITED
                        </span>{" "}
                        BY THE BEST
                      </div>
                      <DividerBlueCenter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[5vh] w-[100%] ">
              {/* Carousel Section */}
              <div className="col-span-2">
                {isAccreditVisible ? (
                  <MarqueeFront items={accredit} isActive={true}></MarqueeFront>
                ) : (
                  <div className="h-24"></div> // Placeholder space
                )}
              </div>

              {/* Title Section */}
              <div className="col-span-1 flex justify-center md:justify-center items-center ">
                <h2 className="border-l-2 hidden md:block border-black pl-8 font-GTAmerica text-4xl  md:text-[3vw] md:leading-[7.5vw] lg:text-[4.6vw] font-bold tracking-normal text-black text-center bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent bl">
                  Accreditations
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-[5vh] w-[100%]  ">
              {/* Title Section */}
              <div className="col-span-1 flex justify-center md:justify-center items-center ">
                <h2 className="border-r-2 hidden md:block border-black pr-8  font-GTAmerica text-4xl  md:text-[3vw] md:leading-[7.5vw] lg:text-[4.6vw] ml-[-10vh] font-bold tracking-normal text-black text-center bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent ">
                  Awards
                </h2>
              </div>

              {/* Carousel Section */}
              <div className="col-span-2 mt-[-10vh] md:mt-0 md:w-[110%] md:ml-[-10vw] ">
                {isAccreditVisible ? (
                  <MarqueeFront items={award}></MarqueeFront>
                ) : (
                  <div className="h-24"></div> // Placeholder space
                )}
              </div>
            </div>
          </div>
        </section>

        <Container>
          {" "}
          <div className="">
            {" "}
            <div className="px-8 mx-auto mt-[-30px] bg-white">
              {" "}
              <div className="flex flex-col">
                {" "}
                <div className="mt-6 pt-12">
                  {" "}
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-24 items-center text-center">
                    {" "}
                    <div>
                      {" "}
                      <div className={`${headingStyles.primaryCenter}`}>
                        {" "}
                        CREATING AN{" "}
                        <span className={headingStyles.gradient}>
                          IMPACT
                        </span>{" "}
                        THAT MATTERS{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <DividerBlueCenter />
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="mt-8 mb-8">
            <Testimonials />
          </div>
          {/* Call to Action Section */}
        </Container>
      </div>
    </>
  );
}
