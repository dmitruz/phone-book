import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers } from '@reduxjs/toolkit';

interface Contact {
    id: string;
    name: string;
    number: string;
}

interface FilterState {
    toLowerCase: any;
    filterValue: string;
}

export interface RootState {
    contacts: {
        items: Contact[];
    };
    filter: FilterState;
}


const persistConfig = {
    key: 'contacts',
    storage,
}

const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const rootReducer = combineReducers({
    contacts: persistedContactReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);