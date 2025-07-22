"use client";
import HoverCard3 from "app/components/HoverCard3";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

import Security from "app/components/security";
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
const steps = [
  {
    title: "Planning & Scheduling Phase",
    description:
      "We define clear goals, timelines and deliverables ensuring everyone is on the same page and the project stays on track",
  },
  {
    title: "Resource Coordination & Management",
    description:
      "We assign tasks and resources to project team members to ensure efficient utilization",
  },
  {
    title: "Project Execution and Monitoring",
    description:
      "We oversee project progress, track milestones, and make adjustments as needed to ensure timely completion",
  },
  {
    title: "Project Closure and Evaluation",
    description:
      "We finalize project deliverables, assess project success, and document lessons learned for future projects",
  },
  {
    title: "Document and Records Management",
    description:
      "We implement a robust system for organizing and trackining project documents, ensuring easy access and retrieval whenever needed",
  },
  {
    title: "Stakeholder Management",
    description:
      "We proactively engage and manage communication with all project stakeholders, keeping everyone informed and aligned with project goals",
  },
];

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

const AS = [
  {
    title: "Customer Service Support",
    description:
      "Provide comprehensive customer service support through email, phone, and other designated channels, ensuring prompt and professional resolution of client",
  },
  {
    title: "Order Processing & Status Updates",
    description:
      " Manage the order processing lifecycle, including order intake, data entry, status updates, and clear communication with clients to maintain transparency throughout the fulfillment",
  },
  {
    title: "Help Desk Support",
    description:
      " Offer efficient technical support by fielding inquiries, troubleshooting issues with established protocols, and resolving client-reported problems professionally.",
  },
];
const AS2 = [
  {
    title: "Bookkeeping",
    description:
      " Maintain accurate financial records, including invoicing, expense tracking, and reconciliation, to support financial reporting and analysis.",
  },
  {
    title: "Document Creation & Editing",
    description:
      " Draft professional documents such as reports, presentations, and proposals, adhering to designated style guides and client specifications",
  },
  {
    title: "Risk Management Services",
    description:
      "  Equip your clients with the tools to identify, assess, and effectively mitigate financial, operational, and strategic risks.",
  },
];
const AS3 = [
  {
    title: "Data Cleansing & Verification",
    description:
      " Enhance data accuracy and organization by performing data entry, cleaning, and verification tasks.",
  },
  {
    title: "Financial Statement Preparation",
    description:
      " Leverage our expertise to create accurate and reliable financial statements for your clients, ensuring they adhere to all applicable accounting standards.",
  },
];

