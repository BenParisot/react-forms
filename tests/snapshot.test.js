import React from 'react';
import { shallow } from 'enzyme';
import TextFormatter from '../src/components/TextFormatter';

describe('TextFormatter component', () => {
  it('formats text from user input', () => {
    const wrapper = shallow(<TextFormatter />);
    expect(wrapper).toMatchSnapshot();
  });
});
