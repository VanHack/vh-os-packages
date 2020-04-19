import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../../Grid/index';
import VHText from "../../../Components/Text/index"; 
import VHCardPrincing from "../../../Components/Cards/Pricing/index"; 
import VHTitleDescription from "../../../Components/TitleDescription/index"; 
import VHIcon from "../../../Components/Icon/index"; 

const VHPremiumPricingSection = props => {
  return (
    <React.Fragment>
        <Row alignItemsCenter>
            <VHText
                variant={"h4"}
                color={"tertiary-dark"}
                text={props.sectionTitle}
            />
        </Row>
        <Row row marginTop={50} marginBottom={10} style={{justifyContent: "center"}} alignItemsCenter responsive>
            {props.cardItems.map((item, index) => (
                <Row width={"360px"} style={{padding: "10px"}}>
                    <VHCardPrincing 
                        show={item.show}                             
                        label={item.label}
                        save={item.save}
                        period={item.period}
                        price={item.price}
                        unit={item.unit}
                        subscription={item.subscription}
                        cta={item.cta}
                        note={item.note}
                        noHover
                        noHoverChip={item.noHoverChip}
                        transparentChip={item.transparentChip}
                        round={item.round}
                        outlineBtn={item.outlineBtn}
                        secondaryBtn={item.secondaryBtn}
                        onEvent={props.onEvent}
                        data={`VHCardPrincing${index}`}
                    />
                </Row>
            ))}
        </Row>
        <Row marginBottom5 alignItemsCenter>
            <VHIcon 
                icon={props.icon}
                md
            />
        </Row>
        <Row alignItemsCenter>
            <Row width={"50%"} style={{textAlign: "center"}}>
                <VHTitleDescription 
                    titleColor={"h4"}
                    descriptionColor={"gray-80"}
                    titleVariant={"platform"}
                    descriptionVariant={"gray-80"}
                    title={props.title}
                    description={props.description}
                />
            </Row>
        </Row>
    </React.Fragment>
 )
}

VHPremiumPricingSection.propTypes = {
    onEvent: PropTypes.func,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    sectionTitle: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    show: PropTypes.bool,                         
    label: PropTypes.string,
    save: PropTypes.string,
    period: PropTypes.string,
    price: PropTypes.string,
    unit: PropTypes.string,
    subscription: PropTypes.string,
    cta: PropTypes.string,
    note: PropTypes.string,
    noHover: PropTypes.bool,  
    noHoverChip: PropTypes.bool,  
    transparentChip: PropTypes.bool,
    round: PropTypes.bool,  
    outlineBtn: PropTypes.bool,  
    secondaryBtn: PropTypes.bool,  
}

export default VHPremiumPricingSection;