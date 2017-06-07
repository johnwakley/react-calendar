import React from 'react'
import renderer from 'react-test-renderer'
import { CalendarYear } from '../CalendarYear'

describe('CalendarYear', () => {
  it('should show year', () => {
    const tree = renderer.create(<CalendarYear year={2017} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
