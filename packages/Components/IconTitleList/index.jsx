import React from 'react';
import PropTypes from 'prop-types';
import VHIconText from "../IconText/index";


const VHIconTitleList = (props) => {
    const items = JSON.parse(props.items)
    // if (!Array.isArray(props.items)) {
    //     return <VHIconText
    //     iconColor={props.color || "gray-30"}
    //     textColor={props.color || "gray-90"}
    //     text={props.items}
    //     icon="bullet"
    //     className={`vh-icon-title-list ${props.className ? props.className : ''}`}
    //     variant="platform"
    //     data={props.data}
    //     onEvent={props.onEvent}
    // />
    // }
    return (
        <>
        {
            items.map(text => (
                <VHIconText
                    iconColor={props.color || "gray-30"}
                    textColor={props.color || "gray-90"}
                    text={text.Value}
                    icon="bullet"
                    className={`vh-icon-title-list ${props.className ? props.className : ''}`}
                    variant="platform"
                    data={props.data}
                    onEvent={props.onEvent}
                />
            ))
        }
        </>
    )
}

VHIconTitleList.propTypes = {
    onEvent: PropTypes.func,
    items: PropTypes.array.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHIconTitleList;
