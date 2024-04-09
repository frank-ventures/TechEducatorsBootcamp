import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const messages = [];

app.get("/", function (request, response) {
  //   console.log("Hello get!");
  response.send("hello friend");
});

app.post("/", function (request, response) {
  console.log(request.body);
  messages.push(request.body);
  response.send(messages);
});

app.listen(8080, function () {
  console.log("Hello!");
});
