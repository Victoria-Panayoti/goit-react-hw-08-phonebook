import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fetchContactsFulfilldReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const addContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const deleteContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(({ id }) => id !== action.payload.id);
};
const logOutFulfilledReducer = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, pendingReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilldReducer)
      .addCase(fetchContacts.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(deleteContact.rejected, rejectedReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer),
});
export const contactsReducer = contactsSlice.reducer;
