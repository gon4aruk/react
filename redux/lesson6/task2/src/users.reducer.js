import { SHOW_SPINNER, USER_DATA_RECEIVED } from './users.actions';

const initState = {
  userData: null,
  isFetching: false,
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case USER_DATA_RECEIVED: {
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
