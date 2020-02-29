import React from 'react';
import PropTypes from 'prop-types';
import VHIconText from "../IconText/index";


const VHIconTitleList = (props) => {
    return props.items.map((item,index) => (
        <VHIconText
        key={`icon-${index}`}
        iconColor="gray-30"
        textColor="gray-90"
        text={item.label}
        icon="bullet"
        className={`vh-icon-title-list ${props.className ? props.className : ''}`}
        variant="platform1"
        data={props.data}
        onEvent={props.onEvent}
        />
    ))
}

VHIconTitleList.propTypes = {
    onEvent: PropTypes.func,
    items: PropTypes.array.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHIconTitleList;
