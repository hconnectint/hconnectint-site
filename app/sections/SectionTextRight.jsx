"use client";
import { DividerBlueCenter, DividerBlueLeft } from "app/components/Divider";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

const commonStyles = {
  title:
    "font-GTAmerica text-4xl md:text-[4.6vw] md:leading-[4.6vw] font-bold tracking-normal text-black",
  blueGradient:
    "bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent",
  description: "font-arial text-sm md:text-base xl:text-xl text-gray-700",
};

const SectionTextRight = ({
  titleBeforeBlue,
  titleAfterBlue,
  blueTitle,
  description,
  component,
}) => {
  return (
    <section className="md:px-[7%] mx-auto py-20 md:pb-0 h:20vh md:h-[87vh]  ">
      <div className="flex flex-col md:flex-row items-center w-full h-full">
        <div className="flex justify-start items-center w-full md:w-[50%] md:order-first md:mb-[10vh] md:px-[%]">
          {component}
        </div>

        <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[50%] md:order-last">
          <div
            className={`${headingStyles.primaryLeft} text-left md:text-left pt-8 md:py-0`}
          >
            {titleBeforeBlue}
            <span className={`${commonStyles.blueGradient}`}>{blueTitle}</span>
            {titleAfterBlue}
          </div>

          <div>
            <DividerBlueLeft />

            <div
              className={`${bodyTextStyles.descriptionLeft} text-center md:text-left mt-4`}
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
