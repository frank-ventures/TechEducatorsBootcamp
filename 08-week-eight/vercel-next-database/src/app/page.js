import { sql } from "@vercel/postgres";

export default async function Home() {
  const posts = await sql`SELECT * FROM posts`;
  console.log(posts);

  return (
    <div>
      <h1>Hello Team!</h1>
      <h2> Here&apos;s some posts</h2>
      {posts.rows.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>
              <em>{post.content}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
