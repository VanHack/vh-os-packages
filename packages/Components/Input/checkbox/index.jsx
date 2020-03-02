import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import VHText from '../../Text';
import { Row } from '../../../Grid';
import VHInputCheckboxMulti from './multi';

const VHInputCheckbox = props => {
  const [checked, setChecked] = useState(props.checked);

  if (props.multi) {
    return <VHInputCheckboxMulti {...props} />;
  }

  function handleOnChange(props) {
    setChecked(!checked);
    props.onEvent({
      type: 'OnClick',
      origin: 'VHCheckbox',
      props: {
        data: props.data,
        checked: !checked
      }
    });
  }

  return (
    <Row
      row
      alignItemsCenter
      className={`vh-checkbox ${props.className ? props.className : ''}`}
    >
      <S.Wrapper>
        <S.Input
          name={props.name}
          id={props.id}
          checked={checked}
          disabled={props.disabled}
          type="checkbox"
          onChange={() => handleOnChange(props)}
        />
      </S.Wrapper>
      <VHText
        clickable
        htmlFor="squaredOne"
        variant={props.variant}
        color={props.color}
        text={props.title}
        onEvent={()=> handleOnChange(props)}
      />
    </Row>
  );
};

VHInputCheckbox.defaultProps = {
  title: '',
  color: 'gray-100',
  variant: 'platform1',
  onEvent: null,
  data: null,
  checked: null,
  disabled: null,
  className: ''
};

VHInputCheckbox.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  onEvent: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default VHInputCheckbox;
