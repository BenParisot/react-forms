import React from 'react';
import { shallow } from 'enzyme';
import ColorList from '../src/containers/ColorList';

describe('ColorList component', () => {
  it('creates a list of colors from form', () => {
    const wrapper = shallow(<ColorList />);
    expect(wrapper).toMatchSnapshot();
  });
});
