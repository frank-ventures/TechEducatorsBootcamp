//  Remember to set type : module in package.json
import Database from "better-sqlite3";

const db = new Database("database.db");

// this is now an array of objects!!
const gamesDb = db.prepare("SELECT * FROM games").all();
console.log("games are: ", gamesDb);

// Try querying the database for messages from a specific user.
// SQL has a WHERE keyword that might be useful.
const astroneer = db
  .prepare("SELECT * FROM games WHERE name ='Astroneer'")
  .all();
console.log(astroneer);

// Try querying the database for messages containing a specific word.
// You can use wildcard characters in the query '%sandwich%'
const specific = db
  .prepare("SELECT * FROM games WHERE name LIKE '%kart%'")
  .all();
console.log(specific);
