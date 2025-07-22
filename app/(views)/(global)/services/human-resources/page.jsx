"use client";
import Reveal from "app/components/Reveal";
import HoverCard3 from "app/components/HoverCard3";
import MarqueeHori from "app/components/MarqueeHori";
import Button from "app/components/Button";
import IconCloud from "app/components/LogoCloud";
import ServiceBeyond from "app/components/ServiceBeyond";
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
const HR = [
  {
    title: "Recruitment & Staffing",
    description:
      "Find the perfect talent for your team through targeted recruitment and efficient onboarding processes",
  },
  {
    title: "Streamlined Payroll Processing",
    description:
      " Ensure accurate and on-time payroll for your employees, eliminating administrative burdens ",
  },
  {
    title: "Employee Onboarding",
    description:
      "Streamline the onboarding process, ensuring each new addition to your team feels welcomed and informed",
  },
];
const HR2 = [
  {
    title: "Training & Development",
    description:
      " Invest in your workforce with customized training programs to enhance their skills and knowledge",
  },
  {
    title: "Effective Performance Management",
    description:
      " Implement a clear and actionable performance management system to motivate and develop your employees",
  },
  {
    title: "Customizable HR Policy",
    description:
      "  Create policies and procedures tailored to your company culture and business needs",
  },
];
const HR3 = [
  {
    title: "Data-Driven HR Analytics & Reporting",
    description:
      " Gain valuable insights into your workforce with comprehensive HR reporting and analysis",
  },
  {
    title: "Employee Off-boarding",
    description:
      " Manage the offboarding process efficiently, ensuring a positive final experience for departing employees",
  },
  {
    title: "Centralized Database Management",
    description:
      "   Maintain accurate and organized employee data in a secure and accessible database",
  },
];
const HR4 = [
  {
    title: "Automated HR Processes",
    description: " Save time and resources by automating repetitive HR tasks",
  },
  {
    title: "Employee Relations",
    description:
      " Conflict resolution that builds trust and commitment to cultivating a positive company culture where every voice is heard",
  },
];
const HumanResources = () => {
  return (
    <div className="w-full">
      <LandingPageInner
        subtitle="HUMAN RESOURCES"
        titleBeforeBlue=""
        blueTitle=" EMPOWERING  YOUR TEAM
         "
        titleAfterBlue="
        SIMPLIFYING HR"
        description=" We manage the administrative workload so you can nurture your team's
        potential."
        ImgUrl="/service-images/HR.jpg"
      />

      <SectionTextRightDesc
        description={
          <>
            <div className="space-y-4">
              <div>
                HR is all about people, but there is an essential administrative
                workload that comes with it. We handle that for you, allowing
                you to focus on what truly matters: nurturing a thriving company
                culture and supporting your team’s growth and development.
              </div>{" "}
              <div>
                Our teams are passionate about delivering exceptional support in
                all areas, from recruitment to payroll and beyond. By managing
                the administrative tasks, we enable you to concentrate on the
                meaningful journeys of your employees, addressing their needs,
                enabling their development, and solving any challenges that
                arise.
              </div>{" "}
              <div>
                With our customized solutions, you can streamline HR operations,
                reduce costs, and scale your business faster. We’re here to take
                care of the behind-the-scenes work, so you can prioritize your
                people and drive your company’s success forward.
              </div>{" "}
            </div>
          </>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] my-8 md:m-6 pt-[5vh]  ">
            <div
              className={
                ("group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('/BPO/HR-2.jpg')] bg-cover aspect-square")
                // Preload hover image
              }
            ></div>
          </div>
        }
      />
      <div className="mx-auto mt-[10vh] ">
        <ServGrid features={HR} />
        <ServGrid features={HR2} />
        <ServGrid features={HR3} />
        <ServGrid features={HR4} />
      </div>

      <div className="pt-[5vh] md:pt-[10vh]">
        <PartnershipFeatures />
      </div>

      <TopTierTalent
        description="Our team holds a minimum of a bachelor’s degree along with relevant qualifications, ensuring that they bring the highest standards of expertise and professionalism to the table."
        certDesc="Every member of our team holds a relevant HR certification"
      ></TopTierTalent>

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
  );
};

export default HumanResources;
