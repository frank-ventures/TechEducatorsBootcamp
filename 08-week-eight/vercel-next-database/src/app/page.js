import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Home() {
  const posts = await sql`SELECT * FROM posts`;
  console.log(posts);

  return (
    <div>
      <h1>Home Page - Hello Team!</h1>
      <h2> Here&apos;s some posts</h2>
      <h2> Click one to go to the post</h2>
      {posts.rows.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
