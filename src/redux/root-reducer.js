import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

/* The use of combineReducers() allows us to describe our store in terms of different
logical sections and assign reducers to each section.
Now, when each reducer returns initial state, that state will go into it's respective
section of the store. */
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
