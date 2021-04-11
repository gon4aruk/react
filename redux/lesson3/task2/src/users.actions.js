export const addUser = ({ id, name }) => {
  return {
    type: 'ADD',
    payload: {
      id,
      name,
    },
  };
};

export const deleteUser = id => {
  return {
    type: 'DELETE',
    payload: id,
  };
};
