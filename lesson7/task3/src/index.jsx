import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 23,
    name: 'Tim',
  },
  {
    id: 'id-5',
    age: 13,
    name: 'Mack',
  },
  {
    id: 'id-6',
    age: 43,
    name: 'Tag',
  },
  {
    id: 'id-7',
    age: 21,
    name: 'Sad',
  },
  {
    id: 'id-8',
    age: 21,
    name: 'Nasty',
  },
  {
    id: 'id-9',
    age: 36,
    name: 'Mika',
  },
  {
    id: 'id-10',
    age: 25,
    name: 'Tad',
  },
  {
    id: 'id-7',
    age: 21,
    name: 'Sad',
  },
  {
    id: 'id-8',
    age: 21,
    name: 'Nasty',
  },
  {
    id: 'id-9',
    age: 36,
    name: 'Mika',
  },
  {
    id: 'id-10',
    age: 25,
    name: 'Tad',
  },
  {
    id: 'id-7',
    age: 21,
    name: 'Sad',
  },
  {
    id: 'id-8',
    age: 21,
    name: 'Nasty',
  },
  {
    id: 'id-9',
    age: 36,
    name: 'Mika',
  },
  {
    id: 'id-10',
    age: 25,
    name: 'Tad',
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
