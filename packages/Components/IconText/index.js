import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import VHText from "../Text";
import VHIcon from "../Icon";

const VHIconText = props => {

  return (
    <S.Wrapper
      inline={props.inline}
      className={`${props.className ? props.className : ""}`}
      onClick={() => props.clickable && props.onEvent({
        type: "Click",
        origin: "VHIconText",
        props: {
          data: props.data
        }
      })}
   >
      <VHIcon 
        color={props.iconColor}
        xs
        title={props.text}
        icon={props.icon} />
      <VHText
        color={props.textColor}
        variant={props.variant}
        text={props.text}
        onEvent={props.onEvent}
      />
    </S.Wrapper>
  );
};

VHIconText.defaultProps = {
  iconColor: "black-50",
  textColor: "black-100",
  onEvent: null,
  data: null,
  text: "",
  icon: "bullet",
  className: "vh-icon-text",
  variant: "body2"
};

VHIconText.propTypes = {
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  onEvent: PropTypes.func,
  data: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "body1",
    "body2",
    "body3",
    "bodyWeb",
    "subtitle1",
    "subtitle2",
    "subtitle3",
    "caption",
    "platform1",
    "platform2",
    "platform3"
  ])
};

export default VHIconText;
