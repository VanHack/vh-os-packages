import styled, { keyframes } from 'styled-components';
import Color from "../../Colors";

export const ModalWrapper = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${props => (props.open ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 666;
  margin-top: ${props => props.marginTop ? props.marginTop : ''}
  
`;

export const ModalContainer = styled.div`
  border-radius:9px;
  margin: 12px auto;
  max-width: 90%;
  width: 100%;
  min-height: 10vh;

  ${({ width }) => width && `
    width: ${width};
  `}
  ${({ maxWidth }) => maxWidth && `
    max-width: ${maxWidth};
  `}

  ${({ height }) => height && `
    height: ${height};
  `}

  padding: 33px;
  background: rgb(255,255,255);
`;


export const Header = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
  margin: 0;
  padding: 0;
  font-family: NunitoSans, sans-serif;
  color: ${Color["black-90"]};
`;


export const Close = styled.span`
  cursor: pointer;
  float: right;
  color: #000000;
`;

export const Content = styled.div`
  margin-top: 1rem;
  font-family: Roboto;
`;

export const ConfirmationSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1rem;
  justify-content: end;
  margin-top: 2rem;
`;


