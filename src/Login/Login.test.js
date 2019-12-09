import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Login from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((<BrowserRouter>
    <Login />
  </BrowserRouter>), div);

  ReactDOM.unmountComponentAtNode(div);
});