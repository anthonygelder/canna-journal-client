import React from 'react';
import AddEntry from './AddEntry';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AddEntry />);
});