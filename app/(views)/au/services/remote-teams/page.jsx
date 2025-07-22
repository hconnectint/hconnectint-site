"use client";
import Reveal from "app/components/Reveal";
import HoverCard3 from "app/components/HoverCard3";
import MarqueeHori from "app/components/MarqueeHori";
import Button from "app/components/Button";
import IconCloud from "app/components/LogoCloud";
import CTA from "app/sections/CTA";
import Security from "app/components/security";
import ServiceBeyond from "app/components/ServiceBeyond";
import PartnershipFeatures from "app/components/PartnershipFeatures";
import LandingPageInner from "app/sections/LandingPageInner";
import SectionTextRightDesc from "app/sections/SectionTextRightDesc";

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
const slugs = [
  "oracle",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/GPTW.jpg" },
  { img: "/accredit/CPA.jpg" },

  { img: "/accredit/GPTW-WOMEN.jpg" },
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

const HR = [
  {
    title: "Recruitment & Staffing",
    description:
      "Find the perfect talent for your team through targeted recruitment and efficient onboarding",
  },
  {
    title: "Streamlined Payroll Processing",
    description:
      " Ensure accurate and on-time payroll for your employees, eliminating administrative burdens",
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
      "  Development Create policies and procedures tailored to your company culture and business needs",
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
      " Manage the offboarding process efficiently, ensuring a positive final experience for departing employees.",
  },
  {
    title: "Centralized Database Management",
    description:
      "   Maintain accurate and organized employee data in a secure and accessible database.",
  },
];
const HR4 = [
  {
    title: "Automated HR Processes",
    description: " Save time and resources by automating repetitive HR tasks.",
  },
  {
    title: "Employee Relations",
    description:
      " Conflict resolution that builds trust and commitment to cultivating a positive company culture where every voice is heard.",
  },
];
const RemoteTeams = () => {
  return (
    <div className="w-full ">
      <div className="">
        <div className="mb-[20vh]  md:my-0">
          <LandingPageInner
            subtitle="REMOTE TEAMS"
            titleBeforeBlue={
              <div>
                YOUR GATEWAY TO <br />{" "}
              </div>
            }
            blueTitle=" BEST-IN-CLASS TALENT "
            titleAfterBlue=""
            description={
              <div>
                We provide access to dedicated resources for specialized
                positions with a customized approach which ensures the perfect
                fit for any job. We handle the entire process, end-to-end,
                including sourcing, onboarding, initial set-up and
                infrastructure. <br />
                <div className="">
                  Retain full control over daily operations while benefiting
                  from our cost-effective solutions.
                </div>{" "}
              </div>
            }
            ImgUrl="/service-images/HR.jpg"
          />
        </div>
      </div>
      <CTA
        title="SCHEDULE A FREE CONSULTATION"
        href={"/contact"}
        text={"GET STARTED"}
      ></CTA>
    </div>
  );
};

export default RemoteTeams;
