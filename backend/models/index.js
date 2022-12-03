import { pool } from "../db/index.js";

// Async function to get code from SQL database
export async function getlist() {
    const result = await pool.query("SELECT * FROM todo;");
    return result.rows;
};