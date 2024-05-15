import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
    filterValue: string;
}

const filterInitialState: FilterState = { filterValue: '' };

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterContacts(state, action: PayloadAction<string>) {
            state.filterValue = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;