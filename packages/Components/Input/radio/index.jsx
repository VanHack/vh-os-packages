import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from "./styles"
import VHText from '../../Text'
import VHInput from '../../Input/Simple'
import { Row } from '../../../Grid'
import InputMask from "react-input-mask";
import { stringToDate, getFormatedPassport } from '../../../util'

const VHInputRadio = props => {
    const [checked, setChecked] = useState(props.checked)
    const [value, setValue] = useState(getFormatedPassport(props.value))

    React.useEffect(() => {
        setChecked(props.checked);
    }, [props.checked])


    return (
        <Row column alignItemsLeft className={`vh-radio ${props.className ? props.className : ''}`} >
            <Row marginBottom5>
                <VHText variant={props.variant} color={props.color} text={props.text} />
            </Row>
            <S.Wrapper>
                <S.Input
                    name={props.text}
                    id={'Yes'}
                    checked={checked}
                    disabled={props.disabled}
                    type="radio"
                    onClick={() => {
                        setChecked(true),
                            props.onEvent({
                                type: "OnClick",
                                origin: "VHInputRadio",
                                props: {
                                    data: props.data,
                                    checked: checked
                                }
                            })
                    }}
                />
                <S.Label for={props.text}>{'Yes'}</S.Label>
                <S.Input
                    name={props.text}
                    id={"No"}
                    checked={!checked}
                    disabled={props.disabled}
                    type="radio"
                    onClick={() => {
                        setChecked(false),
                            props.onEvent({
                                type: "OnClick",
                                origin: "VHInputRadio",
                                props: {
                                    data: props.data,
                                    checked: checked
                                }
                            })
                    }}
                />
                <S.Label for={props.text}>{'No'}</S.Label>
                {props.input && checked &&
                    <S.Container error={props.controls.passportExpirationDate.error}>
                        <InputMask mask="99/9999" onBlur={(e) => {
                                props.onEvent({
                                    data: {key: 'passportExpirationDate',  value: stringToDate(e.currentTarget.value)},
                                    event: "onBlur",
                                    origin: "VHInput",
                                })
                        }} onChange={(e)=>{setValue(e.currentTarget.value)}} value={value} placeholder={'Expiration: mm/yyyy'} />
                    </S.Container>
                }
            </S.Wrapper>
        </Row>
    )
}

VHInputRadio.defaultProps = {
    title: "",
    color: "gray-90",
    variant: "platform1",
    onEvent: null,
    data: null,
    checked: null,
    disabled: null,
    className: '',
}

VHInputRadio.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
    onEvent: PropTypes.func.isRequired,
    data: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
}

export default VHInputRadio
