import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = { items: [] };

const contactSlice = createSlice({
    name: 'phone',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;