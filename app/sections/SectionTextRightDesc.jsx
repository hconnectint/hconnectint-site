"use client";

import { Card } from "../components/Card";

const SectionTextRight = ({
  titleBeforeBlue,
  titleAfterBlue,
  blueTitle,
  description,
  component,
}) => {
  return (
    <section className="h:20vh md:h-[87vh] flex items-center justify-center md:pt-[5%] md:pb-[5%] px-[2%]">
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
          {/* Left side: Component or default Card */}
          <div className="h-full w-full order-first md:order-none flex justify-center">
            {component || <Card />}
          </div>

          {/* Right side: Text content */}
          <div>
            {/* Title text */}

            {/* Description */}
            <div className="pr-0 sm:pr-[5vw] px-8 md:px-0">
              <div className="font-arial text-sm md:text-base xl:text-xl text-black text-center md:text-left w-[90%]">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTextRight;
