import Link from "next/link";

export default async function Categories({ params, searchParams }) {
  console.log(params);

  const response = await fetch(
    `https://dummyjson.com/products/category/${params.categories}`
  );
  const posts = await response.json();
  const products = posts.products;
  console.log(products);
  if (products.length < 1) {
    console.log("no results");
  }

  if (searchParams.sort === "desc") {
    products.reverse();
  }

  return (
    <>
      <h3>You're on the {params.categories} page</h3>
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
                <Link href={`../${product.id}`}>{product.title}</Link>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
