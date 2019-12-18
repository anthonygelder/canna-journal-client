import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import EntryList from './EntryList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((<BrowserRouter>
    <EntryList />
  </BrowserRouter>), div);
  ReactDOM.unmountComponentAtNode(div);
});