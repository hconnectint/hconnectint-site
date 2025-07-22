import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";
// Event details object
const events = [
  {
    id: 1,
    title: "Out Bound Training",
    image: "/events/Out-bound-training.jpg",
  },
  {
    id: 2,
    title: "CPA President's Cocktail",
    image: "/events/CPA-Presidents-Cocktail.jpg",
  },
  {
    id: 3,
    title: "Cricket Match",
    image: "/events/cricket-match.jpg",
  },
  {
    id: 4,
    title: "Halloween",
    image: "/events/Halloween.jpg",
  },
  {
    id: 5,
    title: "GPTW",
    image: "/events/GPTW.jpg",
  },
  {
    id: 6,
    title: "Run for their lives",
    image: "/events/RFTL.png",
  },
  {
    id: 7,
    title: "Christmas Party",
    image: "/events/christmas-party.png",
    description: "Annual summer celebration",
  },
  {
    id: 8,
    title: "Koru",
    image: "/events/koru.png",
  },
  {
    id: 9,
    title: "Cupid's Catwalk",
    image: "/events/cupid-cakewalk.jpg",
  },
  {
    id: 10,
    title: "Care Collective",
    image: "/events/CareCollective.jpg",
  },
  {
    id: 11,
    title: "HR Debate",
    image: "/events/hr-debate.jpg",
  },
  {
    id: 12,
    title: "2025 1st Day",
    image: "/events/2025-1st.jpg",
  },
  {
    id: 13,
    title: "TGIM",
    image: "/events/TGIM.jpg",
  },
  {
    id: 14,
    title: "Pickle Smash",
    image: "/events/pickle.jpg",
  },
  {
    id: 15,
    title: "Accelerate Action '25",
    image: "/events/action.jpg",
  },
  {
    id: 16,
    title: "Avurudu '25",
    image: "/events/Avurudu.jpg",
  },
  {
    id: 17,
    title: "CIMA-JXG Pinnacle Awards",
    image: "/events/cima-jxg.jpg",
  },
  {
    id: 18,
    title: "Poson Donation Drive",
    image: "/events/Poson-Donation-Drive.jpg",
  },
  {
    id: 20,
    title: "The Great HR Quiz",
    image: "/events/hr-quiz.jpg",
  },
  // Add more events as needed
];

export function CarouselUse() {
  return (
    <Carousel className="w-full max-w-screen-lg">
      <CarouselContent className="-ml-1">
        {events
          .slice()
          .reverse()
          .map((event) => (
            <CarouselItem
              key={event.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-square items-end justify-center p-6 bg-blue-900">
                    {/* Image Section */}
                    <img
                      src={event.image}
                      alt={`${event.title} event`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Overlay Content */}
                    <span
                      style={{
                        background: "rgba(255, 255, 255, 0)",
                        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        padding: "10px",
                        width: "100%",
                      }}
                      className="relative z-10 text-2xl font-semibold flex justify-center text-white font-GTAmerica"
                    >
                      {event.title}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
