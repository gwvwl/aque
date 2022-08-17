import { configureStore, combineReducers } from '@reduxjs/toolkit';
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

import userReducer from './slices/userSlice';
import addReducer from './slices/addSlice';
import activePatientsReducer from './slices/activePatientsSlice';

const rootReducer = (state, action) => {
  if (action.type === 'user/logaut') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const combinedReducer = combineReducers({
    user: userReducer,
    add: addReducer,
    activePatients: activePatientsReducer,
});
  
const persistConfig = {
    key: 'root',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer);
  
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})
  
  export const persistor = persistStore(store);
  export default store;

