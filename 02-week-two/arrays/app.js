console.log("Hello Arraysies");

// defining an array

let coloursOfThings = ["orange", "blue"];

console.log(coloursOfThings);

// pushing new items into the array
coloursOfThings.push("purple");
coloursOfThings.push("magenta");
console.log(coloursOfThings);

// Workshop time!
// defining blogPosts array
const blogPosts = ["First post", "Second post", "Third post"];
// showing whats there
console.log(blogPosts); // Output is the whole array
console.log(blogPosts[2]); // Output is Third post
// adding another item to the array with a specific index number
blogPosts[3] = "Food post";
console.log(blogPosts);
// pushing an item to the end of the array
blogPosts.push("Cat post");
// then popping it off the end
blogPosts.pop();
console.log(blogPosts);
// overwriting an item
blogPosts[3] = "Cat post";
console.log(blogPosts);

// new playtime
const favouriteNumbers = [36, 9, 10];

console.log(favouriteNumbers);
favouriteNumbers[3] = 100;
console.log(favouriteNumbers);
// pushing multiple numbers at the same time
favouriteNumbers.push(99, 12, 31);
console.log(favouriteNumbers);
console.log(favouriteNumbers.length); // Outputs the length of the array
console.log(favouriteNumbers.reverse()); // Outputs the array in a reverse order, however, the 'index' still starts at 0 and counts upwards

// indexOf returns the index location of the specified argument
console.log(blogPosts.indexOf("Cat post"));

// To add an item to the start of the array, use unshift():

// this will add 55 to the start of the current favouriteNumbers array, however, remember that it is still reversed!
favouriteNumbers.unshift(55);
console.log(favouriteNumbers);
