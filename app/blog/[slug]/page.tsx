import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import GoldChevronStrip from "@/components/GoldChevronStrip";
import { ChevronLeft } from "lucide-react";
import { getPostBySlug } from "@/lib/blog";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">
      <GoldChevronStrip />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/blog" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0099D4] mb-8 hover:text-[#2DB34A] transition-colors">
          <ChevronLeft size={14} />
          Back to Blog
        </Link>

        <p className="text-[#2DB34A] text-[10px] tracking-[0.3em] uppercase font-black mb-4">Article</p>
        <h1 className="text-[#0A2733] font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>
        <p className="text-slate-400 text-xs mb-10">{formattedDate} • 5 min read</p>

        {post.coverImage && (
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
        )}

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-light">
          {post.content.split('\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="text-2xl font-bold text-[#0A2733] mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={idx} className="text-xl font-bold text-[#0A2733] mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.trim() === '') {
              return null;
            }
            return <p key={idx} className="mb-4">{paragraph}</p>;
          })}
        </div>
      </article>
      
      <GoldChevronStrip />
    </div>
  );
}
