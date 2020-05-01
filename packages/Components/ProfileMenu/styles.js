import styled from "styled-components";
import Color from "../../Colors";

export const Wrapper = styled.div`
    width: fit-content;
    align-items: center;
    padding: 12px 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    color: ${Color["black-100"]};
    display: flex;
    flex-direction: row;
    :hover {
        
        color: ${Color["primary-light"]};
        cursor: pointer;
        /* background:linear-gradient(180deg, rgba(2,0,36,0) 25%, rgba(44,155,245,1) 25%, rgba(44,155,245,1) 75%, rgba(0,212,255,0) 75%) center right no-repeat; */
        background-size: 2px 100%;

        a{
            
            color: ${Color["primary-light"]}; 
           
        }
    }
`

export const Link = styled.a`
    padding-left: 18px;
    text-decoration: none;
    color: ${Color["black-100"]};
    cursor: pointer;
    :hover {
        color: ${Color["primary-light"]};
    }
`
