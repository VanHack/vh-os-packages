import React from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"
import VHInput from '../Simple'
import VHIcon from '../../Icon'


const VHInputIcon = props => {

  const [value, handleChange] = React.useState(props.value);

  return (
    <S.Wrapper
      className={`vh-icon-input ${props.className ? props.className : ''}`}
      loading={props.loading}
      error={props.error}
    >
      {
        !props.loading && (
          <VHIcon
            className="vh-icon-with-input-icon"
            icon={props.icon}
            lg={props.lg}
            sm={props.sm}
            md={props.md}
            xs={props.xs}
          />
        )
      }
      <VHInput
        disabled={props.disabled}
        error={props.error}
        loading={props.loading}
        placeholder={props.placeholder}
        data={props.data}
        value={value}
        onEvent={props.onEvent}
        noBorder={!props.loading}
        maxLength={'280'} />
    </S.Wrapper>
  )
}

VHInputIcon.defaultProps = {
  iconColor: "black-100",
  textColor: "black-100",
  textVariant: "platform1",
  onEvent: null,
  data: null,
  placeholder: "",
  value: "",
  className: '',
}

VHInputIcon.propTypes = {
  iconColor:  PropTypes.string,
  textColor:  PropTypes.string,
  textVariant: PropTypes.string,
  disabled: PropTypes.bool,
  onEvent: PropTypes.func.isRequired,
  data: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
}

export default VHInputIcon
