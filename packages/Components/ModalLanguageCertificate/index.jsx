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

const VHModalLanguageCertificate = props => {

    const item = props.currentItem ? props.currentItem : {};
    const [type, setType] = React.useState(item.type ? props.items[item.type] : {});
    const [listening, setListening] = React.useState(item.listening);
    const [reading, setReading] = React.useState(item.reading);
    const [writing, setWriting] = React.useState(item.writing);
    const [speaking, setSpeaking] = React.useState(item.speaking);
    const [overall, setOverall] = React.useState(item.overall);

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
                        title={'Add Language Certificate'}
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
                    <Row marginBottom5 width={'40%'}>
                        <VHSelect
                            caption="Certificate Type"
                            captionColor="gray-90"
                            className={`vh-general-section-degree ${props.className ? props.className : ''}`}
                            currentItem={type}
                            data="type"
                            onEvent={props.onEvent}
                            items={props.items}
                            color="gray-90"
                        />
                        {props.modalLanguageCertificate.type.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
                    </Row>
                    <Row marginBottom5 row>
                        <Row width={'40%'} paddingRight={5}>
                            <VHText color="gray-90" variant={'platform'} text="Listening" />
                            <VHInput placeholder="" onEvent={props.onEvent} type={'number'} value={listening} data={{ id: "modalLanguageCertificate", field: "listening" }} />
                            {props.modalLanguageCertificate.listening.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                        <Row width={'40%'}>
                            <VHText color="gray-90" variant={'platform'} text="Reading" />
                            <VHInput placeholder="" type={'number'} onEvent={props.onEvent} value={reading} data={{ id: "modalLanguageCertificate", field: "reading" }} />
                            {props.modalLanguageCertificate.reading.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                    </Row>
                    <Row marginBottom5 row>
                        <Row width={'40%'} paddingRight={5}>
                            <VHText color="gray-90" variant={'platform'} text="Writing" />
                            <VHInput placeholder="" onEvent={props.onEvent} type={'number'} value={writing} data={{ id: "modalLanguageCertificate", field: "writing" }} />
                            {props.modalLanguageCertificate.writing.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                        <Row width={'40%'}>
                            <VHText color="gray-90" variant={'platform'} text="Speaking" />
                            <VHInput placeholder="" type={'number'} onEvent={props.onEvent} value={speaking} data={{ id: "modalLanguageCertificate", field: "speaking" }} />
                            {props.modalLanguageCertificate.speaking.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                    </Row>
                    <Row marginBottom5 width={'40%'}>
                        <VHText color="gray-90" variant={'platform'} text="Overall" />
                        <VHInput placeholder="" onEvent={props.onEvent} type={'number'} value={overall} data={{ id: "modalLanguageCertificate", field: "overall" }} />
                        {props.modalLanguageCertificate.overall.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
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
                                    className={`vh-delete-languageCertificate ${props.className ? props.className : ''}`}
                                    variant="platform"
                                    data={{ action: 'deleteLanguageCertificate', id: item.id }}
                                    onEvent={props.onEvent}
                                    onClose={props.onClose}
                                />
                            </Row>
                        }
                        <Row alignItemsRight>
                            <VHButton primary onEvent={props.onEvent} data={{ action: 'saveLanguageCertificate', id: item.id }} onClose={props.onClose} closeModal={props.closeModal} label="Save" />
                        </Row>
                    </Row>
                </Row>
            }>
        </VHModal>
    )
}

VHModalLanguageCertificate.defaultProps = {
    onEvent: null,
    className: ""
};

VHModalLanguageCertificate.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.stringc
};

export default VHModalLanguageCertificate;