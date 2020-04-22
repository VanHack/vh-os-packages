import styled from 'styled-components'
import Color from '../../Colors'

export const H1 = styled.h1`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 48px;
    font-weight: lighter;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

    ${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const H2 = styled.h2`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 34px;
    font-weight: lighter;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const H3 = styled.h3`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 24px;
    font-weight: normal;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const H4 = styled.h4`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 22px;
    font-weight: bold;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const H5 = styled.h5`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 22px;
    font-weight: normal;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const H6 = styled.h6`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Nunito Sans;
    font-size: 20px;
    font-weight: normal;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const Subtitle1 = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    line-height: 22.4px;

    ${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}
`
export const Subtitle2 = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const Subtitle3 = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 16px;
    font-weight: lighter;
    line-height: 23.1px;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const BodyWeb = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    line-height: 28px;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const BodyPlatform = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    line-height: 21.5px;
    hyphens: auto;
    word-break: break-word

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

    ${({ cursor }) => cursor && `
        cursor: pointer;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const BodyPlatform2 = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
export const Caption = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => Color[props.color]};
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;

    ${({ alignCenter }) => alignCenter && `
        text-align: center;
    `}

${({ hover }) => hover && `
            :hover {
                text-decoration: underline;
            }
        `}

`
