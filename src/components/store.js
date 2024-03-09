import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
