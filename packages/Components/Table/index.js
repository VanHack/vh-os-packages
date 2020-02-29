import React from 'react';
import PropTypes from 'prop-types'

import VHInfoTitleDescription from '../InfoTitleDescription';
import VHSelect from '../Input/Select';
import VHBadge from '../Badge';
import VHOrdinal from '../Ordinal';
import VHInput from '../Input/Simple';

import { Container, List, ListItem, ItemContent } from './styles';

const VHTable = props => {
  const items = new Array(props.size).fill('');
  props.list.forEach((item, idx) => (items[idx] = item));

  return (
    <Container {...props}>
      <VHInfoTitleDescription
        title={props.title}
        description={props.subtitle}
        data=""
      />
      <List>
        {items.map((item, index) => (
          <ListItem key={item.order || index}>
            {props.ordinal && <VHOrdinal value={index + 1} />}
            <ItemContent>
              <VHInput
                noBorder
                placeholder={props.placeholder}
                value={item.current && item.current.label}
                onEvent={e => {
                  console.log(e);
                }}
              />

              {/* <Title>{item.current.label}</Title> */}
              {item.badge && <VHBadge title={item.badge} />}
              <VHSelect
                data="selectExperience"
                className="yearsOfExperience"
                placeholder="Not Set"
                currentItem={props.options[0]}
                items={props.options}
                onEvent={e => {
                  console.log(e);
                }}
              />
            </ItemContent>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

VHTable.displayName = 'VHTable';

VHTable.propTypes = {
  size: PropTypes.number.isRequired
}

export default VHTable;
