import React from 'react';
// import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';

import { shallow } from 'enzyme';

//this is the test case
// it('renders without crashing', () => {
//   // first create a DOM element to render the component into
//   const div = document.createElement('div');

//   //render the component, this is the actual test, if something is wrong it will fail here
//   ReactDOM.render((<BrowserRouter>
//     <App />
//   </BrowserRouter>), div);

//   //clean up code
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
  shallow(<App />);
});