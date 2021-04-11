import { SETLANG } from './language.actions';

export const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SETLANG:
      return action.payload.lang;
    default:
      return state;
  }
};
