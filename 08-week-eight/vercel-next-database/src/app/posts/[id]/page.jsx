import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostID({ params }) {
  const posts = await sql`SELECT * FROM posts WHERE id = ${params.id}`;
  console.log("posts variable is", posts);

  console.log(params);

  const comments =
    await sql`SELECT * FROM comments WHERE post_id = ${params.id}`;

  async function AddNewComment(formData) {
    "use server";

    const username = formData.get("username");
    const comment = formData.get("comment");

    await sql`INSERT INTO comments (username, comment, post_id) VALUES (${username},${comment},${params.id})`;

    revalidatePath(`/posts/${params.id}`);

    redirect(`/posts/${params.id}`);
  }

  return (
    <>
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
      <div>
        <h2>Here&apos;s are the comments for this Post</h2>
        {comments.rows.map((comment) => {
          return (
            <div key={comment.id}>
              <h3>{comment.username}</h3>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h2>
          This form can be abstracted out and then called as a seperate
          component
        </h2>
        <form action={AddNewComment}>
          <label htmlFor="title">Write your name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Your username"
          />
          <label htmlFor="content">And your comment</label>
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="Your comment"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
