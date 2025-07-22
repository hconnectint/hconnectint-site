"use client";
import React from "react";
import Link from "next/link";

const LightweightResourceCard = ({
  title,
  description,
  href,
  bgImage,
  category,
}) => {
  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg  transition-all duration-300 border-0 h-[420px] transform hover:-translate-y-2">
        {/* Background Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover  transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-xs font-semibold bg-blue-800 text-white rounded-full shadow-lg">
              {category}
            </span>
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-white/10"></div>
        </div>

        {/* Content */}
        <div className="p-7 bg-gradient-to-b from-white to-gray-50 h-full">
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-200 leading-tight">
            {title}
          </h3>

          <p className="text-sm text-gray-600 mb-8 line-clamp-3 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between absolute bottom-7 left-7 right-7">
            <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700">
              <span>Explore Now</span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            {/* Icon indicator */}
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200 group-hover:ring-blue-200 transition-colors duration-300"></div>
      </div>
    </Link>
  );
};

export default LightweightResourceCard;
