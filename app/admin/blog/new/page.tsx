import Link from 'next/link';
import AdminPostForm from '@/components/AdminPostForm';

export const metadata = {
  title: 'New Blog Post | Admin',
};

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/admin/blog" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white text-sm font-medium mb-4 inline-block">
            ← Back to Posts
          </Link>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Create New Post</h1>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
          <AdminPostForm />
        </div>
      </div>
    </div>
  );
}
