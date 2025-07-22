export const revalidate = 10; // Revalidates the page every 10 seconds

import { headingStyles } from "app/constants/FontStyles";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const FeaturedBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?&_embed=true&page=${currentPage}&per_page=${postsPerPage}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();
        setBlogs(data);

        // Read the total number of pages from the response header
        const totalPagesHeader = res.headers.get("X-WP-TotalPages");
        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  return (
    <section className="mb-16">
      <div className="mx-auto-sm text-center mb-8 lg:mb-10">
        <div className={headingStyles.primaryCenter}>
          <span className="bg-gradient-to-bl from-[#2e2e53] to-[#0000ff] bg-clip-text text-transparent">
            FEATURED
          </span>{" "}
          BLOGS
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((item) => {
          const imageUrl =
            item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "https://via.placeholder.com/600"; // Fallback image

          return (
            <Link key={item.id} href={`/resources/blogs/${item.slug}`}>
              <div className="border-l-4 border-blue-700 pl-4 py-2 cursor-pointer">
                <img
                  src={imageUrl}
                  alt={item.title.rendered}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-gray-900 text-sm md:text-lg !font-arial mb-2 font-bold">
                  {item.title.rendered}
                </h3>
                <p
                  className="text-gray-600 text-sm mb-4"
                  dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                />
              </div>
            </Link>
          );
        })}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-l disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 border-t border-b">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-r disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default FeaturedBlogList;
