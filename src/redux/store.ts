import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import filterReducer from './slices/filterSlice';
import cartReducer from "./slices/cartSlice"
import pizzasReduscer from "./slices/pizzasSlice"


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}

const rootReducer = combineReducers({
    filters: filterReducer,
    cart: cartReducer,
    pizzas: pizzasReduscer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;