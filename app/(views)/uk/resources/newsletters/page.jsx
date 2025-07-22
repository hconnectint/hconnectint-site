"use client";
import Meta from "app/components/Meta";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import {
  DividerWhiteLeft,
  DividerBlueCenter,
  DividerBlueLeft,
} from "app/components/Divider";
import LandingPageInner from "app/sections/LandingPageInner";
import FeatuedBlogList from "app/components/FeaturedBlogList";
const Resources = () => {
  const metadata = {
    title:
      "Latest News, Case Studies, Newsletters & Blogs | H Connect International",
    description:
      "Dive into our latest news articles, case studies, newsletters and blogs.",
  };
  return (
    <>
      <>
        <head>
          <title>Resources</title>
          <meta
            name="description"
            content="Dive into our latest news articles, case studies, newsletters and blogs.   "
          />
        </head>
      </>
      <Meta title={metadata.title} description={metadata.description} />
      <div className="w-full mt-[100px] ">
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <section className="mb-16">
              <div className="mx-auto-sm text-center mb-8 lg:mb-10">
                <div className={headingStyles.primaryCenter}>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    NEWSLETTERS
                  </span>{" "}
                </div>
              </div>

              {/* Case Study PDF Embed */}

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
                <a
                  href="/pdf/2024-Q3-Q4-Newsletter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Q3-Q4.jpg"
                    alt="Transform Case Study"
                    className="w-[350px] h-[350px] object-cover object-top mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium  font-arial">
                    2024 Insider Scoop: Quarter 3-4
                  </p>
                </a>

                <a
                  href="/pdf/2024-Q2-Newsletter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Q2.jpg"
                    alt="Growth Strategy Case Study"
                    className="w-[350px] h-[350px] object-cover object-top mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium  font-arial">
                    2024 Insider Scoop: Quarter 2
                  </p>
                </a>

                <a
                  href="/pdf/2024-Q3-Q4-Newsletter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/Q1.jpg"
                    alt="Innovation Case Study"
                    className="w-[350px] h-[350px] object-cover object-top mx-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity"
                  />
                  <p className="mt-2 text-lg font-medium  font-arial">
                    2024 Insider Scoop: Quarter 1
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
