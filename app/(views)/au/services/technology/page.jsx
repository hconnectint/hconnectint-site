"use client";
import HoverCard3 from "app/components/HoverCard3";
import CTA from "app/sections/CTA";
import PartnershipFeaturesAus from "app/components/PartnershipFeaturesAus";
import SecuringInterestsAus from "app/components/SecuringInterestsAus";
import TopTierTalent from "app/components/TopTierTalent";
import ServiceBeyondBordersAus from "app/components/ServiceBeyondBordersAus";
import ProvenProcessesAus from "app/components/ProvenProcessesAus";

import LandingPageInner from "app/sections/LandingPageInner";
import SectionTextRightDesc from "app/sections/SectionTextRightDesc";
import Link from "next/link";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

const FinanceAccounting = () => {
  return (
    <div className="w-full">
      <LandingPageInner
        subtitle="TECHNOLOGY"
        titleBeforeBlue="FROM"
        blueTitle=" BLUEPRINT "
        titleAfterBlue="TO BREAKTHROUGH"
        description=" Your tech partner for every stage.
        "
        ImgUrl="/service-images/tech.jpg"
      />
      <SectionTextRightDesc
        description={
          <div className="space-y-4">
            <div>
              We partner with leading Australian enterprises to drive the future
              of smart and scalable product development. Whether it’s
              reimagining infrastructure or crafting connected products, we
              focus on delivering tailored, high-impact solutions that
              anticipate the future of business.
              <br />
            </div>
            <div>
              With proven engineering leadership, we provide comprehensive,
              end-to-end digital and product engineering solutions that
              consistently unlock new levels of value and position businesses at
              the forefront of industry innovation. By blending our technical
              depth with a tailored combination of advanced technology and human
              expertise, our engineers enable enterprises to innovate with
              confidence and execute with excellence.
            </div>

            <div>
              This refined focus, backed by strategic insight, positions us as
              not just a service provider but as a partner in your journey to
              market leadership, supporting businesses across industries in
              achieving long-term success through engineering ingenuity.
            </div>
          </div>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] my-8 md:m-6 pt-[5vh]  ">
            <div
              className={
                ("group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('/BPO/tech-2.jpg')] bg-cover aspect-square")
                // Preload hover image
              }
            ></div>
          </div>
        }
      />

      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[10vh] ">
        <div className=" px-4 mx-auto  lg:px-6">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2  px-[5vw]">
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Flexible and Scalable
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw]   transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    We&apos;ve got you covered from single projects to entire
                    teams dedicated to you{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/flexible-scalable.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    World-Class Expertise
                  </span>
                  <br />
                  <span className="text-white text-[2.5vw] md:text-[1vw]   font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Our engineers are highly specialized with experience across
                    global high-impact projects{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/world.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    CTO Level Compliance
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw]   transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Every line of code is aligned with security standards, best
                    practices, and strategic goals{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/CTO-level.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Optimized for High-Stakes Environments
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw] transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Our teams are built to handle intensity without compromising
                    qualitys{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/high-stakes.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Effortless Collaboration
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw] transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Whether you need us to lead, support, or collaborate, we
                    ensure smooth, efficient processes that drive results{" "}
                  </span>
                </div>
              }
              description={
                <Link href={"/contact"}>
                  <div>
                    <span className="text-white font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 25 25"
                      className="w-5 h-5 fill-current "
                    >
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right"
                      />
                    </svg>
                  </div>
                </Link>
              }
              img={"/tech-images/effortless-collab.jpg"}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
      </section>

      <div className="pt-[5vh] md:pt-[10vh]">
        <PartnershipFeaturesAus />
      </div>

      <TopTierTalent
        description="
Our team holds a minimum of a bachelor’s degree along with relevant qualifications, ensuring that they bring the highest standards of expertise and professionalism to the table.
"
        certDesc="Every member of our team holds a relevant tech certification"
      ></TopTierTalent>

      <SecuringInterestsAus></SecuringInterestsAus>

      <ServiceBeyondBordersAus></ServiceBeyondBordersAus>

      <ProvenProcessesAus></ProvenProcessesAus>
      <CTA
        title="READY TO DELIVER FROM DAY ONE"
        description="Get in touch to learn more about our services and how we can help you grow your business."
        href={"/contact"}
        text={"Get in touch"}
      ></CTA>
    </div>
  );
};

export default FinanceAccounting;
