import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Container, Row } from '../../Grid';
import VHPremiumIntroSection from '../../Sections/Premium/Intro/index';
import VHPremiumServicesSection from '../../Sections/Premium/Services/index';
import VHPremiumPricingSection from '../../Sections/Premium/Pricing/index';
import VHPremiumSuccessCasesSection from '../../Sections/Premium/SuccessCases/index';
import VHPremiumHiredSection from '../../Sections/Premium/Hired/index';
import VHPremiumFaqSection from '../../Sections/Premium/Faq/index';

const VHPremiumTemplate = props => (
  <Row>
    <Row style={{ backgroundColor: "#f2f8fc", padding: "0px 0 50px 0" }}>
      <Container lg id="hero-session">
        <VHPremiumIntroSection
            title={props.intro.items.title}
            highlight={props.intro.items.highlight}
            description={props.intro.items.description}
            label={props.intro.items.label}
            image={props.intro.items.image}
            features={props.intro.features}
            onEvent={props.onEvent}
        />
      </Container>
    </Row>
    <Row style={{ backgroundColor: "#fffffff", padding: "50px 0" }} id="services-session">
      <Container lg>
        <VHPremiumServicesSection
          sectionTitle={props.services.items.sectionTitle}
          title={props.services.interviewClass.title}
          highlight={props.services.interviewClass.highlight}
          description={props.services.interviewClass.description}
          imgSvg={props.services.interviewClass.imgSvg}
          label={props.services.interviewClass.label}
          to={props.services.interviewClass.to}
          icon={props.services.interviewClass.icon}
          premiumOtherServices={props.services.otherServices}
          onEvent={props.onEvent}
        />
      </Container>
    </Row>
    <Row style={{ backgroundColor: "rgba(203, 248, 251, 0.44)", padding: "50px 0" }} id="pricing-session">
      <Container>
        <VHPremiumPricingSection
          sectionTitle={props.pricing.items.sectionTitle}
          icon={props.pricing.items.icon}
          title={props.pricing.items.title}
          description={props.pricing.items.description}
          cardItems={props.pricing.cardItems}
          onEvent={props.onEvent}
        />
      </Container>
    </Row>
    <Row style={{ backgroundColor: "#ffffff", padding: "50px 0" }} id="success-casa-session">
      <Container lg>
        <VHPremiumSuccessCasesSection
          sectionTitle={props.success.items.sectionTitle}
          title={props.success.items.title}
          highlight={props.success.items.highlight}
          imgBackgroundCards={props.success.items.imgBackgroundCards}
          cardLeftTitle={props.success.items.cardLeft.title}
          cardLeftDescription={props.success.items.cardLeft.description}
          cardRightTitle={props.success.items.cardRight.title}
          cardRightDescription={props.success.items.cardRight.description}
          source={props.success.items.source}
          controls={props.success.items.control}
          poster={props.success.items.poster}
          width={props.success.items.width}
          height={props.success.items.height}
          label={props.success.items.label}
          to={props.success.items.to}
          iconLink={props.success.items.iconLink}
          onEvent={props.onEvent}
        />
      </Container>
    </Row>
    <Row style={{ backgroundColor: "#ffffff", padding: "50px 0" }} id="hired-session">
      <Container lg>
        <VHPremiumHiredSection
          sectionTitle={props.hired.items.sectionTitle}
          btnLabel={props.hired.items.btnLabel}
          candidates={props.hired.candidates}
          onEvent={props.onEvent}
          data={"VHPremiumHiredSection"}
        />
      </Container>
    </Row>
    <Row style={{ backgroundColor: "#f2f6f9", padding: "50px 0" }} id="faq-session">
      <Container lg>
        <VHPremiumFaqSection
          sectionTitle={props.faq.items.sectionTitle}
          title={props.faq.items.title}
          description={props.faq.items.description}
          imgSvg={props.faq.items.imgSvg}
          text={props.faq.items.text}
          assigned={props.assigned}
          faqs={props.faq.faqs}
          onEvent={props.onEvent}
        />
      </Container>
    </Row>
  </Row>
)

VHPremiumTemplate.defaultProps = {
}

VHPremiumTemplate.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default VHPremiumTemplate;
