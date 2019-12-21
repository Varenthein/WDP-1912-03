import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBoxContainer';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBox />);
    expect(component).toBeTruthy();
  });
});
