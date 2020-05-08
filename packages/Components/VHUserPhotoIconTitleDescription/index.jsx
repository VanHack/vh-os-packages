import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid/index";
import VHAvatar from "../Avatar/index";
import VHImg from '.'
import VHImgCrop from "../ImgCrop";
import VHIcon from "../Icon/index";
import VHText from "../Text/index";
import * as S from './styles';

const VHUserAvatar = props => {
  return (
    <Row>
      <Row alignItemsCenter>
        <S.OutterImg>
          <VHImgCrop
            disable={props.disable}
            source={props.avatar}
            data={{
              context: 2,
            }}
            uploading={props.uploading || 100}
            acceptTypes={"image/*"}
            onEvent={props.onEvent}
          />
          <S.InnerImg>
            <VHIcon
              title={props.name}
              icon={'camera'}
              sm
            />
          </S.InnerImg>
        </S.OutterImg>
      </Row>
      <Row alignItemsCenter marginTop={10}>
        <VHText
          variant={"h4"}
          color={"gray-90"}
          text={props.name}
        />
        <VHText
          variant={"subtitle3"}
          color={"gray-90"}
          text={props.email}
        />
      </Row>
    </Row>
  )
}

VHUserAvatar.defaultProps = {
  className: '',
  showCursor: false,
}

VHUserAvatar.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
}

export default VHUserAvatar;