import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterContacts(state, { payload }) {
            return payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;