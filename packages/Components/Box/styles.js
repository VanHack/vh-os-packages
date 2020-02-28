import styled, { css } from  'styled-components'

// it would be more appropriate to use a library like styled-system here
// and from there we could extend space, flexbox and other rules

export const Container = styled.div`
  ${({ flex }) => flex && css`
    flex: ${flex};
  `}

  /* padding */
  ${({ padding }) => padding && css`
    padding: ${padding};
  `}
  
  ${({ paddingLeft }) => paddingLeft && css`
    padding-left: ${paddingLeft};
  `}

  ${({ paddingRight }) => paddingRight && css`
    padding-right: ${paddingRight};
  `}

  ${({ paddingTop }) => paddingTop && css`
    padding-top: ${paddingTop};
  `}

  ${({ paddingBottom }) => paddingBottom && css`
    padding-left: ${paddingBottom};
  `}

  /* margin  */
  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}

  ${({ marginRight }) => marginRight && css`
    margin-right: ${marginRight};
  `}

  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop};
  `}

  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}

  ${({ bg }) => bg && css`
    background-color: ${bg};
  `}

  ${({ color }) => color && css`
    color: ${color};
  `}
  
`