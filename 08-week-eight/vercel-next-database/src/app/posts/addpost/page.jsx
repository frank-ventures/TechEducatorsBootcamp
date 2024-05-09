import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddPost() {
  async function AddNewPost(formData) {
    "use server";

    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO posts (title, content) VALUES (${title},${content})`;

    revalidatePath("/posts");

    redirect("/posts");
  }

  return (
    <>
      <div>
        <h2>You&apos;re on the add post page</h2>
      </div>
      <div>
        <form action={AddNewPost}>
          <label htmlFor="title">Write your title</label>
          <input type="text" name="title" id="title" placeholder="Your title" />
          <label htmlFor="content">And your comment</label>
          <input
            type="text"
            name="content"
            id="content"
            placeholder="Your comment"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
