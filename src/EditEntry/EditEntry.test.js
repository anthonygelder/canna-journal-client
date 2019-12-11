import React from 'react';
import EditEntry from './EditEntry';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const routeProps = {
        match: {
            params: {

            }
        }   
    }
    const entries = []
  shallow(<EditEntry entries={entries} routeProps={routeProps}/>);
});