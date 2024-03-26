console.log("Hello worldsters, here are some objects");

// declaring an object
const person = {
  name: "Frank",
  age: 31,
  favouriteColour: "Orange",
};
console.log(person); // name: "Frank", age: 31, favouriteColour: "Orange"
// displaying as a Frankie Table
console.table(person);

// accessing an individual property
console.log(person.favouriteColour); // Orange

person.location = "Draycott";

console.log(person.location); // Draycott

// A couple more
const car = {
  make: "Ford",
  model: "Focus",
  colour: "Grey",
  year: "2011",
  condition: "Excellent",
};
// string for a website
console.log(
  `This is an outstanding ${car.colour} ${car.make} ${car.model}, in ${car.condition} condition, from the Year ${car.year}.` //This is an outstanding Grey Ford Focus, in Excellent condition, from the Year 2011
);
// another
const book = {
  title: "The Daily Stoic",
  author: "Ryan Holiday",
  pages: 402,
  description: "A compelling, page-a-day guide to living a good life",
  starRatings: [4, 4, 5, 5, 1, 3],
};
// ooooh sorting the array
book.starRatings.sort(function (a, b) {
  return a - b;
});
// putting them into strings
console.log(
  `Todays Book of the Day is ${book.title} written by ${book.author}. It's a great read at ${book.pages} long, and has been described as ${book.description}.`
);
console.log(
  `Here are the books current ratings from our users: ${book.starRatings}`
);

// objects/arrays within objects
const blogPost = {
  title: "Hello my friends!",
  author: person,
  tags: ["test", "intro", "writing"],
  content: "I am a really good writer but for now I'm just practising",
};

console.log(blogPost);

console.log(blogPost.author.name); // Frank
console.log(blogPost.tags[2]); // writing
console.log(blogPost.tags.length); // 3

// playing with a for-loop
console.log(
  `The author of this post was ${blogPost.author.name}. There are ${blogPost.tags.length} tags for the post "${blogPost.title}". They are:`
); // "There are 3 tags for the post "Hello my friends!". They are:"
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
} // "test, intro, writing"
// alternatively, if we didn't need the index:
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}
