import React from 'react';
import PropTypes from 'prop-types';

import VHInfoTitleDescription from '../InfoTitleDescription';
import VHSelect from '../Input/Select';
import VHBadge from '../Badge';
import VHOrdinal from '../Ordinal';
import VHInput from '../Input/Simple';

import { Container, List, ListItem, ItemContent } from './styles';

const VHTable = props => {
  const items = new Array(props.size).fill('');
  props.list && props.list.forEach((item, idx) => (items[idx] = item));

  const { onEvent, options = [], data, ...rest } = props; // pass noEvent props to VHBox

  return (
    <Container {...rest} data-testid="vh-table">
      <VHInfoTitleDescription
        title={props.title}
        description={props.subtitle}
        data="table-title"
      />
      <List>
        {items.map((item, index) => {
          const controls = props.controls ? props.controls[index] : {};

          return (
            <ListItem key={item.order || index}>
              {props.ordinal && <VHOrdinal value={index + 1} />}
              <ItemContent>
                <VHInput
                  data={`${data}-inputExperience-${index}`}
                  noBorder
                  placeholder={props.placeholder || 'Type here'}
                  value={item.current && item.current.label}
                  onEvent={props.onEvent}
                />
                {item.badge && <VHBadge title={item.badge} />}
                <VHSelect
                  data={`${data}-selectExperience-${index}`}
                  className="yearsOfExperience"
                  placeholder="Not Set"
                  currentItem={options[0]}
                  items={options}
                  onEvent={props.onEvent}
                  isLoading={controls && controls.loading}
                  description={controls && controls.error && controls.message}
                  descriptionColor="red-light"
                />
              </ItemContent>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

VHTable.displayName = 'VHTable';

VHTable.propTypes = {
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onEvent: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired
};

export default VHTable;
