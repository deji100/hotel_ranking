import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import thunk from "redux-thunk";
import logger from 'redux-logger';
import HotelReducer from "./hotels";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["hotel"]
};

const rootReducers = combineReducers({
  hotel: HotelReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  
  // @ts-expect-error last resolve after trying some options
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);