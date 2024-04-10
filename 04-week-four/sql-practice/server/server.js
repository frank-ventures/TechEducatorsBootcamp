import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const db = new Database("database.db");

const app = express();

app.use(express.json());
app.use(cors()); // allows the client to communicate with the server without being blocked

app.listen(8080, function () {
  console.log("App is running on 8080");
});

app.get("/", function (request, response) {
  console.log("Root route. Roude.");
  response.send("Hello there!");
});

app.get("/games", function (request, response) {
  //   const gamesDb = db.prepare("SELECT * FROM games").all();
  //   response.json(gamesDb);

  response.json(db.prepare("SELECT * FROM games").all());
});

app.get("/platforms", function (request, response) {
  const platformDb = db.prepare("SELECT * FROM platform").all();

  response.json(platformDb);
});

app.post("/games", function (request, response) {
  const insertNewGame = db.prepare(`
    INSERT INTO games (name, year, platform_id) VALUES (?, ?, ?)
`);
  insertNewGame.run(
    request.body.name,
    request.body.year,
    request.body.platform_id
  );

  const gamesDb = db.prepare("SELECT * FROM games").all();

  response.json(gamesDb);
});

// Return joined data
const games = db.prepare("SELECT * FROM games").all();
console.log(games);
const platforms = db.prepare("SELECT * FROM platform").all();
console.log(platforms);
const joinedInformation = db
  .prepare(
    `SELECT
        games.name AS the_game_name,
        games.year AS game_year,
        platform.name AS platform
    FROM games
    JOIN platform ON games.platform_id = platform.id
    
`
  )
  .all();

console.log(joinedInformation);
