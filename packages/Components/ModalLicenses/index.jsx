import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../Grid";
import VHModal from "../Modal";
import VHTitleDescription from "../TitleDescription";
import VHSelect from "../../Components/Input/Select";
import VHInput from "../../Components/Input/Simple";
import VHText from "../../Components/Text/index";
import VHButton from "../../Components/Button-New/index";
import * as S from "./styles"
import { getFormatedDate } from '../../util/index'
import VHIconText from '../../Components/IconText/'

const VHModalLicenses = props => {

    const item = props.currentItem ? props.currentItem : {};
    const [institution, setDegreeTitle] = React.useState(item.institution);
    const [title, setSchoolName] = React.useState(item.title);
    const [yearOfComplete, setStartYear] = React.useState(getFormatedDate(item.yearOfComplete));


    return (
        <VHModal
            width="732"
            minWidth="660"
            open={props.openModal}
            onClose={props.onClose}
            onEvent={props.onEvent}
            header={
                <Row row>
                    <VHTitleDescription
                        title={'Add Licenses and Certifications'}
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
                    <Row marginBottom5>
                        <VHText color="gray-90" variant={'platform'} text="Instituition" />
                        <VHInput placeholder="" onEvent={props.onEvent} value={institution} data={{ id: "modalLicenses", field: "institution" }} />
                        {props.modalLicenses.institution.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
                    </Row>
                    <Row marginBottom5>
                        <VHText color="gray-90" variant={'platform'} text="Title" />
                        <VHInput placeholder="" onEvent={props.onEvent} value={title} data={{ id: "modalLicenses", field: "title" }} />
                        {props.modalLicenses.title.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
                    </Row>
                    <Row marginBottom5 row justifySpaceBetween>
                        <Row width={'40%'} marginRight={4}>
                            <VHText color="gray-90" variant={'platform'} text="End Date" />
                            <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={yearOfComplete} data={{ id: "modalLicenses", field: "yearOfComplete" }} />
                            {props.modalLicenses.yearOfComplete.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                    </Row>
                    <Row row>
                        {item.id &&
                            <Row alignItemsLeft>
                                <VHIconText
                                    cursor
                                    iconColor="gray-60"
                                    textColor="gray-60"
                                    text={'Delete'}
                                    icon="delete"
                                    className={`vh-delete-license ${props.className ? props.className : ''}`}
                                    variant="platform"
                                    data={{ action: 'deleteLicense', id: item.id }}
                                    onEvent={props.onEvent}
                                    onClose={props.onClose}
                                />
                            </Row>
                        }
                        <Row alignItemsRight>
                            <VHButton primary onEvent={props.onEvent} data={{action: 'saveLicense', id: item.id}} onClose={props.onClose} closeModal={props.closeModal} label="Save" />
                        </Row>
                    </Row>
                </Row>
            }>
        </VHModal>
    )
}

VHModalLicenses.defaultProps = {
    onEvent: null,
    className: ""
};

VHModalLicenses.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.stringc
};

export default VHModalLicenses;