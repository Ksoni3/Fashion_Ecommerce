import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  user:userReducer,

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
