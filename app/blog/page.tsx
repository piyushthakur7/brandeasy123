import Link from "next/link";
import Image from "next/image";
import GoldChevronStrip from "@/components/GoldChevronStrip";
import { getPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getPosts();
  
  // Use the first post as featured, or fallback if none exist
  const featuredPost = posts.length > 0 ? {
    title: posts[0].title,
    slug: posts[0].slug,
    image: posts[0].coverImage || "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200",
    category: "Featured",
    date: new Date(posts[0].publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    excerpt: posts[0].excerpt,
  } : {
    title: "10 Luxury Wall Art Ideas to Elevate Your Living Room",
    slug: "luxury-wall-art-living-room",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200",
    category: "Interior Design",
    date: "April 20, 2026",
    excerpt: "Discover premium wall décor ideas that instantly transform empty spaces into elegant statement interiors.",
  };

  // Remaining posts for the grid
  const remainingPosts = posts.length > 0 ? posts.slice(1).map(p => ({
    title: p.title,
    slug: p.slug,
    image: p.coverImage || "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800",
    category: "Article",
    date: new Date(p.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  })) : [];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Strip */}
      <GoldChevronStrip />

      {/* Hero */}
      <section className="maroon-floral-bg py-20 text-center px-4">
        <p className="text-[#2DB34A] text-xs tracking-[0.35em] uppercase mb-3">
          Inspiration & Ideas
        </p>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
          Our <span className="text-[#2DB34A] italic">Blog</span>
        </h1>

        <p className="text-white/70 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Explore styling guides, wall décor inspiration, buying tips and trends
          to create beautiful interiors.
        </p>
      </section>

      <GoldChevronStrip />

      {/* Featured Post */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[340px] sm:h-[420px] overflow-hidden rounded-sm">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-block bg-[#2DB34A] text-white text-[10px] px-3 py-1 uppercase tracking-wider mb-4">
              Featured Post
            </span>

            <p className="text-[#0099D4] text-xs tracking-[0.25em] uppercase mb-3">
              {featuredPost.category}
            </p>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A2733] leading-tight mb-4">
              {featuredPost.title}
            </h2>

            <p className="text-[#2A5566] text-sm leading-relaxed mb-4">
              {featuredPost.excerpt}
            </p>

            <p className="text-xs text-[#2A5566]/70 mb-6">
              {featuredPost.date}
            </p>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="inline-block bg-[#0099D4] text-white px-7 py-3 text-xs tracking-widest uppercase font-bold hover:bg-[#0077A8] transition-colors"
            >
              Read Article
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      {remainingPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <p className="text-[#0099D4] text-xs tracking-[0.3em] uppercase mb-2">
                Latest Articles
              </p>

              <h2 className="text-[#0A2733] text-3xl sm:text-4xl font-serif font-bold">
                Fresh <span className="text-[#2DB34A] italic">Stories</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-slate-200 hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[#0099D4] text-[10px] tracking-[0.25em] uppercase mb-2">
                      {post.category}
                    </p>

                    <h3 className="text-[#0A2733] font-serif text-xl font-bold leading-snug mb-3 group-hover:text-[#0077A8] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#2A5566]/70">{post.date}</p>

                    <div className="mt-4 text-[#2DB34A] text-xs font-bold tracking-widest uppercase">
                      Read More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="maroon-floral-bg py-16 px-4 text-center">
        <p className="text-[#2DB34A] text-xs tracking-[0.3em] uppercase mb-3">
          Stay Inspired
        </p>

        <h2 className="text-white text-3xl sm:text-4xl font-serif font-bold mb-4">
          Join Our Newsletter
        </h2>

        <p className="text-white/70 text-sm max-w-lg mx-auto mb-8">
          Get décor trends, styling guides and exclusive offers directly to your
          inbox.
        </p>

        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-12 flex-1 px-4 bg-white text-sm outline-none"
          />

          <button className="h-12 px-7 bg-[#2DB34A] text-white text-xs tracking-widest uppercase font-bold hover:bg-[#1F8A37] transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}