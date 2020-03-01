import React, {useState} from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"

const VHInput = props => {
  const [value, handleChange] = React.useState(props.value);
  
  return (
    <S.Input
      data={props.data}
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      className={`vh-input ${props.className ? props.className : ''}`}
      disabled={props.disabled}
      autoFocus={props.autoFocus}
      noBorder={props.noBorder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      onKeyUp={e => {
        if (e.key === "Enter") {
          props.onEvent({
            data: {
              value,
              data: props.data
            },
            event: "onKeyUpAction",
            origin: "VHInput"
          })
        } else {
          handleChange(e.currentTarget.value)
          props.onEvent({
            data: {
              value: e.currentTarget.value,
              data: props.data
            },
            event: "onKeyUp",
            origin: "VHInput"
          })
        }
      }}

      onFocus={() => {
        props.onEvent({
          data: {
            value,
            data: props.data
          },
          event: "onFocus",
          origin: "VHInput"
        })
      }}

      onBlur={() => {
        props.onEvent({
          data: {
            value,
            data: props.data
          },
          event: "onBlur",
          origin: "VHInput"
        })
      }}
    />
  )
}

VHInput.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  className: '',
  noBorder: false
}

VHInput.propTypes = {
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  noBorder: PropTypes.bool,
}

export default VHInput
