import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../Contacts/contactsSlice'; 
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addContact({
        name: contactName,
        number: contactNumber,
        id: Date.now(), 
      })
    );
    setContactName('');
    setContactNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          value={contactName}
          onChange={e => setContactName(e.target.value)}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contactNumber}
          onChange={e => setContactNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
