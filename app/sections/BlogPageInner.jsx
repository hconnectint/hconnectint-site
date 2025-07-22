import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerBlueLeftShort,
  DividerBlueShort,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
const BlogPageInner = ({
  titleBeforeBlue,
  titleAfterBlue,
  blueTitle,
  description,
  subtitle,
  ImgUrl,
}) => {
  return (
    <div className="pt-[30px] md:pt-[10vh]">
      <section className="flex flex-col items-center pt-[14vh] md:pt-[5vh]">
        {/* Text Content */}
        <div className="w-full md:w-8/12 text-center">
          <div className="container mx-auto lg:px-20 h-auto">
            <div className="container px-4 flex flex-col justify-center items-center h-full lg:mt-0">
              <div className="w-full">
                <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                  {subtitle}
                  <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                    .
                  </span>
                  <div className="flex justify-center w-full">
                    <DividerBlueLeftShort />
                  </div>
                </div>
                <h1 className="text-[10.5vw] leading-[10.5vw]  sm:text-[10.5vw] sm:leading-[10.5vw]  md:text-[8vw] md:leading-[8vw] lg:text-[5vw] lg:leading-[5vw] font-GTAmerica font-bold">
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    {blueTitle}
                  </span>
                  <br />
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
          className="md:w-[50vw]  md:h-[50vh]  object-cover mt-10"
        />
      </section>
    </div>
  );
};

export default BlogPageInner;
