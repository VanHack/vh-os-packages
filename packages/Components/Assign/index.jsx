import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import VHText from "../Text";
import VHAvatar from "../Avatar";
import { Row } from "../../Grid";

const VHAssign = props => {
  let count = 0;

  return (
    <Row
      row
      alignItemsCenter
      justifySpaceAround
      className={`vh-assign ${props.className ? props.className : ""}`}
    >
      <Row row alignItemsCenter>
        <VHText color="gradient-primary" variant="platform" text="Assign" data="VHAssign" onEvent={props.onEvent}/>
      </Row>
      <Row row alignItemsCenter>
        {props.items.map((item, index) => {
          if (index < 3) {
            count ++
            return (
              <S.Wrapper key={`vh-assign-${item.id}`} data-testid="user-avatar">
                <S.Tooltip>{item.name}</S.Tooltip>
                <VHAvatar
                  content="test"
                  image={item.avatar}
                  showCursor
                  size="md"
                />
              </S.Wrapper>
            );
          }
          if (index > 2 && index === props.items.length - 1) {
            return (
              <S.Wrapper key={`vh-assign-${item.id}`} data-testid="user-count">
                <S.Rounded>
                  <VHText variant="platform" text={`+${props.items.length - count}`} />
                </S.Rounded>
              </S.Wrapper>
            );
          }
        })}
      </Row>
    </Row>
  );
};

VHAssign.defaultProps = {
  items: [],
  className: "",
  onEvent: null
};

VHAssign.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  onEvent: PropTypes.func
};

export default VHAssign;
