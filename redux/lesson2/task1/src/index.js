import './index.scss';
import { store, increment, decrement, reset } from './store';

const resultElem = document.querySelector('.counter__result');
const decrementButtom = document.querySelector('[data-action = decrement]');
const incrementButtom = document.querySelector('[data-action = increment]');
const resetButtom = document.querySelector('[data-action = reset]');

const onDecrement = () => {
  store.dispatch(decrement());
};

const onIncrement = () => {
  store.dispatch(increment());
};

const onReset = () => {
  store.dispatch(reset());
};

store.subscribe(() => {
  const state = store.getState().history;
  const currentValue = state.reduce((acc, value) => acc + +value, 0);
  const history = state.join('');
  resultElem.textContent = state.length === 0 ? '' : `${history} = ${currentValue}`;
});

decrementButtom.addEventListener('click', onDecrement);
incrementButtom.addEventListener('click', onIncrement);
resetButtom.addEventListener('click', onReset);
