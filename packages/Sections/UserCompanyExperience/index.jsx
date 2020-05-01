import React from 'react';
import PropTypes from 'prop-types';
import { Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHButton from "../../Components/Button-New";
import VHUserCompanyPositionExperience from "../../Components/UserCompanyPositonExperience";
import VHModalExperience from '../../Components/ModalExperience'
import { PostDescriptionSkeleton } from 'react-preload-skeleton'
import VHPreloader from '../../Components/Preloader';
import VHModalProfileReview from '../../Components/ModalProfileReview'

const VHUserCompanyExperienceSection = props => {
  const [openModal, setOpenModal] = React.useState(false);
  const [newExperience, setNewExperience] = React.useState(false);
  const experience = props.experience.experiences ? props.experience.experiences : [];
  const [currentItem, setCurrentItem] = React.useState({});
  const notes = props.experience.profileReview ? props.experience.profileReview.notes : []

  function calcDate(date) {

    var df = new Date(date);
    var dt = new Date();
    var allYears = dt.getFullYear() - df.getFullYear();
    var partialMonths = dt.getMonth() - df.getMonth();
    if (partialMonths < 0) {
      allYears--;
      partialMonths = partialMonths + 12;
    }

    return `${allYears} years, ${partialMonths} months`
  }

  return (
    <>
      {openModal &&
        <VHModalExperience openModal={openModal} onClose={() => setOpenModal(false)}
          modalExperience={props.modalExperience}
          currentItem={currentItem}
          controls={props.controls}
          onEvent={props.onEvent}
          newExperience={newExperience}
          countries={props.countries}
          companyList={props.companyList}
          industryList={props.industryList}
          positions={props.positions}
          closeModalExperience={props.closeModalExperience} />
      }
      <Row mmarginBottom={2}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={`Experience ${experience.length > 0 ? calcDate(props.experience.firstExperienceDate) : ''}`}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          {props.controls.experienceSection.loading ?
            <VHPreloader type="circle" />
            :
            <React.Fragment>
              {
                props.preLoading ? (
                  <PostDescriptionSkeleton />
                ) : (
                    <>
                      {

                        experience.map(userPosition => {
                          return (
                            <Row marginBottom={10} paddingRight={10}>
                              <VHUserCompanyPositionExperience
                                item={userPosition}
                                companyList={props.companyList}
                                industryList={props.industryList}
                                onOpen={() => { setOpenModal(true) }}
                                onEvent={props.onEvent}
                                setCurrentItem={() => setCurrentItem(userPosition)}
                              />
                            </Row>
                          )
                        })
                      }
                      <Row row>
                        <Row row marginRight={4} autoWidth>
                          <VHButton
                            nowrap
                            primary
                            onEvent={props.onEvent}
                            data={"AddExperience"}
                            label="Add Experience"
                            closeModal={props.closeModal}
                            onOpen={() => { setCurrentItem({}); setOpenModal(true) }}
                            setNewExperience={() => { setNewExperience(true) }}
                          />
                        </Row>
                      </Row>
                    </>
                  )
              }
            </React.Fragment>}
        </VHCardBase>
      </Row>
    </>
  )
}

VHUserCompanyExperienceSection.propTypes = {
  onEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string
}

export default VHUserCompanyExperienceSection;
