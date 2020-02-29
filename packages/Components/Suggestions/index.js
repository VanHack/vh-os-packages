import React from 'react';
import PropTypes from 'prop-types'

import VHMainIconTitleList from '../MainIconTitleList';
import VHInfoTitleDescription from '../TitleDescription';
import VHText from '../Text';

import { Container } from './styles';

const Suggestions = props => {
  return (
    <Container {...props}>
      <VHInfoTitleDescription description={props.title} />
      {!props.items.length && (
        <VHText
          data="msg"
          color="gray-100"
          variant="platform1"
          text="Add your top skills first"
          onEvent={null}
        />
      )}
      <VHMainIconTitleList items={props.items} data="suggestion-list" />
    </Container>
  );
};

Suggestions.propTypes = {
  items: PropTypes.array.isRequired
}

export default Suggestions;
