import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = { items: [] };

const contactSlice = createSlice({
    name: 'phone',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, actions) {
            state.items.push(action.payload)
        },
        deleteContact(state, actions) {
            state.items = state.items.filter(item => item.id !== actions.payload);
        },
    },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;