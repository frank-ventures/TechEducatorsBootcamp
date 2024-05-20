"use client";

import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";

export default function CatApiPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const page = searchParams.get("page");

  //   Making a Call to Cat API:
  const fetchData = useCallback(async () => {
    try {
      const queryString = searchParams.toString();
      const apiUrl = `https://api.thecatapi.com/v1/images/search?${queryString}`;
      console.log("apiUrl is: ", apiUrl);
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setError(error.message);
    }
  }, [searchParams]);

  //   Fetch data whenever searchParams change:
  useEffect(() => {
    fetchData();
  }, [searchParams]);

  // Handles creating the query:
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

  console.log(apiData);

  return (
    <>
      <h2>Cats API! CATS!</h2>

      <p>Current search params are: {searchParams.toString()}</p>
      {/* <p>and the fetch URL is: {apiUrl} </p> */}
      <div className="limit-buttons">
        {" "}
        <button
          onClick={() => {
            router.push(pathname + "?" + createQueryString("limit", "1"));
          }}
        >
          Get 1 result
        </button>
        <button
          onClick={() => {
            router.push(pathname + "?" + createQueryString("limit", "10"));
          }}
        >
          Get 10 results
        </button>
      </div>

      <div className="page-buttons">
        <button
          onClick={() => {
            let nextPage = parseInt(page ?? "0") - 1;
            router.push(
              pathname + "?" + createQueryString("page", nextPage.toString())
            );
          }}
        >
          Go to previous page
        </button>
        <button
          onClick={() => {
            router.push(pathname + "?" + createQueryString("page", "1"));
          }}
        >
          Go to page 1{" "}
        </button>
        <button
          onClick={() => {
            router.push(pathname + "?" + createQueryString("page", "5"));
          }}
        >
          Go to page 5{" "}
        </button>
        <button
          onClick={() => {
            router.push(pathname + "?" + createQueryString("page", "10"));
          }}
        >
          Go to page 10{" "}
        </button>

        <button
          onClick={() => {
            let nextPage = parseInt(page ?? "0") + 1;
            router.push(
              pathname + "?" + createQueryString("page", nextPage.toString())
            );
          }}
        >
          Go to next page
        </button>
      </div>

      <div className="clear-buttons">
        <button
          onClick={() => {
            router.push(pathname + "?" + removeQueryParam("limit"));
          }}
        >
          Clear limit
        </button>
        <button
          onClick={() => {
            router.push(pathname + "?" + removeQueryParam("page"));
          }}
        >
          Clear Page
        </button>
        <button
          onClick={() => {
            router.push(pathname); // Navigates to the current pathname without any search parameters
          }}
        >
          Clear All
        </button>
      </div>

      <div className="cat-container">
        {apiData ? (
          apiData.map((cat) => (
            <Image
              key={cat.id}
              src={cat.url}
              alt={`cat id ${cat.id}`}
              height={cat.height}
              width={cat.width}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}
