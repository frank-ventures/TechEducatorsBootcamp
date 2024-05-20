"use client";
// import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { useCallback } from "react";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with provided key/value pairs
  // This is a merge of the Next.js docs, and ChatGPT magic:
  const createQueryString = useCallback(
    (paramsToUpdate) => {
      const params = new URLSearchParams(searchParams.toString());

      // Update the URLSearchParams with the provided key-value pairs
      Object.keys(paramsToUpdate).forEach((key) => {
        params.set(key, paramsToUpdate[key]);
      });

      return params.toString();
    },
    [searchParams]
  );

  // Create a new searchParams string by removing a specified key
  const removeQueryParam = useCallback(
    (paramToRemove) => {
      const params = new URLSearchParams(searchParams.toString());

      // Remove the specified parameter
      params.delete(paramToRemove);

      return params.toString();
    },
    [searchParams]
  );

  // Get individual search params like this:
  const searchSort = searchParams.get("sort");
  console.log(searchSort);

  // Convert searchParams to an array of key-value pairs. Just for our understanding:
  const searchParamsEntries = Array.from(searchParams.entries());

  console.log(searchParams);

  // EXAMPLE Function to fetch data from the API
  //  const fetchData = useCallback(async () => {
  //   try {
  //     const queryString = searchParams.toString();
  //     const apiUrl = `https://api.example.com/data?${queryString}`;
  //     const response = await fetch(apiUrl);

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     setApiData(data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }, [searchParams]);

  // Fetch data whenever searchParams change
  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return (
    <>
      <h3>Search Params</h3>
      <hr />

      <p>
        The searchParams variable is: {searchParams}, but the magic lies in
        searchParams.toString() - {searchParams.toString()}
      </p>
      <p>
        Just to display what we've got onto our page, we've used:
        <code> Array.from(searchParams.entries())</code>{" "}
      </p>
      <p>
        And then mapped searchParamsEntries{" "}
        <em>(If there's nothing here, there are no search params)</em>:
      </p>
      <ul>
        {searchParamsEntries.map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <hr />
      <p>Sort: {searchParams.get("sort")}</p>

      {/* Button for sorting */}

      <button
        onClick={() => {
          router.push(`${pathname}?${createQueryString({ sort: "asc" })}`);
        }}
      >
        ASC
      </button>
      <button
        onClick={() => {
          router.push(`${pathname}?${createQueryString({ sort: "desc" })}`);
        }}
      >
        DESC
      </button>

      <p>Category: {searchParams.get("category")}</p>

      {/* Button for filtering by category */}
      <button
        onClick={() => {
          router.push(
            `${pathname}?${createQueryString({ category: "books" })}`
          );
        }}
      >
        Books
      </button>
      <button
        onClick={() => {
          router.push(
            `${pathname}?${createQueryString({ category: "movies" })}`
          );
        }}
      >
        Movies
      </button>

      <p>Page: {searchParams.get("page")}</p>

      {/* Button for setting page number */}
      <button
        onClick={() => {
          router.push(`${pathname}?${createQueryString({ page: "1" })}`);
        }}
      >
        Page 1
      </button>
      <button
        onClick={() => {
          router.push(`${pathname}?${createQueryString({ page: "2" })}`);
        }}
      >
        Page 2
      </button>
      <hr />

      <p>Clear Specific Params</p>

      {/* Button to clear the 'sort' parameter */}
      <button
        onClick={() => {
          router.push(`${pathname}?${removeQueryParam("sort")}`);
        }}
      >
        Clear Sort
      </button>

      {/* Button to clear the 'category' parameter */}
      <button
        onClick={() => {
          router.push(`${pathname}?${removeQueryParam("category")}`);
        }}
      >
        Clear Category
      </button>

      {/* Button to clear the 'page' parameter */}
      <button
        onClick={() => {
          router.push(`${pathname}?${removeQueryParam("page")}`);
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

      {/* <p>Links for different params</p> */}

      {/* Link for sorting */}
      {/* <Link href={`${pathname}?${createQueryString({ sort: "desc" })}`}>
        DESC
      </Link> */}

      {/* Link for filtering by category */}
      {/* <Link
        href={`${pathname}?${createQueryString({ category: "electronics" })}`}
      >
        Electronics
      </Link> */}

      {/* Link for setting page number */}
      {/* <Link href={`${pathname}?${createQueryString({ page: "3" })}`}>
        Page 3
      </Link> */}
    </>
  );
}
