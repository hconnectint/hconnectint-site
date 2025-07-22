import BlogPageInner from "app/sections/BlogPageInner";
import { CardContent } from "@/components/ui/card";
import CTA from "app/sections/CTA";

// Generate all slugs at build time
export async function generateStaticParams() {
  try {
    const countRes = await fetch(
      "https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=1"
    );

    const totalPages = parseInt(countRes.headers.get("X-WP-TotalPages") || "1");

    let allPosts = [];

    for (let page = 1; page <= totalPages; page++) {
      const res = await fetch(
        `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?per_page=20&page=${page}`
      );
      if (!res.ok) continue;

      const posts = await res.json();
      allPosts.push(...posts);
    }

    return allPosts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

// Generate metadata for SEO at build time
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(
      `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    const posts = await res.json();

    if (!res.ok || posts.length === 0) {
      return { title: "Post Not Found" };
    }

    const post = posts[0];

    return {
      title: post.title.rendered,
      description: post.excerpt?.rendered.replace(/<[^>]*>?/gm, "") || "",
    };
  } catch (error) {
    return { title: "Error Loading Post" };
  }
}

// Render the post content statically
export default async function ResourcePage({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(
      `https://hconnect-demo.saberion.org/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );

    if (!res.ok) {
      return <div>Post not found.</div>;
    }

    const posts = await res.json();
    if (posts.length === 0) {
      return <div>Post not found.</div>;
    }

    const post = posts[0];

    const imageUrl =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      post.jetpack_featured_media_url ||
      "/service-images/tech.jpg";

    return (
      <div>
        <BlogPageInner
          subtitle="BLOGS"
          blueTitle={post.title.rendered}
          description=" by H Connect International"
          ImgUrl={imageUrl}
        />

        <div className="max-w-[100vw] md:max-w-[50vw] mt-10 mx-auto">
          <CardContent>
            <div
              className="resource-content prose prose-lg max-w-[100vw] md:max-w-[60vw] text-black font-arial text-sm leading-[5.0vh]
              [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
              [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-black
              [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:mt-8 [&_h2]:mb-6"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </CardContent>
        </div>

        <CTA title="READY TO START?" href="/contact" text="Get in Touch" />
      </div>
    );
  } catch (error) {
    return <div>Error loading post: {error.message}</div>;
  }
}
