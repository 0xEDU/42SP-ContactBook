import ContactCardProps from '../interfaces/ContactCardProps'

const ContactCard = (props: ContactCardProps) => {
  return (
    <div className="contact-card">
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Phone Number: {props.phone}</p>
      <p>Cpf: {props.cpf}</p>
    </div>
  );
}

export default ContactCard;
