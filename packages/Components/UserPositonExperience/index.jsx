import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid';
import VHChip from "../Chips/index";
import VHBlackTitleDescription from "../BlackTitleDescription/index";
import VHIconTitleList from "../IconTitleList/index";
import * as S from './styles';

const VHUserPositonExperience = props => {
    return (
        <Row row style={{boxSizing:"border-box", paddingRight:"33px"}} >
            <S.Wrapper hideTimeline={props.hideTimeline}>
                <Row marginBottom={3}>
                    <VHBlackTitleDescription
                        title={props.positionId === 37 ? props.otherPosition : props.position}
                        description={`${new Date(props.startDate).getFullYear()} - ${props.endDate ? new Date(props.endDate).getFullYear() : 'Present'}`}
                        onEvent={props.onEvent}
                        rightTitle={props.rightTitle}
                        className={`vh-user-position-experience ${props.className ? props.className : ''}`}
                    />
                </Row>
                <Row marginBottom={3} >
                    <VHIconTitleList
                        profile
                        onEvent={props.onEvent}
                        items={props.description}
                        iconColor="gray-30"
                        textColor="gray-90"
                        className={`vh-user-position-experience-title-list ${props.className ? props.className : ''}`}

                    />
                </Row>
                {/* <Row row>
                    {props.skills.map(skill =>(
                        <VHChip
                            label={skill.label}
                            transparent
                            round
                            noHover
                            marginRight
                            onEvent={props.onEvent}
                            className={`vh-user-position-experience-chip ${props.className ? props.className : ''}`}

                        />
                    ))}
                </Row> */}
            </S.Wrapper>
        </Row>

    )
}

VHUserPositonExperience.defaultProps = {
    onEvent: null,
    hideTimeline: false,
    className: "",
    transparent: true,
    round: true,
    marginRight: true
};

VHUserPositonExperience.propTypes = {
    onEvent: PropTypes.func,
    headline: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    hideTimeline: PropTypes.bool,
    rightTitle: PropTypes.string,
    description: PropTypes.array.isRequired,
    skills: PropTypes.array,
    className: PropTypes.string,
}

export default VHUserPositonExperience;
