import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

function ContactForm({ addContact, contacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || number.trim() === "") {
      return;
    }

    const isNameExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert("Kontakt o podanej nazwie już istnieje!");
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    addContact(newContact);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="imię"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="number"></label>
        <input
          type="tel"
          placeholder="numer telefonu"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <button type="submit">Dodaj kontakt</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactForm;
