import styled from "styled-components";
import Color from "../../../Colors";

export const Top = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: red;
`
export const Bottom = styled.span`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    background: blue;
    height: 50%;
`
export const Card = styled.div`
    background-color: ${Color["white"]};
    border-radius: ${props => props.noBorder ? "0": "6px"};
    padding: 24px;
    position: relative;
    box-sizing: border-box;
    border-top: ${props => props.favorite ? `3px solid ${Color["yellow-dark"]}` : 'none'};

    :hover {
        box-shadow: ${props => !props.noHover && `0 4px 14px 0 rgba(0, 0, 0, 0.1)`};
    }

    ${({ noPadding }) => noPadding &&`
        padding: 0;
    `}

    ${({ width }) => width &&`
        width: ${width};
    `}
    ${({ height }) => height &&`
        height: ${height};
    `}
    ${({ maxWidth }) => maxWidth &&`
    max-width: ${maxWidth};
    `}
    ${({ minHeight }) => minHeight &&`
    min-height: ${minHeight};
    `}
`

