"use client";
import { cn } from "../lib/util";

export function Card() {
  return (
    <div className="max-w-[100vw] w-[100vw] md:max-w-[50vw] md:w-[40vw] my-8 md:m-6">
      <div
        className={cn(
          "group cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://mrwallpaper.com/images/hd/colorful-finance-reports-and-charts-sjfl27ehdupf10xz.jpg)] bg-cover aspect-square",
          // Preload hover image
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWE3MHIyMHgydDJudTgwNml1ODVybDh3YnVldGhtaGx0bXE1ZXB5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lbcLMX9B6sTsGjUmS3/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWE3MHIyMHgydDJudTgwNml1ODVybDh3YnVldGhtaGx0bXE1ZXB5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lbcLMX9B6sTsGjUmS3/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative"></h1>
          <p className="font-normal text-base text-gray-50 relative my-4"></p>
        </div>
      </div>
    </div>
  );
}
