# Multiple Search Params

This little test lets us use buttons to change multiple search params.

We can also see an example of how using multiple params works with an API.

The basis for this understanding came from [The Next.js docs here](https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams)

and also this excellent video walkthrough here, [From Adam Richardson on YouTube](https://www.youtube.com/watch?v=HuZxu_i4gO0).
Also, [Here's his code](https://www.adamrichardson.dev/blog/nextjs-search-params-guide#nextjs-implementation)

It isn't explicitly clear, so here's some clarity:

- **The function that the docs gives you is smart enough to handle multiple search params!**

Here it is again:

```js
"use client";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <p>Sort By</p>

      {/* using useRouter */}
      <button
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + "?" + createQueryString("sort", "asc"));
        }}
      >
        ASC
      </button>

      {/* using <Link> */}
      <Link
        href={
          // <pathname>?sort=desc
          pathname + "?" + createQueryString("sort", "desc")
        }
      >
        DESC
      </Link>
    </>
  );
}
```

## Using ChatGPT to make things way more complicated than they needed to be:

ChatGPT is such a goof. For posterity, here's a direction I went in that I really didn't need to, because the function that the Next.js docs gives you is **smart enough to handle multiple params by itself**.

A lot of the extra code came from ChatGPT prompts, such as:

- "I'm using next js and im learning about search params. I know how to add ONE search param to the url, but, im trying to figure out how to add two or three and change them dynamically."

- "Show me how you would achieve it with three separate buttons with three separate search params"

- This one explains a little bit why the `createQueryString` function works the way it does:
- - "but, wont each button always push a '?' where if we have multiple search params we need it to push a '&'? "

- "Give me buttons to clear all params, clear sort, clear page etc"

- "How might I console log the key value pairs, or, display them on the page?" (This is what gave this code: `const searchParamsEntries = Array.from(searchParams.entries());`)

- "Say we are interacting with an API, how could we write a fetch request to an API using our searchParams?!

### Extraneous code:

```js
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

{
  /* Button for sorting */
}

<button
  onClick={() => {
    router.push(`${pathname}?${createQueryString({ sort: "asc" })}`);
  }}
>
  ASC
</button>;
```
