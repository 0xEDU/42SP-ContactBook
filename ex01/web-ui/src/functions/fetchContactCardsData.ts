import { ContactCardData } from '../interfaces/ContactCardProps';
import axios from 'axios';

export default async function fetchContactCardsData(): Promise<ContactCardData[]> {
	try {
		const response = await axios.get<ContactCardData[]>('http://localhost:8080/v1/list-contacts');
		return response.data;
	} catch (error) {
		throw error;
	}
}
