'use strict';

var _calendar = require('../calendar');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var daysInMonth = Array.from({ length: 30 }, function (v, i) {
  return i + 1;
});
var aprilDates = daysInMonth.map(function (day) {
  var d = day < 10 ? '0' + day : day;
  return new Date('2017-04-' + d);
});

var flattenWeekRange = function flattenWeekRange(weeks) {
  return weeks.reduce(function (acc, week) {
    return acc.concat.apply(acc, _toConsumableArray(week));
  }, []);
};

var formatDates = function formatDates(dates) {
  return dates.map(function (calDate) {
    return calDate.toISOString().slice(0, 10);
  });
};

describe('calandar', function () {
  it('should contain days for May 2017', function () {
    // To form complete calendarMonth weeks, April includes partial dates
    // from March and May according en locale
    var expectedDates = [new Date('2017-03-26'), new Date('2017-03-27'), new Date('2017-03-28'), new Date('2017-03-29'), new Date('2017-03-30'), new Date('2017-03-31')].concat(_toConsumableArray(aprilDates), [new Date('2017-05-01'), new Date('2017-05-02'), new Date('2017-05-03'), new Date('2017-05-04'), new Date('2017-05-05'), new Date('2017-05-06')]);

    var aprilCal = (0, _calendar.calendarMonth)(2017, 3);
    var receivedDates = flattenWeekRange(aprilCal.weeks);

    expect(formatDates(receivedDates)).toEqual(formatDates(expectedDates));
    expect(aprilCal.isValid).toBeTruthy();
    expect(aprilCal.monthName).toEqual('April');
    expect(aprilCal.weekdays).toEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
    expect(aprilCal.weekdaysShort).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  });

  it('should return invalid calendarMonth', function () {
    var aprilCal = (0, _calendar.calendarMonth)(2017, 20);
    expect(aprilCal.isValid).toBeFalsy();
  });

  it('should include new year dates', function () {
    var daysInMonth = Array.from({ length: 31 }, function (v, i) {
      return i + 1;
    });
    var decemberDates = daysInMonth.map(function (day) {
      var d = day < 10 ? '0' + day : day;
      return new Date('2017-12-' + d);
    });

    // To form complete calendarMonth weeks, December includes overflow dates
    // from November and January according en locale
    var expectedDates = [new Date('2017-11-26'), new Date('2017-11-27'), new Date('2017-11-28'), new Date('2017-11-29'), new Date('2017-11-30')].concat(_toConsumableArray(decemberDates), [new Date('2018-01-01'), new Date('2018-01-02'), new Date('2018-01-03'), new Date('2018-01-04'), new Date('2018-01-05'), new Date('2018-01-06')]);

    var decCalendar = (0, _calendar.calendarMonth)(2017, 11);
    var receivedDates = flattenWeekRange(decCalendar.weeks);

    expect(formatDates(receivedDates)).toEqual(formatDates(expectedDates));
  });

  it('should show month dates for French (fr) locale', function () {
    // To form complete calendarMonth weeks, April includes partial dates
    // from March and May.
    // The start of the week is Monday (Lundi) in France.
    var expectedDates = [new Date('2017-03-27'), new Date('2017-03-28'), new Date('2017-03-29'), new Date('2017-03-30'), new Date('2017-03-31')].concat(_toConsumableArray(aprilDates));

    var aprilCal = (0, _calendar.calendarMonth)(2017, 3, 'fr');
    var receivedDates = flattenWeekRange(aprilCal.weeks);

    expect(formatDates(receivedDates)).toEqual(formatDates(expectedDates));
    expect(aprilCal.isValid).toBeTruthy();
    expect(aprilCal.monthName).toEqual('avril');
    expect(aprilCal.weekdays).toEqual(['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']);
    expect(aprilCal.weekdaysShort).toEqual(['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.']);
  });

  it('should return 2017 calendar for default en locale', function () {
    var cal = (0, _calendar.calendarYear)(2017);
    expect(cal).toMatchSnapshot();
  });

  it('should return 2017 calendar for default fr locale', function () {
    var cal = (0, _calendar.calendarYear)(2017, 'fr');
    expect(cal).toMatchSnapshot();
  });
});