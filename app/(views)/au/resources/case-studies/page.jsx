"use client";
import Meta from "app/components/Meta";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";

const CaseStudies = () => {
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
      <div className="w-full mt-[100px]  ">
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <section className="mb-16">
              <div className="mx-auto-sm text-center mb-8 lg:mb-10">
                <div className={headingStyles.primaryCenter}>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    CASE
                  </span>{" "}
                  STUDIES
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center px-4 sm:px-0">
                <a
                  href="/pdf/case-study-pdf/r2r.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img
                    src="/case-study/r2r.jpg"
                    alt="Transform Case Study"
                    className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px] h-[280px] sm:h-[300px] lg:h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <p className="mt-3 text-base sm:text-lg font-medium text-center font-arial">
                    Record to Report
                  </p>
                </a>

                <a
                  href="/pdf/case-study-pdf/p2p.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img
                    src="/case-study/p2p.jpg"
                    alt="Growth Strategy Case Study"
                    className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px] h-[280px] sm:h-[300px] lg:h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <p className="mt-3 text-base sm:text-lg font-medium text-center">
                    Procure to Pay
                  </p>
                </a>

                <a
                  href="/pdf/case-study-pdf/epm.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img
                    src="/case-study/epm.jpg"
                    alt="Enterprise Performance Management Case Study"
                    className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px] h-[280px] sm:h-[300px] lg:h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <p className="mt-3 text-base sm:text-lg font-medium text-center">
                    Enterprise Performance Management
                  </p>
                </a>

                <a
                  href="/pdf/case-study-pdf/in-2-cash.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img
                    src="/case-study/in-2-cash.jpg"
                    alt="Invoice to Cash Case Study"
                    className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px] h-[280px] sm:h-[300px] lg:h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <p className="mt-3 text-base sm:text-lg font-medium text-center">
                    Invoice to Cash
                  </p>
                </a>

                <a
                  href="/pdf/case-study-pdf/f-a-con.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img
                    src="/case-study/f-a-con.jpg"
                    alt="Innovation Case Study"
                    className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[350px] h-[280px] sm:h-[300px] lg:h-[350px] object-cover mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                  />
                  <p className="mt-3 text-base sm:text-lg font-medium text-center">
                    Finance & Accounting Consultancy
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

export default CaseStudies;
