import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // uses localStorage
import quoteReducer from "../features/quoteSlice";

// persist configuration
const persistConfig = {
  key: "root",      // name of key in localStorage
  storage,          // where to store data
  whitelist: ["quotes"], // only persist this slice
};

// combine all reducers
const rootReducer = combineReducers({
  quotes: quoteReducer,
});

// wrap with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
export const store = configureStore({
  reducer: persistedReducer,
});

// create persistor
export const persistor = persistStore(store);
