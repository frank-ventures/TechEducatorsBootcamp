import Link from "next/link";

export let metadata = {
  title: "All Results"
};

export default async function PostsPage({ searchParams }) {
  console.log("search params are: ", searchParams);
  console.log(searchParams.search);

  let products = [];

  const response = await fetch("https://dummyjson.com/products");
  const posts = await response.json();
  products = posts.products;

  if (searchParams.sort === "desc") {
    products.reverse();
    metadata = {
      title: "Results descended"
    };
  }

  return (
    <>
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
                <Link href={`/posts/${product.id}`}>{product.title}</Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
