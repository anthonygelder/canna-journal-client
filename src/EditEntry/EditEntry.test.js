import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import EditEntry from './EditEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((<BrowserRouter>
    <EditEntry routeProps={{match:{params:{}}}}/>
  </BrowserRouter>), div);

  ReactDOM.unmountComponentAtNode(div);
});