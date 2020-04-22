import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import Colors from '../../Colors'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHSelect from '../Input/Select'
import VHInputRadio from '../Input/radio'

const FirstStep = props => {
    const positions = props.positions
    const position = props.positionSkill != undefined ? positions.find(element => element.value === props.positionSkill) : {};

    const yearsOfExperienceList = props.yearsOfExperienceList
    const yearsOfExperience = props.yearsOfExperience != undefined ? yearsOfExperienceList.find(element => element.value === props.yearsOfExperience)  : {};

    return (
        <Row column>
            <Row row marginBottom={10} alignItemsCenter >
                <Row autoWidth marginRight={5}>
                    <VHIcon 
                        icon={'experience'} 
                        title="city" 
                        md 
                        color="gray-50" 
                    />
                </Row>
                <Row>
                    <VHText
                        variant={"h4"}
                        color="gray-90"
                        text={'Professional Overview'}
                    />
                </Row>
            </Row>
            <Row marginBottom5>
                <VHSelect
                    preLoading={props.preLoading}
                    caption="Which role best applies to your experience?"
                    captionColor={
                        props.controls.positionSkill.loading
                            ? "gray-40"
                            : props.controls.positionSkill.error
                                ? "red"
                                : 'gray-90'
                    }
                    className={`vh-skills-section-positionSkill ${props.className ? props.className : ''}`}
                    currentItem={position}
                    data="positionSkill"
                    onEvent={props.onEvent}
                    items={positions}
                    isLoading={props.controls.positionSkill.loading}
                    description={props.controls.positionSkill.error && props.controls.positionSkill.message}
                    descriptionColor="red"
                />
            </Row>

            <Row width={'70%'} marginBottom5>
                <VHSelect
                    preLoading={props.preLoading}
                    caption="For how many years have you been working as an IT professional?"
                    captionColor={
                        props.controls.yearsOfExperience.loading
                            ? "gray-40"
                            : props.controls.yearsOfExperience.error
                                ? "red"
                                : 'gray-90'
                    }
                    className={`vh-skills-section-yearsOfExperience ${props.className ? props.className : ''}`}
                    currentItem={yearsOfExperience}
                    data="yearsOfExperience"
                    onEvent={props.onEvent}
                    items={yearsOfExperienceList}
                    isLoading={props.controls.yearsOfExperience.loading}
                    description={props.controls.yearsOfExperience.error && props.controls.yearsOfExperience.message}
                    descriptionColor="red"
                    
                />
            </Row>
            <Row>
                <VHInputRadio
                    data={'activelyLookingForJob'}
                    color="gray-90"
                    variant="platform1"
                    onEvent={props.onEvent}
                    text={'Are you actively looking for a job?'}
                    checked={props.activelyLookingForJob}
                />
            </Row>

        </Row>
    )

}

FirstStep.defaultProps = {
    className: "",
};

FirstStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default FirstStep
