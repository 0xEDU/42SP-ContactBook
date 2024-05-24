import db from "../db";
import { Contact } from "../models/Contact";
import ContactMapper from "../mappers/ContactMapper";
import { ContactEntity, contactTable } from "../models/ContactTable";
import { CreateContactDTO } from "../dtos/CreateContactDTO";

export default class ContactRepository {
  public async find(): Promise<Contact[]> {
    return await db
      .select()
      .from(contactTable)
      .then(query => query.map((row: ContactEntity) => ContactMapper.toDomain(row)));
  }

  public async create(createContactDto: CreateContactDTO): Promise<boolean> {
    await db.insert(contactTable).values(ContactMapper.toNewContactEntity(createContactDto));
    return true;
  }
}
