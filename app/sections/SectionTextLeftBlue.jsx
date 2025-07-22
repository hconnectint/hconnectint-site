"use client";
import { Card } from "../components/Card"; // Adjust import path as needed
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
} from "app/components/Divider";

const commonStyles = {
  title:
    "font-GTAmerica text-4xl md:text-[4.6vw] md:leading-[4.6vw] font-bold tracking-normal text-white",
  blueGradient:
    "bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent",
  description: "font-arial text-sm md:text-base xl:text-xl text-white",
};
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

const SectionTextLeft = ({ whiteTitle, description, component }) => {
  return (
    <section className="md:px-[7%] mx-auto  md:pb-0 min-h-[20vh]  bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] flex items-center  ">
      <div className=" flex flex-col md:flex-row w-full h-full  py-[10vh]  md:px-[3%]">
        <div className="flex justify-center items-center w-full md:w-[50%] md:order-last ">
          {component}
        </div>

        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[48%] md:order-first">
          <div
            className={`${commonStyles.title} text-center md:text-left md:py-0 pt-8`}
          >
            {whiteTitle}
          </div>

          <div>
            <DividerWhiteLeft />

            <div
              className={`${commonStyles.description} text-center md:text-left mt-4`}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTextLeft;
