const initState = {
  usersList: [],
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      const newUser = action.payload;
      return {
        ...state,
        usersList: [...state.usersList].concat(newUser),
      };

    case 'DELETE':
      const newUsersList = state.usersList.filter(el => el.id !== action.payload);
      return {
        ...state,
        usersList: newUsersList,
      };
    default:
      return state;
  }
};
