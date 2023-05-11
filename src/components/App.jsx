import React from 'react';
import { useState, useEffect } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './Form/Form';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    )
      ? alert(
          `${newContact.name} or ${newContact.number} is already in contacts`
        )
      : setContacts(contact => [...contact, newContact]);
  };

  const searchContact = e => {
    const { value } = e.target;
    return setFilter(value);
  };
  const showContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  return (
    <Layout>
      <h2>Phonebook</h2>
      <PhonebookForm onSave={addContact} />
      <h2>Contacts</h2>
      <Filter search={filter} onSearch={searchContact} />
      {showContact && (
        <Contacts contacts={showContact()} onDelete={deleteContact} />
      )}
      <GlobalStyle />
    </Layout>
  );
};
