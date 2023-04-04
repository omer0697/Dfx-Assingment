import { configureStore,combineReducers } from '@reduxjs/toolkit'
import UsersReducer from './Store/Users';

const rootReducer = combineReducers({
    users: UsersReducer,
  });
  
  export const store = configureStore({
    reducer: rootReducer,
  });