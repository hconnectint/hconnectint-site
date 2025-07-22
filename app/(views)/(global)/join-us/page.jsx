import Container from "app/sections/Container";
import { Card } from "app/components/Card";
import GrowWithoutLimits from "app/components/GrowWithoutLimits";
import MarqueeVert from "app/components/MarqueeVert";
import CTA from "app/sections/CTA";
import AwardWinning from "app/components/AwardWinning";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import LandingPageInner from "app/sections/LandingPageInner";

import MarqueeHori from "app/components/MarqueeHori";

const logos = [
  {
    name: "ISO",
    url: "/accredit/GPTW.jpg",
  },
  {
    name: "DPA",
    url: "/accredit/GPTW-WOMEN.jpg",
  },
];

const JoinUs = () => {
  return (
    <div className="w-full">
      <LandingPageInner
        subtitle="JOIN US"
        titleBeforeBlue="BE A PART OF THE"
        blueTitle=" DIFFERENCE "
        description="                A culture that allows you to be unapologetically you and the
        support you need to thrive."
        ImgUrl="/gang2.jpg"
      />

      <div className="pt-[10vh] md:pt-[10vh] mb-[5vh] md:mb-[10vh]">
        <AwardWinning />
      </div>
      <CTA
        title={"Ready to be part of the team?"}
        href={"mailto:careers@hconnectint.com"}
        text={"Get in touch"}
      ></CTA>
    </div>
  );
};

export default JoinUs;
