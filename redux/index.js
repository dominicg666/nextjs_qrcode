import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import appSlice from './reducers/app'
const reducer = combineReducers({
  app: appSlice.reducer
});

// 
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
})
//store.subscribe(() => console.log(store.getState()))
store.subscribe(() => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  }
})

export const persistor = persistStore(store);


export default store;