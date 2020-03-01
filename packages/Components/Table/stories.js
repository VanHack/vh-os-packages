import React from 'react';
import { storiesOf } from '@storybook/react';
import VHTable from '.';

const items = [
  { label: '.NET', value: 'csharp' },
  { label: 'Javascript', value: 'js' },
  { label: 'Machine Learning', value: 'ml' }
];
const yearsOfExp = [
  { label: 'Not Set', value: '0' },
  { label: '3 years', value: '3' },
  { label: '5 years', value: '5' },
  { label: '7 years', value: '7' },
  { label: '10+ years', value: '10+' }
];
const mainSkills = [
  {
    current: items[1],
    order: 0,
    yearOfExperience: yearsOfExp[0]
  },
  {
    current: items[2],
    order: 1,
    yearOfExperience: yearsOfExp[0]
  },
  {
    current: items[0],
    order: 2,
    yearOfExperience: yearsOfExp[0]
  }
];

const controls = [
  {
    loading: false,
    error: true,
    success: false,
    message: 'Database error'
  }
];

const Container = ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      backgroundColor: '#fff',
      height: '300px',
      width: '600px',
      padding: '24px'
    }}
  >
    {children}
  </div>
);

storiesOf('Components|Table', module)
  .add('main skill', () => (
    <Container>
      <VHTable
        title="Rank your top 3 skills"
        subtitle="1st - Highest proficiency level; 3rd - lowest proficiency level"
        placeholder="Add top skill"
        size={3}
        ordinal
        list={mainSkills}
        options={yearsOfExp}
        data="mainSkills"
        onEvent={e => {
          console.log(e);
        }}
      />
    </Container>
  ))
  .add('secondary skills', () => {
    const skills = [
      ...mainSkills,
      {
        current: { label: 'Nodejs', value: '1' },
        order: 2,
        yearOfExperience: yearsOfExp[0],
        badge: 'code test 90%'
      }
    ];

    return (
      <Container>
        <VHTable
          title="Add up to 5 secondary skills"
          placeholder="Add secondary skill"
          size={5}
          list={skills}
          options={yearsOfExp}
          data="secondarySkills"
          onEvent={e => {
            console.log(e);
          }}
        />
      </Container>
    );
  })
  .add('empty data', () => (
    <Container>
      <VHTable
        title="empty table"
        size={2}
        ordinal
        list={[]}
        options={yearsOfExp}
        data="mainSkills"
        onEvent={e => {
          console.log(e);
        }}
      />
    </Container>
  ))
  .add('error data', () => (
    <Container>
      <VHTable
        title="empty table"
        size={2}
        ordinal
        list={[]}
        options={yearsOfExp}
        data="mainSkills"
        onEvent={e => {
          console.log(e);
        }}
        controls={controls}
      />
    </Container>
  ));
