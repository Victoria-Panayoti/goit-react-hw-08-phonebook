import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Component } from 'react';
import * as Yup from 'yup';
import {
  Form,
  FormField,
  ErrorMessage,
  FormButton,
  Input,
} from './ContactForm.styled';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required field'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(16, 'Too Long!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required field'),
});
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = (values, { resetForm }) => {
    resetForm();
    console.log(values);
  };
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Formik
          initialValues={this.state}
          validationSchema={PhonebookSchema}
          onSubmit={this.handleSubmit}
        >
          <Form autoComplete="off">
            <FormField htmlFor="name">
              Name
              <Input name="name" />
              <ErrorMessage name="name" component="span" />
            </FormField>
            <FormField htmlFor="number">
              Number
              <Input type="tel" name="number" />
              <ErrorMessage name="number" component="span" />
            </FormField>
            <FormButton type="submit">Add contact</FormButton>
          </Form>
        </Formik>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
