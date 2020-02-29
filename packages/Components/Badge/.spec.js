import React from 'react';
import VHBadge from '.';
import { render, renderer } from '../../../setupTests';

describe('[Component] - VHBadge', () => {
  it('renders component without crashing', () => {
    const { getByText } = render(<VHBadge title="simple badge" />);
    expect(getByText('simple badge')).toMatchSnapshot();
  });

  it('renders VHBadge with specific color', () => {
    const json = renderer(<VHBadge title="badge" />).toJSON();
    expect(json).toHaveStyleRule('border', '1px solid #0675ce');
    expect(json).toHaveStyleRule('color', '#0675ce');
  });
});
