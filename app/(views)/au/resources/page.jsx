"use client";
import Meta from "app/components/Meta";
import React, { useMemo } from "react";
import LightweightResourceCard from "app/components/LightweightResourceCard";

import { headingStyles, bodyTextStyles } from "app/constants/FontStyles";
import LandingPageInner from "app/sections/LandingPageInner";

const Resources = () => {
  const metadata = useMemo(
    () => ({
      title: "Resources Hub | H Connect International",
      description:
        "Access our comprehensive collection of resources including latest news, blogs, case studies, and newsletters.",
    }),
    []
  );

  return (
    <div>
      <Meta title={metadata.title} description={metadata.description} />

      <div className="w-full">
        <section className="flex flex-col items-center w-full">
          <LandingPageInner
            subtitle="RESOURCES"
            blueTitle="KNOWLEDGE HUB"
            titleAfterBlue=""
            description="Your gateway to insights, expertise, and industry knowledge."
            ImgUrl="/learn-with-us2.jpg"
          />
        </section>

        <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Section */}
            <div className="text-center mb-12">
              <div className={headingStyles.primaryCenter}>
                <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                  EXPLORE
                </span>{" "}
                OUR RESOURCES
              </div>
              <p
                className={`${bodyTextStyles.large} mt-6 text-gray-600 max-w-3xl mx-auto`}
              >
                Dive into our comprehensive collection of resources designed to
                keep you informed, inspired, and ahead of the curve.
              </p>
            </div>

            {/* Resource Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <LightweightResourceCard
                title="Latest News"
                description="Stay updated with our latest announcements and company updates."
                href="/resources/blogs"
                bgImage="/resources/latest-news.jpg"
                category="News"
              />

              <LightweightResourceCard
                title="Newsletters"
                description="Access our quarterly newsletters filled with insider updates, industry trends, and exclusive content."
                href="/resources/newsletters"
                bgImage="/resources/NL.jpg"
                category="Updates"
              />

              <LightweightResourceCard
                title="Blogs"
                description="Explore our thought leadership articles, expert opinions, and in-depth industry analysis from our specialists."
                href="/resources/blogs"
                bgImage="/resources/blogs.jpg"
                category="Insights"
              />

              <LightweightResourceCard
                title="Case Studies"
                description="Discover real-world success stories and detailed project implementations that showcase our expertise."
                href="/resources/case-studies"
                bgImage="/resources/case-studies.jpg"
                category="Success Stories"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
