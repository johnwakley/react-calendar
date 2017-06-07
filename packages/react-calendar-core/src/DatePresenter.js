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

export const dateStyles = {
  MUTED: 'MUTED',
  TODAY: 'TODAY',
  NORMAL: 'NORMAL',
  DAY_NAME: 'DAY_NAME'
}

export type DateStyle = $Keys<typeof dateStyles>

export class DatePresenter {
  date: Date
  contextMonth: number

  constructor (date: Date, contextMonth: number) {
    this.date = date
    this.contextMonth = contextMonth
  }

  isDateInContextMonth () {
    return this.date.getMonth() === this.contextMonth
  }

  isToday () {
    const today = new Date()
    return (
      this.date.getDate() === today.getDate() &&
      this.date.getMonth() === today.getMonth() &&
      this.date.getFullYear() === today.getFullYear() &&
      this.isDateInContextMonth()
    )
  }

  displayStyle (): DateStyle {
    if (this.isToday()) {
      return dateStyles.TODAY
    }

    if (this.isDateInContextMonth()) {
      return dateStyles.NORMAL
    }

    return dateStyles.MUTED
  }
}
