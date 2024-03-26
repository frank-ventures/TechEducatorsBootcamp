console.log("Hi there");

// defining an object
const personOne = {
  name: "Frank",
  age: 31,
  location: "UK",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
  getAge: function () {
    return personOne.age;
  },
};
// calling the method (function) within the object
personOne.sayHello("Friendo"); // Hello Friendo!

// defined new variable assigned to the return of the method getAge, within the personOne object
const newAge = personOne.getAge();

console.log(newAge); // 31

console.log(personOne.getAge()); // also shows "31"

// Playtime!
// A car thing
const carObject = {
  make: "Ford",
  model: "Focus",
  colour: "Grey",
  advert: function () {
    return `This car is a ${carObject.colour} ${carObject.make} ${carObject.model}.`;
  },
};
const carAdvert = carObject.advert();
console.log(carAdvert); // This car is a Grey Ford Focus

// A book thing
const bookObject = {
  title: "Deep Work",
  author: "Cal Newport",
  pages: 296,
  advert: function () {
    return `This book is titled "${bookObject.title}" and is written by ${bookObject.author}. It is ${bookObject.pages} pages long.`;
  },
};

const bookAdvert = bookObject.advert();
console.log(bookAdvert); // This book is titled "Deep Work" and is written by Cal Newport. It is 296 long.

// Stretch task
// Write an array of objects (minimum 4).
// Each object should represent a book and have a property for name, author, year and genre

// The first two are strings, year is number and genre is an array of genres.

// Lastly, write a loop that goes through each book and puts something onto the DOM for each book.

// function to create a new <p> in the HTML
function createParag() {
  const newParagraph = document.createElement("p");
  return newParagraph;
}
// Here is the array, containing objects

const bookList = [
  {
    name: "Deep Work",
    author: "Cal Newport",
    year: 2016,
    genre: ["Productivity", "Work", "Philosophy"],
  },
  {
    name: "The Daily Stoic",
    author: "Ryan Holiday",
    year: 2016,
    genre: ["Philosophy", "Stoicism", "Self-Development"],
  },
  {
    name: "Tiny Habits",
    author: "BJ Fogg",
    year: 2019,
    genre: ["Self-Development", "Behaviour", "Psychology"],
  },
  {
    name: "Shine",
    author: "Andy Cope",
    year: 2018,
    genre: ["Philosophy", "Self-Development"],
  },
];

// this brings up a prompt when the user loads the page
let yesOrNo = prompt("Would you like to give books a rating? 'yes' or 'no'");
// this runs is the user writes 'yes'. It lets them give a rating to the books in the array.
if (yesOrNo === "yes") {
  // unnecessary
  alert("Cool!");
  for (let i = 0; i < bookList.length; i++) {
    const book = bookList[i];
    book.rating = prompt(`Please give a rating for ${book.name}`);
  }
}

// Here is a function, which displays the details of each object within one <p> tag on the page.
function displayBook() {
  // It's in a 'for' loop
  for (let i = 0; i < bookList.length; i++) {
    // define 'book' as 'the whole object (all of it's properties) where we currently are in the array' IE are we at Deep Work = 0 or are we at Shine = 3?
    const book = bookList[i];
    // console.log(book);
    // this next variable assigns creating a new paragraph to 'parag'
    const parag = createParag();
    // this next line sets what will be shown on that new <p> line
    parag.textContent = `Book number ${i + 1}: ${book.name} by ${
      book.author
    }. Written in ${book.year}. Covering the genres of ${book.genre.join(
      `, `
    )}.`;
    // this puts it onto the page
    document.body.appendChild(parag);
    // and for play times, sets it to green
    parag.style.color = "green";
  }
}
displayBook();

// Practising with similar code. Here we add a string to the page with the users generated book ratings
if (yesOrNo === "yes") {
  function displayRating() {
    for (let i = 0; i < bookList.length; i++) {
      const book = bookList[i];
      const parag = createParag();
      parag.textContent = `The rating you gave for ${book.name} was ${book.rating}`;
      document.body.appendChild(parag);
    }
  }
}
displayRating();
