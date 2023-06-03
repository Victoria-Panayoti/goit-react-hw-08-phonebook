import { useDispatch} from 'react-redux';
import { ContactButton, ContactItem, ContactList } from './Contacts.styled';
import { deleteContact } from 'redux/operations';
import { useVisibleContacts } from 'redux/hooks';


export const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useVisibleContacts();

  return (
    <ContactList>
      {visibleContacts && visibleContacts.map(({ id, name, number }) => (
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
