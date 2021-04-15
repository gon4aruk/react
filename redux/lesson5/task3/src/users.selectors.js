export const filterTextSelector = state => {
  return state.users.filterText;
};

export const usersListSelector = state => {
  const filterText = state.users.filterText;
  return state.users.usersList.filter(user =>
    user.name.toLowerCase().includes(filterText.toLowerCase()),
  );
};
