import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  console.log("search params are: ", searchParams);
  console.log(searchParams.search);

  let products = [];
  if (searchParams.search) {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchParams.search}`
    );
    const posts = await response.json();
    products = posts.products;
    console.log(products);
    if (products.length < 1) {
      console.log("no results");
    }
  } else {
    const response = await fetch("https://dummyjson.com/products");
    const posts = await response.json();
    products = posts.products;
  }

  if (searchParams.sort === "desc") {
    products.reverse();
  }

  return (
    <>
      <h2>Posts from dummyJSON are here</h2>
      <p>Some example searches:</p>
      <nav>
        <Link href="/posts">Clear Search</Link>
        <Link href="/posts?search=phone">Phone</Link>
        <Link href="/posts?search=bag">Bag</Link>
        <Link href="/posts?search=Car">Car</Link>
        <Link href="/posts?search=dog">Dog</Link>
      </nav>
      <nav>
        <Link href="/posts">Original sorted list</Link>
        <Link href="/posts?sort=desc">Reverse the list</Link>
      </nav>
      <h2>Results from dummyJSON</h2>
      <div className="returnedposts">
        {products.length < 1 ? (
          <p>No Results!</p>
        ) : (
          products.map((product) => {
            return (
              <div key={product.id} className="result-item">
                <img
                  className="thumbnail"
                  src={`${product.thumbnail}`}
                  alt=""
                />
                <Link href={`posts/${product.id}`}>{product.title}</Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
