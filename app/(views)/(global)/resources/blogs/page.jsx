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
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=6&_embed=true"
      );
      const data = await res.json();
      setNews(data);
    };

    const fetchBlogs = async () => {
      const res = await fetch(
        "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?&_embed=true"
      );
      const data = await res.json();
      setBlogs(data);
    };

    fetchNews();
    fetchBlogs();
  }, []);

  function truncateExcerpt(html, wordLimit) {
    // Remove HTML tags to count words
    const plainText = html.replace(/<\/?[^>]+(>|$)/g, "");
    const words = plainText.split(" ");

    // If word count exceeds the limit, truncate and append ellipsis
    if (words.length > wordLimit) {
      const truncated = words.slice(0, wordLimit).join(" ");
      return truncated + "...";
    }

    // Return as is if within the limit
    return plainText;
  }
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
      <div className="w-full  ">
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 mt-[100px]">
          <div className="max-w-7xl mx-auto">
            <section className="mb-16 relative">
              <div className="mx-auto-sm text-center mb-8 lg:mb-10 relative z-10">
                <div className={headingStyles.primaryCenter}>
                  <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
                    LATEST
                  </span>{" "}
                  NEWS
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {news.slice(0, 3).map((item) => {
                  const imageUrl =
                    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://via.placeholder.com/600"; // Fallback image

                  return (
                    <Link key={item.id} href={`/resources/blogs/${item.slug}`}>
                      <div
                        className="bg-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer h-[60vh] flex flex-col justify-center relative "
                        style={{
                          backgroundImage: `url(${imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="bg-black bg-opacity-50 p-6 absolute inset-0 flex flex-col justify-center items-center text-white rounded-lg hover:shadow-lg">
                          <h3 className="text-sm !font-arial mb-2 font-bold">
                            {item.title.rendered}
                          </h3>
                          <p
                            className="text-gray-200 mb-4 text-sm "
                            dangerouslySetInnerHTML={{
                              __html: truncateExcerpt(
                                item.excerpt.rendered,
                                20
                              ), // Limit to 20 words
                            }}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
            <FeatuedBlogList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
