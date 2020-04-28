import React from "react";
import { storiesOf } from "@storybook/react";
import VHRelocationSection from ".";

const education = [
    {
        title: 'Specilist, Interaction Desing',
        subTitle: 'Pontifícia Universidade Católica de Minas Gerais'
    },
    {
        title: 'Specilist, Interaction Desing',
        subTitle: 'Pontifícia Universidade Católica de Minas Gerais'
    }
]

const items = [
    { value: 0, label: 'No degree' },
    { value: 1, label: 'College (two-year degree)' },
    { value: 2, label: 'Bachelor’s' },
    { value: 3, label: 'Master’s' },
    { value: 4, label: 'PhD' }
]

const currentItem = [items[4]]

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

storiesOf("Sections|Relocation", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }} id={'Relocation'}>
            <VHRelocationSection
                education={education}
                items={items}
                currentItem={currentItem}
                controls={controls}
                loading={true}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))
    .add("preloading", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }} id={'Relocation'}>
            <VHRelocationSection
                education={education}
                items={items}
                currentItem={currentItem}
                controls={controls}
                preLoading={true}
                loading={true}
                onEvent={e => {
                    console.log(e)
                }}
            />
        </div>
    ))