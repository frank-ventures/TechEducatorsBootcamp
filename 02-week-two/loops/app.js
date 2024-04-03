// LOOPS

// this while loop keeps going until Math.random() returns a value lower than 0.1. When that happens, set keepLooping to false.
let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() > 0.1;
  console.log(keepLooping);
  i++;
}

// Looping over arrays
// trial one
const faveFoods = ["nuts", "bananas", "yoghurt", "lamb"];

for (let i = 0; i < faveFoods.length; i++) {
  console.log(faveFoods[i]);
}
//trial two
const faveAnimals = ["Luna", "Otis", "Oscar", "Charlie"];

for (let i = 0; i < faveAnimals.length; i++) {
  console.log(faveAnimals[i]);
}

faveAnimals.forEach(function (animal, index) {
  console.log(animal, animal, index);
});

faveFoods.forEach(function (yourFood, indexNumber) {
  console.log(indexNumber, yourFood, indexNumber);
});

// ---------
// notes from the course demo

// while
let counter = 0;

while (counter < 10) {
  console.log("WHILE: " + counter);
  counter++; // VERY IMPORTANT to give the while loop a way to finish
}

// for
// for(instansiation, condition, afterthought)
for (let i = 0; i < 10; i++) {
  console.log("FOR: ", i);
}

// for loops and arrays
const staff = [
  "Tim",
  "Manny",
  "Davina",
  "Sam",
  "Joe",
  "Jez",
  "Coreliad",
  "Akshat",
];

for (let i = 0; i < staff.length; i++) {
  console.log("Hello", staff[i]);
}

// these ones are not the main two, but they are useful (you may never use the below ones, and that is ok)

// do while
// a do while loop will always run ONCE before checking the condition
let doCounter = 10;
do {
  console.log("DOWHILE: " + doCounter);
  doCounter++;
} while (doCounter < 10);

// for of
for (const person of staff) {
  console.log("for of:", person);
}
