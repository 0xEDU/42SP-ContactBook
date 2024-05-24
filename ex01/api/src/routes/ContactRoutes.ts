import ContactService from "../services/ContactService";
import { Request, Response } from 'express';

export default class ContactRoutes {
  contactService: ContactService;

  constructor() {
    this.contactService = new ContactService();
  }

  public async listContacts(_: Request, res: Response) {
    const contacts = await this.contactService.listContacts();
    res.json(contacts)
  }

  public async createContact(req: Request, res: Response) {
    const contact = req.body.contact;
    await this.contactService.createContact(contact);
    res.status(201).send();
  }
}
