import pg from "pg";
import dotenv from "dotenv";

// configure the dotenv
dotenv.config();

// set up the pg database
const dbConnectionString = process.env.DATABASE_URL;

console.log(dbConnectionString);
// create a Pool for our db
export const db = new pg.Pool({
  connectionString: dbConnectionString
});
