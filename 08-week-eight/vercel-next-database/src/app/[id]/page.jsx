import { sql } from "@vercel/postgres";

export default async function PostID({ params }) {
  const posts = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  console.log(posts);

  console.log(params);
  return (
    <div>
      <h2>Here's Your Post</h2>
      {posts.rows.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
