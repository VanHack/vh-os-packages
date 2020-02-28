import React from "react";

import VHMainIconTitleList from '../MainIconTitleList'
import VHInfoTitleDescription from '../TitleDescription'

import { Container } from "./styles";

const Suggestions = props => {
  return (
    <Container {...props}>
      <VHInfoTitleDescription
        description={props.title}
      />
      <VHMainIconTitleList
        items={props.items}
        data="suggestion-list"
      />
    </Container>
  );
};

export default Suggestions;
