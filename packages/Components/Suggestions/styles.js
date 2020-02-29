import styled from  'styled-components'
import VHBox from '../Box'

export const Container = styled(VHBox)`
  font-size: 14px;
  color: #444;

  display:flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;

  div[class*="title-description"]{
    width: 130px;
  }

  [data="suggestion-list"]{
    margin-top: 15px;
    line-height: 2;
  }

  > [color*="gray-100"]{
    padding-top: 20px;
  }
`