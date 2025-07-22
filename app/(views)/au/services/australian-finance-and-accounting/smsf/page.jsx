import ServiceBeyond from "app/components/ServiceBeyond";
import CTA from "app/sections/CTA";
import PartnershipFeaturesAus from "app/components/PartnershipFeaturesAus";
import { DividerBlueCenter } from "app/components/Divider";

const logos = [
  {
    name: "class",
    url: "/suite-logo/class.png",
  },
  {
    name: "bgl",
    url: "/suite-logo/bgl.png",
  },
];

const serviceBorders = [
  {
    title: "Seamless SMSF Setup & Establishment",
    description:
      "We take care of the entire setup process, ensuring each SMSF is compliant from the start, minimizing your workload ",
  },
  {
    title: "Enhanced Contribution & Investment Management",
    description:
      "We handle contributions, manage investments, and monitor performance to optimize your clients' retirement savings",
  },
];

const serviceBorders2 = [
  {
    title: "Expert Taxation & Regulatory Compliance",
    description:
      "We ensure SMSFs meet all tax and regulatory requirements, minimizing any potential risks",
  },
  {
    title: "Coordinate Auditing:",
    description:
      "We coordinate annual audits by efficiently organizing your documents, ensuring all necessary information is provided for the auditor",
  },
];

const Smsf = () => {
  return (
    <div className="">
      <section className="">
        <div className="max-w-screen-xl mx-auto pt-[15vh] md:pt-[15vh]  lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw] font-bold tracking-normal text-black  ">
              SELF MANAGED{" "}
              <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                SUPERFUNDS
              </span>
            </div>
            <div className=" lg:mt-[-2.3vh]">
              <DividerBlueCenter />
            </div>

            <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0">
              Our team takes over routine administration tasks so you can focus
              on what truly matters—building stronger client relationships. By
              managing the administrative workload, we allow you to work smarter
              and more effectively, delivering better outcomes for your clients.
            </div>
          </div>
          <div className="mx-auto ">
            <div className="flex mx-auto justify-center ">
              <ServiceBeyond features={serviceBorders} />
            </div>
            <div className="flex justify-center ">
              <ServiceBeyond features={serviceBorders2} />
            </div>
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5"></div>
          </div>
        </div>
        <div className="pt-[5vh] md:pt-[10vh] ">
          <PartnershipFeaturesAus />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[5vh]  lg:px-6 ">
        <div className="mx-auto ">
          <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
            <section>
              <div className="max-w-screen-xl mx-auto  px-4  lg:px-6 mt-[4vh]  mb-[-5vh]">
                <div className="mx-auto-sm text-center mb-8 lg:mb-16">
                  <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black ">
                    OUR{" "}
                    <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                      COMPREHENSIVE
                    </span>{" "}
                    SUITE
                  </div>
                  <div className=" lg:mt-[-2.3vh]">
                    <DividerBlueCenter />
                  </div>

                  <div className="font-arial text-sm md:text-base xl:text-xl mt-2 text-black px-4 md:px-0 ">
                    We are equipped with the right tools for the right job
                  </div>
                </div>
                <div className="flex justify-center ">
                  <div className=" justify-center"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex w-full flex-col items-center justify-center px-4 md:px-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-6 ">
                    {logos.map((logo, key) => (
                      <img
                        key={key}
                        src={logo.url}
                        className="h-[15vh] md:h-[30vh]  w-full object-contain"
                        alt={`${logo.name}`}
                      />
                    ))}
                  </div>
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

export default Smsf;
