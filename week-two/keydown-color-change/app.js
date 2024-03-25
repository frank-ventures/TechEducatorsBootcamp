// Getting the container for the headers, then, all of the <p> elements -
const headers = document.getElementById("terrible");
const paraGraph = document.getElementsByTagName("p");

// This adds a 'keydown' EventListener to our whole document -
document.addEventListener("keydown", function (event) {
  // These next 3 variables generate a random color -
  // This will help: https://stackoverflow.com/questions/1484506/random-color-generator/37281143
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // You could simply unse this next line, and it'd change the background colour to black
  // document.body.style.backgroundColor = "black";

  // But we're going to use the randomColor variable for the whole body -
  document.body.style.backgroundColor = randomColor;
  // This changes the color of the text within the <div>, called "terrible"
  headers.style.color = randomColor2;

  // This "for statement" goes through the "array" of <p> on the web page.
  // One by one, it changes the text colour and applies a shadow to the text.
  // It's not "the" way to do it, but it's "a" way to do it.
  for (let i = 0; i < paraGraph.length; i++) {
    paraGraph[i].style.color = randomColor2;
    paraGraph[i].style.textShadow = `2px 2px 1px ${randomColor3}`;
    // un-comment these if you wish to see it happen in the log.
    // console.log(document.body.style.backgroundColor);
    // console.log(paraGraph[i].style.textShadow);
    // console.log(paraGraph[i].style.color);
  }
});
