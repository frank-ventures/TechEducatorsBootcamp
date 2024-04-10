import Database from "better-sqlite3";

const db = new Database("database.db");

db.prepare(
  "UPDATE games SET name = 'ASTRONEER' WHERE name = 'Astroneer'"
).run();
