import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Posts() {
  const posts = await sql`SELECT * FROM posts`;
  const [post] = await posts.rows;
  console.log(posts);
  console.log("posts is ", post);
  return (
    <>
      <h2>I am the posts page.jsx</h2>
      <h2> Here&apos;s some posts</h2>

      <h2> Click one to go to the post</h2>
      {posts.rows.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </>
  );
}
