import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const contactTable = pgTable('contacts', {
  idContact: serial('id_contact').primaryKey(),
  contactName: text('contact_name'),
  contactEmail: text('contact_email'),
  contactPhoneNumber: text('contact_phone_number'),
  contactCpf: text('contact_cpf')
});

export type ContactEntity = typeof contactTable.$inferSelect
export type NewContactEntity = typeof contactTable.$inferInsert
