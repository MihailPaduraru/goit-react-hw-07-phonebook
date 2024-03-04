import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from './Contacts/contactsSlice'; 
import { updateFilter } from './Contacts/contactsSlice'; 
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm.jsx/ContactForm';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const handleSubmit = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleChangeFilter = value => {
    dispatch(updateFilter(value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={e => handleChangeFilter(e.target.value)}
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
