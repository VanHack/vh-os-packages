import styled from "styled-components";
import Color from "../../Colors";


const Button = styled.button`
  background: ${Color["primary-rgb-light"]};
  border: 1px solid ${Color["gradient-light"]};
  border-radius: 4px;
  font-family: Roboto;
  text-align: center;
  color: ${Color["black-50"]};
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
  margin: 4px 0 4px 0;
  outline: 0;

  ${({ noHover }) =>
  !noHover &&
  `
    cursor: pointer;
    :hover {
      background-color: ${Color["primary-light"]};
    }

    :active {
      background-color: ${Color["primary-dark"]};
    }
  `}

  ${({ primary, noHover }) =>
    primary &&
    `
    background: ${Color["primary-rgb-light"]};
    border: 1px solid ${Color["gradient-light"]};
    ${!noHover && `
      :hover {
        background-color: ${Color["primary-light"]};
        border: 1px solid ${Color["primary-light"]};
        color: ${Color["white-light"]};
      }
      :active {
        background-color: ${Color["primary-dark"]};
        border: 1px solid ${Color["primary-dark"]};
        color: ${Color["white-light"]};
      }
    `}
  `}

  ${({ secondary, noHover }) =>
    secondary &&
    `
    background: ${Color["secondary-rgb-light"]};
    border: 1px solid ${Color.secondary};
    ${!noHover && `
      :hover {
        color: ${Color["white-light"]};
        border: 1px solid  ${Color["secondary-light"]};
        background-color:  ${Color["secondary-light"]};
      }

      :active {
        background-color:  ${Color["secondary-dark"]};
        border: 1px solid  ${Color["secondary-dark"]};
      }
    `}
  `}

  ${({ round }) =>
    round &&
  `
    border-radius: 20px;
  `}

  ${({ danger, noHover }) =>
  danger &&
  `
  background:  ${Color["red-rgb-light"]};
  border: 1px solid ${Color.red};
  ${!noHover && `
    :hover {
      background-color: ${Color["red-rgb-light-hover"]};
      border: 1px solid ${Color["danger-light"]};
    }
  `}
  // :active {
  //   background-color: ${Color["red-dark"]};
  //   border: 1px solid ${Color["red-dark"]};
  // }
`}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${Color["black-40"]};
    background-color: ${Color["black-10"]};
    border: solid 1px ${Color["black-10"]};
    :hover {
      background-color: ${Color["black-10"]};
      border: 1px solid ${Color["black-10"]};
      color: ${Color["black-40"]};
      cursor: not-allowed;
    }
  `}

  ${({ transparent }) =>
    transparent &&
    `
    background-color: transparent;
  `}

  ${({ marginLeft }) =>
    marginLeft &&
    `
    margin-left: 8px;
  `}

  ${({ marginRight }) =>
    marginRight &&
    `
    margin-right: 8px;
  `}

`;


export default Button;
