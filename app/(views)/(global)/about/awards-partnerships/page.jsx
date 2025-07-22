"use client";
import CTA from "app/sections/CTA";
import AwardWinning from "app/components/AwardWinning";
import MarqueeHoriLogoSingle from "app/components/MarqueeHoriLogoSingle";
import AwardsText from "app/components/AwardsText";
import { DividerBlueCenter } from "app/components/Divider";

const accredit = [
  { img: "/accredit/ACCA.webp" },
  { img: "/accredit/CIMA.webp" },
  { img: "/accredit/CMA.webp" },
  { img: "/accredit/GPTW-2025.webp" },
  { img: "/accredit/CPA.webp" },
  { img: "/accredit/ISO.webp" },

  { img: "/accredit/AMCHAM.webp" },
  { img: "/accredit/BRIT.webp" },

  { img: "/accredit/ACCU.webp" },
  { img: "/accredit/SLASSCOM.webp" },

  { img: "/accredit/EDB.webp" },
];
const AwardsPartnerships = () => {
  return (
    <>
      <div className="w-full pt-[15vh] md:pt-[10vh]">
        <div className="mt-[5vh]"></div>
        <AwardsText />

        <section className="pt-[15vh] md:pt-[10vh]">
          <div className="max-w-screen-xl mx-auto  px-4  lg:px-6 mt-[4vh]">
            <div className="mx-auto-sm text-center mb-8 lg:mb-16">
              <div className="font-GTAmerica text-4xl md:px-5 md:text-[7vw] md:leading-[7vw]  lg:text-[4.6vw]  font-bold tracking-normal text-black ">
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  ACCREDITED
                </span>{" "}
                BY THE BEST
              </div>
              <DividerBlueCenter />

              <div className="mt-[5vh]"></div>
              <MarqueeHoriLogoSingle items={accredit}> </MarqueeHoriLogoSingle>
            </div>
          </div>
        </section>

        <div className="pt-[5vh] ">
          <CTA
            title={"CONNECT WITH US TODAY"}
            href={"/contact"}
            text={"Get in touch"}
          ></CTA>
        </div>
      </div>
    </>
  );
};

export default AwardsPartnerships;
