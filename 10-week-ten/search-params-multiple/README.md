# Multiple Search Params

This little test lets us use button to change multiple search params.

The basis for this understanding came from [The Next.js docs here](https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams)

And a lot of the extra code came from ChatGPT prompts, such as:

- "I'm using next js and im learning about search params. I know how to add ONE search param to the url, but, im trying to figure out how to add two or three and change them dynamically."

- "Show me how you would achieve it with three separate buttons with three separate search params"

- This one explains a little bit why the `createQueryString` function works the way it does:
- - "but, wont each button always push a '?' where if we have multiple search params we need it to push a '&'? "

- "Give me buttons to clear all params, clear sort, clear page etc"

- "How might I console log the key value pairs, or, display them on the page?" (This is what gave this code: `const searchParamsEntries = Array.from(searchParams.entries());`)

- "Say we are interacting with an API, how could we write a fetch request to an API using our searchParams?!
