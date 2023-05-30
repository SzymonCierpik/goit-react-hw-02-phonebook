import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || phoneNumber.trim() === "") {
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      phoneNumber: phoneNumber.trim(),
    };

    setContacts([...contacts, newContact]);
    setName("");
    setPhoneNumber("");
  };

  return (
    <div>
      <h2>Książka telefoniczna</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="imię i nazwisko"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber"></label>
          <input
            type="tel"
            placeholder="numer telefonu"
            id="phoneNumber"
            name="phoneNumber"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit">Dodaj kontakt</button>
      </form>
      <h2>Lista kontaktów:</h2>
      <div>
        {contacts.map((contact) => (
          <span key={contact.id}>
            {contact.name} : {contact.phoneNumber}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
