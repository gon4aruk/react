import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { usersReducer } from './users.reducer';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
  users: usersReducer,
});

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
