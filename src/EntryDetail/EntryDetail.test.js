import React from 'react';
// import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import EntryDetail from './EntryDetail';
// import Context from '../Context/Context'

import { shallow } from 'enzyme';

// it('renders without crashing', () => {
//   contextType = Context;
//   const div = document.createElement('div');
//   const routeProps = {
//     match: {
//       params: {

//       }
//     }
//   }
//   const entry = {
//     id: 1
//   }
//   ReactDOM.render((<BrowserRouter>
//     <EntryDetail routeProps={routeProps} entry={entry}/>
//   </BrowserRouter>), div);

//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
  const wrapper = shallow(<EntryDetail />);
  const routeProps = {
    match: {
      params: {

      }
    }
  }
  expect(wrapper.contains(routeProps)).toEqual(true);
});