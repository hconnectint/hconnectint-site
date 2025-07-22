"use client";
import HoverCard3 from "app/components/HoverCard3";
import CTA from "app/sections/CTA";
import PartnershipFeaturesAus from "app/components/PartnershipFeaturesAus";
import SecuringInterests from "app/components/SecuringInterests";
import TopTierTalent from "app/components/TopTierTalent";
import ServiceBeyondBordersAus from "app/components/ServiceBeyondBordersAus";
import ProvenProcesses from "app/components/ProvenProcesses";
import ServGrid from "app/components/ServGrid";

import LandingPageInner from "app/sections/LandingPageInner";
import SectionTextRightDesc from "app/sections/SectionTextRightDesc";

const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/GPTW.jpg" },
  { img: "/accredit/CPA.jpg" },

  { img: "/accredit/GPTW-WOMEN.jpg" },
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

const AS = [
  {
    title: "Customer Service Support",
    description:
      "Provide comprehensive customer service support through email, phone, and other designated channels, ensuring prompt and professional resolution of client inquiries ",
  },
  {
    title: "Order Processing & Status Updates",
    description:
      " Manage the order processing lifecycle, including order intake, data entry, status updates, and clear communication with clients to maintain transparency throughout the fulfillment process",
  },
  {
    title: "Help Desk Support",
    description:
      " Offer efficient technical support by fielding inquiries, troubleshooting issues with established protocols, and resolving client-reported problems professionally",
  },
];
const AS2 = [
  {
    title: "Bookkeeping",
    description:
      " Maintain accurate financial records, including invoicing, expense tracking, and reconciliation, to support financial reporting and analysis",
  },
  {
    title: "Document Creation & Editing",
    description:
      " Draft professional documents such as reports, presentations, and proposals, adhering to designated style guides and client specifications",
  },
  {
    title: "Risk Management Services",
    description:
      "  Equip your clients with the tools to identify, assess, and effectively mitigate financial, operational, and strategic risks",
  },
];
const AS3 = [
  {
    title: "Data Cleansing & Verification",
    description:
      " Enhance data accuracy and organization by performing data entry, cleaning, and verification tasks",
  },
  {
    title: "Financial Statement Preparation",
    description:
      " Leverage our expertise to create accurate and reliable financial statements for your clients, ensuring they adhere to all applicable accounting standards",
  },
];

const FinanceAccounting = () => {
  return (
    <div className="w-full">
      <LandingPageInner
        subtitle="ADMINISTRATIVE SUPPORT"
        titleBeforeBlue=""
        blueTitle=" EVERYDAY  "
        titleAfterBlue="
        MADE EASIER"
        description=" Experience the power effortless admin has on your business."
        ImgUrl="/service-images/admin.jpg"
      />

      <SectionTextRightDesc
        description={
          <>
            <div className="space-y-4">
              <div>
                Our dedicated team of administrative professionals can work with
                businesses of all sizes across Australia and in any industry to
                help overcome the challenges of increasing workloads, rising
                costs, and the need for greater efficiency.
              </div>{" "}
              <div>
                We efficiently deliver comprehensive, end-to-end solutions that
                free up your time and resources to focus on strategic
                initiatives. Whether you require assistance with back-office
                tasks, customer support, or document management, our tailored
                solutions can help you achieve greater productivity and
                streamline your operations.
              </div>{" "}
              <div>
                We adapt to your changing needs and anticipate your
                requirements, ensuring the smooth running of your daily
                operations. By combining our expertise with productivity tools
                and a personalised approach, we enable you to optimise your
                administrative processes, improve overall efficiency, and scale
                faster.
              </div>{" "}
            </div>
          </>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] my-8 md:m-6 pt-[5vh]  ">
            <div
              className={
                ("group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('/BPO/admin-2.jpg')] bg-cover aspect-square")
                // Preload hover image
              }
            ></div>
          </div>
        }
      />

      <div className="mx-auto mt-[10vh] ">
        <ServGrid features={AS} />
        <ServGrid features={AS2} />
        <ServGrid features={AS3} />
      </div>

      <div className="pt-[5vh] md:pt-[10vh]">
        <PartnershipFeaturesAus />
      </div>

      <TopTierTalent
        description="Our team holds a minimum of a bachelor’s degree along with relevant qualifications, ensuring that they bring the highest standards of expertise and professionalism to the table."
        certDesc="Every member of our team holds a relevant certification"
      />

      <SecuringInterests></SecuringInterests>

      <ServiceBeyondBordersAus></ServiceBeyondBordersAus>

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
