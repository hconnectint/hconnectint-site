import { cn } from "@/lib/utils";
import { Marquee } from "./Marquee";

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "cursor-pointer overflow-hidden rounded-xl border md:h-[20vh] md:w-[11.5vw]",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img
        className=" h-[15vh] w-[80vh]   md:w-full md:h-full object-cover "
        alt=""
        src={img}
      />
    </figure>
  );
};
export default function MarqueeVert({ items = [] }) {
  // Ensure we have at least 3 items to distribute
  if (items.length < 3) {
    return null;
  }

  // Distribute items more evenly across three rows
  const firstRow = items.filter((_, index) => index % 3 === 0);
  const secondRow = items.filter((_, index) => index % 3 === 1);
  const thirdRow = items.filter((_, index) => index % 3 === 2);

  return (
    <div className="relative flex h-[40vh] md:h-[80vh] w-full md:w-[100%] flex-row items-center  overflow-hidden rounded-lg bg-[#2e2e5300] ">
      <Marquee pauseOnHover vertical className="[--duration:70s]">
        {firstRow.map((item, index) => (
          <ReviewCard key={`first-${index}`} {...item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:70s]">
        {secondRow.map((item, index) => (
          <ReviewCard key={`second-${index}`} {...item} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:70s]">
        {thirdRow.map((item, index) => (
          <ReviewCard key={`third-${index}`} {...item} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
