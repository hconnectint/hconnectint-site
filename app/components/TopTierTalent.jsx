import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
const TopTierTalent = ({ description, certDesc }) => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto pb-8 px-4 pt-[5vh] md:pt-[10vh] lg:px-6">
        <div className="mx-auto-sm text-center mb-8 lg:mb-16">
          <div className={headingStyles.primaryCenter}>
            <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
              TOP TIER
            </span>{" "}
            TALENT
          </div>
          <div className=" lg:mb-[-1vh]">
            {" "}
            <DividerBlueCenter />
          </div>
          <div className={bodyTextStyles.descriptionCenter}>
            {description ||
              "We're your premier source for exceptional financial talent. All our professionals hold a minimum of a bachelor's degree along with relevant qualifications, including CIMA, AICPA, ACCA, CA, and CPA, ensuring that they bring the highest standards of expertise and professionalism to your organization"}
          </div>
        </div>
        <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-4 border-[#0c0cc9] p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
            <h3 className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent font-GTAmerica font-bold text-2xl md:text-[1.8vw] pb-3">
              CERTIFIED
            </h3>
            <div className="font-font-arial text-sm md:text-base  text-black">
              {certDesc ||
                "Every member of our team holds a relevant finance certification"}{" "}
            </div>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-4 border-[#0c0cc9] p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent font-GTAmerica font-bold text-2xl md:text-[1.8vw] pb-3">
              DRIVEN
            </h3>{" "}
            <div className="font-font-arial text-sm md:text-base  text-black">
              {" "}
              Our relentless pursuit of excellence is contagious
            </div>
          </div>
          <div className="grid gap-4 justify-items-center text-center md:flex-1">
            <div className="rounded-full border-4 border-[#0c0cc9] p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-14 h-14"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent font-GTAmerica font-bold text-2xl md:text-[1.8vw] pb-3">
              EXPERTLY TRAINED
            </h3>{" "}
            <div className="font-font-arial text-sm md:text-base  text-black ">
              With regular training to ensure they are always at the top of
              their game
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTierTalent;
