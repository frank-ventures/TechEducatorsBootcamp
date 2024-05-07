import Link from "next/link";

export default function DynamicID({ params }) {
  console.log(
    "Here's the param you entered. It's in the server console: ",
    params
  );
  // We can also destructure the object which will assign the key within the object, to a variable of the same name.
  const { id } = params;
  return (
    <>
      <p>I am a dynamic p tag (you'll only see me on a dynamic post ID page)</p>
      <p>
        And you're at dynamic route {id} {"<"}-- that's there because it's
        matching the dynamic URL
      </p>
      <p>Go to:</p>
      <nav>
        <Link href={`/posts/${id}/44`}>Comment 44</Link>
      </nav>
    </>
  );
}
