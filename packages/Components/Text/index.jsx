import React from 'react'
import PropTypes from 'prop-types'
import * as Text from './styles'

const VHText = props => {
    const initialState = { className: 'vh-text-component' }
    const action = () => {
        if (props.onOpen) {
            props.onOpen()
        }
        props.onEvent(
            {
                type: "onClick",
                origin: "VHText",
                props: {
                    data: props.data
                }
            })
    }
    switch (props.variant) {
        case 'h1':
            return <Text.H1 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.H1>
        case 'h2':
            return <Text.H2 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.H2>
        case 'h3':
            return <Text.H3 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.H3>
        case 'h4':
            return <Text.H4 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.H4>
        case 'h5':
            return <Text.H5 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.H5>
        case 'h6':
            return <Text.H6 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.H6>
        case 'subtitle1':
            return <Text.Subtitle1 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.Subtitle1>
        case 'subtitle2':
            return <Text.Subtitle2 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.Subtitle2>
        case 'subtitle3':
            return <Text.Subtitle3 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.Subtitle3>
        case 'bodyweb':
            return <Text.BodyWeb color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.BodyWeb>
        case 'platform1':
        case 'platform':
            return <Text.BodyPlatform color={props.color} cursor={props.cursor} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.BodyPlatform>
        case 'platform2':
            return <Text.BodyPlatform2 color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.BodyPlatform2>
        case 'caption':
            return <Text.Caption color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.Caption>
        default:
            return <Text.Caption color={props.color} hover={props.hover}
                className={`${initialState.className} ${props.className ? props.className : ''}`}
                onClick={props.onEvent ? action : () => { }} alignCenter={props.alignCenter} >{props.text}</Text.Caption>
    }
}
VHText.defaultProps = {
}

VHText.propTypes = {
}

export default VHText
