import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import Entry from './Entry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((<BrowserRouter>
    <Entry entry={{id:1}}/>
  </BrowserRouter>), div);

  ReactDOM.unmountComponentAtNode(div);
});