const FinanceAccounting = () => {
  return (
    <div className="w-full">
      <LandingPageInner
        subtitle="CONSULTANCY & PROJECTS "
        titleBeforeBlue=""
        blueTitle="SCALE UP."
        titleAfterBlue="SIMPLIFY DOWN."
        description=" Scale with confidence and ease using our world-class
        operating model."
        ImgUrl="/service-images/consultancy.jpg"
      />
      <SectionTextRightDesc
        description={
          <>
            <div className="space-y-4">
              <div>
                We collaborate with leading enterprises to deliver strategic
                consulting services that drive sustainable growth and innovation
                through outsourcing. With extensive experience supporting
                corporations across multiple continents, we provide customized
                consulting solutions tailored to your specific region and
                industry.
              </div>{" "}
              <div>
                Whether you&apos;re a small-to-medium enterprise seeking
                strategic growth, a large corporation aiming to expand into new
                sectors, or a business looking to solve complex challenges, we
                focus on delivering solutions that perfectly align with your
                unique needs.
              </div>{" "}
              <div>
                By combining industry knowledge, analytical skills, and a deep
                understanding of your business, we will help you make informed
                decisions, improve efficiency, and achieve your long-term goals.
              </div>{" "}
              <div>
                From strategy development to execution and overall management we
                will support you every step of the way.
              </div>{" "}
            </div>
          </>
        }
        component={
          <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] my-8 md:m-6 pt-[5vh]  ">
            <div
              className={
                ("group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
                "bg-[url('/consultancy-desc.jpg')] bg-cover aspect-square")
                // Preload hover image
              }
            ></div>
          </div>
        }
      />

      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[5vh] ">
        <div className=" px-4 mx-auto  lg:px-6">
          <div className="mx-auto-sm text-center mb-8 ">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] lg:leading-[4.6vw] m font-bold tracking-normal text-black   ">
              WE DRIVE{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                SUSTAINABLE
              </span>{" "}
              TRANSFORMATION
            </div>
            <div className="font-arial text-sm md:text-base xl:text-xl flex justify-center  text-black"></div>
          </div>

          <div className="w-full ">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative">
              <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100"></div>
              <div className="grid divide-x divide-y divide-[0000ff] bg-transparent overflow-hidden rounded-xl border-[blue-500] text-blue-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                {[
                  {
                    title: "Unlock",
                    description:
                      "We empower organizations to unlock their full potential",
                  },
                  {
                    title: "Engage",
                    description:
                      "We aim to inspire and engage the organization at every level to embrace change and transformation",
                  },
                  {
                    title: "Accelerate",
                    description:
                      "Our implementation is quick and effective ensuring alignment of people, process and technology",
                  },
                  {
                    title: "Manage",
                    description:
                      "We handle the entire process from research to implementation",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10   "
                  >
                    <div className="relative space-y-8 py-12 px-8">
                      <div className="space-y-2">
                        <h5 className="font-GTAmerica font-bold text-xl md:text-[2vw] md:leading-[2.4vw]  bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                          {item.title}
                        </h5>
                        <div className="text-base text-black font-arial max-w-xs relative z-10 ">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
      </section>
      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[10vh] ">
        <div className=" px-4 mx-auto  lg:px-6">
          <div className="mx-auto-sm text-center mb-8 ">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  m font-bold tracking-normal text-black   ">
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                STRATEGIC SOLUTIONS
              </span>{" "}
              FOR A LASTING IMPACT
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  px-[5vw]">
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Business Process Analytics
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw]   transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    We identify inefficiencies and make suggestions for
                    improvements in processes and workflows
                  </span>
                </div>
              }
              description={
                <div>
                  <a href="/about">
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
                  </a>
                </div>
              }
              img={"/project-and-consultancy/3.jpg"}
            />
            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Risk Assessment and Mitigation
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw]   transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    We evaluate potential risks associated with outsourcing and
                    implement mitigation strategies well in advance
                  </span>
                </div>
              }
              description={
                <div>
                  <a href="/about">
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
                    </svg>{" "}
                  </a>
                </div>
              }
              img={"/project-and-consultancy/risk.jpg"}
            />

            <HoverCard3
              title={
                <div>
                  <span className="text-white font-bold transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    Strategy Development
                  </span>
                  <br />
                  <span className="text-white font-medium text-[2.5vw] md:text-[1vw]   transition-all duration-300 ease-in-out group-hover:translate-x-2">
                    We determine which services and roles are suitable for
                    outsourcing and develop a step-by-step strategy for
                    outsource transformation
                  </span>
                </div>
              }
              description={
                <div>
                  <a href="/about">
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
                  </a>
                </div>
              }
              img={"/project-and-consultancy/strategic.jpg"}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
      </section>

      <section className="bg-white dark:bg-gray-900 pt-[5vh] md:pt-[10vh] ">
        <div className=" px-4 mx-auto  lg:px-6">
          <div className="mx-auto-sm text-center mb-8 ">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  m font-bold tracking-normal text-black   ">
              WE TAKE CHARGE OF THE{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                ENTIRE PROCESS
              </span>{" "}
            </div>
            <div className={`space-y-4  ${bodyTextStyles.descriptionCenter}`}>
              <div className="w-[100%] ">
                <div>
                  {" "}
                  We understand that no two projects are alike. Our tailor-made
                  approach ensures you achieve measurable outcomes. We carefully
                  assess your unique goals, challenges, and resources to
                  determine the most suitable methodology for your project.
                  Whether you require the flexibility of Agile, the structure of
                  Waterfall, or a hybrid approach, we&apos;ll select the ideal
                  methodology to ensure your project&apos;s success.{" "}
                </div>
                <div>
                  Our team of experienced professionals will work closely with
                  you to develop a customized project plan that aligns with your
                  specific objectives and delivers exceptional results.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
                {steps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-6">
                      <p className="font-GTAmerica font-bold text-xl md:text-[2vw] md:leading-[2.4vw]  bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                        {step.title}
                      </p>
                      <svg
                        className={`w-6 ${
                          index === steps.length - 1
                            ? "text-gray-600"
                            : "text-gray-700"
                        } transform rotate-90 sm:rotate-0`}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        {index === steps.length - 1 ? (
                          <polyline
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="6,12 10,16 18,8"
                          />
                        ) : (
                          <>
                            <line
                              fill="none"
                              strokeMiterlimit="10"
                              x1="2"
                              y1="12"
                              x2="22"
                              y2="12"
                            />
                            <polyline
                              fill="none"
                              strokeMiterlimit="10"
                              points="15,5 22,12 15,19"
                            />
                          </>
                        )}
                      </svg>
                    </div>
                    <p className="text-base text-black font-arial max-w-xs relative z-10">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4  px-[5vw]"></div>
      </section>
      <div className="pt-[5vh] md:pt-[10vh]">
        <PartnershipFeatures />
      </div>

      <TopTierTalent
        description="
Our team holds a minimum of a bachelor’s degree along with relevant qualifications, ensuring that they bring the highest standards of expertise and professionalism to the table.
"
        certDesc="Every member of our team holds a relevant project certification"
      ></TopTierTalent>

      <SecuringInterests></SecuringInterests>

      <ServiceBeyondBorders></ServiceBeyondBorders>

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
