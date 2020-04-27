import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../assets/svg/icons/close.svg/index.js';
import VHButton from '../Button';
import * as S from './styles';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`
const VHModal = props => {
  return (
    <S.ModalWrapper open={props.open} marginTop={props.marginTop}>
        {/* //<GlobalStyle /> */}
      <S.ModalContainer maxWidth={props.maxWidth} >
      <S.Header>
          <div>
            {props.header && props.header}
          </div>
            {!props.hideBtnClose && (
              <S.Close style={{textAlign:'right'}}
                onClick={() => {
                  if(props.onClose){
                    props.onClose()
                  }
                  props.onEvent({
                    event: 'onClose',
                    target: 'VHModal'
                  })
                }}>
                <CloseIcon />
              </S.Close>
            )}
          </S.Header>
          <S.Content>
            {props.content}
          </S.Content>
          {props.confirmation && (
            <S.ConfirmationSection>
                <VHButton
                      primary
                      outline
                      label={props.cancelTitle}
                      onClick={props.onClose}/>
                  <VHButton
                      disabled={props.disableAction}
                      primary
                      label={props.confirmType}
                      onClick={() => {
                        props.onEvent({
                          event: 'onConfirm',
                          target: 'VHModal',
                          type: props.confirmType,
                          data: props.data,
                        })
                        props.onClose()}}/>
            </S.ConfirmationSection>
          )}
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

VHModal.defaultProps = {
}

VHModal.propTypes = {
}

export default VHModal
