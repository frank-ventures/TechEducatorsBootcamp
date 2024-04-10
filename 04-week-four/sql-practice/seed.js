import Database from "better-sqlite3";
const db = new Database("database.db");

// create a  platform table
db.exec(`
    CREATE TABLE IF NOT EXISTS platform (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
    )
`);

// create a  games table
db.exec(`
    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        year INTEGER,
        platform_id INTEGER
    )
`);

// populate tables with data
const insertPlatform = db.prepare(`
    INSERT INTO platform (name) VALUES (?)
`);

insertPlatform.run("PC");
insertPlatform.run("Playstation 5");
insertPlatform.run("Switch");

// populate games with data
const insertGames = db.prepare(`
    INSERT INTO games (name, year, platform_id) VALUES (?, ?, ?)
`);

insertGames.run("Outer Worlds", "2019", "1");
insertGames.run("Astroneer", "2019", "1");
insertGames.run("God Of War Ragnarök", "2022", "2");
insertGames.run(" Ratchet & Clank: Rift Apart ", "2021", "2");
insertGames.run("The Legend Of Zelda: Tears Of The Kingdom", "2023", "3");
insertGames.run("Mario Kart 8 Deluxe", "2014", "3");

console.log("Database created. Success! (maybe)");
