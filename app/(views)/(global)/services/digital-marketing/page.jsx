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

import PartnershipFeatures from "app/components/PartnershipFeatures";
import LandingPageInner from "app/sections/LandingPageInner";
import SectionTextRightDesc from "app/sections/SectionTextRightDesc";
import SecuringInterests from "app/components/SecuringInterests";
import TopTierTalent from "app/components/TopTierTalent";
import ServiceBeyondBorders from "app/components/ServiceBeyondBorders";
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

const DM = [
  {
    title: "Strategic Social Media Management",
    description:
      "Cultivating online communities where your brand thrives, from curated content to targeted engagement strategies",
  },
  {
    title: "Performance Analytics and Reporting",
    description:
      " Using data-driven insights to optimize your campaigns for peak performance",
  },
  {
    title: "Email Marketing",
    description:
      " Creating targeted email campaigns backed by analytics and tracking to build relationships and drive action ",
  },
];
const DM2 = [
  {
    title: "Content Creation",
    description:
      " Crafting high-quality, on-brand engaging content across multiple social media channels",
  },
  {
    title: "Search Engine Optimization (SEO) Marketing",
    description:
      " Climbing the SERP ladder, ensuring your brand is seen by the right people at the right moment by on-page and off-page SEO optimization, and in-depth keyword research and analysis",
  },
  {
    title: "Web & Creative services",
    description:
      "  We transform abstract ideas into high-impact websites inclusive of SEO, performance optimization, strategic UI/UX design, maintenance, and updates.",
  },
];
const DM3 = [
  {
    title: "Branding",
    description:
      " Developing strategic brand identities to create a cohesive brand experience across all touchpoints including detailed branding guidelines and other marketing materials.",
  },
  {
    title: "Paid Advertising",
    description:
      " Precisely targeting your ideal customers through paid search advertising, display advertising, social media advertising, and Ad copywriting to drive conversions",
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
      </div>

      <div className="pt-[5vh] md:pt-[10vh]">
        <PartnershipFeatures />
      </div>

      <TopTierTalent
        description="Our team holds a minimum of a bachelor’s degree along with relevant qualifications, ensuring that they bring the highest standards of expertise and professionalism to the table."
        certDesc="Every member of our team holds a relevant marketing certification"
      ></TopTierTalent>

      <SecuringInterests></SecuringInterests>

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
