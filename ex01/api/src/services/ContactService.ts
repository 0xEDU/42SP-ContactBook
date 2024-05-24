import { CreateContactDTO } from '../dtos/CreateContactDTO';
import { Contact } from '../models/Contact';
import ContactRepository from '../repositories/ContactRepository';


export default class ContactService {
    contactRepository: ContactRepository;

    constructor() {
        this.contactRepository = new ContactRepository();
    }

    public listContacts(): Promise<Contact[]> {
        return this.contactRepository.find();
    }

    public async createContact(contact: CreateContactDTO): Promise<boolean> {
        return this.contactRepository.create(contact);
    }
}

