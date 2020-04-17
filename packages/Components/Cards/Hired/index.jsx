import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../../Grid/index";
import VHAvatar from "../../Avatar/index";
import VHIcon from "../../Icon/index";
import VHText from "../../Text/index";
import * as S from './styles';

const VHCardHired = props => {
  return (
    <Row responsive>
        <Row alignItemsCenter responsive>
            <S.OutterImg>
                <VHAvatar 
                    image={props.userPhoto}
                    size={"xl"}
                    showCursor={false}
                />
                <S.InnerImg>
                    <VHIcon
                        title={props.name}
                        icon={props.flag}
                        round
                        sm
                    />
                </S.InnerImg>
            </S.OutterImg>
        </Row>
        <Row marginTop={10} responsive style={{ textAlign: "center"}}>
            <VHText 
                variant={"subtitle3"}
                color={"gray-90"}
                text={props.name}
            />
            <VHText 
                variant={"platform"}
                color={"gray-70"}
                text={props.position}
            />
            <VHText 
                variant={"platform"}
                color={"gray-70"}
                text={props.country}
            />
        </Row>
    </Row>
  )
}

VHCardHired.defaultProps = {
  className: '',
  showCursor: false,
}

VHCardHired.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  country: PropTypes.string,
  userPhoto: PropTypes.string.isRequired,
  flag: PropTypes.string,
}

export default VHCardHired;