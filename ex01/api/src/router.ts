import express, { Router } from 'express';
import ContactRoutes from './routes/ContactRoutes';

const router: Router = express.Router();
const contactRoutes: ContactRoutes = new ContactRoutes();

router.use(express.json());

router.get('/v1/list-contacts', contactRoutes.listContacts.bind(contactRoutes));

router.post('/v1/create-contact', contactRoutes.createContact.bind(contactRoutes));

export default router;
