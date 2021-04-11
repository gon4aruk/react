import './index.scss';
import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { addUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';

console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage('du'));
store.dispatch(addUser({ name: 'Bob' }));
store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'bread' }));
store.dispatch(removeProduct(2));
store.dispatch(removeUser());
store.dispatch(setLanguage('en'));
