"use client";
import { DividerBlueCenter, DividerWhiteLeft } from "app/components/Divider";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import Button from "app/components/Button";
const commonStyles = {
  title:
    "font-GTAmerica text-4xl md:text-[4.6vw] md:leading-[4.6vw] font-bold tracking-normal text-white",
  blueGradient:
    "bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent",
  description: "font-arial text-sm md:text-base xl:text-xl text-gray-700",
};

const SectionTextLeftLongBlue = ({ title, description, component, text }) => {
  return (
    <section className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] md:pl-[5vh] mb-[5vh] md:mb-[5vh]">
      <div className="md:px-[7%] mx-auto py-20 md:mt-[8vh] h:[100vh] md:h-[100vh]  mb-[-10vh]">
        <div className="flex flex-col md:flex-row items-center w-full h-full container">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[50%] order-last md:order-first">
            <div
              className={`${headingStyles.WhiteCenter} text-left md:text-left pt-8 md:py-0`}
            >
              {title}
            </div>

            <div>
              <DividerWhiteLeft />

              <div
                className={`${bodyTextStyles.white} text-center md:text-left mt-4`}
              >
                {description}
              </div>
            </div>
            <div className="mt-[2vh]">
              <Button text={text} href={"/request-appointment"}></Button>
            </div>
          </div>

          <div className="flex justify-start items-center  md:w-[50%] order-first md:order-last md:mb-[10vh] md:px-[%]">
            {component}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTextLeftLongBlue;
