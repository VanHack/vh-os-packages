import React from "react";
import { storiesOf } from "@storybook/react";
import VHSkillsSection from ".";
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


const items = [
  {
    label: 'Item 1',
    value: 'c'
  },
  {
    label: 'Item 2',
    value: 'b'
  },
  {
    label: 'Item 3',
    value: 'o'
  },
]
const apiResponse = {
  position: {
    current: items[0],
    yearOfExperience: items[2]
  },
  workAs: {
    current: items
  },
  mainSkills: [
    {current: items[1], order: 0, yearOfExperience: items[1] },
    {current: items[2], order: 1, yearOfExperience: items[1] }
  ],
  openedPosition: true
}

storiesOf("Sections|Skills", module)
  .add("Default", () => (
    <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
      <VHSkillsSection
        controls={controls}
        mainSkills={items}
        positions={items}
        data={apiResponse}
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
  .add("error", () => (
    <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
      <VHSkillsSection
        controls={{
          positionId: {
            loading: false,
            error: true,
            success: false,
            message: 'Database error'
          },
          yearsOfExperience: {
            loading: false,
            error: true,
            success: false,
            message: 'Database error'
          },
          workAs: {
            loading: false,
            error: true,
            success: false,
            message: 'Database error'
          },
          openForDifferentRole: {
            loading: false,
            error: true,
            success: false,
            message: 'Database error'
          },
          topSkill: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          },
          salaryExpectationCad: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          }
        }
        }
        workAs={items}
        mainSkills={items}
        positions={items}
        data={apiResponse}
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
  .add("loading", () => (
    <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
      <VHSkillsSection
        controls={{
          positionId: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          yearsOfExperience: {
            loading: false,
            error: true,
            success: false,
            message: 'Database error'
          },
          workAs: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          openForDifferentRole: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          topSkill: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          },
          salaryExpectationCad: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          }
        }
        }
        mainSkills={items}
        positions={items}
        data={apiResponse}
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))
  .add("preLoading", () => (
    <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
      <VHSkillsSection
        preLoading
        controls={{
          positionId: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          yearsOfExperience: {
            loading: false,
            error: true,
            success: false,
            message: 'Database error'
          },
          workAs: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          openForDifferentRole: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          topSkill: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          },
          salaryExpectationCad: {
            loading: false,
            error: false,
            success: false,
            message: 'Database error'
          }
        }
        }
        mainSkills={items}
        positions={items}
        data={apiResponse}
        onEvent={e => {
          console.log(e)
        }}
      />
    </div>
  ))