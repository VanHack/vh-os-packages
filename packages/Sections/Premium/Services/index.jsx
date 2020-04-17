import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../../Grid/index";
import VHText from "../../../Components/Text/index";
import VHTextsImageLink from "../../../Components/TextsImageLink/index";
import VHTextsImageTestimonial from "../../../Components/TextsImageTestimonial/index";

const VHPremiumServicesSection = props => {
  return (
    <React.Fragment>
        <Row alignItemsCenter marginBottom={40} style={{ textAlign: "center"}} mobileMarginBottomSM>
            <VHText 
                variant="h2"
                color="gray-90"
                text={props.sectionTitle}
            />
        </Row>
        <VHTextsImageLink 
            title={props.title}
            highlight={props.highlight}
            description={props.description}
            imgSvg={props.imgSvg}
            reverseTop={false}
            smLabel
            label={props.label}
            to={props.to}
            color={"gray-90"}
            icon={props.icon}
            xsIcon
            reverseBottom={false}
            onEvent={props.onEvent}
            data={"VHTextsImageLink"}
        />
        {props.premiumOtherServices.map(service => (
            <Row marginTop={120}>
                <VHTextsImageTestimonial 
                    title={service.title}
                    highlight={service.highlight}
                    description={service.description}
                    imgSvg={service.imgSvg}
                    reverseTop={service.reverseTop}
                    avatar={service.avatar}
                    sizeAvatar={"md2"}
                    testimonial={service.testimonial}
                    color={"gray-90"}
                    reverseBottom={service.reverseBottom}
                />
            </Row>
        ))}
    </React.Fragment>
 )
}

VHPremiumServicesSection.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  title: PropTypes.string,
  highlight: PropTypes.string,
  description: PropTypes.string,
  imgSvg: PropTypes.string,
  reverseTop: PropTypes.bool,
  label: PropTypes.string,
  to: PropTypes.string,
  smLabel: PropTypes.bool,
  icon: PropTypes.string,
  color: PropTypes.string,
  avatar: PropTypes.string,
  sizeAvatar: PropTypes.string,
  avatar: PropTypes.string,
  testimonial: PropTypes.string,
  reverseBottom: PropTypes.bool,
  premiumOtherServices: PropTypes.array,
}

export default VHPremiumServicesSection;