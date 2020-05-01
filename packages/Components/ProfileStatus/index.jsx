import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base/"
import VHText from "../../Components/Text/"
import VHIcon from '../Icon/'
import * as S from './styles'

const VHProfileStatus = props => {

    const [openModalReview, setOpenModalReview] = React.useState(false);

    return (
        <React.Fragment>
            {openModalReview &&
                <VHModalProfileReview openModal={openModalReview} onClose={() => setOpenModalReview(false)}
                    onEvent={props.onEvent}
                    notes={props.review.notes} />
            }
            <VHCardBase>
                <Row responsive row alignItemsCenter>
                    <Row column alignItemsCenter >
                        <Row marginBottom5 alignItemsCenter>
                            <VHIcon
                                icon={'profile'}
                                color="gray-90"
                                text={'Profile Review'}
                                md
                            />
                        </Row>
                        <Row marginBottom5 alignItemsCenter>
                            <VHText color="black-90" onEvent={props.onEvent} data={'addRole'} variant={'subtitle2'} text="Profile Review" />
                        </Row>
                        <Row row alignItemsCenter width={'80%'}>
                            {props.review && props.review.canRequestReview && !props.review.isUnderReview &&
                                <Row alignItemsCenter>
                                    <VHText color="gradient-primary" onEvent={props.onEvent} data={'RequestProfileReview'} variant={'platform'} text="Request" cursor />
                                </Row>
                            }
                            {props.reviewInProgress || props.review && props.review.isUnderReview &&
                                <Row alignItemsCenter>
                                    <VHText
                                        variant={"platform2"}
                                        color="gray-80"
                                        text={`Under review`}
                                    />
                                </Row>
                            }
                            {props.review && props.review.notes.length > 0 &&
                                <Row>
                                    <VHText
                                        cursor
                                        color="gradient-primary"
                                        onEvent={props.onEvent}
                                        data={"ViewReview"}
                                        text="Check Review"
                                        onOpen={() => { setOpenModalReview(true) }}
                                    />
                                </Row>
                            }
                        </Row>
                    </Row>
                    <Row column alignItemsCenter borderRight borderLeft>
                        <Row marginBottom5 alignItemsCenter>
                            <VHIcon
                                icon={'language'}
                                color="gray-90"
                                text={'Profile Review'}
                                md
                            />
                        </Row>
                        <Row marginBottom5 alignItemsCenter>
                            <VHText color="black-90" onEvent={props.onEvent} data={'addRole'} variant={'subtitle2'} text="English Verification" />
                        </Row>
                        <Row row alignItemsCenter width={'80%'}>
                            {(props.englishVerification) && (props.englishVerification.status === 'NoTest' || props.englishVerification.status == 'CanStartAgain'
                                || props.englishVerification.status == 'VoidTest') &&
                                <Row alignItemsCenter>
                                    <VHText color="gradient-primary" onEvent={props.onEvent} data={'StartEnglishVerification'} variant={'platform'} text="Start now" cursor />
                                </Row>
                            }
                            {props.englishLevel !== 'NoEnglish' &&
                                <Row alignItemsCenter>
                                    <VHText color="gray-80" onEvent={props.onEvent} data={'label'} variant={'platform'} text={props.englishLevel} />
                                </Row>
                            }
                        </Row>
                    </Row>
                    <Row column alignItemsCenter >
                        <Row marginBottom5 alignItemsCenter>
                            <VHIcon
                                icon={'skills'}
                                color="gray-90"
                                text={'Profile Review'}
                                md
                            />
                        </Row>
                        <Row marginBottom5 alignItemsCenter width={'80%'}>
                            <VHText color="black-90" onEvent={props.onEvent} data={'addRole'} variant={'subtitle2'} text="Code Test" />
                        </Row>
                        <Row row alignItemsCenter>
                            <Row alignItemsCenter>
                                <VHText color="gradient-primary" onEvent={props.onEvent} data={'StartCodeTest'} variant={'platform'} text="Start code test" cursor/>
                            </Row>
                        </Row>
                    </Row>
                </Row>
            </VHCardBase>
        </React.Fragment>
    )
}

VHProfileStatus.propTypes = {
    onEvent: PropTypes.func,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHProfileStatus;
