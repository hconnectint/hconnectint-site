import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
import ServiceBeyond from "app/components/ServiceBeyond";

const serviceBorders = [
  {
    title: "A True Extension",
    description:
      "Our dynamic team is an extension of yours. adopting your workflows, systems and norms. We become a part of your operations. ",
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
      "We regularly host clients in our Colombo offices and travel to meet them in Australia too. This face-to-face interaction strengthens connections.",
  },
  {
    title: "CEO - Led Commitment",
    description:
      "With direct access to our CEO, your concerns and priorities are always at the forefront. We're dedicated to providing a level of personalized service that goes beyond the ordinary.",
  },
];

const ServiceBeyondBorders = () => {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[6vh] lg:px-6">
        <div className="mx-auto-sm text-center mb-8 lg:mb-16">
          <div className={headingStyles.primaryCenter}>
            SERVICE{" "}
            <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
              BEYOND BORDERS
            </span>
            <div className=" lg:mb-[-1vh]">
              {" "}
              <DividerBlueCenter />
            </div>
          </div>
          <div className={bodyTextStyles.descriptionCenter}>
            Experience a new level of partnership where professionalism meets
            accessibility. No red tape, just results. Our client-first
            philosophy drives everything we do, from concierge-level service to
            personalized attention. You&apos;ll work with real people who are
            committed to your success. Your dedicated relationship manager will
            ensure your needs are met promptly and efficiently.
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
    </section>
  );
};

export default ServiceBeyondBorders;
