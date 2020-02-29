import React from 'react';
import { storiesOf } from '@storybook/react';
import VHOrdinal from '.';
import { Row } from '../../Grid';

storiesOf('Components|Ordinal', module).add('default', () => (
  <div style={{ width: '589px', padding: '24px' }}>
    <Row row>
      <VHOrdinal value={1} />
      <VHOrdinal value={2} />
      <VHOrdinal value={3} />
      <VHOrdinal value={4} />
    </Row>
  </div>
));
