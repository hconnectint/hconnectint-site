"use client";

import { CarouselUse } from "app/components/CarouselUse";
import CTA from "app/sections/CTA";
import HoverCard from "app/components/HoverCard";
import HoverCard2 from "app/components/HoverCard2";
import HoverCard5 from "app/components/HoverCard5";
import AwardWinning from "app/components/AwardWinning";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import { DividerWhiteLeft, DividerBlueCenter } from "app/components/Divider";
const progressImages = [
  { img: "/about/1.jpg" },
  { img: "/about/2.jpg" },
  { img: "/about/3.jpg" },
  { img: "/about/4.jpg" },
  { img: "/about/5.jpg" },
  { img: "/about/6.jpg" },
  { img: "/about/7.jpg" },
];
const accredit = [
  { img: "/accredit/ACCA.jpg" },
  { img: "/accredit/CIMA.jpg" },
  { img: "/accredit/CMA.jpg" },
  { img: "/accredit/GPTW.jpg" },
  { img: "/accredit/CPA.jpg" },

  { img: "/accredit/GPTW-WOMEN.jpg" },
];

const LifeAtHciClient = () => {
  return (
    <div className="w-full pt-[15vh] md:pt-[10vh]">
      <section className="flex flex-col items-center w-full mb-[12vh] ">
        {/* Content Section */}
        <div className="w-full px-[5vw] pt-[5vw] text-center">
          <div className="container mx-auto h-full sm:p-10">
            <header className="flex flex-col justify-center items-center">
              <div className="px-4 ">
                {/* Title Section */}
                <div>
                  <div className="text-2xl lg:text-3xl tracking-widest font-GTAmerica font-bold">
                    LIFE AT HCI
                    <span className="bg-gradient-to-bl from-[#27253c] to-[#0000ff] bg-clip-text text-transparent">
                      .
                    </span>
                    <div className="flex justify-center w-full">
                      <div className="w-40 h-[2px] bg-gradient-to-bl from-[#27253c] to-[#0000ff] my-4"></div>
                    </div>
                  </div>
                </div>

                {/* Main Heading */}

                <h1 className={headingStyles.LargeHeading}>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    A WORKPLACE{" "}
                  </span>
                  LIKE NO OTHER
                </h1>

                {/* Description */}

                <div
                  className={`${bodyTextStyles.descriptionCenterAus} pb-10 md:pb-0`}
                >
                  Where every day is a chance to learn, laugh, and fall in love
                  with what you do.
                </div>
              </div>
            </header>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  px-[5vw]">
            <HoverCard
              title={"We Celebrate You"}
              description={
                " We celebrate individuality and appreciate quirks. We want you to be your authentic self."
              }
              img={"/life-at-hci/celebrate.jpg"}
            />
            <HoverCard
              title={"We Invest in You"}
              description={
                "We provide training, and create opportunities for you to grow, whether it's technical, creative, or anything in between."
              }
              img={"/life-at-hci/invest.jpg"}
            />{" "}
            <HoverCard
              title={"We Listen to You"}
              description={
                "Your title and tenure don't define your opportunities. Your voice will always be heard."
              }
              img={"/life-at-hci/listen.jpg"}
            />
          </div>
        </div>{" "}
        {/* Marquee Section */}
      </section>
      <section className="px-4 sm:px-[5%] h-auto md:h-screen flex items-center justify-center mb-[-10vh] py-12 md:py-0 bg-gradient-to-bl from-[#2e2e53] to-[#0000ff]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Section - Second on Mobile, First on Desktop */}
            <div className="order-1 flex items-center">
              <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[48%] md:order-first ">
                <div
                  className={`${headingStyles.WhiteCenter} text-center md:text-left pt-8 md:py-0`}
                >
                  CONTINUOUS
                  <br /> LEARNING
                </div>

                <div className="w-[80vw] text-center md:text-left md:w-[40vw]">
                  <DividerWhiteLeft />
                  <div className="xl:pr-[10vw]">
                    <div className={`${bodyTextStyles.white} `}>
                      Every day, you&apos;ll be at the forefront of the
                      industry, connecting with international clients, experts,
                      and leaders. Our comprehensive training programs equip you
                      for this with personalized programs and ongoing guidance.
                      With us, you&apos;ll not only excel in your role but also
                      unlock your full potential, positioning yourself for a
                      successful and rewarding career, wherever you are.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Grid - First on Mobile, Second on Desktop */}
            <div className="order-1 md:order-2 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6">
                <HoverCard5
                  title="Expert-led Technical Training Programs"
                  img="/con-learning/expert-lead.jpg"
                />
                <HoverCard5
                  title="Interpersonal Skill Development Initiatives"
                  img="/con-learning/skill-dev.jpg"
                />
                <HoverCard5
                  title="Inter-team Cross Training"
                  img="/con-learning/inter-team.jpg"
                />
                <HoverCard5
                  title="Designated Online Learning Portal"
                  img="/con-learning/learning.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[10vh] md:pt-[4vh] mb-[5vh] md:mb-[10vh]"></div>
      <section>
        <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[6.2vh] lg:px-6">
          <div className="mx-auto-sm text-center mb-8 lg:mb-16">
            <div className={headingStyles.primaryCenter}>
              WORK HARD.{" "}
              <span className={headingStyles.gradient}>PLAY HARD. </span>{" "}
            </div>
            <DividerBlueCenter />
          </div>
        </div>

        <div className="flex justify-center">
          <CarouselUse />
        </div>
      </section>
      <div className="pt-[10vh] md:pt-[4vh] mb-[5vh] md:mb-[10vh]">
        <AwardWinning />
      </div>
      <div className="mt-[10vh]"></div>
      <CTA
        title={<>Ready to be part of the team?</>}
        href={"mailto:careers@hconnectint.com"}
        text={"Join Us"}
      ></CTA>{" "}
    </div>
  );
};

export default LifeAtHciClient;
