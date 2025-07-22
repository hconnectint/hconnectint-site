"use client";
import CTA from "app/sections/CTA";

import HoverCard from "app/components/HoverCard";

import MarqueeHori from "app/components/MarqueeHori";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
} from "app/components/Divider";
import HoverCard5 from "app/components/HoverCard5";

const csrImages = [
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
        <section>
          <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[10vh] lg:px-6">
            <div className="mx-auto-sm text-center mb-8 lg:mb-16">
              <div className={headingStyles.primaryCenter}>
                <span className={headingStyles.gradient}>CHANGE</span> STARTS
                WITH US{" "}
              </div>
              <DividerBlueCenter />
              <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black">
                We are committed to making a difference one step at a time,
                investing in a better future for our communities and the planet.
                We&apos;re here to do more than generate income—we&apos;re here
                to make a lasting impact on:
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6  px-[5vw]">
              <div className="">
                <HoverCard img={"/sustainability/people.jpg"} />
                <div className="font-GTAmerica text-sm md:text-2xl  mt-2 text-[#0000ff] font-bold">
                  OUR PEOPLE{" "}
                </div>

                <div>
                  We are focused on creating a workplace that is safe,
                  inclusive, and reflects the diversity of the communities we
                  serve with:
                  <ul>
                    <li>
                      <strong>•</strong> Diversity, Equity, and Inclusion (DEI)
                      Programs
                    </li>
                    <li>
                      <strong>•</strong> Employee Well-being Programs
                    </li>
                    <li>
                      <strong>•</strong> Leadership Training Initiatives
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <HoverCard img={"/sustainability/env.jpg"} />
                <div className="font-GTAmerica text-sm md:text-2xl  mt-2 text-[#0000ff] font-bold">
                  OUR ENVIRONMENT{" "}
                </div>

                <div>
                  We&apos;re committed to reducing our environmental footprint
                  and promoting sustainable practices with:
                  <ul>
                    <li>
                      <strong>•</strong> Waste Reduction and Recycling Programs
                    </li>
                    <li>
                      <strong>•</strong> Environmental Conservation Campaigns
                    </li>
                    <li>
                      <strong>•</strong> Ocean Clean Up Initiatives
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <HoverCard img={"/sustainability/com.jpg"} />
                <div className="font-GTAmerica text-sm md:text-2xl  mt-2 text-[#0000ff] font-bold">
                  OUR COMMUNITY{" "}
                </div>

                <div>
                  We are dedicated to giving back to our community and
                  positively impacting the lives of those around us through:
                  <ul>
                    <li>
                      <strong>•</strong> Donation Drives
                    </li>
                    <li>
                      <strong>•</strong> uplifting Programs
                    </li>
                    <li>
                      <strong>•</strong> Food Distribution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="font-GTAmerica font-bold text-sm md:text-[2vw] xl:text-[1.6vw] mt-[5vw] text-black text-center">
            FOLLOW THIS{" "}
            <a
              href="https://sustainability.hirdaramani.com"
              className="text-[#0000ff] underline"
            >
              LINK
            </a>{" "}
            TO SEE OUR GROUP’S SUSTAINABILITY INITIATIVES
          </div>
        </section>

        {/* Marquee Section */}
        <div className="w-full max-w-8xl mt-[15vh] mb-[15vh] md:mb-[8vh]   ">
          <MarqueeHori items={csrImages} />
        </div>

        <section className="px-4 sm:px-[5%] h-auto md:h-screen flex items-center justify-center mb-[-10vh] py-12 md:py-0 bg-white">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Section - Second on Mobile, First on Desktop */}
              <div className="order-1 flex items-center">
                <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[48%] md:order-first ">
                  <div className={headingStyles.primaryLeft}>
                    <span className={headingStyles.gradient}>EMPLOYEE</span>{" "}
                    RESOURCE GROUPS{" "}
                  </div>

                  <div className="w-[80vw] text-center md:text-left md:w-[40vw]  xl:pr-[8vw]">
                    <DividerBlueLeft />

                    <div className={bodyTextStyles.primary}>
                      Our employee-led ERGs create vibrant communities that
                      celebrate, educate, and empower.
                      <ul>
                        <li>
                          <strong>•</strong>{" "}
                          <strong> The Care Collective:</strong> Advocating for
                          holistic well-being – mind, body, and beyond!
                        </li>
                        <li>
                          <strong>•</strong> <strong>The AI Task Force:</strong>{" "}
                          Driving AI and tech literacy across the team exploring
                          the exciting possibilities of AI.
                        </li>
                        <li>
                          <strong>•</strong>{" "}
                          <strong> The Connect Crew:: </strong> Inspiring a
                          greener workplace through internal sustainability
                          projects and mindful practices / Sustainability
                          champions, implementing eco-conscious initiatives
                          throughout the team.
                        </li>
                        <li>
                          <strong>•</strong> <strong> The Green Team: </strong>{" "}
                          Inspiring a greener workplace through internal
                          sustainability projects and mindful practices /
                          Sustainability champions, implementing eco-conscious
                          initiatives throughout the team.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards Grid - First on Mobile, Second on Desktop */}
              <div className="order-1 md:order-2 w-full">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6">
                  <HoverCard5
                    title="Care Collective"
                    img="/ergs/care-collect.jpg"
                  />
                  <HoverCard5
                    title="The AI Task Force"
                    img="/ergs/ai-task.jpg"
                  />
                  <HoverCard5
                    title="The Connect Crew"
                    img="/ergs/connect-crew.jpg"
                  />
                  <HoverCard5 title="The Green Team" img="/ergs/green.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-[5vh] md:pt-[5vh]">
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
