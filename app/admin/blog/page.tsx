import Link from 'next/link';
import { getPosts } from '@/lib/blog';
import DeletePostButton from '@/components/DeletePostButton';

export const metadata = {
  title: 'Blog Admin | BrandEasy',
};

export default async function AdminBlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Blog Posts</h1>
          <Link
            href="/admin/blog/new"
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Create New Post
          </Link>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                <th className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-white">Title</th>
                <th className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-white">Date</th>
                <th className="px-6 py-4 text-sm font-semibold text-zinc-900 dark:text-white text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-zinc-500 dark:text-zinc-400">
                    No blog posts found. Create your first one!
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-zinc-900 dark:text-white">{post.title}</div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">{post.slug}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right space-x-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="text-amber-600 hover:text-amber-900 font-medium text-sm"
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="text-blue-600 hover:text-blue-900 font-medium text-sm"
                      >
                        Edit
                      </Link>
                      <DeletePostButton id={post.id} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
