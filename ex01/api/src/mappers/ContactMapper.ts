import { CreateContactDTO } from "../dtos/CreateContactDTO";
import { Contact } from "../models/Contact";
import { ContactEntity, NewContactEntity } from "../models/ContactTable";

export default class ContactMapper {
  static toDomain(contactEntity: ContactEntity): Contact {
    return {
      id: contactEntity.idContact,
      name: contactEntity.contactName,
      email: contactEntity.contactEmail,
      phone: contactEntity.contactPhoneNumber,
      cpf: contactEntity.contactCpf,
    }
  }
  static toNewContactEntity(createContactDto: CreateContactDTO): NewContactEntity {
    return {
      contactName: createContactDto.name,
      contactEmail: createContactDto.email,
      contactPhoneNumber: createContactDto.phone_number,
      contactCpf: createContactDto.cpf,
    }
  }
}
