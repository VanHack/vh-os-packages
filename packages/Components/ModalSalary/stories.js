import React from 'react'
import { storiesOf } from '@storybook/react'
import ModalSalary from '.'

storiesOf('Components|Modal Salary', module)
  .add('default', () => (
    <ModalSalary
      openModal={true}
      jobTitle="FullStack Developer"
      salary={85000}
      currency="CAD"
      data={[2, 3, 2, 9, 4, 1, 1]}
    />
  ))
