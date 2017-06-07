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
import type { Children } from 'react'
import styled from 'styled-components'
import { ical as theme } from '../themes'
import { dateStyles } from 'react-calendar-core'
import type { DateStyle } from 'react-calendar-core'

const markerColor = (dateStyle: DateStyle) => {
  if (dateStyle === dateStyles.TODAY) {
    return `
      color: ${theme.textColors.textInvert};
      background-color: ${theme.colors.red};
      border-radius: 1em;
    `
  }

  if (dateStyle === dateStyles.MUTED) {
    return `
      color: ${theme.textColors.textLighter};
    `
  }

  if (dateStyle === dateStyles.DAY_NAME) {
    return `
      color: ${theme.textColors.textLight};
    `
  }

  return `
    color: ${theme.textColors.text};
  `
}

const CalendarDay = ({
  children,
  dateStyle
}: {
  children?: Children,
  dateStyle: DateStyle
}) => {
  const StyledDay = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    color: ${props =>
      props.muted
        ? props.theme.textColors.textLight
        : props.theme.textColors.text};
  `

  StyledDay.defaultProps = { theme }

  const StyledDayMarker = styled.div`
    text-align: center;
    width: 2em;
    height: 2em;
    line-height: 2em;
    white-space: nowrap;
    ${markerColor(dateStyle)}
  `

  return (
    <StyledDay>
      <StyledDayMarker>
        {children}
      </StyledDayMarker>
    </StyledDay>
  )
}

export default CalendarDay
