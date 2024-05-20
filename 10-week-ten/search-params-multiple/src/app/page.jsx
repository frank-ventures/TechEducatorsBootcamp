"use client";
// The component you make which uses searchParams needs to be a client component
// Make sure you import from next/navigation:
import { useRouter, usePathname, useSearchParams } from "next/navigation";
// and you need this from React:
import { useCallback } from "react";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with provided key/value pairs:
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());

      // Sets the key:value pair passed in:
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // This handles removing params. Similar function to the above:
  const removeQueryParam = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams.toString());

      // Remove the specified parameter:
      params.delete(name);

      return params.toString();
    },
    [searchParams]
  );

  // Get individual search params like this:
  const searchSort = searchParams.get("sort");
  console.log("searchSort is: ", searchSort);

  // Convert searchParams to an array of key-value pairs. Just for our understanding:
  const searchParamsEntries = Array.from(searchParams.entries());

  console.log("searchParams is: ", searchParams);

  return (
    <>
      <h3>Search Params</h3>
      <h4>This page is demo only</h4>
      <hr />

      <p>The searchParams variable is: {searchParams}.</p>
      <p>
        But the magic lies in searchParams.toString(): {searchParams.toString()}
      </p>
      <p>
        Only for the purpose of displaying what we've got onto our page, in the
        code we've used:
        <code> Array.from(searchParams.entries())</code>{" "}
      </p>
      <p>
        And then mapped searchParamsEntries{" "}
        <em>
          (If there's nothing here, there are no search params yet. Press some
          buttons!)
        </em>
        :
      </p>
      <ul>
        {searchParamsEntries.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <hr />
      <h3>These buttons change the search params:</h3>
      <p>Sort: {searchParams.get("sort")}</p>

      {/* Button for sorting */}

      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("sort", "asc"));
        }}
      >
        ASC
      </button>
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("sort", "desc"));
        }}
      >
        DESC
      </button>

      <p>Category: {searchParams.get("category")}</p>

      {/* Button for filtering by category */}
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("category", "Books"));
        }}
      >
        Books
      </button>
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("category", "Movies"));
        }}
      >
        Movies
      </button>

      <p>Page: {searchParams.get("page")}</p>

      {/* Button for setting page number */}
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("page", "1"));
        }}
      >
        Page 1
      </button>
      <button
        onClick={() => {
          router.push(pathname + "?" + createQueryString("page", "2"));
        }}
      >
        Page 2
      </button>
      <hr />
      <h3>And these buttons bake a cake! (They clear the search params):</h3>

      <p>Clear Specific Params</p>

      {/* Button to clear the 'sort' parameter */}
      <button
        onClick={() => {
          router.push(pathname + "?" + removeQueryParam("sort"));
        }}
      >
        Clear Sort
      </button>

      {/* Button to clear the 'category' parameter */}
      <button
        onClick={() => {
          router.push(pathname + "?" + removeQueryParam("category"));
        }}
      >
        Clear Category
      </button>

      {/* Button to clear the 'page' parameter */}
      <button
        onClick={() => {
          router.push(pathname + "?" + removeQueryParam("page"));
        }}
      >
        Clear Page
      </button>

      <p>Clear All Search Params</p>

      {/* Button to clear all search parameters */}
      <button
        onClick={() => {
          router.push(pathname); // Navigates to the current pathname without any search parameters
        }}
      >
        Clear All
      </button>

      {/* using <Link> */}
      {/* <p>Links for different params</p> */}

      {/* <Link
        href={
          // <pathname>?sort=desc
          pathname + '?' + createQueryString('sort', 'desc')
        }
      >
        DESC
      </Link> */}

      {/* <Link
        href={
          pathname + '?' + createQueryString('sort', 'asc')
        }
      >
        ASC
      </Link> */}

      {/* <Link
        href={
          pathname + '?' + createQueryString('category', 'electronics')
        }
      >
        Electronics
      </Link> */}

      {/* <Link
        href={
          // <pathname>?sort=desc
          pathname + '?' + createQueryString('category', 'health')
        }
      >
        Health
      </Link> */}

      {/* and so on */}
    </>
  );
}
