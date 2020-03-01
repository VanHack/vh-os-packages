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

storiesOf('Components|Table', module)

.add('main skill', () => (
  <div style={{ margin: '0 auto', backgroundColor: '#fff', height: '300px', width: '600px', padding: '24px' }}>
    <VHTable
      title="Rank your top 3 skills"
      subtitle="1st - Highest proficiency level; 3rd - lowest proficiency level"
      placeholder="Add top skill"
      size={3}
      ordinal
      list={mainSkills}
      options={yearsOfExp}
      data="mainSkills"
      onEvent={(e) => {
        console.log(e);
      }}
    />
  </div>
))
.add('secondary skills', () => (
  <div style={{ margin: '0 auto', backgroundColor: '#fff', height: '300px', width: '600px', padding: '24px' }}>
    <VHTable
      title="Add up to 5 secondary skills"
      placeholder="Add secondary skill"
      size={5}
      list={mainSkills}
      options={yearsOfExp}
      data="secondarySkills"
      onEvent={(e) => {
        console.log(e);
      }}
    />
  </div>
))
.add('empty data', () => (
  <div style={{ margin: '0 auto', backgroundColor: '#fff', height: '300px', width: '600px', padding: '24px' }}>
    <VHTable
      title="empty table"
      size={2}
      ordinal
      list={[]}
      options={yearsOfExp}
      data="mainSkills"
      onEvent={(e) => {
        console.log(e);
      }}
    />
  </div>
))

