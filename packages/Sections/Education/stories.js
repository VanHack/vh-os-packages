import React from "react";
import { storiesOf } from "@storybook/react";
import VHEducationSection from ".";

const items = [
    { value: 0, label: 'No degree' },
    { value: 1, label: 'College (two-year degree)' },
    { value: 2, label: 'Bachelor’s' },
    { value: 3, label: 'Master’s' },
    { value: 4, label: 'PhD' }
]

const currentItem = [items[4]]

const modalEducation ={
id: {value: null, messageError: false},
degreeType: {value: 1, messageError: false},
degreeTitle: {value: "new degree", messageError: false},
schoolName: {value: "new school", messageError: false},
startYear: {value: "2020-04-09", messageError: false},
endYear: {value: undefined, messageError: false},
}

const controls = {
id: {preLoading: false, loading: false, error: false, success: true},
firstName: {preLoading: false, loading: false, error: false, success: true},
lastName: {preLoading: false, loading: false, error: false, success: true},
email: {preLoading: false, loading: false, error: false, success: true},
resume: {preLoading: false, loading: false, error: false, success: true},
image: {preLoading: false, loading: false, error: false, success: true},
citizenship: {preLoading: false, loading: false, error: false, success: true},
location: {preLoading: false, loading: false, error: false, success: true},
gender: {preLoading: false, loading: false, error: false, success: true},
phone: {preLoading: false, loading: false, error: false, success: true},
onboarding: {preLoading: false, loading: false, error: false, success: true},
positionId: {preLoading: false, loading: false, error: false, success: true},
positionName: {preLoading: false, loading: false, error: false, success: true},
yearsOfExperience: {preLoading: false, loading: false, error: false, success: true},
openForDifferentRole: {preLoading: false, loading: false, error: false, success: true},
workAs: {preLoading: false, loading: false, error: false, success: true},
userPositions: {preLoading: false, loading: false, error: false, success: true},
topSkill: {preLoading: false, loading: false, error: false, success: true},
secondarySkill: {preLoading: false, loading: false, error: false, success: true},
openForRemoteJobs: {preLoading: false, loading: false, error: false, success: true},
targetLocation: {preLoading: false, loading: false, error: false, success: true},
salaryExpectationCad: {preLoading: false, loading: false, error: false, success: true},
salaryExpectationEur: {preLoading: false, loading: false, error: false, success: true},
salaryRangeCad: {preLoading: false, loading: false, error: false, success: true},
salaryRangeEur: {preLoading: false, loading: false, error: false, success: true},
visaStatusCanadian: {preLoading: false, loading: false, error: false, success: true},
visaStatusEU: {preLoading: false, loading: false, error: false, success: true},
passportExpirationDate: {preLoading: false, loading: false, error: false, success: true},
passportValid: {preLoading: false, loading: false, error: false, success: true},
leadershipExperience: {preLoading: false, loading: false, error: false, success: true},
companySize: {preLoading: false, loading: false, error: false, success: true},
activelyLookingForJob: {preLoading: false, loading: false, error: false, success: true},
noticePeriod: {preLoading: false, loading: false, error: false, success: true},
linkedin: {preLoading: false, loading: false, error: false, success: true},
git: {preLoading: false, loading: false, error: false, success: true},
webSite: {preLoading: false, loading: false, error: false, success: true},
degreeType: {preLoading: false, loading: false, error: false, success: true},
experienceSection: {loading: false, preLoading: false, success: true, error: false},
educationSection: {loading: false, preLoading: false, success: true, error: false},
language: {loading: false, preLoading: false, success: false, error: false},
}

export const education =[{
    degreeType: 1,
    degreeTypeStr: "Bachelor's Degree",
    degreeTitle: "Bachelor in Philosophy ",
    schoolName: "Universidade Federal de Minas Gerais",
    startDate: "2020-04-09T00:00:00Z",
    endDate: null,
    id: 61132,
}]

storiesOf("Sections|Education", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHEducationSection
                education={education}
                items={items}
                currentItem={currentItem}
                controls={controls}
                modalEducation = {modalEducation}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))
    .add("Preloading", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHEducationSection
                education={education}
                preLoading
                items={items}
                currentItem={currentItem}
                controls={controls}
                modalEducation = {modalEducation}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))