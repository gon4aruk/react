import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initState = {
  usersList: [],
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }

    case DELETE_USER: {
      const newUsersList = state.usersList.filter(el => el.id !== action.payload.userId);
      return {
        ...state,
        usersList: newUsersList,
      };
    }

    case UPDATE_USER: {
      const newUsersList = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });

      return {
        ...state,
        usersList: newUsersList,
      };
    }

    default:
      return state;
  }
};
