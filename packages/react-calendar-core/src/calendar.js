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

import Moment from 'moment'
import { extendMoment } from 'moment-range'
const moment = extendMoment(Moment)

type Week = Date[]

export type CalendarMonthEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export type CalendarMonth = {
  isValid: boolean,
  monthName: string,
  weekdays: string[],
  weekdaysShort: string[],
  weeks: Week[]
}

export const DEFAULT_LOCALE = 'en'

export function calendarYear (
  year: number,
  locale: string = DEFAULT_LOCALE
): CalendarMonth[] {
  const monthsInYear: CalendarMonthEnum[] = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]

  return monthsInYear.map(month => calendarMonth(year, month, locale))
}

export function calendarMonth (
  year: number,
  month: CalendarMonthEnum,
  locale: string = DEFAULT_LOCALE
): CalendarMonth {
  moment.locale(locale)

  return {
    isValid: moment({ year, month }).isValid(),
    monthName: moment.months()[month],
    weekdays: moment.weekdays(true),
    weekdaysShort: moment.weekdaysShort(true),
    weeks: weeksInMonth(year, month)
  }
}

function weeksInMonth (year: number, month: CalendarMonthEnum): Week[] {
  const monthDays = daysInMonth(year, month)

  // Get the number of weeks in the month
  const weeks = new Set()
  for (let day of monthDays.by('days')) {
    weeks.add(day.week())
  }

  // Get the dates for each week in the month
  let previousWeek = -1
  let [currentYear, currentMonth] = [year, month]
  const [startDayIndex, endDayIndex] = [0, 6]

  const calendarWeeks = Array.from(weeks.values()).map(week => {
    // Detect Dec-Jan cut-over
    const decemberIndex = 11
    if (previousWeek > week && month === decemberIndex) {
      // Happy New Year!
      currentYear++
      currentMonth = 0
    }
    previousWeek = week

    const firstDay = moment
      .utc([currentYear, currentMonth])
      .week(week)
      .weekday(startDayIndex)

    const lastDay = moment
      .utc([currentYear, currentMonth])
      .week(week)
      .weekday(endDayIndex)

    const weekRange = moment.range(firstDay, lastDay)

    const calendarWeek = Array.from(weekRange.by('days')).map(day =>
      day.toDate()
    )

    return calendarWeek
  })

  return calendarWeeks
}

function daysInMonth (year: number, month: number) {
  const calendarMonth = moment({ year, month })
  const firstDay = moment(calendarMonth).startOf('month')
  const lastDay = moment(calendarMonth).endOf('month')
  return moment.range(firstDay, lastDay)
}
