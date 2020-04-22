import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHLanguageList from '../LanguageList'

const SixStep = props => {

    let userPositions = []

    if (props.userPositions) {
        props.userPositions.map(item => {
            if (item.id) {
                userPositions.push({ value: item.id, label: item.name })
            } else {
                userPositions.push({ value: item, label: item.label ? item.label : positions.find(element => element.value === item).label })
            }
        })
    }

    return (
        <Row column >
            <Row row marginBottom={10}>
                <Row width={'10%'}>
                    <VHIcon icon={'language'} title="city" md />
                </Row>
                <Row width={'70%'}>
                    <VHText
                        variant={"h4"}
                        color="gray-90"
                        text={'Languages'}
                    />
                </Row>
            </Row>
            <Row column>
                <Row>
                    <VHLanguageList
                        languages={props.languages}
                        controls={props.controls}
                        onEvent={props.onEvent}
                        secondList={props.proficiencyList}
                        list={props.languageList}
                        items={props.languages}
                        data="vanhack" />
                </Row>
            </Row>

        </Row>
    )

}

SixStep.defaultProps = {
    className: "",
};

SixStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default SixStep
