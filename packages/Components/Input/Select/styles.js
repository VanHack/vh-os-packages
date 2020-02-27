import styled from "styled-components";
import Color from "../../../Colors";

import VHBox from '../../Box'

export const Input = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  color: #333333;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  padding: 9px 24px;
  width: 100%;
  background: transparent;

  ::placeholder {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.53;
    letter-spacing: normal;
    color: #9f9f9f;
  }
`;


export const Container = styled(VHBox)`
  position: relative;
  margin-bottom: 21px;

  /* remove indicators (x and |)  */
  div[class*="IndicatorsContainer"]{
    div:first-of-type, span {
      display: none;
    } 
  }

  /* update selected item style when multivalue  */
  div[class*="multiValue"] {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 0 5px;

    div:nth-child(2){
      &:hover {
        background: transparent;
      }
    }
  }
`
