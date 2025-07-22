"use client";
import HoverCard5 from "app/components/HoverCard5";
import HoverCard3 from "app/components/HoverCard3";

import MarqueeHoriLogo from "app/components/MarqueeHoriLogo";
import MarqueeHoriLogoSingle from "app/components/MarqueeHoriLogoSingle";

import CTA from "app/sections/CTA";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import SecuringInterestsAus from "app/components/SecuringInterestsAus";
import TopTierTalent from "app/components/TopTierTalent";
import ServiceBeyondBorders from "app/components/ServiceBeyondBorders";
import ProvenProcessesAus from "app/components/ProvenProcessesAus";

import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerBlueCenter } from "app/components/Divider";

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
  { img: "/suite-logo/xero.png" },
];

const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/CPA.jpg" },
];

const serviceBorders = [
  {
    title: "A True Extension",
    description:
      "Our dynamic team is an extension of yours. adopting your workflows, systems and norms. We become a part of you. ",
  },
  {
    title: "Continuous Collaboration",
    description:
      "We hold weekly updates and monthly service reviews, tracked through both qualitative and quantitative measures. This ensures ongoing alignment, space for continuous improvement and a collaborative environment where your goals are always prioritized.",
  },
];

const serviceBorders2 = [
  {
    title: "Face to Face Encounters",
    description:
      "We regularly host clients in our offices and make visits to their locations as well. This face-to-face interaction strengthens connections.",
  },
  {
    title: "CEO - Led Commitment",
    description:
      "With direct access to our CEO, your concerns and priorities are always at the forefront. We're dedicated to providing a level of personalized service that goes beyond the ordinary.",
  },
];

const sec = [
  {
    title: "Access Controls",
    description:
      "We've implemented multi-layered access controls to protect against unauthorized access",
  },
  {
    title: "Audits & Assessments",
    description:
      "We proactively monitor our security posture through regular audits and vulnerability assessments",
  },
  {
    title: "24/7 IT Support",
    description:
      " Our dedicated team provides round-the-clock support to ensure your systems are always running smoothly.",
  },
];

