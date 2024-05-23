import { Contact, CreateContactDTO } from '../models/Contact'

export default class ContactService {
  public listContacts(): Contact[] {
    const contact: Contact = {
      id: 0,
      name: 'Edu',
      email: 'etachott@student.42sp.org.br',
      phoneNumber: '11999999999',
      cpf: '12345678900'
    };
    return [contact];
  }
  
  public createContact(contact: CreateContactDTO): Contact {
    return {
      id: 1,
      ...contact
    }
  }
}
