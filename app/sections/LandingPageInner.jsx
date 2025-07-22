import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerBlueLeftShort,
  DividerBlueShort,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
const LandingPageInner = ({
  titleBeforeBlue,
  titleAfterBlue,
  blueTitle,
  description,
  subtitle,
  ImgUrl,
}) => {
  return (
    <div className="pt-[30px] md:pt-[5vh]">
      <section className="flex flex-wrap flex-col-reverse sm:flex-row pt-[14vh] md:pt-[5vh]">
        {/* Text Content */}
        <div className="w-full md:w-8/12  ">
          <div className="container mx-auto lg:px-20 h-[30vh] md:h-dvh ">
            <div className="container px-4 flex flex-col justify-center items-center h-full lg:mt-0 ">
              <div className="w-full text-center md:text-left ">
                <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                  {subtitle}
                  <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                    .
                  </span>
                  <div className="flex justify-center md:justify-start w-full">
                    <DividerBlueLeftShort />{" "}
                  </div>
                </div>
                <h1 className={headingStyles.LargeHeading}>
                  {titleBeforeBlue}
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    {blueTitle}
                  </span>
                  <br /> {titleAfterBlue}
                </h1>
                <div className={bodyTextStyles.descriptionLeft}>
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          src={ImgUrl}
          alt="Finance Reports"
          className="w-full sm:h-screen sm:w-4/12 object-cover hidden md:block"
        />
      </section>
    </div>
  );
};

export default LandingPageInner;
