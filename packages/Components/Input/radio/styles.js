import styled from "styled-components";
import Color from "../../../Colors";

export const Wrapper = styled.div`
    display: flex;
    align-content: center;
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
  margin: -1px 0 0 -2px;
  background-color: ${Color["gray-20"]};
  border-radius: 3px;
  border: solid 1px ${Color["gray-30"]};
  cursor: pointer;
  padding-right: 10px;
`;

export const Container = styled.div`
    display: flex;
    margin-top: -10px;
    width: auto;

    ${({ error }) => error &&   `
      border: 1px solid red;
  `}
`;


export const Label = styled.label`
  margin-right: 20px;
  color: ${Color["gray-100"]};
  font-family: Roboto;
  font-size: 14px;
`;