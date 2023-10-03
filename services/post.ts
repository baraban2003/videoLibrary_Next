import { API_URL } from '.';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getAllPosts() {
  const response = await fetch(`${API_URL}/posts`, {
    next: { revalidate: 60 },
  });

  return response.json();
}

export async function getOnePost(id: string) {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    next: { revalidate: 60 },
  });
  return response.json();
}
