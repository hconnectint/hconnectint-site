"use client";
import { DividerBlueCenter, DividerBlueLeft } from "app/components/Divider";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import MarqueeVert from "app/components/MarqueeVert";

const commonStyles = {
  title:
    "font-GTAmerica text-4xl md:text-[4.6vw] md:leading-[4.6vw] font-bold tracking-normal text-black",
  blueGradient:
    "bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent",
  description: "font-arial text-sm md:text-base xl:text-xl text-gray-700",
};

const progressImages = [
  { img: "/progress/1.jpg" },
  { img: "/progress/10.jpg" },
  { img: "/progress/2.jpg" },
  { img: "/progress/9.jpg" },
  { img: "/progress/3.jpg" },
  { img: "/progress/8.jpg" },
  { img: "/progress/4.jpg" },
  { img: "/progress/9.jpg" },
  { img: "/progress/5.jpg" },
  { img: "/progress/10.jpg" },
  { img: "/progress/11.jpg" },
  { img: "/progress/12.jpg" },
  { img: "/progress/14.jpg" },
  { img: "/progress/13.jpg" },
  { img: "/progress/14.jpg" },
  { img: "/progress/15.jpg" },
  { img: "/progress/17.jpg" },
  { img: "/progress/16.jpg" },
  { img: "/progress/18.jpg" },
  { img: "/progress/19.jpg" },
  { img: "/progress/20.jpg" },
];

const SectionTextRightLong = ({
  titleBeforeBlue,
  titleAfterBlue,
  blueTitle,
  description,
  component,
}) => {
  return (
    <section className="bg-white px-[2vh]">
      <div className="md:px-[7%] mx-auto py-20 md:my-[8vh] h:20vh md:h-[100vh]    ">
        <div className="flex flex-col md:flex-row items-center w-full h-full">
          <div className="flex justify-start items-center w-full md:w-[50%] md:order-first md:mb-[10vh] md:px-[%]">
            <MarqueeVert items={progressImages} />{" "}
          </div>

          <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[50%] md:order-last lg:ml-[8vh]">
            <div
              className={`${headingStyles.primaryLeft} text-left md:text-left pt-8 md:py-0`}
            >
              A <span className={`${commonStyles.blueGradient}`}>PATH </span>
              TO PROGRESS{" "}
            </div>

            <div>
              <DividerBlueLeft />

              <div
                className={`${bodyTextStyles.descriptionLeft} text-center md:text-left mt-4`}
              >
                <div className={`space-y-4  ${bodyTextStyles.descriptionLeft}`}>
                  <div>
                    We are a leading provider of BPO services, Recognised for
                    delivering a comprehensive range of solutions, including
                    finance and accounting, procurement, technology, and
                    marketing as a service. Our team is committed to innovation
                    and excellence and continues to set new standards in the
                    outsourcing industry.
                  </div>
                  <div>
                    We build lasting partnerships through exceptional service
                    and tailored solutions that meet the unique needs of our
                    global partners.
                  </div>
                  <div>
                    By embracing industry best practices and leveraging
                    cutting-edge technologies, our team drives optimal
                    performance and sustainable growth for every client.
                  </div>
                  <div>
                    We are H Connect International, a trusted partner for
                    businesses worldwide, empowering them to thrive in an
                    ever-evolving market.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTextRightLong;
