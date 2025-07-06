// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './userSlice';
import chatReducer from './chatSlice';

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

import storage from 'redux-persist/lib/storage'; // defaults to localStorage

const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
});

// ✅ Safe migration logic to fix bad persisted chat state
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'chat'],
  migrate: async (state) => {
    try {
      const parsed = state as any;
      if (parsed.chat) {
        const chat = JSON.parse(parsed.chat);
        if (!Array.isArray(chat.messages)) {
          chat.messages = [];
          parsed.chat = JSON.stringify(chat);
        }
      }
      return parsed;
    } catch {
      return state;
    }
  },
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
