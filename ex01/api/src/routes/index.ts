import express, { Router, Request, Response } from 'express';
import ContactService from '../services/ContactService';

const router: Router = express.Router();
const contactService: ContactService = new ContactService();

router.get('/v1/list-contacts', (_, res: Response) => {
  const contacts = contactService.listContacts();
  res.json(contacts)
});

router.post('/v1/create-contact', (req: Request, res: Response) => {
  const contact = req.body;
  const createdContact = contactService.createContact(contact);
  res.json(createdContact);
});

export default router;
