export default interface ContactCardProps {
	id: number,
	name: string,
	email: string,
	phone: string,
	cpf: string
};

export type ContactCardData = ContactCardProps;
export type NewContactData = Pick<ContactCardProps, 'name' | 'email' | 'phone' | 'cpf'>
