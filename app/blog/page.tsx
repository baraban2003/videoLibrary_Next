import { getAllPosts } from '@/services/post';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((e: any) => (
          <li key={e.id}>
            <Link href={`/blog/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
