import React from 'react';
import PropTypes from 'prop-types';
import VHIconText from "../IconText/index";

import { Container } from './styles'

const VHMainIconTitleList = (props) => {
    return (
        <Container {...props}>
        {props.items && props.items.map(item => (
            <VHIconText
                key={item.label}
                iconColor="primary-light"
                textColor="primary-light"
                text={item.label}
                icon="bullet"
                className={`vh-main-icon-title-list ${props.className ? props.className : ''}`}
                variant="caption"
                data={props.data}
                onEvent={props.onEvent}
            />
        ))}
        </Container>
    );
}

VHMainIconTitleList.propTypes = {
    onEvent: PropTypes.func,
    items: PropTypes.array.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHMainIconTitleList;
