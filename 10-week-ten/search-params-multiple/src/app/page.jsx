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

  console.log(searchParams);
  return (
    <>
      <h3>Search params are: {searchParams}</h3>
      <p>Sort By</p>

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
