import dotenv from "dotenv";

import { db } from "./databaseCall.js";

// configure the dotenv
dotenv.config();

// create a table with our columns using SQL queries
// artworks being your table-name
// db.query(
// 	`CREATE TABLE IF NOT EXISTS artworks(
// 		id SERIAL PRIMARY KEY,
// 		title VARCHAR(255),
// 		author VARCHAR(255),
// 		url
// 		)`
// );

// insert data in our new shiny database
db.query(
  `INSERT INTO testtables (title, content) VALUES
	('How to train your dragon', 'Do it very carefully!')`
);

// db.query(`SELECT * FROM testtables`);
