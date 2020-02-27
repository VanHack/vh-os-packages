import React from 'react'

import { Container } from './styles'

const VHBox = ({children, ...props}) => {
  return (
  <Container {...props}>
    {children}
  </Container>)
}

VHBox.displayName = "VHBox"

export default VHBox;