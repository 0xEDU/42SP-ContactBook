import express, { Router, Request, Response } from 'express';
import Contact from '../models/Contact';
const router: Router = express.Router();

router.get('/v1/list-contacts', (_req: Request, res: Response) => {
  const contact: Contact = {
    id: 0,
    name: 'Edu',
    email: 'etachott@student.42sp.org.br',
    phoneNumber: '11999999999',
    cpf: '12345678900'
  }
  res.json(contact)
});

router.post('/v1/create-contact', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server, but from post');
});

export default router;
