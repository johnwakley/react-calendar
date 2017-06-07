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
import { media, DEFAULT_LOCALE } from 'react-calendar-core'
import { CalendarMonth } from './CalendarMonth'

const StyledYear = styled.div`
  display: flex;
  flex-direction: column;
`

const YearHeader = styled.div`
  flex: 1;
  text-align: left;
  font-family: ${props => props.theme.typography.familySansSerif};
  font-size: ${props => props.theme.typography.size3};
  /* stylelint-disable */
  ${media.tablet`font-size: ${props => props.theme.typography.size4};`}
  ${media.mobile`font-size: ${props => props.theme.typography.size5};`}
  /* stylelint-enable */
  font-weight: 100;
  color: ${props => props.theme.textColors.text};
`

const MonthRow = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`

export const CalendarYear = ({
  year,
  locale = DEFAULT_LOCALE
}: {
  year: number,
  locale: string
}) => {
  const monthsInRows = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]

  return (
    <ThemeProvider theme={theme}>
      <StyledYear>
        <YearHeader>
          {year}
        </YearHeader>
        {monthsInRows.map(row =>
          <MonthRow key={monthsInRows.indexOf(row)}>
            {row.map(month =>
              <CalendarMonth
                year={year}
                month={month}
                locale={locale}
                key={month}
              />
            )}
          </MonthRow>
        )}
      </StyledYear>
    </ThemeProvider>
  )
}
