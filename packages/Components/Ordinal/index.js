import React from "react";
import PropTypes from 'prop-types';

import { Container } from "./styles";

const getOrdinal = (number = 0) => {
  const suffix = ["th", "st", "nd", "rd"];
  const value = number % 100;
  return number + (suffix[(value - 20) % 10] || suffix[value] || suffix[0]);
};

const Ordinal = ({value}) => {
  return <Container data={`vh-ordinal-${value}`}>{getOrdinal(value)}</Container>;
};

Ordinal.propTypes = {
  value: PropTypes.number.isRequired
}

export default Ordinal;
