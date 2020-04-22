import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHInputIcon from "../../Components/Input/Icon";
import { InputSkeleton } from 'react-preload-skeleton'

const VHSocialSection = props => {
  return (
    <>
      <Row marginBottom={2}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={"Social Profile"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
          {
            props.preLoading ? (
              <Row marginBottom4>
                <InputSkeleton lines={3} />
              </Row>
            ) : (
              <>
                <Row marginBottom5 id="linkedin-href">
                  <VHInputIcon
                    className=""
                    disabled={false}
                    error={props.controls.linkedin.error}
                    loading={false}
                    data={'linkedin'}
                    icon="linkedin"
                    onEvent={props.onEvent}
                    placeholder="http://linkedin.com/"
                    value={props.linkedin}
                  />
                </Row>
                <Row marginBottom5 id="github-href">
                  <VHInputIcon
                    className=""
                    disabled={false}
                    error={props.controls.git.error}
                    loading={false}
                    data={'git'}
                    icon="github"
                    onEvent={props.onEvent}
                    placeholder="http://github.com/"
                    value={props.git}
                  />
                </Row>
                <Row marginBottom5 id="website-href">
                  <VHInputIcon
                    className=""
                    disabled={false}
                    error={props.controls.webSite.error}
                    loading={false}
                    placeholder="http://sitename.com/"
                    value={props.webSite}
                    data={'webSite'}
                    icon="webSite"
                    onEvent={props.onEvent}
                  />
                </Row>
                <Row marginBottom5 id="resume-href">
                  <VHInputIcon
                    className=""
                    disabled={false}
                    error={props.controls.resume.error}
                    loading={false}
                    placeholder="https://drive.google.com/your-resume"
                    value={props.resume}
                    data={'resume'}
                    icon="user"
                    onEvent={props.onEvent}
                  />
                </Row>
              </>
            )
          }
        </VHCardBase>
      </Row>
    </>
  )
}

VHSocialSection.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string
}

export default VHSocialSection;
