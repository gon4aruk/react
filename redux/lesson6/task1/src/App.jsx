import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

const Page = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Page;
