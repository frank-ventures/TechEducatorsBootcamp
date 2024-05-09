import { sql } from "@vercel/postgres";

export default async function PostID({ params }) {
  const posts = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  const post = await posts.rows;
  console.log(posts);
  console.log("post is ", post);

  console.log(params);
  return (
    <div>
      <h2>Here&apos;s Your Post</h2>
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
