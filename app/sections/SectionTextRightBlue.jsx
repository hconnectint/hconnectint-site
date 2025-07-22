"use client";
import { Card } from "../components/Card"; // Adjust import path as needed
const commonStyles = {
  title:
    "font-GTAmerica text-4xl md:text-[4.6vw] md:leading-[4.6vw] font-bold tracking-normal text-black",
  blueGradient:
    "bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent",
  description: "font-arial text-sm md:text-base xl:text-xl text-gray-700",
};

const SectionTextRight = ({ whiteTitle, description, component }) => {
  return (
    <section className="md:px-[7%] mx-auto pb-20 md:pb-0 h:20vh md:h-[87vh] bg-gradient-to-bl from-[#2e2e53] to-[#0000ff]">
      <div className="flex flex-col md:flex-row items-center w-full h-full">
        <div className="flex justify-center items-center w-full md:w-[50%] md:order-first">
          {component}
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-[50%] md:order-last">
          <div
            className={`${commonStyles.title} text-center md:text-left md:py-0`}
          >
            {whiteTitle}
          </div>
          <div>
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

export default SectionTextRight;
