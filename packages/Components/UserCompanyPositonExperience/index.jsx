import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../Grid';
import VHMainTitleDescription from "../MainTitleDescription";
import VHUserPositonExperience from "../UserPositonExperience"

const VHUserCompanyExperience = props => {
  const industryList = props.industryList
  const companyList = props.companyList
  const [currentItem, setCurrentItem] = React.useState({});
  return (
    <>
      <Row marginBottom={5}>
        <VHMainTitleDescription
          setNewExperience={props.setNewExperience}
          pointer
          onEvent={props.onEvent}
          data={{ label: 'openModalExperience', item: props.item }}
          onOpen={props.onOpen}
          setCurrentItem={props.setCurrentItem}
          item={props.item}
          title={props.item.companyName}
          description={`${industryList[0].label} - ${companyList[0].label} - ${props.item.country}`}
          rightTitle={props.rightTitle}
          className={`vh-user-company-position-experience ${props.className ? props.className : ''}`}
        />
      </Row>
      <Row>
        {
          props.item.workExperiences.map(userPosition => (
            <VHUserPositonExperience
              className={`vh-user-company-position-experience ${props.className ? props.className : ''}`}
              {...userPosition}
            />
          ))
        }
      </Row>
    </>
  )
}

VHUserCompanyExperience.defaultProps = {
  className: "",
  rightTitle: "",
};

VHUserCompanyExperience.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rightTitle: PropTypes.string,
  className: PropTypes.string,
  userPositions: PropTypes.shape({}),
}

export default VHUserCompanyExperience;
