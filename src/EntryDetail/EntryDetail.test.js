import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import EntryDetail from './EntryDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((<BrowserRouter>
    <EntryDetail />
  </BrowserRouter>), div);

  ReactDOM.unmountComponentAtNode(div);
});