"use client";
import CTA from "app/sections/CTA";
import SectionTextRight from "app/sections/SectionTextRight";
import AboutNav from "app/components/AboutNav";

import SectionTextLeftBlue from "app/sections/SectionTextLeftBlue";
import HoverCard2 from "app/components/HoverCard2";
import HoverCard4 from "app/components/HoverCard4";
import MarqueeHori from "app/components/MarqueeHori";
import { cn } from "@/lib/utils";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";

const progressImages = [
  { img: "/about/1.jpg" },
  { img: "/about/2.jpg" },
  { img: "/about/3.jpg" },
  { img: "/about/4.jpg" },
  { img: "/about/5.jpg" },
  { img: "/about/6.jpg" },
  { img: "/about/7.jpg" },
];

const AboutClient = () => {
  return (
    <>
      <div className="w-full pt-[15vh] md:pt-[10vh]">
        <section className="flex flex-col items-center w-full ">
          {/* Content Section */}
          <div className="w-full px-[5vw] pt-[5vw] text-center">
            <div className="container mx-auto h-full sm:p-10">
              <header className="flex flex-col justify-center items-center">
                <div className="px-4 ">
                  {/* Title Section */}
                  <div>
                    <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                      ABOUT US
                      <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                        .
                      </span>
                      <div className="flex justify-center w-full">
                        <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Main Heading */}

                  <h1 className={headingStyles.LargeHeading}>
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      EXCEPTIONAL{" "}
                    </span>
                    TALENT. <br />
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      DYNAMIC
                    </span>{" "}
                    PERSONALITIES.
                  </h1>
                </div>
              </header>
            </div>
          </div>

          {/* Marquee Section */}
          <div className="w-full max-w-8xl mt-[4vh] mb-[15vh] md:mb-0   ">
            <MarqueeHori items={progressImages} />
          </div>
        </section>

        <div className="py-[5vh] md:pt-[8vh] "></div>

        <section className="  bg-white h-[30vh] flex items-end xl:mb-[10vh]">
          <div className=" text-black flex flex-col items-center justify-center  md:px-[10vw] ">
            <div className="text-center space-y-6 ">
              <div className="text-3xl md:text-[3.5vw] font-GTAmerica font-bold text-center md:text-left w-[100%] md:w-[100%]">
                WE ARE{" "}
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  H CONNECT INTERNATIONAL
                </span>{" "}
              </div>
              <div className="font-arial text-sm md:text-base xl:py-[5vh] mt-4 mb-4 text-black">
                A leader in transforming business operations for the better
                through people, process, and technical brilliance. We champion
                growth and innovation through expert advice, dedicated back-end
                teams, and outsourced operations. From planning to execution, we
                offer guidance and support across all business functions.
              </div>
              <div className="text-3xl md:text-[3.5vw] font-GTAmerica font-bold text-center md:text-right w-[100%] md:w-[100%]">
                WE ARE A{" "}
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text  text-transparent">
                  TRUE EXTENSION
                </span>{" "}
                OF YOUR BUSINESS
              </div>
            </div>
          </div>
        </section>

        <section className=" md:pt-0 ">
          <SectionTextRight
            blueTitle={"ROOTED IN LEGACY"}
            titleAfterBlue={
              <>
                {" "}
                <br />
                FUTURE FOCUSED{" "}
              </>
            }
            description={
              <div
                className={`space-y-4  ${bodyTextStyles.descriptionLeft} md:pb-[10vh]`}
              >
                <div>
                  As a Hirdaramani Group venture, we are backed by one of Sri
                  Lanka&apos;s most reputed conglomerates, boasting a legacy of
                  over 100 years across diversified industries, including
                  luxury, leisure, apparel, and energy.
                </div>
                <div>
                  With a strong foundation, we remain focused on creating the
                  future with bold thinking and transformative approaches.
                </div>
              </div>
            }
            component={
              <div>
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw] ">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
                      "bg-[url('/future-legacy.jpg')] bg-cover aspect-square"
                    )}
                  ></div>
                </div>
              </div>
            }
          ></SectionTextRight>
        </section>

        <section>
          <AboutNav></AboutNav>
        </section>

        <section className="pt-[5vh] md:pt-[10vh]">
          <SectionTextLeftBlue
            whiteTitle={
              <>
                <div
                  className={`${headingStyles.primaryLeft} ${headingStyles.white}`}
                >
                  OUR PURPOSE
                </div>
              </>
            }
            description={
              <div
                className={`space-y-4  ${bodyTextStyles.descriptionLeft} ${bodyTextStyles.white}`}
              >
                <div>
                  To make a meaningful impact through absolute value creation,
                  embodying our client-first philosophy
                </div>
              </div>
            }
            component={
              <div>
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw] ">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                      "bg-[url('/about/purpose-3.jpg')] bg-cover aspect-square"
                    )}
                  ></div>
                </div>
              </div>
            }
          ></SectionTextLeftBlue>
        </section>

        <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[5vh]">
          <div className="px-4 mx-auto  lg:pt-16 lg:px-6">
            <div className="mx-auto-sm text-center mb-8 ">
              <p className={headingStyles.primaryCenter}>
                OUR
                <span className={headingStyles.gradient}> VALUES</span>{" "}
              </p>
              <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-[2vh] mx-auto"></div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  px-[1vw]">
              <HoverCard4
                title={"Believe We Can"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We celebrate those <br /> who persevere
                    </span>
                  </div>
                }
                img={"/values/we-can.jpg"}
              />
              <HoverCard4
                title={"Create the Future"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We are driven by <br /> a pioneering spirit
                    </span>
                  </div>
                }
                img={"/values/future.jpg"}
              />
              <HoverCard4
                title={"Keep it Moving"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We embrace agility <br /> and momentum
                    </span>
                  </div>
                }
                img={"/values/moving.jpg"}
              />
              <HoverCard4
                title={"Make Things Better"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We aim to make a lasting <br /> impact on our lives and
                      others.
                    </span>
                  </div>
                }
                img={"/values/better.jpg"}
              />
              <HoverCard4
                title={"Stronger Together"}
                description={
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      We believe in the
                      <br /> power of &rdquo;We&rdquo;
                    </span>
                  </div>
                }
                img={"/values/together.jpg"}
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
        </section>

        <section className="px-4 sm:px-[5%] pt-[5vh] md:pt-[15vh]  mx-auto flex items-center justify-center">
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 items-center">
              {/* Text Section */}
              <div className="order-1 md:order-2 flex items-center">
                <div className="font-GTAmerica text-4xl md:text-[7vw] md:leading-[7vw] lg:text-[4.6vw] lg:leading-[4.6vw] font-bold tracking-normal text-black text-left">
                  EVERY SINGLE DAY, <br />
                  OUR TEAM CLOCKS IN WITH A
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent ml-[12px]">
                    PASSION
                  </span>{" "}
                  FOR THE WORK THEY DO
                </div>
              </div>

              {/* Card Section */}
              <div className="order-2 md:order-1 w-full">
                <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-2">
                  <HoverCard2
                    title={"Stronger Together"}
                    description={
                      '"To us, challenges are best tackled as a team"'
                    }
                    img={"/people/1.jpg"}
                  />
                  <HoverCard2
                    title={"Personal Journeys"}
                    description={
                      '"We measure people against their past selves, not each other"'
                    }
                    img={"/people/2.jpg"}
                  />
                  <HoverCard2
                    title={"Open Door Policy"}
                    description={`"Our doors are open to all team members' ideas and perspectives."`}
                    img={"/people/3.jpg"}
                  />
                  <HoverCard2
                    title={"Continuous Improvement"}
                    description={
                      '"We collectively work towards small improvements which make a big impact over time"'
                    }
                    img={"/people/4.jpg"}
                  />
                  <HoverCard2
                    title={"Diversity, Equity and Inclusion"}
                    description={
                      '"We believe in diversity of people, equity in opportunities, and the inclusion of every last member"'
                    }
                    img={"/people/5.jpg"}
                  />
                  <HoverCard2
                    title={"Meritocracy in Action"}
                    description={
                      '"Success, growth, and opportunities are earned through hard work and results"'
                    }
                    img={"/people/6.jpg"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-[5vh] md:pt-[10vh]">
          <CTA
            title={"CONNECT WITH US TODAY"}
            href={"/contact"}
            text={"Get in touch"}
          ></CTA>
        </div>
      </div>
    </>
  );
};

export default AboutClient;
