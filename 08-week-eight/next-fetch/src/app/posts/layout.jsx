import Link from "next/link";

export default async function PostLayout({ children }) {
  const response = await fetch("https://dummyjson.com/products/categories");
  const categories = await response.json();
  console.log(categories);

  return (
    <>
      <h2>Posts from dummyJSON are here</h2>
      <p>Some example searches:</p>

      <nav>
        <Link className="clear-button" href="/posts">
          Clear Category
        </Link>
        {categories.map((category) => {
          return (
            <Link
              key={`${categories.index}`}
              href={`/posts/category/${category}`}
            >
              {category}
            </Link>
          );
        })}
      </nav>
      <nav>
        <p>Change this list layout page:</p>
        <Link href="?">Original sorted list</Link>
        <Link href="?sort=desc">Reverse the list</Link>
      </nav>
      {children}
    </>
  );
}
