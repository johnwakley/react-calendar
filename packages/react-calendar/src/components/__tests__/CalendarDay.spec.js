import React from 'react'
import renderer from 'react-test-renderer'
import CalendarDay from '../CalendarDay'
import { dateStyles } from 'react-calendar-core'

// TODO: use jest-styled-components when stable

describe('CalendarDay', () => {
  it('should show today style', () => {
    const tree = renderer
      .create(<CalendarDay dateStyle={dateStyles.TODAY}>1</CalendarDay>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show muted style', () => {
    const tree = renderer
      .create(<CalendarDay dateStyle={dateStyles.MUTED}>1</CalendarDay>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show day_name style', () => {
    const tree = renderer
      .create(<CalendarDay dateStyle={dateStyles.DAY_NAME}>1</CalendarDay>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show normal style', () => {
    const tree = renderer
      .create(<CalendarDay dateStyle={dateStyles.NORMAL}>1</CalendarDay>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
