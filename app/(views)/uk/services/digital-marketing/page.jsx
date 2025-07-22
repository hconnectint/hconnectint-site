"use client";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
import MarqueeHoriLogo from "app/components/MarqueeHoriLogo";
import MarqueeHoriLogoSingle from "app/components/MarqueeHoriLogoSingle";
import HoverCard3 from "app/components/HoverCard3";
import Link from "next/link";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import LandingPageInner from "app/sections/LandingPageInner";
import SectionTextRightDesc from "app/sections/SectionTextRightDesc";
import SecuringInterests from "app/components/SecuringInterests";
import TopTierTalent from "app/components/TopTierTalent";
import ServiceBeyondBordersLon from "app/components/ServiceBeyondBordersLon";
import ProvenProcesses from "app/components/ProvenProcesses";
import CTA from "app/sections/CTA";
import ServGrid from "app/components/ServGrid";
const logos = [
  {
    name: "ISO",
    url: "/DataProtection/iso.jpg",
  },
  {
    name: "DPA",
    url: "/DataProtection/dpa.jpg",
  },
  {
    name: "GDPR",
    url: "/DataProtection/gdpr.jpg",
  },
  {
    name: "PrivacyActi",
    url: "/DataProtection/PrivacyAct.jpg",
  },
];

const suite = [
  { img: "/suite-logo/ads.png" },
  { img: "/suite-logo/analytics.png" },
  { img: "/suite-logo/divi.png" },
  { img: "/suite-logo/kartra.png" },
  { img: "/suite-logo/mailchimp.png" },
  { img: "/suite-logo/search.png" },
  { img: "/suite-logo/squarespace.png" },
  { img: "/suite-logo/wordpress.png" },
];

const DM = [
  {
    title: "Search Engine Optimization (SEO) Marketing",
    description:
      " Climbing the SERP ladder, ensuring your brand is seen by the right people at the right moment by on-page and off-page SEO optimization, and in-depth keyword research and analysis",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising Services  ",
    description:
      " Precisely target your ideal customers through strategic Google Ads, paid search advertising, display advertising, social media advertising, and data-driven PPC management to maximise conversions ",
  },
  {
    title: "Social Media Marketing (SMM) Services  ",
    description:
      " Build a global brand and cultivate online communities where your brand thrives, from curated content to targeted engagement strategies  ",
  },
];
const DM2 = [
  {
    title: "Content Marketing Services  ",
    description:
      " Craft high-quality, on-brand, SEO-optimised content across your website and social media channels ",
  },
  {
    title: "Email Marketing Services  ",
    description:
      " Create targeted email campaigns for lead nurturing, high engagement, and increased customer retention backed by email analytics and real-time performance tracking. ",
  },
  {
    title: "Conversion Rate Optimisation (CRO) Services  ",
    description:
      "Enhance user experience and improve conversion pathways through A/B testing, landing page optimisation, and behavioural analytics.  ",
  },
];
const DM3 = [
  {
    title: "Performance Analytics, tracking and Reporting  ",
    description:
      " Using data-driven insights to track key metrics, ensure goal alignment and optimise your campaigns for peak performance ",
  },
  {
    title: "Web Development Services  ",
    description:
      " Transform abstract ideas into high-impact, user-friendly websites inclusive of SEO, performance optimisation, strategic UI/UX design, maintenance, and updates. ",
  },
  {
    title: "Branding Services   ",
    description:
      " Develop strategic brand identities to create a cohesive brand experience across all touchpoints including logo design, detailed brand guidelines, visual assets and consistent brand messaging. ",
  },
];
const DM4 = [
  {
    title: "Generative Engine Optimization (GEO)  ",
    description:
      " Adapt to the future of search powered by AI. We develop AI-powered strategies to ensure your content resonates with generative engines and reaches your audience effectively. ",
  },
];

