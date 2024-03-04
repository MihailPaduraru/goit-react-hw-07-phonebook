// src/store.js
// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsReducer from './Contacts/contactsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'] 
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
