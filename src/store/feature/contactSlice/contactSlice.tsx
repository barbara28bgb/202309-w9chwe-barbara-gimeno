import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactStructure, ContactsStateStructure } from "../../types";

const initialContactsState: ContactsStateStructure = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContactsState,
  reducers: {
    loadContacts: (
      currentState,
      action: PayloadAction<ContactStructure[]>,
    ): ContactsStateStructure => ({
      ...currentState,
      contacts: action.payload,
    }),
  },
});

export const { loadContacts: loadContactsActionCreator } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
