import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const increment = {
  type: INCREMENT,
};
export const decrement = {
  type: DECREMENT,
};

const counterRuducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterRuducer);