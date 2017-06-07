import React from 'react'
import renderer from 'react-test-renderer'
import { CalendarMonth } from '../CalendarMonth'

describe('CalendarMonth', () => {
  it('should show month', () => {
    const tree = renderer
      .create(<CalendarMonth year={2017} month={5} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
