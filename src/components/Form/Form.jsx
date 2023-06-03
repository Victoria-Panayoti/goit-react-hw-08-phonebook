import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage, FormButton } from './Form.styled';
import * as Yup from 'yup';
import { useDispatch} from 'react-redux';
import { addContact } from 'redux/operations';
import { useContacts } from 'redux/hooks';

const initialValues = {
  name: '',
  number: '',
};
const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required field!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required field!'),
});
export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  const handleSubmit = (values, actions) => {
    if (contacts.find(({ name }) => name.toLowerCase() === values.name.toLowerCase())) {
      alert(` ${values.name} is already in contacts.`);
      actions.resetForm();
      return;
    }
    if (contacts.find(({ number }) => number === values.number)) {
      alert(` ${values.number} is already in contacts.`);
      actions.resetForm();
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };
 
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PhonebookSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete='off'>
        <FormField htmlFor="name">
          Name
          <Field name="name" required />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField htmlFor="number">
          Number
          <Field type="tel" name="number" required />
          <ErrorMessage name="number" component="span" />
        </FormField>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};
