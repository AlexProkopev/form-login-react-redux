import { configureStore } from '@reduxjs/toolkit';
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
import { loginReducer } from './login.reducer';

const loginConfig = {
  key: 'login',
  storage,
  whitelist: ['login', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    loginStore: persistReducer(loginConfig, loginReducer),
   
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);