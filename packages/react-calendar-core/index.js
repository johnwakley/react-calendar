// Named exports
module.exports = {
  calendarYear: require('./lib/calendar').calendarYear,
  calendarMonth: require('./lib/calendar').calendarMonth,
  CalendarMonth: require('./lib/calendar').CalendarMonth,
  CalendarMonthEnum: require('./lib/calendar').CalendarMonthEnum,
  DEFAULT_LOCALE: require('./lib/calendar').DEFAULT_LOCALE,
  DatePresenter: require('./lib/DatePresenter').DatePresenter,
  DateStyle: require('./lib/DatePresenter').DateStyle,
  dateStyles: require('./lib/DatePresenter').dateStyles,
  MediaBreakpoints: require('./lib/media').MediaBreakpoints,
  mediaWithBreakpoints: require('./lib/media').mediaWithBreakpoints,
  media: require('./lib/media').media
}
