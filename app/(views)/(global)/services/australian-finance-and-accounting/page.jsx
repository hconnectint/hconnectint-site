"use client";
import { cn } from "@/lib/utils";
import HoverCard3 from "app/components/HoverCard3";

import MarqueeHoriLogoSingle from "app/components/MarqueeHoriLogoSingle";
import Meta from "app/components/Meta";

import CTA from "app/sections/CTA";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import SecuringInterests from "app/components/SecuringInterests";
import TopTierTalent from "app/components/TopTierTalent";
import ServiceBeyondBorders from "app/components/ServiceBeyondBorders";
import ProvenProcesses from "app/components/ProvenProcesses";

import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
import SectionTextRight from "app/sections/SectionTextRight";
const suite = [
  { img: "/suite-logo/oracle.png" },
  { img: "/suite-logo/sap.png" },
  { img: "/suite-logo/oracle-hyperion.png" },
  { img: "/suite-logo/acumatica.png" },
  { img: "/suite-logo/fathom.png" },
  { img: "/suite-logo/maxio.png" },
  { img: "/suite-logo/microsoft-dynamic.png" },
  { img: "/suite-logo/monday.png" },
  { img: "/suite-logo/myob.png" },
  { img: "/suite-logo/power-bi.png" },
  { img: "/suite-logo/qb.png" },
  { img: "/suite-logo/sage.png" },
  { img: "/suite-logo/salesforce.png" },
  { img: "/suite-logo/stripe.png" },
  { img: "/suite-logo/reckon.png" },
  { img: "/suite-logo/accurri.png" },
  { img: "/suite-logo/ACL.png" },
];

const ausGov = [
  { img: "/AUS-Services/melb.jpg" },
  { img: "/AUS-Services/nt.jpg" },
  { img: "/AUS-Services/tasm.jpg" },

  { img: "/AUS-Services/qt.jpg" },
  { img: "/AUS-Services/nsw.jpg" },

  { img: "/AUS-Services/wa.jpg" },
  { img: "/AUS-Services/act.jpg" },
  { img: "/AUS-Services/sau.jpg" },
];

const AusFinance = () => {
  return (
    <div>
      <>
        <head>
          <title>Australian Finance and Accounting Services </title>
          <meta
            name="description"
            content="We partner with Australian Finance & Accounting firms to deliver accounting, tax, paraplanning, audit, SMSF, and business services. Discover our services now.  "
          />
        </head>
      </>
      <div className="w-full pt-[10vh] md:pt-[10vh]">
        <section className="flex flex-col items-center w-full ">
          {/* Content Section */}
          <div className="w-full px-[5vw] pt-[5vh]  text-center">
            <div className="container mx-auto h-full sm:p-10">
              <header className="flex flex-col justify-center items-center">
                <div className="px-4 ">
                  {/* Title Section */}
                  <div>
                    <div className="text-lg md:text-[2vw] lg:text-[1.5vw] tracking-widest font-GTAmerica font-bold">
                      AUSTRALIAN FINANCE & ACCOUNTING
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
                    A STRATEGIC PARTNER IN <br />
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      AUSTRALIAN F&A
                    </span>
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      <br />
                    </span>{" "}
                  </h1>

                  <div
                    className={`${bodyTextStyles.descriptionCenterAus} mb-[-4vh] md:mb-[-6vh] mt-[4vh]`}
                  >
                    We have established a dedicated department focused on
                    supporting accounting firms, business accountants, and
                    financial planners in Australia. Our expert team has
                    partnered with some of Australia&apos;s largest firms,
                    delivering solutions that reduce costs, save time, and
                    enable growth. By providing a full range of services, we
                    position ourselves as a true composite partner, ensuring our
                    clients receive comprehensive, customized support that
                    aligns perfectly with their business goals.{" "}
                  </div>
                </div>
              </header>
            </div>
          </div>{" "}
          {/* Marquee Section */}
        </section>

        <section>
          <div className=" mx-auto  px-4 pt-[5vh]  md:pt-[5vh] lg:px-6">
            <div className="mx-auto-sm text-center mb-8 lg:mb-10">
              <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center">
                OUR{" "}
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  SOLUTIONS
                </span>{" "}
              </div>
              <div className=" lg:mt-[-2.3vh]">
                <DividerBlueCenter />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]">
              <HoverCard3
                title={"Accounting and Tax"}
                description={
                  <a href="/services/australian-finance-and-accounting/accounting-and-tax">
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
                  </a>
                }
                img={"/AUS-Services/ac-tax.jpg"}
              />
              <HoverCard3
                title={"Audit & Assurance"}
                description={
                  <a href="/services/australian-finance-and-accounting/audit-and-assurance">
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
                  </a>
                }
                img={"/AUS-Services/au-aus.jpg"}
              />
              <HoverCard3
                title={"Business Services"}
                description={
                  <a href="/services/australian-finance-and-accounting/business-services">
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
                  </a>
                }
                img={"/AUS-Services/bs.jpg"}
              />
              <HoverCard3
                title={"SMSF"}
                description={
                  <a href="/services/australian-finance-and-accounting/smsf">
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
                  </a>
                }
                img={"/AUS-Services/SMSF.jpg"}
              />
              <HoverCard3
                title={"Paraplanning"}
                description={
                  <a href="/services/australian-finance-and-accounting/paraplanning">
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
                  </a>
                }
                img={"/AUS-Services/Paraplanning.jpg"}
              />
            </div>
          </div>
        </section>
        <section>
          <div className=" mx-auto  px-4 pt-[5vh]  md:pt-[10vh] lg:px-6">
            <div className="mx-auto-sm text-center mb-8 lg:mb-16">
              <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black text-center">
                NATIONWIDE{" "}
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  REACH
                </span>{" "}
              </div>
              <div className=" lg:mt-[-2.3vh]">
                <DividerBlueCenter />
              </div>{" "}
              <div className={bodyTextStyles.descriptionCenter}>
                We expertly navigate regional nuances across Australia to ensure
                full compliance in every state.
              </div>
            </div>
            <MarqueeHoriLogoSingle items={ausGov}> </MarqueeHoriLogoSingle>
          </div>
        </section>

        <div className="pt-[5vh] md:pt-[10vh] ">
          <PartnershipFeatures />
        </div>

        <TopTierTalent description="We’re your premier source for exceptional talent. Our experts, with their deep understanding of Australian accounting and financial services are the perfect fit for your team." />

        <section className=" md:pt-0 ">
          <SectionTextRight
            titleBeforeBlue={<>ONE OF THE </>}
            blueTitle={"FIRST FOUR"}
            titleAfterBlue={
              <>
                {" "}
                <br />
                <span className={headingStyles.gradient}> CPA </span> RECOGNIZED
                EMPLOYER PARTNERS IN SRI LANKA.
              </>
            }
            component={
              <div>
                <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw]  px-[2vw]   ">
                  <div
                    className={cn(
                      "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 ",
                      "bg-[url('/cpa-fin.png')] bg-cover aspect-square"
                    )}
                  ></div>
                </div>
              </div>
            }
          ></SectionTextRight>
        </section>

        <SecuringInterests></SecuringInterests>

        <ServiceBeyondBorders></ServiceBeyondBorders>

        <ProvenProcesses></ProvenProcesses>

        <CTA
          title="READY TO DELIVER FROM DAY ONE"
          description="Get in touch to learn more about our services and how we can help you grow your business."
          href={"/contact"}
          text={"Get in touch"}
        ></CTA>
      </div>
    </div>
  );
};

export default AusFinance;
