import ServiceBeyond from "app/components/ServiceBeyond";
import CTA from "app/sections/CTA";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import MarqueeHoriLogoSingle from "app/components/MarqueeHoriLogoSingle";

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

const serviceBorders = [
  {
    title: "External Audits",
    description:
      "Gain independent assurance on your financial statements, ensuring accuracy and compliance with relevant accounting standards and regulations",
  },
  {
    title: "Internal Audits",
    description:
      "Identify potential weaknesses in your internal controls, processes, and operations, leading to risk mitigation, efficiency improvements, and overall business performance enhancement",
  },
];

const serviceBorders2 = [
  {
    title: "Risk Management Services",
    description:
      "Equip your clients with the tools to identify, assess, and effectively mitigate financial, operational, and strategic risks",
  },
  {
    title: "Operational Audits",
    description:
      "Optimize your clients' operations by identifying inefficiencies by comprehensively evaluating their processes, procedures, and performance",
  },
];
const serviceBorders3 = [
  {
    title: "Compliance Audits",
    description:
      "Minimize regulatory risks by verifying your clients' adherence to industry standards, contractual obligations, internal policies, and external regulations",
  },
  {
    title: "Financial Statement Preparation",
    description:
      "Leverage our expertise to create accurate and reliable financial statements for your clients, ensuring they adhere to all applicable accounting standards",
  },
];
const serviceBorders4 = [
  {
    title: "Agreed-Upon Procedures (AUPs)",
    description:
      "Collaborate with us to tailor specific procedures that address your unique financial or operational concerns, providing targeted insights",
  },
  {
    title: "Industry-Specific Audits",
    description:
      "Benefit from our team's specialized knowledge and experience in conducting audits tailored to the unique regulatory requirements of specific industries",
  },
];

const suite = [
  { img: "/suite-logo/myob.png" },
  { img: "/suite-logo/qb.png" },
  { img: "/suite-logo/accurri.png" },
  { img: "/suite-logo/xero.png" },
  { img: "/suite-logo/power-bi.png" },
  { img: "/suite-logo/xero.png" },
  { img: "/suite-logo/ACL.png" },
];

const AuditAndAssurance = () => {
  return (
    <div className="">
      <section className="">
        <div className="max-w-screen-xl mx-auto pt-[15vh] md:pt-[15vh]  lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] font-bold tracking-normal text-black  ">
              AUDIT &{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                ASSURANCE
              </span>
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0">
              As a seamless extension of your team, we offer outsourced audit
              services that ensure accuracy and efficiency. Your dedicated
              remote team will enable you to focus on strategic growth while we
              handle the complexities of auditing.
            </div>
          </div>
          <div className="mx-auto ">
            <div className="flex mx-auto justify-center ">
              <ServiceBeyond features={serviceBorders} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders2} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders3} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders4} />
            </div>
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5"></div>
          </div>
        </div>
        <div className="pt-[5vh] md:pt-[10vh] ">
          <PartnershipFeatures />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[5vh]  lg:px-6 ">
        <div className="mx-auto ">
          <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <section>
              <div className="max-w-screen-xl mx-auto  px-4  lg:px-6 mt-[4vh]">
                <div className="mx-auto-sm text-center mb-8 lg:mb-16">
                  <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black ">
                    OUR{" "}
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      COMPREHENSIVE
                    </span>{" "}
                    SUITE
                  </div>
                  <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0 ">
                    We are equipped with the right tools for the right job
                  </div>
                  <div className="mt-[5vh]"></div>
                  <MarqueeHoriLogoSingle items={suite}> </MarqueeHoriLogoSingle>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className=" pt-[5vh] md:pt-[10vh]">
        <CTA
          title="READY TO DELIVER FROM DAY ONE"
          href={"/contact"}
          text={"Start Now"}
        ></CTA>
      </div>
    </div>
  );
};

export default AuditAndAssurance;
