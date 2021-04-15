export const CHANGE_FILTER_TEXT = 'USERS/CHANGE_FILTER_TEXT';

export const onChangeText = text => {
  return {
    type: CHANGE_FILTER_TEXT,
    payload: {
      text,
    },
  };
};
