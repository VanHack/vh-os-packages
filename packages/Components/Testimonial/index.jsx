import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid/index';
import VHAvatar from '../Avatar/index';
import * as S from './styles';

const VHTestimonial = props => {
  return (
    <Row row>
        <S.AvatarWrapper >
            <VHAvatar 
                image={props.image} 
                size={props.sizeImg}
                showCursor={false}
            />
        </S.AvatarWrapper>
        <S.TextWrapper
            xs={props.xs}
            sm={props.sm}
            md2={props.md2}
            lg={props.lg}
            color={props.color}>
            <p>{props.testimonial}</p>
        </S.TextWrapper>
    </Row>
  )
}

VHTestimonial.defaultProps = {
  className: '',
    xs: false,
    sm: false,
    lg: false,
}

VHTestimonial.propTypes = {
  image: PropTypes.string.isRequired,
  sizeImg: PropTypes.string,
  testimonial: PropTypes.string.isRequired,
  color: PropTypes.string,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  className: PropTypes.string,
}

export default VHTestimonial;