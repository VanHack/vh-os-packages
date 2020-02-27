import styled from "styled-components";
import Color from "../../../Colors";

export const Input = styled.input`
  width: 20px;
  height: 20px;
  margin: -1px 0 0 -2px;
  background-color: ${Color["gray-20"]};
  border-radius: 3px;
  border: solid 1px ${Color["gray-30"]};
  cursor: pointer;

  :checked  {
    opacity: 1;
  }
`;

export const Wrapper = styled.span`
  background-color: ${Color["gradient-primary"]};;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  margin-right: 9px;
  grid-ga
`;

export const WrapperMulti = styled.span`
  margin-right: 9px;
`;
