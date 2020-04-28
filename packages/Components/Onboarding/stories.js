import React from 'react'
import { storiesOf } from '@storybook/react'
import VHOnboarding from '.'

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
    sideProjectsSection: { loading: false, preLoading: false, success: false, error: false }
    }

storiesOf('Components|Onboarding', module)

.add('Step 1', () => (
    <VHOnboarding
        controls={controls}

        steps={6}
        currentStep={0}
        onEvent={e => {
            console.log(e)
        }}
    >
    </VHOnboarding>
))

.add('Step 2', () => (
    <VHOnboarding
        controls={controls}

        steps={6}
        currentStep={1}
        onEvent={e => {
            console.log(e)
        }}
    >
    </VHOnboarding>
))

.add('Step 3', () => (
    <VHOnboarding
        controls={controls}

        steps={6}
        currentStep={2}
        onEvent={e => {
            console.log(e)
        }}
    >
    </VHOnboarding>
))

.add('Step 4', () => (
    <VHOnboarding
        controls={controls}

        steps={6}
        currentStep={3}
        onEvent={e => {
            console.log(e)
        }}
    >
    </VHOnboarding>
))
.add('Step 5', () => (
    <VHOnboarding
        controls={controls}

        steps={6}
        currentStep={4}
        onEvent={e => {
            console.log(e)
        }}
    >
    </VHOnboarding>
))
.add('Step 6', () => (
    <VHOnboarding
        controls={controls}

        steps={6}
        currentStep={5}
        onEvent={e => {
            console.log(e)
        }}
    >
    </VHOnboarding>
))
.add('Step 7', () => (
    <VHOnboarding
        controls={controls}

        steps={6}
        currentStep={6}
        onEvent={e => {
            console.log(e)
        }}
    >
    </VHOnboarding>
))
