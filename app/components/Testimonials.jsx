"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Global Apparel Manufacturer (USA) ",
    role: "Vice President, Contoller",
    image: "/united-states.png",
    feedback:
      "Our experience partnering with H Connect International has been nothing short of spectacular. They are extremely professional, courteous, organized, and responsive to our needs. They employ qualified and hard-working individuals, closely monitor their performance, and provide the leadership needed to ensure everything runs smoothly. Whenever anything needs to be addressed, such as performance with specific tasks or a new challenge arises, H Connect International strongly partners in crafting viable solutions and ensures each challenge is overcome expeditiously. We're not only thankful for the ease of knowing we can count on success with H Connect International, we're also blessed that they are incredibly friendly and easy to work with.      ",
  },
  {
    name: "FMCG Distributor (Australia)",
    role: "Managing Director",
    image: "/australia.png",
    feedback:
      "We have been with H Connect International from day one. As a matter of fact, we were their very first client, and the fact that we are still with them speaks volumes on what we have achieved together over the years. \n\nWith all the ups & downs as you would expect when moving from an in-house setup to an external one, I must say that it was not easy, but the team at H Connect International did their best to absorb, learn, and adapt.\n\nThey have learnt our business despite the distance, and today it's as if they are sitting with us in the same building.\n\nHardworking, diligent, conscientious, honest & never a sigh – that's what they are about.\n\nH Connect International, thank you for your service and a big thank you to our offshore team.",
  },
  {
    name: " BeSci Tech Firm (United States)   ",
    role: "Head of Product, ",
    image: "/united-states.png",
    feedback:
      "H Connect has been an invaluable partner in handling our accounting and operations. Their team is not only reliable but also consistently helpful, resourceful, and dedicated to delivering high-quality work. Their loyalty and commitment to excellence have made a significant impact on our efficiency, allowing us to focus on our core business with confidence.",
  },
  {
    name: " SaaS & Financial Services Firm   ",
    role: "CEO & Co founder",
    image: "/canada.png",
    feedback:
      "H Connect International has always answered our call to action, and we truly appreciate their reliability. Their professionalism and dedication make them an invaluable partner, and we look forward to continuing this great collaboration. We are incredibly grateful for our partnership with the team at H Connect International. Over the past year, they have consistently demonstrated responsiveness, a commitment to excellence, and exceptional communication. Their dedicated team members always complete our work on time, ensuring we are never left in the dark or faced with unexpected delays.      ",
  },
  {
    name: " Financial Services Firm ",
    role: "CEO",
    image: "/australia.png",
    feedback:
      "We are incredibly grateful to have worked with our team at H Connect International these past few years. They've been consistently responsive, highly committed to delivering excellent results, and always maintained fantastic communication throughout every project. It's truly been a pleasure partnering with them, and I look forward to continuing the great work together.",
  },
  {
    name: "  Residential Care Provider",
    role: "Director",
    image: "/united-kingdom.png",
    feedback:
      "We engaged H Connect International to help support our business with finance, payroll, and HR. We were invited to their Colombo office during which the team undertook comprehensive training and process mapping to really understand our requirements. H Connect International has become an important partner, delivering consistent value and helping us implement improved business processes.",
  },
  {
    name: "  Early Childhood Educator    ",
    role: "CEO",
    image: "/united-kingdom.png",
    feedback:
      "We would like to extend our sincere gratitude to the team at H Connect International for their help in our day-to-day accounting functions. It has been 5 years since we partnered with H Connect International, and it's been a consistently smooth journey. Thank you for all the support.      ",
  },
  {
    name: "  HR Consultancy     ",
    role: "Director",
    image: "/united-states.png",
    feedback:
      "It's been an amazing experience working with H Connect International! The team is professional, reliable, and incredibly responsive. They've consistently delivered exceptional service, even with a vast range of demanding clients. We couldn't have hoped for a better partner, and with our big plans for growth, we see this as a great opportunity to grow together.  ",
  },
];

const Testimonials = () => {
  useEffect(() => {
    // Initialize Swiper properly with modules
    const swiper = new Swiper(".mySwiper", {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 28 },
        1024: { slidesPerView: 3, spaceBetween: 32 },
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <section className=" flex items-center">
      <style jsx>{`
        .swiper-button-prev:after,
        .swiper-rtl .swiper-button-next:after {
          content: "" !important;
        }

        .swiper-button-next:after,
        .swiper-rtl .swiper-button-prev:after {
          content: "" !important;
        }

        .swiper-button-next svg,
        .swiper-button-prev svg {
          width: 24px !important;
          height: 24px !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          position: relative !important;
          width: 50px !important;
          height: 50px !important;
          padding: 8px !important;
        }

        .swiper-slide.swiper-slide-active {
          --tw-border-opacity: 1 !important;
          border-color: #0000ff !important;
        }

        .swiper-slide.swiper-slide-active
          > .swiper-slide-active\:text-indigo-600 {
          --tw-text-opacity: 1;
          color: #0000ff;
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          height: 450px;
        }

        .testimonial-content {
          flex-grow: 1;
          overflow-y: auto;
        }
      `}</style>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="font-GTAmerica w-full">
          <div className="w-full">
            <div className="swiper mySwiper h-full">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="swiper-slide group bg-white border border-gray-300 rounded-2xl p-8 transition-all duration-500 hover:border-[#0000ff] testimonial-card"
                  >
                    <div className="flex items-center gap-5 mb-5">
                      <img
                        className="rounded-full object-cover w-[50px] h-[50px]"
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                      />
                      <div className="grid gap-1">
                        <h5 className="text-gray-900 text-sm ">
                          {testimonial.name}
                        </h5>
                        <span className="text-[1.5vh] text-gray-500 font-[100px]">
                          {testimonial.role}
                        </span>
                        <div className="flex text-[#0000ff]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mb-10">
                      <p className="text-gray-800 text-[10px] md:text-[12px]  testimonial-content font-arial">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-end mt-8 gap-8 lg:ml-[-1vh]">
              <button className="swiper-button-prev group flex justify-center items-center border border-[#0000ff] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#0000ff]">
                <svg
                  className="h-6 w-6 text-[#0000ff] group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="swiper-button-next group flex justify-center items-center border border-[#0000ff] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#0000ff]">
                <svg
                  className="h-6 w-6 text-[#0000ff] group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
