import styled, { css } from  'styled-components'

// it would be more appropriate to use a library like styled-system here
// and from there we could extend space, flexbox and other rules

export const Container = styled.div`
  ${({ flex }) => flex && css`
    flex: ${flex};
  `}

  ${({ paddingLeft }) => paddingLeft && css`
    padding-left: ${paddingLeft};
  `}

  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}

  ${({ bg }) => bg && css`
    background-color: ${bg};
  `}
  
`