const FinanceAccounting = () => {
  return (
    <div className="w-full">
      <LandingPageInner
        subtitle="DIGITAL MARKETING"
        titleBeforeBlue="BUILD AN "
        blueTitle=" UNFORGETTABLE "
        titleAfterBlue="
        BRAND"
        description=" Everything a brand needs to succeed
        "
        ImgUrl="/service-images/DM.jpg"
      />
      <SectionTextRightDesc
        description={
          <>
            <div className="space-y-4">
              <div>
                We don&apos;t believe in a one-size-fits-all approach—instead,
                we tailor every campaign, to your specific needs, ensuring a
                personalized, results-driven experience. We blend the power of
                digital tools and the art of human creativity to craft a
                marketing strategy that is uniquely aligned with your
                business&apos;s goals.
              </div>{" "}
              <div>
                Leveraging data analytics, insights, and time-tested strategies,
                we create high-impact digital campaigns that precisely target
                your audience, amplify your brand&apos;s message, and drive
                real, measurable growth.
              </div>{" "}
              <div>
                By optimizing your digital marketing efforts through smart
                resource allocation and data-backed decisions, we help you avoid
                wasted spend and maximize your return on investment (ROI).
                Whether it&apos;s social media, SEO, paid ads, or content
                marketing, we ensure that every move is strategic, purposeful,
                and aligned with your long-term success.
              </div>{" "}
            </div>
          </>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] my-8 md:m-6 pt-[5vh]  ">
            <div
              className={
                ("group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('/BPO/DM-2.jpg')] bg-cover aspect-square")
                // Preload hover image
              }
            ></div>
          </div>
        }
      />

      <div className="mx-auto mt-[10vh] ">
        <ServGrid features={DM} />
        <ServGrid features={DM2} />
        <ServGrid features={DM3} />
        <ServGrid features={DM4} />
      </div>

      <div className="pt-[5vh] md:pt-[10vh]">
        <PartnershipFeatures />
      </div>

      <TopTierTalent
        description="Our team holds a minimum of a bachelor’s degree along with relevant qualifications, ensuring that they bring the highest standards of expertise and professionalism to the table."
        certDesc="Every member of our team holds a relevant marketing certification"
      ></TopTierTalent>

      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[10vh] ">
        <div className="mx-auto-sm text-center mb-8 lg:mb-16">
          <div className={headingStyles.primaryCenter}>
            OUR PROVEN{" "}
            <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
              DIGITAL MARKETING
            </span>{" "}
            APPROACH
          </div>
          <div className=" lg:mb-[-1vh]">
            {" "}
            <DividerBlueCenter />
          </div>
          <div className={bodyTextStyles.descriptionCenter}>
            {
              "We use a strategic, data-driven approach to deliver measurable business growth:  "
            }
          </div>
        </div>
        <div className=" px-4 mx-auto  lg:px-6">
          <div className="w-full flex justify-center px-[5vw]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-fit">
              <HoverCard3
                title={
                  <div>
                    <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Customised Digital Strategy:
                    </span>
                    <br />
                    <span className="text-white font-medium text-[2.5vw] md:text-[1vw]   transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Tailored solutions aligned with your business goals. 
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
                img={"/dm/digital-strat.jpg"}
              />

              <HoverCard3
                title={
                  <div>
                    <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Competitor & Market Research:
                    </span>
                    <br />
                    <span className="text-white font-medium text-[2.5vw] md:text-[1vw] transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Gain a competitive edge through in-depth analysis. 
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
                img={"/dm/comp.jpg"}
              />
              <HoverCard3
                title={
                  <div>
                    <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Performance Monitoring & Optimisation:
                    </span>
                    <br />
                    <span className="text-white font-medium text-[2.5vw] md:text-[1vw] transition-all duration-300 ease-in-out group-hover:translate-x-2">
                      Continuous improvement for sustained success. 
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
                img={"/dm/perf.jpg"}
              />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
      </section>
      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[10vh] ">
        <div className="mx-auto-sm text-center mb-8 lg:mb-16">
          <div className={headingStyles.primaryCenter}>
            CLIENT{" "}
            <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
              SUCCESS
            </span>{" "}
            STORIES
          </div>
          <div className=" lg:mb-[-1vh]">
            {" "}
            <DividerBlueCenter />
          </div>
          <div className={bodyTextStyles.descriptionCenter}>
            {
              "We use a strategic, data-driven approach to deliver measurable business growth:  "
            }
          </div>
        </div>
        <div className="mt-6 lg:mt-4 lg:mb-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center px-4 sm:px-0">
          <a
            href="/pdf/case-study-pdf/r2r.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src="/case-study/r2r.jpg"
              alt="Transform Case Study"
              className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px] h-[280px] sm:h-[300px] lg:h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
            />
            <p className="mt-3 text-base sm:text-lg font-medium text-center font-arial">
              Record to Report
            </p>
          </a>

          <a
            href="/pdf/case-study-pdf/p2p.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src="/case-study/p2p.jpg"
              alt="Growth Strategy Case Study"
              className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px] h-[280px] sm:h-[300px] lg:h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
            />
            <p className="mt-3 text-base sm:text-lg font-medium text-center">
              Procure to Pay
            </p>
          </a>

          <a
            href="/pdf/case-study-pdf/epm.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <img
              src="/case-study/epm.jpg"
              alt="Enterprise Performance Management Case Study"
              className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px] h-[280px] sm:h-[300px] lg:h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
            />
            <p className="mt-3 text-base sm:text-lg font-medium text-center">
              Enterprise Performance Management
            </p>
          </a>
        </div>
      </section>
      <SecuringInterests></SecuringInterests>

      <ServiceBeyondBordersLon></ServiceBeyondBordersLon>

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
                  <MarqueeHoriLogoSingle items={suite}> </MarqueeHoriLogoSingle>
                </div>

                {/* <IconCloud
                  iconSlugs={["react", "typescript"]}
                  customPngIcons={[
                    { src: "/suite-logo/oracle.png" },
                    { src: "/suite-logo/sap.png" },
                    { src: "/suite-logo/oracle-hyperion.png" },
                    { src: "/suite-logo/acumatica.png" },
                    { src: "/suite-logo/fathom.png" },
                    { src: "/suite-logo/maxio.png" },
                    { src: "/suite-logo/microsoft-dynamic.png" },
                    { src: "/suite-logo/monday.png" },
                    { src: "/suite-logo/myob.png" },
                    { src: "/suite-logo/power-bi.png" },
                    { src: "/suite-logo/qb.png" },
                    { src: "/suite-logo/sage.png" },
                    { src: "/suite-logo/salesforce.png" },
                    { src: "/suite-logo/stripe.png" },
                    { src: "/suite-logo/xero.png" },
                  ]}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProvenProcesses></ProvenProcesses>

      <CTA
        title="READY TO DELIVER FROM DAY ONE"
        href={"/contact"}
        text={"Get in touch"}
      ></CTA>
    </div>
  );
};

export default FinanceAccounting;
