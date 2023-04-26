import PropTypes from 'prop-types';
import { ContactButton, ContactItem, ContactList } from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <ContactList>
      {contacts.map(({ name, id, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <ContactButton type="button" key={id} onClick={() => onDelete(id)}>Delete</ContactButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete:PropTypes.func.isRequired,
};
