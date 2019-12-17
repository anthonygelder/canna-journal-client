import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Nav />);
});