import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Contact {
    id: string,
    name: string
}

interface ContactsState {
    items: Contact[];
}
const contactsInitialState: ContactsState = { items: [] };

const contactSlice = createSlice({
    name: 'phone',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action: PayloadAction<Contact>) {
            state.items.push(action.payload)
        },
        deleteContact(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
