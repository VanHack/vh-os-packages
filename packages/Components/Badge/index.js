import React from "react";
import PropTypes from 'prop-types';

import { Container } from "./styles";

function Badge({ title }) {
  return <Container data="vh-badge">{title}</Container>;
}

Badge.propTypes = {
  title: PropTypes.string.isRequired
}

export default Badge;