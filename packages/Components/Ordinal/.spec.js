import React from 'react';
import VHOrdinal from '.';
import { render, renderer } from '../../../setupTests';

describe('[Component] - VHOrdinal', () => {
  it('renders component without crashing', () => {
    const { getByText } = render(<VHOrdinal value={1} />);
    expect(getByText('1st')).toMatchSnapshot();
  });

  it('renders VHOrdinal for 1', () => {
    const json = renderer(<VHOrdinal value={1} />).toJSON();
    const value = json.children[0];
    expect(value).toBe('1st')
  });

  it('renders VHOrdinal for 2', () => {
    const json = renderer(<VHOrdinal value={2} />).toJSON();
    const value = json.children[0];
    expect(value).toBe('2nd')
  });

  it('renders VHOrdinal for 3', () => {
    const json = renderer(<VHOrdinal value={3} />).toJSON();
    const value = json.children[0];
    expect(value).toBe('3rd')
  });

  it('renders VHOrdinal for 4', () => {
    const json = renderer(<VHOrdinal value={4} />).toJSON();
    const value = json.children[0];
    expect(value).toBe('4th')
  });
});
