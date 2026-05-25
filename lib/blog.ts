import fs from 'fs/promises';
import path from 'path';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  publishedAt: string;
}

const dataFilePath = path.join(process.cwd(), 'lib/data/blog.json');

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    const posts: BlogPost[] = JSON.parse(data);
    // Sort by publishedAt descending
    return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } catch (error) {
    // If file doesn't exist, return empty array
    console.error("Error reading blog posts", error);
    return [];
  }
}

export async function getPostById(id: string): Promise<BlogPost | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.id === id);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}

export async function savePost(post: BlogPost): Promise<BlogPost> {
  const posts = await getPosts();
  const existingIndex = posts.findIndex((p) => p.id === post.id);

  if (existingIndex >= 0) {
    posts[existingIndex] = post;
  } else {
    posts.push(post);
  }

  await fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2), 'utf8');
  return post;
}

export async function deletePost(id: string): Promise<void> {
  let posts = await getPosts();
  posts = posts.filter((p) => p.id !== id);
  await fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2), 'utf8');
}
