import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
import Security from "app/components/security";

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
      " Our dedicated team provides round-the-clock support to ensure your systems are always running smoothly",
  },
];
const logos = [
  {
    name: "ISO",
    url: "/accredit/ISO.jpg",
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
    name: "PrivacyAct",
    url: "/DataProtection/privacyAct.jpg",
  },
];
const SecuringInterests = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[6.2vh] lg:px-6">
        <div className="mx-auto-sm text-center mb-8 lg:mb-16">
          <div className={headingStyles.primaryCenter}>
            <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
              SECURING
            </span>{" "}
            YOUR INTERESTS
            <div className=" lg:mb-[-1vh]">
              {" "}
              <DividerBlueCenter />
            </div>
          </div>

          <div className={bodyTextStyles.descriptionCenter}>
            We have a comprehensive system with controls that protect your data
            with the utmost diligence.
          </div>
        </div>
        <div className="mx-auto mt-[-4vh] m-10">
          <Security features={sec} />
        </div>
        <div className="font-arial text-sm md:text-base text-center xl:text-xl mt-2 text-black pb-5">
          We strictly adhere to all applicable laws and regulations in every
          region we operate.
        </div>
        <div className="w-full pt-[2vh]">
          <div className="flex w-full flex-col items-center justify-center px-4 md:px-20">
            <div className="grid grid-cols-1 gap-x-6 md:grid-cols-4">
              {logos.map((logo, key) => (
                <img
                  key={key}
                  src={logo.url}
                  className="h-[20vh] md:h-[30vh] w-full object-contain"
                  alt={`${logo.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuringInterests;
