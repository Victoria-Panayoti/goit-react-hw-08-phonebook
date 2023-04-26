import React, { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './Form/Form';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const alreadyExistingName = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLocaleLowerCase()
    );
    const alreadyExistingNumber = contacts.find(
      contact => contact.number === newContact.number
    );

    if (alreadyExistingName || alreadyExistingNumber) {
      alert(
        `${newContact.name} or ${newContact.number} is already in contacts`
      );
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  searchContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  showContact = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };
  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    console.log('Component DidMount');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({ contacts: this.state.contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate');
    console.log('prevState', prevState);
    console.log('this state', this.state);
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    console.log('render');
    const { filter } = this.state;
    const showContact = this.showContact();
    return (
      <Layout>
        <h2>Phonebook</h2>
        <PhonebookForm onSave={this.addContact} />
        <h2>Contacts</h2>
        <Filter search={filter} onSearch={this.searchContact} />
        {showContact && (
          <Contacts contacts={showContact} onDelete={this.deleteContact} />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
