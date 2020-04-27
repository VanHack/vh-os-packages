import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../Grid";
import VHModal from "../Modal";
import VHTitleDescription from "../TitleDescription";
import VHInput from "../../Components/Input/Simple";
import VHText from "../../Components/Text/index";
import VHButton from "../../Components/Button-New/index";
import * as S from "./styles"
import { getFormatedDate } from '../../util/index'
import VHIconText from '../../Components/IconText/'

const VHModalSideProjects = props => {

    const item = props.currentItem ? props.currentItem : {};
    const [title, setDegreeTitle] = React.useState(item.title);
    const [description, setSchoolName] = React.useState(item.description);
    const [completedAt, setStartYear] = React.useState(getFormatedDate(item.completedAt));
    const [projectUrl, setProjectUrl] = React.useState(item.projectUrl);
    const [endDate, setEndYear] = React.useState(getFormatedDate(item.endDate));

    return (
        <VHModal
            width="732"
            minWidth="660"
            open={props.openModal}
            onClose={props.onClose}
            onEvent={props.onEvent}
            header={
                <>
                    <Row row>
                        <VHTitleDescription
                            title={'Add Side Project'}
                            description={''}
                            titleVariant="h3"
                            titleColor="black-50"
                            descriptionColor="gray-90"
                            descriptionVariant="platform"
                            onEvent={props.onEvent} />
                    </Row>
                    <Row row>
                        <VHText
                            text={"Projects listed in this section can be from either professional, volunteer, or academic roles. They might catch the eye of a recruiter or an employer and help you nail a job!"}
                            color="black-50"
                            variant={'subtitle3'}
                            />  
                    </Row>
                </>
            }
            content={
                <Row column>
                    <Row marginBottom5>
                        <VHText color="gray-90" variant={'platform'} text="Title" />
                        <VHInput placeholder="" onEvent={props.onEvent} value={title} data={{ id: "modalSideProjects", field: "title" }} />
                        {props.modalSideProjects.title.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
                    </Row>
                    <Row marginBottom5>
                        <VHText color="gray-90" variant={'platform'} text="Description" />
                        <VHInput placeholder="" onEvent={props.onEvent} value={description} data={{ id: "modalSideProjects", field: "description" }} />
                        {props.modalSideProjects.description.messageError && (
                            <S.ErrorMessage>Field required</S.ErrorMessage>
                        )}
                    </Row>
                    <Row marginBottom5>
                        <VHText color="gray-90" variant={'platform'} text="Project link" />
                        <VHInput placeholder="" onEvent={props.onEvent} value={projectUrl} data={{ id: "modalSideProjects", field: "projectUrl" }} />
                    </Row>
                    <Row marginBottom5 row justifySpaceBetween>
                        <Row width={'50%'} marginRight={4}>
                            <VHText color="gray-90" variant={'platform'} text="Start Date" />
                            <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={completedAt} data={{ id: "modalSideProjects", field: "completedAt" }} />
                            {props.modalSideProjects.completedAt.messageError && (
                                <S.ErrorMessage>Field required</S.ErrorMessage>
                            )}
                        </Row>
                        <Row width={'50%'}>
                            <VHText color="gray-90" variant={'platform'} text="End Date" />
                            <VHInput placeholder="" type={'date'} onEvent={props.onEvent} value={endDate} data={{ id: "modalSideProjects", field: "endDate" }} />
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
                                    className={`vh-delete-education ${props.className ? props.className : ''}`}
                                    variant="platform"
                                    data={{ action: 'deleteSideProjects', id: item.id }}
                                    onEvent={props.onEvent}
                                    onClose={props.onClose}
                                />
                            </Row>
                        }
                        <Row alignItemsRight>
                            <VHButton primary onEvent={props.onEvent} data={{action: 'saveSideProjects', id: item.id}} onClose={props.onClose} closeModal={props.closeModal} label="Save" />
                        </Row>
                    </Row>
                </Row>
            }>
        </VHModal>
    )
}

VHModalSideProjects.defaultProps = {
    onEvent: null,
    className: ""
};

VHModalSideProjects.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.stringc
};

export default VHModalSideProjects;