const FinanceAccounting = () => {
  return (
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
                    FINANCE & ACCOUNTING
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
                    TRANSFORM{" "}
                  </span>
                  YOUR{" "}
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    <br />
                  </span>{" "}
                  FINANCE OPERATIONS
                </h1>

                {/* Description */}

                <div className={bodyTextStyles.descriptionCenter}>
                  Boost your bottom line, build a stronger business, and stay
                  ahead of the curve.{" "}
                </div>
              </div>
            </header>
          </div>
        </div>{" "}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw] mt-[2vh] md:mt-0">
          <HoverCard3
            title={"Accounts Payable"}
            description={
              <a href="/services/finance-and-accounting/accounts-payable">
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
            img={"/F&A-services/AP.jpg"}
          />
          <HoverCard3
            title={"Invoice to Cash"}
            description={
              <a href="/services/finance-and-accounting/invoice-to-cash">
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
            img={"/F&A-services/invoCash.jpg"}
          />
          <HoverCard3
            title={"Record to Report"}
            description={
              <a href="/services/finance-and-accounting/record-to-report">
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
            img={"/F&A-services/RecRep.jpg"}
          />
          <HoverCard3
            title={"Enterprise Performance Management"}
            description={
              <a href="/services/finance-and-accounting/enterprise-performance-systems">
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
            img={"/F&A-services/EPM.jpg"}
          />
          <HoverCard3
            title={"F&A Consulting"}
            description={
              <a href="/services/finance-and-accounting/finance-and-accounts-consulting">
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
            img={"/F&A-services/F&A-Consulting.jpg"}
          />
        </div>
        {/* Marquee Section */}
      </section>
      <div className="pt-[5vh] md:pt-[10vh]">
        <PartnershipFeatures />
      </div>

      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[10vh] ">
        <div className=" px-4 mx-auto  lg:px-6">
          <div className="mx-auto-sm text-center mb-8 ">
            <div className={headingStyles.primaryCenter}>
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                ELEVATED FINANCE
              </span>{" "}
              ACROSS INDUSTRIES
            </div>
            <div className=" lg:mb-[-1vh]">
              {" "}
              <DividerBlueCenter />
            </div>
            <div className={bodyTextStyles.descriptionCenter}>
              We see finance professionals as integral strategic partners in
              driving business success within the Australian market.
              Accordingly, our experts bring finance transformation, analytics,
              automation and industry-leading solutions to clients across
              industries.
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw] mt-[2vh] md:mt-0">
            <HoverCard5
              title={"Healthcare"}
              img={"/industries/HealthCare.jpg"}
            />
            <HoverCard5 title={"Apparel"} img={"/industries/apparel.jpg"} />
            <HoverCard5
              title={"Insurance & Financial Services"}
              img={"/industries/insuranceFinance.jpg"}
            />
            <HoverCard5
              title={"Engineering & Construction"}
              img={"/industries/EngineeringConstruction.jpg"}
            />
            <HoverCard5
              title={"Information Technology"}
              img={"/industries/IT.jpg"}
            />
            <HoverCard5
              title={"Retail & Ecommerce"}
              img={"/industries/retail.jpg"}
            />
            <HoverCard5
              title={"Telecommunications"}
              img={"/industries/Telecommunication.jpg"}
            />
            <HoverCard5
              title={"Shipping & Logistics"}
              img={"/industries/shipping.jpg"}
            />
            <HoverCard5
              title={"Travel & Leisure"}
              img={"/industries/TravelLeisure.jpg"}
            />
            <HoverCard5 title={"Real Estate"} img={"/industries/10.jpg"} />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
      </section>

      <TopTierTalent description="We're your premier source for exceptional financial talent. As one of the first four CPA-Recognised Employer Partners in Sri Lanka, we recruit and train the best of the best, ensuring they bring the highest standards of expertise and professionalism to your organisation."></TopTierTalent>

      <section>
        <div className=" mx-auto  px-4 pt-[5vh] md:pt-[10vh] lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className={headingStyles.primaryCenter}>
              COMMITMENT TO{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                EXCELLENCE
              </span>{" "}
              <div className=" lg:mb-[-1vh]">
                {" "}
                <DividerBlueCenter />
              </div>
            </div>

            <div className={bodyTextStyles.descriptionCenter}>
              As recognized employer and training partners of all relevant
              institutions, we guarantee the intake of the best talent. This
              also facilitates the ongoing development of our existing
              professionals, ensuring compliance with global standards and
              keeping your team at the forefront of industry practices and
              innovations.{" "}
            </div>
          </div>
          <MarqueeHoriLogoSingle items={accredit}> </MarqueeHoriLogoSingle>
        </div>
      </section>

      <SecuringInterestsAus></SecuringInterestsAus>

      <ServiceBeyondBorders></ServiceBeyondBorders>

      <section>
        <div className=" max-w-screen-xl mx-auto px-4 pt-[5vh] md:pt-[10vh] pb-[5vh]  md:pb-[10vh]">
          <div className="mx-auto-sm text-center  ">
            <div className={headingStyles.primaryCenter}>
              OUR{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                COMPREHENSIVE
              </span>{" "}
              SUITE
            </div>
            <div className=" lg:mb-[-1vh]">
              {" "}
              <DividerBlueCenter />
            </div>
            <div className={bodyTextStyles.descriptionCenter}>
              We are equipped with the right tools for the right job
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative">
            <div className=" flex justify-center ">
              <div className=" justify-center">
                <div className="pt-[3vh]">
                  <MarqueeHoriLogo items={suite}> </MarqueeHoriLogo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProvenProcessesAus></ProvenProcessesAus>

      <CTA
        title="Ready to deliver from day one"
        href={"/contact"}
        text={"Get in touch"}
      ></CTA>
    </div>
  );
};

export default FinanceAccounting;
