import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'
import VHText from '../Text'

const VHTitleDescription = props => {
    return (
      <S.Wrapper inline={props.inline} className={`vh-title-description ${props.className ? props.className : ''}`}>
        <VHText 
          color={props.titleColor}
          variant={props.titleVariant}
          text={props.title}
          onEvent={props.onEvent}
        />
        <S.Display inline={props.inline}>
          <VHText 
            color={props.descriptionColor}
            variant={props.descriptionVariant}
            text={props.description}
            onEvent={props.onEvent}
          />
        </S.Display>
      </S.Wrapper>
    )
}

VHTitleDescription.defaultProps = {
  titleColor: "gray-100",
  descriptionColor: "gray-90",
  titleVariant: "subtitle3",
  descriptionVariant: "platform1",
  onEvent: null,
  data: "",
  inline: false,
  title: "",
  description: "",
  className: "vh-title-description",
}

VHTitleDescription.propTypes = {
  className: PropTypes.string,
  titleColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  titleVariant: PropTypes.string,
  descriptionVariant: PropTypes.string,
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inline: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default VHTitleDescription
