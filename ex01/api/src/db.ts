import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

const dbClient = postgres("postgres://postgres:postgres@localhost:5432/postgres");
const db = drizzle(dbClient);

export default db;
