import React from 'react'

import VHInfoTitleDescription from  '../InfoTitleDescription';
import VHSelect from '../Input/Select'
import Ordinal from '../Ordinal';

import { Container, List, ListItem, ItemContent, Title } from './styles'

/**
 * 
 * mainSkills: [
    {
      current: items[1],
      order: 0,
      yearOfExperience: items[1]
    },
    {
      current: items[2],
      order: 1,
      yearOfExperience: items[1]
    }
  ], props 
 */

const VHTable = (props) => {
  return (
  <Container>
    <VHInfoTitleDescription
      title={props.title}
      description={props.subtitle}
      data=""
    />
    <List>
      {props.list.map(item => (
        <ListItem key={item.order}>
          {props.ordinal && <Ordinal value={(item.order+1)} />}
          <ItemContent>
            <Title>{item.current.label}</Title>
            <VHSelect
              data='selectExperience'
              className='yearsOfExperience'
              currentItem={props.items[0]}
              items={props.items}
              onEvent={e => {
                console.log(e)
              }}
            />
          </ItemContent>
        </ListItem>
      ))}
    </List>
  </Container>)
}

VHTable.displayName = "VHTable"

export default VHTable;