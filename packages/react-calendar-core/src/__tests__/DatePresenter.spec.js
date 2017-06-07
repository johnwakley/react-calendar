import {DatePresenter, dateStyles} from '../DatePresenter'

describe('DatePresenter', () => {
  it('should be today date style', () => {
    const today = new Date()
    const datePresenter = new DatePresenter(today, today.getMonth())
    expect(datePresenter.displayStyle()).toEqual(dateStyles.TODAY)
  })

  it('should be muted date style', () => {
    const juneDate = new Date('2017-06-01')
    const mayMonthIndex = 4
    const datePresenter = new DatePresenter(juneDate, mayMonthIndex)
    expect(datePresenter.displayStyle()).toEqual(dateStyles.MUTED)
  })

  it('should be normal date style', () => {
    const juneDate = new Date('2017-06-01')
    const juneMonthIndex = 5
    const datePresenter = new DatePresenter(juneDate, juneMonthIndex)
    expect(datePresenter.displayStyle()).toEqual(dateStyles.NORMAL)
  })
})
