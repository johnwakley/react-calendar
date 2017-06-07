import React from 'react'

import { storiesOf } from '@storybook/react'
import { CalendarMonth } from '../components/CalendarMonth'
import { CalendarYear } from '../components/CalendarYear'

storiesOf('CalendarMonth', module).add('with default style', () => {
  const juneMonthIndex = 5
  return <CalendarMonth year={2017} month={juneMonthIndex} />
})

storiesOf('CalendarYear', module).add('with default style', () => {
  return <CalendarYear year={2017} />
})
