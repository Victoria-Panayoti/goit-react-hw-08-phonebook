import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6475fe21e607ba4797dd1751.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get('/contacts');
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const responce = await axios.post('/contacts', contact);
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${id}`);
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

