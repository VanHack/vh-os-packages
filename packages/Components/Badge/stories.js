import React from 'react';
import { storiesOf } from '@storybook/react';
import VHBadge from '.';
import { Row } from '../../Grid';

storiesOf('Components|Badge', module).add('default', () => (
  <div style={{ width: '589px', padding: '24px' }}>
    <Row row>
      <VHBadge title="simple badge" />
    </Row>
  </div>
));
