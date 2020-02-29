import React from 'react';
import VHSuggestions from '.';
import { render, renderer } from '../../../setupTests';

describe('[Component] - VHSuggestions', () => {
  it('renders component without crashing', () => {
    const { getByText } = render(
      <VHSuggestions title="simple title" items={[]} />
    );
    expect(getByText('simple title')).toMatchSnapshot();
  });

  it('renders VHSuggestions message when items is empty', () => {
    const json = renderer(<VHSuggestions title="simpletitle" items={[]} />).toJSON();
    const text = json.children[1].children[0];
    expect(text).toBe('Add your top skills first');
  });

  it('renders VHSuggestions items', () => {
    const {getByText} = render(
      <VHSuggestions
        title="simpletitle"
        items={[{ label: 'React.js' }, { label: 'Python' }]}
      />
    );
    expect(getByText('React.js')).toBeVisible()
    expect(getByText('Python')).toBeVisible()
  });
});
