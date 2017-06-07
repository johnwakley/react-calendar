'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_LOCALE = undefined;
exports.calendarYear = calendarYear;
exports.calendarMonth = calendarMonth;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentRange = require('moment-range');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var moment = (0, _momentRange.extendMoment)(_moment2.default);

var DEFAULT_LOCALE = exports.DEFAULT_LOCALE = 'en';

function calendarYear(year) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_LOCALE;

  var monthsInYear = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return monthsInYear.map(function (month) {
    return calendarMonth(year, month, locale);
  });
}

function calendarMonth(year, month) {
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_LOCALE;

  moment.locale(locale);

  return {
    isValid: moment({ year: year, month: month }).isValid(),
    monthName: moment.months()[month],
    weekdays: moment.weekdays(true),
    weekdaysShort: moment.weekdaysShort(true),
    weeks: weeksInMonth(year, month)
  };
}

function weeksInMonth(year, month) {
  var monthDays = daysInMonth(year, month);

  // Get the number of weeks in the month
  var weeks = new Set();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = monthDays.by('days')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var day = _step.value;

      weeks.add(day.week());
    }

    // Get the dates for each week in the month
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var previousWeek = -1;
  var currentYear = year,
      currentMonth = month;
  var startDayIndex = 0,
      endDayIndex = 6;


  var calendarWeeks = Array.from(weeks.values()).map(function (week) {
    // Detect Dec-Jan cut-over
    var decemberIndex = 11;
    if (previousWeek > week && month === decemberIndex) {
      // Happy New Year!
      currentYear++;
      currentMonth = 0;
    }
    previousWeek = week;

    var firstDay = moment.utc([currentYear, currentMonth]).week(week).weekday(startDayIndex);

    var lastDay = moment.utc([currentYear, currentMonth]).week(week).weekday(endDayIndex);

    var weekRange = moment.range(firstDay, lastDay);

    var calendarWeek = Array.from(weekRange.by('days')).map(function (day) {
      return day.toDate();
    });

    return calendarWeek;
  });

  return calendarWeeks;
}

function daysInMonth(year, month) {
  var calendarMonth = moment({ year: year, month: month });
  var firstDay = moment(calendarMonth).startOf('month');
  var lastDay = moment(calendarMonth).endOf('month');
  return moment.range(firstDay, lastDay);
}