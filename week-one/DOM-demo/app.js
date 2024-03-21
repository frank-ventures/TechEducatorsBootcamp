// Basic test
console.log("Hello World");
console.dir(document);

// selecting the body element
const bodySelect = document.querySelector("body");
console.log(bodySelect);

// selecting the h1 element
const headingOne = document.querySelector("h1");
console.log(headingOne);

// modifying elements with textContent

headingOne.textContent = "Buenas Dias Senor!";

const headingTwo = document.getElementById("bad-h2");

headingTwo.textContent = "Como esta usted?";

// image adding!

const newImg = document.createElement("img");

// image attributes. Width set in css
newImg.src =
  "https://plus.unsplash.com/premium_photo-1710962184944-71cab934b562?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
newImg.alt = "nice tree image";
newImg.className = "tree-image";

// adding image to the page
bodySelect.appendChild(newImg);

// creating a list. Using probably too many lines of code, without loops and other tools, to achieve a very simple effect.
const myList = document.createElement("ul");
// creating list items
const itemOne = document.createElement("li");
const itemTwo = document.createElement("li");
const itemThree = document.createElement("li");
// add the items to the list
myList.appendChild(itemOne);
myList.appendChild(itemTwo);
myList.appendChild(itemThree);
// define the text of the list items
itemOne.textContent = "brown";
itemTwo.textContent = "red";
itemThree.textContent = "blue";
// add the whole list to the body of the page
bodySelect.appendChild(myList);
