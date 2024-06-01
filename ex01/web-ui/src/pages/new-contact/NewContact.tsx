import { useState } from "react";
import { NewContactData } from "../../interfaces/ContactCardProps";
import axios from "axios";
import './NewContact.css'

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
      return;
    }
    axios.post('http://localhost:8080/v1/create-contact',
      { contact: newContactData }
    );
    setIsShowingError(false);
  };

  return (
    <>
      <h1 style={{ margin: "0" }}>New Contact</h1>
      <form onSubmit={handleSubmit} className="new-contact-form">
        <div className="form-item">
          <label>Name:</label>
          <input
            type="text"
            value={newContactData.name}
            onChange={(e) =>
              setNewContactData({ ...newContactData, name: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label>Email:</label>
          <input
            type="text"
            value={newContactData.email}
            onChange={(e) =>
              setNewContactData({ ...newContactData, email: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label>Phone:</label>
          <input
            type="text"
            value={newContactData.phone}
            onChange={(e) =>
              setNewContactData({ ...newContactData, phone: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <label>CPF:</label>
          <input
            type="text"
            value={newContactData.cpf}
            onChange={(e) =>
              setNewContactData({ ...newContactData, cpf: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isShowingError && <p> Can't send empty values! </p>}
    </>
  )
};

export default NewContact;
