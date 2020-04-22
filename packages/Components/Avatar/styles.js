import styled from "styled-components";

export const Avatar = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
  background-image: url(${props => props.image && props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  text-align: center;
  align-content: center;
  margin: ${props => (props.center ? "0 auto" : "0")};

    ${({ showCursor }) =>
      showCursor &&
      `
      cursor: pointer;
  `}

    ${({ size }) =>
      size === "xxl" &&
      `
    width: 120px;
    height: 120px;
  `}
    ${({ size }) =>
      size === "xl" &&
      `
    width: 96px;
    height: 96px;
  `}
    ${({ size }) =>
      size === "lg" &&
      `
    width: 48px;
    height: 48px;
  `}
    ${({ size }) =>
      size === "md2" &&
      `
    width: 42px;
    height: 42px;
  `}
    ${({ size }) =>
      size === "md" &&
      `
    width: 32px;
    height: 32px;
  `}
    ${({ size }) =>
      size === "sm" &&
      `
    width: 24px;
    height: 24px;
  `}
    ${({ size }) =>
      size === "xs" &&
      `
    width: 16px;
    height: 16px;
  `};

    ${({ loading }) =>
      loading  &&
      `
      filter: blur(4px);
  `};
    ${({ uploading }) =>
      uploading  &&
      `
      filter: blur(${uploading}px);
      border: solid 1px;
  `};
`;
