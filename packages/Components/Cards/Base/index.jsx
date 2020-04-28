import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const VHCardBase = props => {
  return (
    <S.Card
      onClick={event => {
        if (props.onEvent) {
          props.onEvent({
            data: props,
            type: 'onClick',
            target: 'VHCardBase'
          })
        };
      }}
      draggable={props.draggable}
      id={props.id}
      width={props.width}
      maxWidth={props.maxWidth}
      height={props.height}
      minHeight={props.minHeight}
      onDragEnter={props.onDragEnter}
      noPadding={props.noPadding}
      onDragLeave={props.onDragLeave}
      onDragStart={props.onDragStart}
      noBorder={props.noBorder} favorite={props.favorite} noHover={props.noHover}>
      {props.children}

    </S.Card>
  )

}

VHCardBase.defaultProps = {
  className: '',
  noBorder: false,
  favorite: false,
  noHover: false,
}

VHCardBase.propTypes = {
  className: PropTypes.string,
  noBorder: PropTypes.bool,
  favorite: PropTypes.bool,
  noHover: PropTypes.bool,
}

export default VHCardBase
