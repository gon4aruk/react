import { decrement, increment, reset } from './counter.actions';
import './index.scss';
import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(addUser({ id: 76, name: 'Tom' }));
store.dispatch(addUser({ id: 59, name: 'John' }));
store.dispatch(addUser({ id: 21, name: 'Bob' }));
store.dispatch(deleteUser(59));
store.dispatch(updateUser(21, { name: 'Sasha', age: 20 }));
