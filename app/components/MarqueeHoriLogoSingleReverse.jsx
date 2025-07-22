import { cn } from "@/lib/utils";
import { Marquee } from "./Marquee";

// ItemCard component to display individual items
const ItemCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-[30vw]  h-[30vw]  md:w-[18vw] md:h-[18vw] cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-[#ffffff] bg-white shadow-md hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-5xa0/[.15]"
      )}
    >
      <img className="w-full h-full object-cover" alt="" src={img} />
    </figure>
  );
};

// MarqueeDemo component to accept `items` as a prop
export default function MarqueeDemo({ items }) {
  // Split items into two rows dynamically
  const firstRow = items.slice(0, Math.ceil(items.length / 2)); // Use ceil for better handling odd number of items
  const secondRow = items.slice(Math.ceil(items.length / 2));

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover reverse={true} className="[--duration:80s]">
        {/* Combine firstRow and secondRow */}
        {[...firstRow, ...secondRow].map((item, index) => (
          <ItemCard key={index} {...item} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
