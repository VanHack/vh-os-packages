import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHLanguageList from "../../Components/LanguageList";
import VHButton from '../../Components/Button-New'
import VHModalLanguageCertificate from '../../Components/ModalLanguageCertificate/'
import * as S from './styles'
import VHPreloader from '../../Components/Preloader';


const VHLanguageSection = props => {
  const certificates = props.certificates ? props.certificates : [];
  const [openModalCertificate, setOpenModalCertificate] = React.useState(false);
  const items = props.typeList;
  const [currentCertificate, setCurrentCertificate] = React.useState({});
  return (
    <>
      {openModalCertificate &&
        <VHModalLanguageCertificate openModal={openModalCertificate} onClose={() => setOpenModalCertificate(false)}
          closeModal={props.closeModalLanguageCertificate}
          modalLanguageCertificate={props.modalLanguageCertificate}
          items={items}
          controls={props.controls}
          onEvent={props.onEvent}
          currentItem={currentCertificate} />
      }
      <Row marginBottom={2}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={"Languages"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          <Row row >
            <Row>
              <VHLanguageList
                languages={props.languages}
                controls={props.controls}
                onEvent={props.onEvent}
                secondList={props.proficiencyList}
                list={props.languageList}
                items={props.languages}
                data="vanhack" />
            </Row>
          </Row>
          <Row column marginBottom5 marginTop={48}>
            <Row marginBottom5>
              <VHText variant={'subtitle1'} text={'Language Certificate'} color={'black-100'} onEvent={props.onEvent} />
            </Row>
            {props.controls.language.loading ?
              <VHPreloader type='circle' />
              :
              <Row>
                {certificates.map(item => {
                  return (
                    <S.Wrapper onClick={() => {
                      props.onEvent({
                        type: "onClick",
                        origin: "VHText",
                        props: {
                          data: { label: 'openModalCertificate', item: item }
                        }
                      })
                      setCurrentCertificate(item); setOpenModalCertificate(true)
                    }}>
                      <Row paddingLeft={7} marginBottom5 marginTop={5}>
                        <VHText variant={'subtitle2'} text={items[item.type].label} color={'gradient-primary'} />
                      </Row>
                      <Row row justifySpaceAround>
                        <VHText variant={'platform2'} text={`${item.listening} Listening`} color={'gray-90'} />
                        <VHText variant={'platform2'} text={`${item.reading} Reading`} color={'gray-90'} />
                        <VHText variant={'platform2'} text={`${item.writing} Writing`} color={'gray-90'} />
                        <VHText variant={'platform2'} text={`${item.speaking} Speaking`} color={'gray-90'} />
                        <VHText variant={'platform2'} text={`${item.overall} Overall`} color={'gray-90'} />
                      </Row>
                    </S.Wrapper>
                  )
                })
                }
              </Row>
            }
            {certificates.length === 0 &&
              <Row width={'30%'}>
                <VHButton data={'openModalLicenses'} primary onEvent={props.onEvent} closeModal={props.closeModalCertificates} onOpen={() => { setCurrentCertificate(); setOpenModalCertificate(true) }} label="Add Certificate" />
              </Row>
            }
          </Row>
        </VHCardBase>
      </Row>
    </>
  )
}

VHLanguageSection.propTypes = {
  onEvent: PropTypes.func,
  title: PropTypes.string.isRequired,
  data: PropTypes.object,
  className: PropTypes.string
}

export default VHLanguageSection;
