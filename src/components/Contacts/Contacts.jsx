import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactButton, ContactItem, ContactList } from './Contacts.styled';
import { deleteContact } from 'redux/operations';

const getVisibleContacts = (contacts, myFilter) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(myFilter.toLowerCase())
  );
};
export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ContactList>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <ContactButton
            type="button"
            key={id}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactList>
  );
};
