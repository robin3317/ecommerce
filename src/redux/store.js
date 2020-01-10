import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// Create a store and pass all the reducers in as a arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
