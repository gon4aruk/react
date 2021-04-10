import { createStore } from 'redux';

export const increment = {
  type: 'COUNTER/INCREMENT',
};
export const decrement = {
  type: 'COUNTER/DECREMENT',
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
