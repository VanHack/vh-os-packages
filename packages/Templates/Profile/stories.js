import React from "react";
import { storiesOf } from "@storybook/react";
import VHProfileTemplate from ".";
import Mock from "./Mock";

const controls = {
  citizenship: { loading: true, preLoading: true, error: false, success: false },
  linkedin: { loading: true, preLoading: true, error: false, success: false },
  git: { loading: true, preLoading: true, error: false, success: false },
  webSite: { loading: true, preLoading: true, error: false, success: false },
  location: { loading: true, preLoading: true, error: false, success: false },
  gender: { loading: true, preLoading: true, error: false, success: false },
  phone: { loading: true, preLoading: true, error: false, success: false },
  positionSkill: { loading: true, preLoading: true, error: false, success: false },
  openForDifferentRole: { loading: true, preLoading: true, error: false, success: false },
  yearsOfExperience: { loading: true, preLoading: true, error: false, success: false },
  workAs: { loading: true, preLoading: true, error: false, success: false },
  topSkill: { loading: true, preLoading: true, error: false, success: false },
  salaryRangeEur: { loading: true, preLoading: true, error: false, success: false },
  salaryRangeCad: { loading: true, preLoading: true, error: false, success: false },
  visaStatusEU: { loading: true, preLoading: true, success: false, error: false },
  visaStatusCanadian: { loading: true, preLoading: true, success: false, error: false },
  companySize: { loading: true, preLoading: true, success: false, error: false },
  secondarySkill: { loading: true, preLoading: true, success: false, error: false },
  noticePeriod: { loading: true, preLoading: true, success: false, error: false },
  experienceSection: { loading: true, preLoading: true, success: false, error: false },
  educationSection: { loading: true, preLoading: true, success: false, error: false },
  language: { loading: true, preLoading: true, success: false, error: false }
}

const experiences = {"firstExperienceDate":"2019-08-01T00:00:00","experiences":[{"workExperiences":[{"companyName":"new companynew company","countryId":661882,"country":"Åland","companySize":1,"companySizeStr":"Startup","industry":null,"industryId":3,"positionId":7,"position":"UI/UX Designer","isCurrentRole":null,"startDate":"2020-03-12T00:00:00","endDate":"2020-03-27T00:00:00","description":"new description","skills":[],"id":146671},{"companyName":"new companynew company","countryId":661882,"country":"Åland","companySize":1,"companySizeStr":"Startup","industry":null,"industryId":3,"positionId":1,"position":"Backend Engineer","isCurrentRole":null,"startDate":"2020-03-12T00:00:00","endDate":"2020-03-27T00:00:00","description":"new description","skills":[],"id":146672},{"companyName":"new companynew company","countryId":661882,"country":"Åland","companySize":1,"companySizeStr":"Startup","industry":null,"industryId":3,"positionId":3,"position":"Full Stack Engineer","isCurrentRole":null,"startDate":"2020-03-05T00:00:00","endDate":"2020-03-02T00:00:00","description":"dsfdsdfsfd","skills":[],"id":146669},{"companyName":"new companynew company","countryId":661882,"country":"Åland","companySize":1,"companySizeStr":"Startup","industry":null,"industryId":3,"positionId":3,"position":"Full Stack Engineer","isCurrentRole":null,"startDate":"2020-03-05T00:00:00","endDate":"2020-03-02T00:00:00","description":"dsfdsdfsfd","skills":[],"id":146670},{"companyName":"new companynew company","countryId":661882,"country":"Åland","companySize":1,"companySizeStr":"Startup","industry":null,"industryId":3,"positionId":1,"position":"Backend Engineer","isCurrentRole":null,"startDate":"2020-03-05T00:00:00","endDate":"2020-03-02T00:00:00","description":"dsfdsdfsfd","skills":[],"id":146673},{"companyName":"new companynew company","countryId":661882,"country":"Åland","companySize":1,"companySizeStr":"Startup","industry":null,"industryId":3,"positionId":1,"position":"Backend Engineer","isCurrentRole":null,"startDate":"2020-03-05T00:00:00","endDate":"2020-03-02T00:00:00","description":"dsfdsdfsfd","skills":[],"id":146674}],"companyName":"new companynew company","countryId":661882,"country":"Åland","companySize":1,"companySizeStr":"Startup","industry":null,"industryId":3,"id":146671},{"workExperiences":[{"companyName":"dassas","countryId":661882,"country":"Åland","companySize":2,"companySizeStr":"Mid Size","industry":null,"industryId":3,"positionId":3,"position":"Full Stack Engineer","isCurrentRole":null,"startDate":"2020-03-04T00:00:00","endDate":null,"description":"[{\"value\":\"teste 1\",\"loading\":true},{\"value\":\"teste 2\",\"loading\":true},{\"value\":\"\"}]","skills":[],"id":146676}],"companyName":"dassas","countryId":661882,"country":"Åland","companySize":2,"companySizeStr":"Mid Size","industry":null,"industryId":3,"id":146676},{"workExperiences":[{"companyName":"FInal company","countryId":3469034,"country":"Brazil","companySize":2,"companySizeStr":"Mid Size","industry":null,"industryId":12,"positionId":7,"position":"UI/UX Designer","isCurrentRole":null,"startDate":"2020-03-02T00:00:00","endDate":null,"description":"just a description","skills":[],"id":146675}],"companyName":"FInal company","countryId":3469034,"country":"Brazil","companySize":2,"companySizeStr":"Mid Size","industry":null,"industryId":12,"id":146675},{"workExperiences":[{"companyName":"sdasasdas","countryId":3469034,"country":"Brazil","companySize":2,"companySizeStr":"Mid Size","industry":null,"industryId":3,"positionId":3,"position":"Full Stack Engineer","isCurrentRole":null,"startDate":"2019-08-01T00:00:00","endDate":"2019-01-01T00:00:00","description":"[{\"value\":\"teste 1\",\"loading\":true},{\"value\":\"\"}]","skills":[],"id":119938}],"companyName":"sdasasdas","countryId":3469034,"country":"Brazil","companySize":2,"companySizeStr":"Mid Size","industry":null,"industryId":3,"id":119938}]}


const languages = [
  { value: 0, label: 'English' }
]


storiesOf("Templates|Profile", module)

  .add("default", () => (
    <div style={{ backgroundColor: "#f2f2f2", height: "100%" }}>
      <VHProfileTemplate
      experience={experiences}
        languages={languages}
        controls={controls}
      />
    </div>
  ))