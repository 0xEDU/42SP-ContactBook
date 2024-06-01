import { useState } from "react";
import { NewContactData } from "../../interfaces/ContactCardProps";
import axios from "axios";

const NewContact = () => {
  const [newContactData, setNewContactData] = useState<NewContactData>({
    name: '',
    email: '',
    phone: '',
    cpf: '',
  });
  const [isShowingError, setIsShowingError] = useState<boolean>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      Object.values(newContactData).filter(value => value === "").length > 0
    ) {
      setIsShowingError(true);
      return ;
    }
    axios.post('http://localhost:8080/v1/create-contact',
      { contact: newContactData }
    );
    setIsShowingError(false);
  };

  return (
    <>
      <h1 style={{ margin: "0" }}>New Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={newContactData.name}
          onChange={(e) =>
            setNewContactData({ ...newContactData, name: e.target.value })
          }
        />
        <label>Email:</label>
        <input
          type="text"
          value={newContactData.email}
          onChange={(e) =>
            setNewContactData({ ...newContactData, email: e.target.value })
          }
        />
        <label>Phone:</label>
        <input
          type="text"
          value={newContactData.phone}
          onChange={(e) =>
            setNewContactData({ ...newContactData, phone: e.target.value })
          }
        />
        <label>CPF:</label>
        <input
          type="text"
          value={newContactData.cpf}
          onChange={(e) =>
            setNewContactData({ ...newContactData, cpf: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
      {isShowingError && <p> Can't send empty values! </p>}
    </>
  )
};

export default NewContact;
