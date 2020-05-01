import React, {useState} from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"
import Loader from '../../Preloader';

const VHInput = props => {
  const [value, handleChange] = React.useState(props.value);
  const [maxLength, setMaxLength] = React.useState(props.maxLength);
  const [pattern, setPattern] = React.useState(props.pattern);
  const [inputValid, setInputInvalid] = React.useState(false);

  React.useEffect(() => {
    handleChange(props.value);
}, [props.value])

  return (
    <S.Container>
      <S.Input
        id={props.id}
        maxLength={maxLength}
        type={props.type}
        placeholder={props.placeholder}
        pattern={pattern}
        className={`vh-input ${props.className ? props.className : ''}`}
        disabled={props.disabled || props.loading}
        error={props.error}
        loading={props.loading}
        max={`${props.type === 'date' ? "2999-12-31" : ''}`}
        autoFocus={props.autoFocus}
        value={value}
        noBorder={props.noBorder}
        onChange={e => {
          handleChange(e.currentTarget.value)
        }}
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
              key: props.data
            },
            event: "onBlur",
            origin: "VHInput"
          })
        }}
      />
      {
        props.loading && (
          <S.LoaderContainer>
            <Loader type="bubble" size="xs" />
          </S.LoaderContainer>
        )
      }
    </S.Container>
  )
}

VHInput.defaultProps = {
  type: "text",
  disabled: false,
  autoFocus: false,
  loading: false,
  className: '',
  placeholder: '',
  noBorder: false
}

VHInput.propTypes = {
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  loading: PropTypes.bool,
  autoFocus: PropTypes.string,
  placeholder: PropTypes.string,
  noBorder: PropTypes.bool,
  type: PropTypes.string,
}

export default VHInput
