// const chalk = require("chalk");
import chalk from "chalk";
import cowsay from "cowsay";

console.log(chalk.red("Hello world"));

console.log(
  chalk.green("Hulks shorts") + " are " + chalk.magenta("not green.")
);

// Multiple arguments
console.log(
  chalk.blue(
    "Hello",
    "World!",
    "Is",
    "it",
    "logs",
    "you're",
    "looking",
    "phwoar."
  )
);
//  Nested uses
console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Define your own themes
const error = chalk.bold.red;
console.log(error("Error!"));

const success = chalk.green.underline;
console.log(success("You're the winner!"));

console.log(
  chalk.red.bold(
    cowsay.say({
      text: "My milkshake etc",
      e: "@@",
      T: " H",
    })
  )
);
