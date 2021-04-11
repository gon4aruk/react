import './index.scss';
import { store, increment, decrement } from './counter';

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
