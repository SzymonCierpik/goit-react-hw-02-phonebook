import React, { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Książka Telefoniczna</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Kontakty</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
