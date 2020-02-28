import styled from 'styled-components';
import VHBox from '../Box'

export const Container = styled(VHBox)``;

export const Title = styled.div`
  font-weight:bold;
  font-size: 16px;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  flex: 1;
`;

export const ListItem = styled.li`
  display: flex;
  align-items:center;
  height: 50px;
  border-bottom: 1px solid #ccc;
`;

export const ItemContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items:center;

  /* update selectExperience style */
  [data="selectExperience"]{
    width: 100px;
    padding: 0;
    margin: 0;
    border: 0;

    div[class*="control"] {
      border: 0;
      &:hover {
        box-shadow: 0;
      }
    }
  }
`