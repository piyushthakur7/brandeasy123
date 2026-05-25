import { NextResponse } from 'next/server';
import { getPosts, savePost } from '@/lib/blog';

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Generate an ID if not provided
    const newPost = {
      ...body,
      id: body.id || Math.random().toString(36).substring(2, 9),
      publishedAt: body.publishedAt || new Date().toISOString(),
    };
    
    // Simple slug generator if not provided
    if (!newPost.slug) {
      newPost.slug = newPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    const savedPost = await savePost(newPost);
    return NextResponse.json(savedPost, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
