import React from 'react'
import { storiesOf } from '@storybook/react'
import VHProfileStatus from '.'

storiesOf('Components|Profile Status', module)

.add('default', () => (
    <VHProfileStatus
        onEvent={e => {
            console.log(e)
        }}
    />
))
