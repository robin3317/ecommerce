import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

/* Redux doesn't allow the application to make direct changes to the state.
Instead, the dispatched action "describes" the state change and an intent to change state.
Reducers are functions that you write which handle dispatched actions and can actually
change the state.
Reducers should be written as "pure function" */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
