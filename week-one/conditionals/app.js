// let's play with some simple statements

if (1 > 0) {
  console.log("1 really is greater than 0!");
}

let myAge = 31;
let theLegalDrivingAge = 17;

if (myAge > theLegalDrivingAge) {
  console.log("You are legally old enough to drive!");
}

// assume you're not old enough to drive
let isRoadLegal = false; // boolean does change after checks

// set age and legal driving age
const newAge = 18; // const: age doesn't change during the running program
const legalDrivingAge = 17;

if (newAge > legalDrivingAge) {
  isRoadLegal = true;
}

console.log("Am I road legal?", isRoadLegal);

// an if..else statement
if (myAge > theLegalDrivingAge) {
  console.log("You can drive!");
} else {
  console.log("You can't drive yet!");
}

// lots of else..if's

let anotherAge = 17;

if (anotherAge > legalDrivingAge) {
  console.log("You're old enough to drive!");
} else if (anotherAge === legalDrivingAge) {
  console.log("You're only just old enough to drive! Yay birthdays!");
} else {
  console.log("You can't drive yet!");
}

// movie rating time
// we've got three ages to play with :-o but all we're going to do for now is manually play with the "movieRating" variable, and check it against age.

let movieRating = "18";

if (anotherAge > 17) {
  console.log(
    "You can watch any movie with any age rating. That's nice isn't it?"
  );
} else if (anotherAge === 17) {
  if (movieRating === "U") {
    console.log(
      `You can watch this movie, because you are ${anotherAge}. It's meant for kids, but aren't we all?...`
    );
  }
  if (movieRating === "PG") {
    console.log(`You can watch this movie, because you are ${anotherAge}`);
  }
  if (movieRating === "12") {
    console.log(
      `This movie is a 12, you are ${anotherAge}, so that's all good, right?`
    );
  }
  if (movieRating === "15") {
    console.log(
      `You can watch this movie, because you are ${anotherAge}. How many years older than 15 is that?`
    );
  }
  if (movieRating === "18") {
    console.log(
      `If you tried to watch this movie it would be an absolute FELONY! Because you're ${anotherAge}`
    );
  }
}
