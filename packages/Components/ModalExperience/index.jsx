import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../Grid";
import VHModal from "../Modal";
import VHTitleDescription from "../TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";
import VHText from "../../Components/Text/index";
import VHButton from "../../Components/Button-New/index";
import VHInputCheckbox from "../../Components/Input/checkbox"
import VHInputMultiple from "../../Components/Input/Multiple"
import VHIconText from '../../Components/IconText/'
import { getFormatedDate } from '../../util/index'
import * as S from './styles.js'

const VHModalExperience = props => {

    const item = props.modalExperience;
    const currentItem = props.currentItem ? props.currentItem : {};

    return (
        <VHModal
            width="732"
            minWidth="660"
            open={true}
            onClose={props.onClose}
            onEvent={props.onEvent}
            header={
                <Row row>
                    <VHTitleDescription
                        title={'Add Experience'}
                        description={''}
                        titleVariant="h3"
                        titleColor="black-50"
                        descriptionColor="gray-90"
                        descriptionVariant="platform"
                        onEvent={props.onEvent} />
                </Row>
            }
            content={
                <Row column>
                    <Row row justifySpaceBetween>
                        <Row style={{ width: '50%' }} marginRight={2} id="company-name">
                            <Row marginBottom={2}><VHText color="gray-90" variant={'platform'} text="Company Name" /></Row>
                            <VHInput placeholder="Ex: VanHack" onEvent={props.onEvent} value={item.companyName.value}
                                data={{ id: "ModalExperience", field: "companyName" }} />
                        </Row>
                        <Row style={{ width: '50%' }} marginLeft={2} id="company-location">
                            <VHSelect
                                caption="Location"
                                captionColor="gray-90"
                                className={`vh-general-section-location ${props.className ? props.className : ''}`}
                                currentItem={item.countryId.value ? props.countries.find(element => element.value === item.countryId.value) : {}}
                                data={{ id: "ModalExperience", field: "countryId" }}
                                onEvent={props.onEvent}
                                items={props.countries}
                                descriptionColor="red"
                                placeholder="Select an country"
                            />
                            {item.countryId.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                    </Row>
                    <Row row justifySpaceBetween>
                        <Row style={{ width: '50%' }} id="company-size-modal" marginRight={2}>
                            <VHSelect
                                caption="Company Size"
                                captionColor="gray-90"
                                className={`vh-general-section-company-size ${props.className ? props.className : ''}`}
                                currentItem={item.companySize.value ? props.companyList.find(element => element.value === item.companySize.value) : {}}
                                data={{ id: "ModalExperience", field: "companySize" }}
                                onEvent={props.onEvent}
                                items={props.companyList}
                                descriptionColor="red"
                                placeholder="select an option"
                            />
                            {item.companySize.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                        <Row style={{ width: '50%' }} id="company-industry-modal" marginLeft={2}>
                            <VHSelect
                                caption="Industry"
                                captionColor="gray-90"
                                className={`vh-general-section-industry ${props.className ? props.className : ''}`}
                                currentItem={item.industryId.value ? props.industryList.find(element => element.value === item.industryId.value) : {}}
                                data={{ id: "ModalExperience", field: "industryId" }}
                                onEvent={props.onEvent}
                                items={props.industryList}
                                descriptionColor="red"
                            />
                            {item.industryId.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                    </Row>
                    {item.workExperiences.map((experience, index) => {
                        return (
                            <React.Fragment>
                                <Row row>
                                    <Row width={'50%'} marginRight={2}>
                                        <VHSelect
                                            caption="Role Title"
                                            captionColor="gray-90"
                                            className={`vh-general-section-position ${props.className ? props.className : ''}`}
                                            currentItem={experience.positionId.value !== undefined ? props.positions.find(element => element.value === experience.positionId.value) : {}}
                                            data={{ id: "ModalExperience", field: "positionId", index: index }}
                                            onEvent={props.onEvent}
                                            items={props.positions}
                                            descriptionColor="red"
                                        />
                                        {experience.positionId.messageError && (
                                            <S.ErrorMessage>Field required</S.ErrorMessage>
                                        )}
                                    </Row>
                                    {experience.positionId && experience.positionId.value === 37 &&
                                        <Row style={{ width: '50%' }} id="other-role">
                                            <Row marginBottom={2}><VHText color="gray-90" variant={'platform'} text="Other Role" /></Row>
                                            <VHInput placeholder="Ex: Developer" onEvent={props.onEvent} value={experience.otherPosition.value}
                                                data={{ id: "ModalExperience", field: "otherPosition", index: index }} />
                                            {experience.otherPosition.messageError && (
                                                <S.ErrorMessage>Field required</S.ErrorMessage>
                                            )}
                                        </Row>
                                    }
                                </Row>
                                {index === 0 &&
                                    <Row marginBottom5>
                                        <VHInputCheckbox
                                            title={'I am currently working in this role'}
                                            color="gray-90"
                                            variant="platform1"
                                            data={{
                                                modal: 'ModalExperience',
                                                checked: experience.isCurrentRole.value,
                                                id: 'isCurrentRole',
                                                index: index
                                            }}
                                            checked={experience.isCurrentRole.value}
                                            value={'123'}
                                            name={`${'working-role'}-input-checkbox`}
                                            id={`${'working-role'}-vh-input-checkbox`}
                                            onEvent={props.onEvent}
                                        />
                                    </Row>
                                }
                                <Row marginBottom5 row justifySpaceBetween>
                                    <Row width={'50%'} marginRight={2}>
                                        <VHText color="gray-90" variant={'platform'} text="Start Date" />
                                        <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={getFormatedDate(experience.startDate.value)} data={{ id: "ModalExperience", field: "startDate", index: index }} />
                                        {experience.startDate.messageError && (
                                            <S.ErrorMessage>Field required</S.ErrorMessage>
                                        )}
                                    </Row>
                                    {!experience.isCurrentRole.value &&
                                        <Row width={'50%'} marginLeft={2}>
                                            <VHText color="gray-90" variant={'platform'} text="End Date" />
                                            <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={getFormatedDate(experience.endDate.value)} data={{ id: "ModalExperience", field: "endDate", index: index }} />
                                        </Row>
                                    }
                                </Row>
                                <Row marginBottom5 paddingBottom borderBottom>
                                    <VHText color="gray-90" variant={'platform'} text="Description" />
                                    <VHInputMultiple
                                        max={5}
                                        items={experience.description}
                                        placeholder="Job Experience"
                                        data={{ id: 'multipleInput', order: index }}
                                        onEvent={props.onEvent}
                                    />
                                    {experience.description.messageError && (
                                        <S.ErrorMessage>Field required</S.ErrorMessage>
                                    )}
                                </Row>
                                {index === item.workExperiences.length - 1 &&
                                    <Row marginBottom5>
                                        <VHText color="gradient-primary" onEvent={props.onEvent} data={'addRole'} variant={'platform'} text="+ Add other role for this company" cursor />
                                    </Row>
                                }
                            </React.Fragment>
                        )
                    })}
                    <Row row>
                        {currentItem.id &&
                            <Row alignItemsLeft>
                                <VHIconText
                                    cursor
                                    iconColor="gray-60"
                                    textColor="gray-60"
                                    text={'Delete'}
                                    icon="delete"
                                    className={`vh-delete-education ${props.className ? props.className : ''}`}
                                    variant="platform"
                                    data={{ action: 'deleteExperience', id: currentItem.id }}
                                    onEvent={props.onEvent}
                                    onClose={props.onClose}
                                />
                            </Row>
                        }
                        <Row alignItemsRight>
                            <VHButton primary data={{ action: 'saveExperience', id: currentItem.id }} onEvent={props.onEvent} onClose={props.onClose} closeModal={props.closeModalExperience} label="Save" />
                        </Row>
                    </Row>
                </Row>
            }>
        </VHModal>
    )
}

VHModalExperience.defaultProps = {
    onEvent: null,
    className: ""
};

VHModalExperience.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.stringc
};

export default VHModalExperience;