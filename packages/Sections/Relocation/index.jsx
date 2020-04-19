import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHInputRadio from "../../Components/Input/radio";
import VHTitleDescription from "../../Components/TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInputCheckbox from "../../Components/Input/checkbox";
import VHTargetLocation from '../../Components/TargetLocation';

import { RelocationSkeleton } from 'react-preload-skeleton'



const VHRelocationSection = props => {

    const salaryRangeCadList = props.salaryRangeCadList
    const salaryRangeEurList = props.salaryRangeEurList
    const visaStatusCanadianList = props.visaStatusCanadianList
    const visaStatusEUList = props.visaStatusEUList
    const noticePeriodList = props.noticePeriodList
    const remoteJobList = props.remoteJobList

    const openForRemoteJobs = props.openForRemoteJobs != undefined ? remoteJobList[props.openForRemoteJobs] : []
    const salaryRangeCad = props.salaryRangeCad != undefined ? salaryRangeCadList[props.salaryRangeCad] : []
    const salaryRangeEur = props.salaryRangeEur != undefined ? salaryRangeEurList[parseInt(props.salaryRangeEur)] : []
    const visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList.find(element => element.value === props.visaStatusCanadian) : []
    const visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : []
    const noticePeriod = props.noticePeriod != undefined ? noticePeriodList[props.noticePeriod] : []
    const companySize = props.companySize ? props.companySize : [{ value: false }, { value: false }, { value: false }]
    const firstChoice = props.firstChoice ? props.firstChoice : {}
    const targetLocation = props.targetLocation ? props.targetLocation.items : []

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
        <>
            <Row >
                <VHText marginBottom={2}
                    className={`vh-general-section-title ${props.className ? props.className : ''}`}
                    text={"Relocation"}
                    color="black-50"
                    variant="h2"

                />
            </Row>
            <Row >
                <VHCardBase
                    className={`vh-general-section-card ${props.className ? props.className : ''}`}
                >
                    {
                        props.preLoading ? (
                            <Row>
                                <RelocationSkeleton />
                            </Row>
                        ) : (
                                <>
                                    <Row column>
                                        <Row marginBottom={10} width={'50%'} id="remote-jobs">
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
                                        {props.openForRemoteJobs < 2 &&
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
                                                <Row marginBottom={8} width={'600px'} id="target-location">
                                                    <VHTargetLocation onEvent={props.onEvent} items={targetLocation} />
                                                </Row>
                                                {preferedCountries.length > 0 &&
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
                                        <Row row responsive marginBottom={5}>
                                            <Row paddingRight8 responsive id="salary-cad">
                                                <VHSelect
                                                    caption={'Annual salary expectation CAD'}
                                                    leftText="$CAD"
                                                    className={`vh-general-section-salaryRangeCad ${props.className ? props.className : ''}`}
                                                    currentItem={salaryRangeCad}
                                                    data="salaryRangeCad"
                                                    items={salaryRangeCadList}
                                                    onEvent={props.onEvent}
                                                    isLoading={props.controls.salaryRangeCad.loading}
                                                    description={props.controls.salaryRangeCad.error && props.controls.salaryRangeCad.message}
                                                    descriptionColor="red"
                                                    captionColor={
                                                        props.controls.salaryRangeCad.loading
                                                            ? "gray-40"
                                                            : props.controls.salaryRangeCad.error
                                                                ? "red"
                                                                : "gray-90"
                                                    }
                                                />
                                            </Row>
                                            <Row id="salary-eu">
                                                <VHSelect
                                                    caption={'Annual salary expectation EUR'}
                                                    className={`vh-general-section-salaryRangeEur ${props.className ? props.className : ''}`}
                                                    currentItem={salaryRangeEur}
                                                    data="salaryRangeEur"
                                                    items={salaryRangeEurList}
                                                    onEvent={props.onEvent}
                                                    isLoading={props.controls.salaryRangeEur.loading}
                                                    description={props.controls.salaryRangeEur.error && props.controls.salaryRangeEur.message}
                                                    descriptionColor="red-light"
                                                    captionColor={
                                                        props.controls.salaryRangeEur.loading
                                                            ? "gray-40"
                                                            : props.controls.salaryRangeEur.error
                                                                ? "red"
                                                                : "gray-90"
                                                    }
                                                />
                                            </Row>
                                        </Row>
                                    </Row>
                                    <Row column>
                                        <Row row responsive marginBottom={5}>
                                            <Row paddingRight8 id="visa-cad">
                                                <VHSelect
                                                    caption="Canadian visa status"
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
                                            <Row id="visa-eu">
                                                <VHSelect
                                                    caption="EU visa status"
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
                                    <Row column marginBottom={5}>
                                        <Row row marginBottom={5} responsive id="passaport-valid">
                                            <Row paddingRight8 >
                                                <VHInputRadio
                                                    controls={props.controls}
                                                    input
                                                    data={'passportValid'}
                                                    color="gray-90"
                                                    variant="platform1"
                                                    onEvent={props.onEvent}
                                                    text={'Do you have a valid passport?'}
                                                    checked={props.passportValid}
                                                    value={props.passportExpirationDate}
                                                />
                                            </Row>
                                            <Row column>
                                                <Row marginBottom={3} >
                                                    <VHTitleDescription
                                                        className={`vh-general-section-companySize ${props.className ? props.className : ''}`}
                                                        descriptionColor={
                                                            props.controls.companySize.loading
                                                                ? "gray-40"
                                                                : props.controls.companySize.error
                                                                    ? "red"
                                                                    : "gray-90"
                                                        }
                                                        descriptionVariant="caption"
                                                        inline
                                                        onEvent={props.onEvent}
                                                        title="What size company do you prefer?"
                                                        titleColor={props.controls.companySize.error
                                                                    ? "red"
                                                                    : "gray-90"
                                                        }
                                                        titleVariant="platform1"
                                                    />
                                                </Row>
                                                <Row row responsive marginBottom={5}>
                                                    <Row>
                                                        <VHInputCheckbox
                                                            checked={companySize[0].value}
                                                            className=""
                                                            color={props.controls.companySize.error
                                                                        ? "red"
                                                                        : 'gray-90'
                                                            }
                                                            data={{
                                                                id: 'companySize',
                                                                label: 'yes',
                                                                value: '1'
                                                            }}
                                                            disabled={props.controls.companySize.loading}
                                                            onEvent={props.onEvent}
                                                            title="Startup"
                                                            value="123"
                                                            variant="platform1"
                                                        />
                                                    </Row>
                                                    <VHInputCheckbox
                                                        checked={companySize[1].value}
                                                        className=""
                                                        color={
                                                            props.controls.companySize.loading
                                                                ? "gray-40"
                                                                : props.controls.companySize.error
                                                                    ? "red"
                                                                    : 'gray-90'
                                                        }
                                                        data={{
                                                            id: 'companySize',
                                                            label: 'yes',
                                                            value: '2'
                                                        }}
                                                        disabled={props.controls.companySize.loading}
                                                        onEvent={props.onEvent}
                                                        title="Midsize"
                                                        value="123"
                                                        variant="platform1"
                                                    />
                                                    <VHInputCheckbox
                                                        checked={companySize[2].value}
                                                        className=""
                                                        color={
                                                            props.controls.companySize.loading
                                                                ? "gray-40"
                                                                : props.controls.companySize.error
                                                                    ? "red"
                                                                    : 'gray-90'
                                                        }
                                                        data={{
                                                            id: 'companySize',
                                                            label: 'yes',
                                                            value: '4'
                                                        }}
                                                        disabled={props.controls.companySize.loading}
                                                        onEvent={props.onEvent}
                                                        title="Corporate"
                                                        value="123"
                                                        variant="platform1"
                                                    />
                                                </Row>
                                            </Row>
                                        </Row>
                                        <Row row responsive>
                                            <Row paddingRight8 id="looking-job">
                                                <VHInputRadio
                                                    data={'activelyLookingForJob'}
                                                    color="gray-90"
                                                    variant="platform1"
                                                    onEvent={props.onEvent}
                                                    text={'Are you actively looking for a job?'}
                                                    checked={props.activelyLookingForJob}
                                                />
                                            </Row>
                                            <Row id="notice-period" >
                                                <VHSelect
                                                    caption="What is your notice period?"
                                                    className={`vh-general-section-notice-period ${props.className ? props.className : ''}`}
                                                    currentItem={noticePeriod}
                                                    data="noticePeriod"
                                                    items={noticePeriodList}
                                                    onEvent={props.onEvent}
                                                    isLoading={props.controls.noticePeriod.loading}
                                                    description={props.controls.noticePeriod.error && props.controls.noticePeriod.message}
                                                    descriptionColor="red-light"
                                                    captionColor={
                                                        props.controls.noticePeriod.loading
                                                            ? "gray-40"
                                                            : props.controls.noticePeriod.error
                                                                ? "red"
                                                                : "gray-90"
                                                    }
                                                />
                                            </Row>
                                        </Row>
                                    </Row>
                                </>
                            )
                    }
                </VHCardBase>
            </Row>
        </>
    )
}

VHRelocationSection.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHRelocationSection;
