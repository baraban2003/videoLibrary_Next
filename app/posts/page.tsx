import React, { useEffect, useState } from "react";
import { Post, getAllPosts } from "../../services/post";

export default function Main() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((e) => (
          <div>{e.title}</div>
        ))}
      </div>
    </div>
  );
}
