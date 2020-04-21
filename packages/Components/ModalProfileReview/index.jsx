import React from "react";
import PropTypes from "prop-types";
import { Row } from "../../Grid";
import VHModal from "../Modal";
import VHTitleDescription from "../TitleDescription";

const VHModalProfileReview = props => {

    console.log(props.notes)

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
                        title={'Profile Review'}
                        description={''}
                        titleVariant="h3"
                        titleColor="black-50"
                        descriptionColor="gray-90"
                        descriptionVariant="platform"
                        onEvent={props.onEvent} />
                </Row>
            }
            content={
                <Row>
                    {props.notes.map(item => {
                        return (
                        <Row style={{fontFamily: 'Roboto', lineHeight: '21.5px', wordBreak: 'break-word', color: '#4f4f4f'}} marginBottom5 column dangerouslySetInnerHTML={{__html: item.note}} />
                        )
                    })

                    }
                </Row>
            }>
        </VHModal>
    )
}

VHModalProfileReview.defaultProps = {
    onEvent: null,
    className: ""
};

VHModalProfileReview.propTypes = {
    onEvent: PropTypes.func,
    className: PropTypes.stringc
};

export default VHModalProfileReview;