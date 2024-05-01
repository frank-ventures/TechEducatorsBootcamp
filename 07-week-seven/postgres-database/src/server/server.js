// Standard imports
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

// Gets the database call I have setup in separate module
import { db } from "./databaseCall.js";

console.log(db);

// Configure the dotenv
dotenv.config();

dotenv.config(); // allow us to use the environment variables (like the DATABASE_URL)

const app = express();
app.use(cors());

// Endpoints go here
const PORT = "8080";

app.get("/", (request, response) => {
  response.json("You are looking at my root route. How roude.");
});

app.get("/allDatabase", async (request, response) => {
  const result = await db.query(`
    SELECT * FROM testtables
    `);
  response.json(result.rows);
});

// start my server
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
