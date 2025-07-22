import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerBlueCenter,
  DividerBlueLeft,
  DividerWhiteLeft,
  DividerWhiteCenter,
} from "app/components/Divider";
import Security from "app/components/security";

const logos = [
  {
    img: "/accredit/GPTW.jpg",
    title: "Great Place to Work® Certified",
    description:
      "We are Great Place to Work® certified – proof of our commitment to building a workplace like no other.",
  },
  {
    img: "/accredit/GPTW-WOMEN.jpg",
    title: "Best Workplaces for Women",
    description:
      "Awarded as one of the Top 15 Best Workplaces for Women in Sri Lanka, a ranking determined by the insights of over 80,000 employees from 150 organisations.",
  },
  {
    img: "/award/SATYN-2.jpg",
    title: "Women Friendly Workplace Awards",
    description:
      "Honoured to be Sri Lanka's top choice for 'Empowering GenZ Females with Leadership Opportunities,' standing out among 56 leading corporates.",
  },

  {
    img: "/award/partner.jpg",
    title: "AICPA and CIMA Partner Organisation",
    description:
      "Named AICPA and CIMA Partner Organisation of the Year among the APAC region for our shared vision with the AICPA and CIMA community.",
  },
  {
    img: "/award/leadership.jpg",
    title: "AICPA and CIMA Partner Organisation",
    description:
      "Named AICPA and CIMA Partner Organisation of the Year among the APAC region for our shared vision with the AICPA and CIMA community.",
  },
  {
    img: "/award/digiTransform.jpg",
    title: "CGMA Digital Transformation Award: Asia Pacific",
    description:
      "Honoured as a technological trailblazer, a distinction earned among 1,200 Asia Pacific applicant",
  },
  {
    img: "/award/sustain.jpg",
    title: "CGMA Sustainability Award: Asia Pacific",
    description:
      "Recognised for outstanding social & environmental responsibility from a pool of 1,200 Asia Pacific contenders. ",
  },
  {
    img: "/award/innovation.jpg",
    title: "CGMA Innovation Award: Asia Pacific",
    description:
      "Celebrated for exceptional client success through innovation, a top achievement from 1,200 Asia Pacific entries.",
  },
  {
    img: "/award/pinnacle.jpg",
    title: "CIMA – JXG Pinnacle Award 2025",
    description:
      "Honoured at the prestigious CIMA – JXG Pinnacle Awards 2025 for exemplifying leadership, innovation, and purpose-driven excellence—recognised among Sri Lanka’s most distinguished corporate achievements.",
  },
];

const AwardWinning = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto pt-[5vh] md:pt-[6.2vh] lg:px-6">
        <div className="mx-auto-sm text-center mb-8 lg:mb-8">
          <div className={headingStyles.primaryCenter}>
            AN <span className={headingStyles.gradient}>AWARD-WINNING </span>{" "}
            CULTURE{" "}
          </div>
          <DividerBlueCenter />
        </div>

        <div className="w-full">
          <div className="flex w-full flex-col items-center justify-center px-4 md:px-20">
            <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:gap-x-16 md:grid-cols-3">
              {logos.map((logo, key) => (
                <div
                  key={key}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={logo.img}
                    className="h-[40vh] xl:h-[28vh] object-contain bg-white shadow-md rounded-md"
                    alt={logo.name}
                  />
                  <h3 className="mt-4 text-base font-semibold text-gray-800">
                    {logo.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {logo.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardWinning;
