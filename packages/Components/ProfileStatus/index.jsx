import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base/"
import VHText from "../../Components/Text/"
import VHIcon from '../Icon/'
import * as S from './styles'
import VHModalProfileReview from '../ModalProfileReview/'

const VHProfileStatus = props => {

    const [openModalReview, setOpenModalReview] = React.useState(false);
    
    let englishResult = props.englishLevel
    if (props.englishVerification && props.englishVerification.status === 'VoidTest') {
        englishResult = 'Void'
    }
    else if (props.englishVerification && props.englishVerification.status === 'Expired') {
        englishResult = 'Expired'
    } 
    else if (props.englishVerification && props.englishVerification.status === 'UnderReview') {
        englishResult = 'Under review'
    }
   
    return (
        <React.Fragment>
            {openModalReview &&
                <VHModalProfileReview openModal={openModalReview} onClose={() => setOpenModalReview(false)}
                    onEvent={props.onEvent}
                    notes={props.review.notes} />
            }
            <VHCardBase>
                <Row responsive row alignItemsCenter>
                    {props.review && props.review.show &&
                        < Row column alignItemsCenter borderRight>
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
                                {props.review && props.review.canRequestReview && !props.reviewInProgress && 
                                    <Row alignItemsCenter>
                                        <VHText color="gradient-primary" onEvent={props.onEvent} data={'RequestProfileReview'} variant={'platform'} text="Request" cursor />
                                    </Row>
                                }
                                {props.review && props.review.isUnderReview && 
                                    <Row alignItemsCenter>
                                        <VHText
                                            variant={"platform2"}
                                            color="gray-80"
                                            text={`Under review`}
                                        />
                                    </Row>
                                }
                                {props.review && props.review.notes.length > 0 &&
                                    <Row alignItemsCenter>
                                        <VHText
                                            cursor
                                            variant={'platform'}
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
                    }
                    <Row column alignItemsCenter borderRight>
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
                            {(props.englishVerification) && (props.englishLevel === 'NoEnglish' && (props.englishVerification.status === 'VoidTest' || props.englishVerification.status === 'Expired' || props.englishVerification.status === 'InProgress' || props.englishVerification.status === 'NoTest')) &&
                                <Row alignItemsCenter>
                                    <VHText color="gradient-primary" onEvent={props.onEvent} data={'StartEnglishVerification'} variant={'platform'} text={props.englishVerification.status === 'InProgress' ? 'In progress' : 'Start now'} cursor />
                                </Row>
                            }
                            {englishResult && (props.englishLevel !== 'NoEnglish' || props.englishVerification.status === 'VoidTest' || props.englishVerification.status === 'Expired' || props.englishVerification.status === 'UnderReview') &&
                                <Row alignItemsCenter>
                                    <VHText color="gray-80" onEvent={props.onEvent} data={'label'} variant={'platform'} text={englishResult} />
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
                                <VHText color="gradient-primary" onEvent={props.onEvent} data={'StartCodeTest'} variant={'platform'} text="See Details" cursor />
                            </Row>
                        </Row>
                    </Row>
                </Row>
            </VHCardBase>
        </React.Fragment >
    )
}

VHProfileStatus.propTypes = {
    onEvent: PropTypes.func,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHProfileStatus;
