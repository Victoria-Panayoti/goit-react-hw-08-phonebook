import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './Form/Form';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <h2>Phonebook</h2>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      <GlobalStyle />
    </Layout>
  );
};
