/**
 * MIT License
 *
 * Copyright (c) 2017 johnwakley
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

// @flow

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ical as theme } from '../themes'
import type { CalendarMonthEnum } from 'react-calendar-core'
import {
  calendarMonth,
  DatePresenter,
  dateStyles,
  media,
  DEFAULT_LOCALE
} from 'react-calendar-core'
import CalendarDay from './CalendarDay'

const StyledMonth = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em;
  /* stylelint-disable */
  ${media.tablet`margin: 0.5em;`}
  ${media.mobile`margin: 0.25em;`}
  /* stylelint-enable */
  font-family: ${props => props.theme.typography.familySansSerif};
  font-size: ${props => props.theme.typography.size6};
  /* stylelint-disable */
  ${media.tablet`font-size: ${props => props.theme.typography.size7};`}
  ${media.mobile`font-size: ${props => props.theme.typography.size8};`}
  /* stylelint-enable */
  background-color: white;
`

const MonthHeader = styled.div`
  flex: 1;
  padding: 0.5em;
  /* stylelint-disable */
  ${media.desktop`padding-left: 5%;`}
  ${media.tablet`padding-left: 4%;`}
  ${media.mobile`padding-left: 3%;`}
  /* stylelint-enable */
  text-align: left;
  font-size: ${props => props.theme.typography.size4};
  /* stylelint-disable */
  ${media.tablet`font-size: ${props => props.theme.typography.size6};`}
  ${media.mobile`font-size: ${props => props.theme.typography.size7};`}
  /* stylelint-enable */
  color: ${props => props.theme.colors.orange};
`

const StyledWeek = styled.div`
  display: flex;
  flex: 1;
`

const Week = (props: any) => {
  return (
    <StyledWeek>
      {props.children}
    </StyledWeek>
  )
}

const WeekDays = Week

export const CalendarMonth = ({
  year,
  month,
  locale = DEFAULT_LOCALE
}: {
  year: number,
  month: CalendarMonthEnum,
  locale: string
}) => {
  const cal = calendarMonth(year, month)

  return (
    <ThemeProvider theme={theme}>
      <StyledMonth>
        <MonthHeader>{cal.monthName}</MonthHeader>
        <WeekDays>
          {cal.weekdaysShort.map(day =>
            <CalendarDay key={day} dateStyle={dateStyles.DAY_NAME}>
              {day}
            </CalendarDay>
          )}
        </WeekDays>
        {cal.weeks.map(week =>
          <Week key={cal.weeks.indexOf(week)}>
            {week.map((date: Date) => {
              const datePresenter = new DatePresenter(date, month)
              const day = date.getDate()
              return (
                <CalendarDay key={day} dateStyle={datePresenter.displayStyle()}>
                  {day}
                </CalendarDay>
              )
            })}
          </Week>
        )}
      </StyledMonth>
    </ThemeProvider>
  )
}
