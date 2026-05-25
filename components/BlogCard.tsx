import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
        {post.coverImage && (
          <div className="w-full h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <time className="text-sm text-zinc-500 mb-2 font-medium">{formattedDate}</time>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 group-hover:text-amber-500 transition-colors">
            {post.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 flex-grow">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center text-amber-500 font-medium text-sm">
            Read article
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
