import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../../Grid";
import VHCardBase from "../Base";
import VHChips from "../../Chips/index";
import VHText from "../../Text/index";
import VHButton from "../../Button-New/index";
import * as S from "./styles";

const VHCardPricing = props => {
  return (
    <VHCardBase>
      <Row alignItemsCenter>
          <Row height={25} alignItemsCenter>
            <S.Wrapper show={props.show}>
                <VHChips
                onEvent={props.onEvent}
                label={props.save}
                round
                secondary={props.secondaryChip}
                transparent={props.transparentChip}
                noHover={props.noHoverChip}
                marginRight={props.marginRight}
                />
            </S.Wrapper>
          </Row>
          <Row alignItemsCenter marginTop={30} marginBottom={10}>
            <VHText 
              variant={"h4"}
              color={"black-60"}
              text={props.period}
            />
          </Row>
          <VHText 
            variant={"h1"}
            color={"primary-dark"}
            text={props.price}
          />
          <Row alignItemsCenter height={20}>
            <VHText 
              variant={"subtitle3"}
              color={"primary-dark"}
              text={props.unit}
            />
          </Row>
          <Row alignItemsCenter height={20}>
            <VHText 
              variant={"subtitle3"}
              color={"black-60"}
              text={props.subscription}
            />
          </Row>
          <Row alignItemsCenter marginTop={30} marginBottom={10} width={"60%"}>
            <VHButton 
              onEvent={props.onEvent}
              data={props.data}
              label={props.cta}
              full
              outline={props.outlineBtn}
              primary={props.primaryBtn}
              secondary={props.secondaryBtn}
              
            />
          </Row>
          <Row height={30} alignItemsCenter style={{ textAlign: "center" }}>
            <VHText 
                variant={"caption"}
                color={"black-60"}
                text={props.note}
            />
          </Row>
      </Row>
    </VHCardBase>
  );
};

VHCardPricing.defaultProps = {
  className: "",
  show: false,
};

VHCardPricing.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  show: PropTypes.bool,
  onEvent: PropTypes.func,
  label: PropTypes.string,
  save: PropTypes.string,
  period: PropTypes.string,
  price: PropTypes.string,
  unit: PropTypes.string,
  subscription: PropTypes.string,
  cta: PropTypes.string,
  note: PropTypes.string,
  className: PropTypes.string
};

export default VHCardPricing;