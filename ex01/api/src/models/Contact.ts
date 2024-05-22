export interface Contact {
  id: number,
  name: string,
  email: string,
  phoneNumber: string,
  cpf: string,
}

export interface CreateContactDTO {
  name: string,
  email: string,
  phoneNumber: string,
  cpf: string,
}
