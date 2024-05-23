import express, { Express } from 'express';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import db from './db';
import router from './routes/index'
import { Contact, CreateContactDTO } from './models/Contact';

const app: Express = express();
const port = 8080;

// this will go to models/ContactTable.ts
const contactTable = pgTable('contacts', {
  id: serial('id_contact').primaryKey(),
  name: text('contact_name'),
  email: text('contact_email'),
  phone: text('contact_phone_number'),
  cpf: text('contact_cpf')
});

async function printResponse(db: PostgresJsDatabase) {
  // TODO: Create a repository for this
  // This is POST
  const contact: CreateContactDTO = {
    name: 'Edu',
    email: 'eta',
    phone: '119999999992',
    cpf: '123456789002'
  }
  await db.insert(contactTable).values(contact)
  // This is GET
  const response: Contact[] = await db
    .select()
    .from(contactTable)
    .then(query => query.map((row: any) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      phoneNumber: row.phone,
      cpf: row.cpf
    })));
  console.log(response);
}
printResponse(db);

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
