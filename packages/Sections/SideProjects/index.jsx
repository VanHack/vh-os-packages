import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHTitleDescription from "../../Components/TitleDescription";
import VHModaSideProjects from "../../Components/ModalSideProjects"
import VHButton from "../../Components/Button-New"
import VHCardBase from "../../Components/Cards/Base/"
import VHText from "../../Components/Text/"
import { CardSkeleton } from 'react-preload-skeleton'
import VHPreloader from '../../Components/Preloader';

const VHSideProjectsSection = props => {
  const [openModal, setOpenModal] = React.useState(false);
  const sideProjects = props.sideProjects ? props.sideProjects : [];
  const [currentItem, setCurrentItem] = React.useState({});
  return (
    <React.Fragment>
      {openModal &&
        <VHModaSideProjects openModal={openModal} onClose={() => setOpenModal(false)}
          closeModal={props.closeModalSideProjects}
          modalSideProjects={props.modalSideProjects}
          currentItem={props.currentItem}
          controls={props.controls}
          onEvent={props.onEvent}
          currentItem={currentItem} />
      }
      <Row>
        <VHText
          className={`vh-sideProjects-section-title ${props.className ? props.className : ''}`}
          text={"Side Projects"}
          color="black-50"
          variant="h2"
        />
        <VHText 
          text={"Projects listed in this section can be from either professional, volunteer, or academic roles. They might catch the eye of a recruiter or an employer and help you nail a job!"}
          color="black-50"
          variant={'subtitle3'}
        />        
      </Row>
      
      <VHCardBase
        className={`vh-sideProjects-section-card ${props.className ? props.className : ''}`}
      >
        {props.controls.sideProjectsSection.loading ?
          <VHPreloader type="circle" />
          :
          <React.Fragment>
            {
              props.preLoading ? (
                <>
                  <CardSkeleton />
                  <CardSkeleton button />
                </>
              ) : (
                 <>
                   <VHText variant={'subtitle1'} text={'Side Projects'} color={'black-100'}  />
                    <Row paddingTop={'5'} paddingRight8 id="education-level" width={'50%'} >
                      {sideProjects.map(item => {
                        return (
                          <Row marginBottom5>
                            <VHTitleDescription
                              hover
                              pointer
                              title={item.title}
                              titleColor="primary-light"
                              description={item.description}
                              titleVariant="subtitle1"
                              descriptionVariant="platform"
                              onEvent={props.onEvent}
                              data={{ label: 'openModalSideProjects', item: item }}
                              onOpen={() => setOpenModal(true)}
                              setCurrentItem={() => setCurrentItem(item)}
                            />
                            <VHText cursor hover variant={'platform'} text={item.projectUrl ? item.projectUrl : ''} onEvent={props.onEvent} color={'primary-light'} />
                            <VHText variant={'caption'} text={`${new Date(item.completedAt).getFullYear()} - ${item.endDate ? new Date(item.endDate).getFullYear() : 'Present'}`} color={'gray-90'} onEvent={props.onEvent} />
                          </Row>
                        )
                      })
                      }
                      <Row width={'20%'}>
                        <VHButton data={'openModal'} primary onEvent={props.onEvent} closeModal={props.closeModalSideProjects} onOpen={() => { setCurrentItem({}); setOpenModal(true) }} label="Add Side Projects" />
                      </Row>
                    </Row>
                  </>
                )
            }
          </React.Fragment>
        }
      </VHCardBase>
    </React.Fragment>
  )
}

VHSideProjectsSection.propTypes = {
  onEvent: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string
}

export default VHSideProjectsSection;
