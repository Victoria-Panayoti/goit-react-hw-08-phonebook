import { React, Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export class App extends Component {
  state = {
    contacts: [],
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contact, newContact]
    }));
  }
  render() {
    return (
      <Layout>
        <ContactForm onSubmit={this.addContact} />
        <GlobalStyle />
      </Layout>
    );
  }
}
