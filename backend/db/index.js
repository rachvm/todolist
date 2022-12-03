import pg from "pg";

export const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_CONNECTION_URL,
});

export function query(text, params) {
    return pool.query(text, params);
}