import React from 'react';
import { storiesOf } from '@storybook/react';
import VHSuggestions from '.';
import { Row } from '../../Grid';

const suggestions = [
  { label: 'Vue.js' },
  { label: 'Python' },
  { label: 'Ruby on Rails' },
  { label: 'C#' },
  { label: 'Jquery' }
];

storiesOf('Components|Suggestions', module)
.add('default', () => (
  <div style={{ width: '589px', padding: '24px' }}>
    <Row row>
      <VHSuggestions
        flex="1"
        paddingLeft="30px"
        title="Suggestions based on your top skills"
        items={suggestions}
      />
    </Row>
  </div>
))
.add('empty list', () => (
  <div style={{ width: '589px', padding: '24px' }}>
    <Row row>
      <VHSuggestions
        flex="1"
        paddingLeft="30px"
        title="Suggestions based on your top skills"
        items={[]}
      />
    </Row>
  </div>
))
