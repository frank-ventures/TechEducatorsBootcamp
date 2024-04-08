// Importing express
import express from "express";
// Adding it to a variable
const app = express();
// Defining the port the server is listening on

// tell express to expect information in the body of the request
app.use(express.json());

// A play array
const computersArray = [
  {
    type: "Desktop",
    description:
      "A traditional desktop computer designed for home or office use.",
    formFactor: "Tower or All-in-One",
    primaryUse: "General computing, gaming, productivity",
  },
  {
    type: "Laptop",
    description:
      "A portable computer that integrates a display, keyboard, and trackpad/mouse into a single unit.",
    formFactor: "Clamshell",
    primaryUse: "Mobile computing, work, education",
  },
  {
    type: "Server",
    description:
      "A computer designed to process requests and deliver data to other computers over a network.",
    formFactor: "Rack-mounted or Tower",
    primaryUse: "Web hosting, database management, application hosting",
  },
  {
    type: "Workstation",
    description:
      "A high-performance computer designed for demanding computational tasks.",
    formFactor: "Tower or Small Form Factor",
    primaryUse: "3D rendering, video editing, scientific simulations",
  },
  {
    type: "Mainframe",
    description:
      "A large and powerful computer used for processing large amounts of data.",
    formFactor: "Large cabinet or multiple racks",
    primaryUse: "Enterprise computing, data processing, transaction management",
  },
  {
    type: "Supercomputer",
    description:
      "An extremely powerful computer capable of performing massive parallel computations.",
    formFactor: "Custom-designed chassis or multiple racks",
    primaryUse: "Scientific research, weather forecasting, cryptography",
  },
];

const messages = [
  {
    id: 1,
    username: "Frank",
    text: "First message baby!",
  },
  { id: 2, username: "El Franko", text: "Hey, what's going on here?!" },
];

app.get("/messages", function (request, response) {
  response.json(messages);
});

app.get("/computers", function (request, response) {
  response.json(computersArray);
});

app.post("/messages", (req, res) => {
  //   let newMessage = JSON.parse(req.body);
  //   res.json(newMessage);
  messages.push({
    id: messages.length + 1,
    username: req.body.username,
    text: req.body.message,
  });
  res.json(messages);
});

app.listen(3000, () => {
  console.log("I am listening friend!");
});
