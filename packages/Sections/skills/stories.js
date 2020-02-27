import React from "react";
import { storiesOf } from "@storybook/react";
import VHSkillsSection from ".";

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
    {
      current: items[1],
      order: 0,
      yearOfExperience: items[1]
    },
    {
      current: items[2],
      order: 1,
      yearOfExperience: items[1]
    }
  ],
  openedPosition: true
}

storiesOf("Sections|Skills", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding: "24px" }}>
            <VHSkillsSection
                controls={{
                  position: {
                      loading: false,
                      error: false,
                      success: false,
                      message: 'Database error'
                  },
                  workAs: {
                      loading: false,
                      error: false,
                      success: false,
                      message: 'Database error'
                  },
                  openedPosition: {
                      loading: false,
                      error: false,
                      success: false,
                      message: 'Database error'
          },
        }
      }
        workAs={items}
        mainSkills={items}
        positions={items}
        yearOfExperiences={items}
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
                  position: {
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
                  openedPosition: {
                      loading: false,
                      error: true,
                      success: false,
                      message: 'Database error'
          },
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
          position: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          workAs: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
          openedPosition: {
            loading: true,
            error: false,
            success: false,
            message: 'Database error'
          },
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