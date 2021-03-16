import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import './styles.scss';

const rootElement = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl:
    'https://avatars.githubusercontent.com/u/68783546?s=460&u=ec83ac56b1793cc8f60f36bde15ced45841ae26f&v=4',
};

ReactDOM.render(<Comment user={userInfo} text="Good job!" date={new Date()} />, rootElement);
