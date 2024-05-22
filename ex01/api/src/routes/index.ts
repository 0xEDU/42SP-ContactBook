import express, { Router, Request, Response } from 'express';
import Contact from '../models/Contact';
import ContactService from '../services/ContactService';

const router: Router = express.Router();
const contactService: ContactService = new ContactService();

router.get('/v1/list-contacts', (_req: Request, res: Response) => {
  const contacts = contactService.listContacts();
  res.json(contacts)
});

router.post('/v1/create-contact', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server, but from post');
});

export default router;
