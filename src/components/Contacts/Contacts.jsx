import { useDispatch} from 'react-redux';
import { ContactButton, ContactItem, ContactList } from './Contacts.styled';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useVisibleContacts } from 'redux/hooks';
import { useEffect } from 'react';

export const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useVisibleContacts();
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  return (
    <>
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
      </>
  );
};
