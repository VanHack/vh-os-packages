import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Container, Row } from '../../Grid';
import VHGeneralSection from '../../Sections/General'
import VHSkillsSection from '../../Sections/skills'
import VHRelocationSection from '../../Sections/Relocation'
import VHEducationSection from '../../Sections/Education'
import VHSocialSection from '../../Sections/Social'
import VHUserCompanyExperienceSection from '../../Sections/UserCompanyExperience'
import VHPageSection from '../PageSection/index'
import VHLanguageSection from '../../Sections/LanguageSection'
import VHProfileAvatar from '../../Components/VHUserPhotoIconTitleDescription'
import VHInputFile from '../../Components/Input/File/'
import VHSideProjectsSection from '../../Sections/SideProjects'

const VHProfileTemplate = props => (
  <Container md style={{maxWidth: "732px"}}>
    <Row marginBottom={16}>
      <VHProfileAvatar
        avatar= {props.image ? props.image : ''}
        name= {`${props.firstName ? props.firstName : 'Loading...'} ${props.lastName ? props.lastName : ''}`}
        email= {props.User.email}
        onEvent={props.onEvent}
      />
    </Row>
    <Row marginBottom={16}>
      <div id={"general"}>
        <VHPageSection content={
          <VHGeneralSection
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={16}>
      <div id={"skills"}>
        <VHPageSection content={
          <VHSkillsSection
            preLoading={props.controls.gender.preLoading}
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={16}>
      <div id={"relocation"}>
        <VHPageSection content={
          <VHRelocationSection
            preLoading={props.controls.gender.preLoading}
            {...props}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
     <Row marginBottom={16}>
      <VHSocialSection
        preLoading={props.controls.linkedin.preLoading}
        {...props}
        onEvent={props.onEvent}
      />
    </Row>
    <Row marginBottom={16}>
      <div id={"language"}>
        <VHPageSection content={
          <VHLanguageSection
            {...props}
            preLoading={props.controls.language.preLoading}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={16}>
      <div id={"experience"}>
        <VHPageSection content={
          <VHUserCompanyExperienceSection
            {...props}
            preLoading={props.controls.experienceSection.preLoading}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={16}>
      <div id={"education"}>
        <VHPageSection content={
          <VHEducationSection
            {...props}
            preLoading={props.controls.educationSection.preLoading}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
    <Row marginBottom={10}>
      <div id={"sideProject"}>
        <VHPageSection content={
          <VHSideProjectsSection
            {...props}
            preLoading={props.controls.sideProjectsSection.preLoading}
            onEvent={props.onEvent}
          />
        } />
      </div>
    </Row>
  </Container>
)

VHProfileTemplate.defaultProps = {
}

VHProfileTemplate.propTypes = {
}

export default VHProfileTemplate
