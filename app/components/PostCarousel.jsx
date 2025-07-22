"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { headingStyles } from "app/constants/FontStyles";
import { DividerWhiteCenter } from "app/components/Divider";

const PostCarousel = ({ title }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=15&_embed"
        );
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4  flex justify-center">
      <div className="max-w-screen-lg w-full">
        <h2
          className={`${headingStyles.primaryCenter} ${headingStyles.white} mb-5 text-center `}
        >
          {title}
        </h2>
        <DividerWhiteCenter />
        <div className="mb-10"></div>

        <div className="w-full mx-auto">
          {blogs.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <Slider {...settings}>
              {blogs.map((blog) => {
                const imageUrl =
                  blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  blog.jetpack_featured_media_url ||
                  "/default-fallback-image.jpg"; // Ensure you have a fallback image in your public folder

                return (
                  <div
                    key={blog.id}
                    className="w-full flex justify-center px-2"
                  >
                    <Link href={`/resources/blogs/${blog.slug}`}>
                      <div
                        className="h-[65vh] md:w-80 md:h-96 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer mb-10"
                        style={{
                          background: "rgba(0, 0, 0, 0.0)",
                          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(30px)",
                          borderRadius: "10px",
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt={blog.title.rendered}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <h3 className="text-lg font-medium text-white mt-4 p-4 font-arial">
                          {blog.title.rendered}
                        </h3>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCarousel;
