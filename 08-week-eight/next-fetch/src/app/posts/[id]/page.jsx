import Link from "next/link";

export default async function ProductDisplay({ params }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const posts = await response.json();
  console.log(posts);
  const products = posts.products;

  return (
    <>
      <Link href="/posts">Go Back</Link>
      <h2>You clicked on: {posts.title}</h2>
      <p>{posts.description}</p>
      <img src={`${posts.images[0]}`} alt="" />
    </>
  );
}
