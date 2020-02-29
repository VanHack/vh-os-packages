import React from 'react';
import VHBox from '.';
import { render, renderer } from '../../../setupTests';

describe('[Component] - VHBox', () => {
  it('renders box without crashing', () => {
    const { getByText } = render(<VHBox>Box</VHBox>);
    expect(getByText('Box')).toMatchSnapshot();
  });

  it('renders vhbox with bgColor and color', () => {
    const json = renderer(
      <VHBox bg="#e99" color="#ccc">
        Box
      </VHBox>
    ).toJSON();
    expect(json).toHaveStyleRule('background-color', '#e99');
    expect(json).toHaveStyleRule('color', '#ccc');
  });
});
