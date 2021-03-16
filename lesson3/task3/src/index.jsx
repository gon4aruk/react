import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting firstName="John" lastName="Doe" birthDate={new Date(2011, 4, 1, 11, 11, 11)} />,
  rootElement,
);
