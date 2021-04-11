export const SETLANG = 'LANGUAGE/SETLANG';

export const setLanguage = lang => {
  return {
    type: SETLANG,
    payload: {
      lang,
    },
  };
};
