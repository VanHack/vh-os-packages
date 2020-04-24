import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row } from '../../Grid'
import VHIcon from '../Icon'
import VHText from '../Text'
import VHSelect from '../Input/Select'
import VHInputRadio from '../Input/radio'
import VHTargetLocation from '../TargetLocation/'
import VHTitleDescription from "../../Components/TitleDescription";

const FourthStep = props => {

    const visaStatusCanadianList = props.visaStatusCanadianList
    const visaStatusEUList = props.visaStatusEUList
    const targetLocation = props.targetLocation ? props.targetLocation.items : []
    const visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList[props.visaStatusCanadian] : []
    const visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : []
    const firstChoice = props.firstChoice ? props.firstChoice : {}
    const remoteJobList = props.remoteJobList
    const openForRemoteJobs = props.openForRemoteJobs != undefined ? remoteJobList[props.openForRemoteJobs] : []

    let preferedCountries = []

    if (targetLocation != undefined && targetLocation.length > 0) {
        targetLocation.map(country => {
            if (country.status) {
                preferedCountries.push({ value: country.id, label: country.name })
            }
        }
        )
    }

    return (
        <Row column>
            <Row row marginBottom={10} alignItemsCenter >
                <Row autoWidth marginRight={5}>
                    <VHIcon icon={'relocation'} title="city" md color="gray-50" />
                </Row>
                <Row width={'70%'}>
                    <VHText
                        variant={"h4"}
                        color="gray-90"
                        text={'Relocation'}
                    />
                </Row>
            </Row>
            <Row column>
                <Row marginBottom={10} style={{ padding: '1px' }} width={'50%'}>
                    <VHSelect
                        caption={'Are you open to remote jobs?'}
                        className={`vh-relocation-section-openForRemoteJobs ${props.className ? props.className : ''}`}
                        currentItem={openForRemoteJobs}
                        data="openForRemoteJobs"
                        items={remoteJobList}
                        onEvent={props.onEvent}
                        isLoading={props.controls.openForRemoteJobs.loading}
                        description={props.controls.openForRemoteJobs.error && props.controls.openForRemoteJobs.message}
                        descriptionColor="red"
                        captionColor={
                            props.controls.openForRemoteJobs.loading
                                ? "gray-40"
                                : props.controls.openForRemoteJobs.error
                                    ? "red"
                                    : "gray-90"
                        }
                    />
                </Row>
                {props.openForRemoteJobs !== null && props.openForRemoteJobs < 2 &&
                    <React.Fragment>
                        <Row marginBottom={1} >
                            <VHTitleDescription
                                className={`vh-general-section-companySize ${props.className ? props.className : ''}`}
                                descriptionColor={
                                    props.controls.companySize.loading
                                        ? "gray-40"
                                        : props.controls.companySize.error
                                            ? "red-light"
                                            : "gray-90"
                                }
                                descriptionVariant="caption"
                                inline
                                onEvent={props.onEvent}
                                title="Where would you like to work?"
                                titleColor={
                                    props.controls.companySize.loading
                                        ? "gray-40"
                                        : props.controls.companySize.error
                                            ? "red"
                                            : "gray-90"
                                }
                                titleVariant="platform1"
                            />
                        </Row>
                        <Row marginBottom={5} width={'100%'}>
                            <VHTargetLocation onEvent={props.onEvent} items={targetLocation} />
                        </Row>
                        {preferedCountries.length > 1 &&
                            <Row width={'50%'} responsive id="preferred-country">
                                <VHSelect
                                    caption={'Which country is your first choice?'}
                                    className={`vh-general-section-firstChoice ${props.className ? props.className : ''}`}
                                    currentItem={firstChoice}
                                    data="firstChoice"
                                    items={preferedCountries}
                                    onEvent={props.onEvent}
                                    isLoading={props.controls.firstChoice.loading}
                                    description={props.controls.firstChoice.error && props.controls.firstChoice.message}
                                    descriptionColor="red"
                                    captionColor={
                                        props.controls.firstChoice.loading
                                            ? "gray-40"
                                            : props.controls.firstChoice.error
                                                ? "red"
                                                : "gray-90"
                                    }
                                />
                            </Row>
                        }
                    </React.Fragment>
                }
                <Row row responsive>
                    <Row paddingRight8>
                        <VHSelect
                            caption="Canadian Visa Status"
                            className={`vh-general-section-visaStatusCanadian ${props.className ? props.className : ''}`}
                            currentItem={visaStatusCanadian}
                            data="visaStatusCanadian"
                            items={visaStatusCanadianList}
                            onEvent={props.onEvent}
                            isLoading={props.controls.visaStatusCanadian.loading}
                            description={props.controls.visaStatusCanadian.error && props.controls.visaStatusCanadian.message}
                            descriptionColor="red"
                            captionColor={
                                props.controls.visaStatusCanadian.loading
                                    ? "gray-40"
                                    : props.controls.visaStatusCanadian.error
                                        ? "red"
                                        : "gray-90"
                            }
                        />
                    </Row>
                    <Row>
                        <VHSelect
                            caption="EU Visa Status"
                            className={`vh-general-section-visaStatusEU ${props.className ? props.className : ''}`}
                            currentItem={visaStatusEU}
                            data="visaStatusEU"
                            items={visaStatusEUList}
                            onEvent={props.onEvent}
                            isLoading={props.controls.visaStatusEU.loading}
                            description={props.controls.visaStatusEU.error && props.controls.visaStatusEU.message}
                            descriptionColor="red"
                            captionColor={
                                props.controls.visaStatusEU.loading
                                    ? "gray-40"
                                    : props.controls.visaStatusEU.error
                                        ? "red"
                                        : "gray-90"
                            }
                        />
                    </Row>
                </Row>
            </Row>

        </Row>
    )

}

FourthStep.defaultProps = {
    className: "",
};

FourthStep.propTypes = {
    className: PropTypes.string,
    onEvent: PropTypes.func.isRequired
};

export default FourthStep
