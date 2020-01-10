import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

/* The use of combineReducers() allows us to describe our store in terms of different
logical sections and assign reducers to each section.
Now, when each reducer returns initial state, that state will go into it's respective
section of the store. */
export default combineReducers({
  user: userReducer
});
