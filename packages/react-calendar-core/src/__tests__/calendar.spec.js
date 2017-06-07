import { calendarMonth, calendarYear } from '../calendar'

const daysInMonth = Array.from({ length: 30 }, (v, i) => i + 1)
const aprilDates = daysInMonth.map(day => {
  const d = day < 10 ? `0${day}` : day
  return new Date(`2017-04-${d}`)
})

const flattenWeekRange = weeks =>
  weeks.reduce((acc, week) => {
    return acc.concat(...week)
  }, [])

const formatDates = dates =>
  dates.map(calDate => calDate.toISOString().slice(0, 10))

describe('calandar', () => {
  it('should contain days for May 2017', () => {
    // To form complete calendarMonth weeks, April includes partial dates
    // from March and May according en locale
    const expectedDates = [
      new Date('2017-03-26'),
      new Date('2017-03-27'),
      new Date('2017-03-28'),
      new Date('2017-03-29'),
      new Date('2017-03-30'),
      new Date('2017-03-31'),
      ...aprilDates,
      new Date('2017-05-01'),
      new Date('2017-05-02'),
      new Date('2017-05-03'),
      new Date('2017-05-04'),
      new Date('2017-05-05'),
      new Date('2017-05-06')
    ]

    const aprilCal = calendarMonth(2017, 3)
    const receivedDates = flattenWeekRange(aprilCal.weeks)

    expect(formatDates(receivedDates)).toEqual(formatDates(expectedDates))
    expect(aprilCal.isValid).toBeTruthy()
    expect(aprilCal.monthName).toEqual('April')
    expect(aprilCal.weekdays).toEqual([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ])
    expect(aprilCal.weekdaysShort).toEqual([
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ])
  })

  it('should return invalid calendarMonth', () => {
    const aprilCal = calendarMonth(2017, 20)
    expect(aprilCal.isValid).toBeFalsy()
  })

  it('should include new year dates', () => {
    const daysInMonth = Array.from({ length: 31 }, (v, i) => i + 1)
    const decemberDates = daysInMonth.map(day => {
      const d = day < 10 ? `0${day}` : day
      return new Date(`2017-12-${d}`)
    })

    // To form complete calendarMonth weeks, December includes overflow dates
    // from November and January according en locale
    const expectedDates = [
      new Date('2017-11-26'),
      new Date('2017-11-27'),
      new Date('2017-11-28'),
      new Date('2017-11-29'),
      new Date('2017-11-30'),
      ...decemberDates,
      new Date('2018-01-01'),
      new Date('2018-01-02'),
      new Date('2018-01-03'),
      new Date('2018-01-04'),
      new Date('2018-01-05'),
      new Date('2018-01-06')
    ]

    const decCalendar = calendarMonth(2017, 11)
    const receivedDates = flattenWeekRange(decCalendar.weeks)

    expect(formatDates(receivedDates)).toEqual(formatDates(expectedDates))
  })

  it('should show month dates for French (fr) locale', () => {
    // To form complete calendarMonth weeks, April includes partial dates
    // from March and May.
    // The start of the week is Monday (Lundi) in France.
    const expectedDates = [
      new Date('2017-03-27'),
      new Date('2017-03-28'),
      new Date('2017-03-29'),
      new Date('2017-03-30'),
      new Date('2017-03-31'),
      ...aprilDates
    ]

    const aprilCal = calendarMonth(2017, 3, 'fr')
    const receivedDates = flattenWeekRange(aprilCal.weeks)

    expect(formatDates(receivedDates)).toEqual(formatDates(expectedDates))
    expect(aprilCal.isValid).toBeTruthy()
    expect(aprilCal.monthName).toEqual('avril')
    expect(aprilCal.weekdays).toEqual([
      'lundi',
      'mardi',
      'mercredi',
      'jeudi',
      'vendredi',
      'samedi',
      'dimanche'
    ])
    expect(aprilCal.weekdaysShort).toEqual([
      'lun.',
      'mar.',
      'mer.',
      'jeu.',
      'ven.',
      'sam.',
      'dim.'
    ])
  })

  it('should return 2017 calendar for default en locale', () => {
    const cal = calendarYear(2017)
    expect(cal).toMatchSnapshot()
  })

  it('should return 2017 calendar for default fr locale', () => {
    const cal = calendarYear(2017, 'fr')
    expect(cal).toMatchSnapshot()
  })
})
