import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const Page = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default Page;
