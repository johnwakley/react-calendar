'use strict';

var _DatePresenter = require('../DatePresenter');

describe('DatePresenter', function () {
  it('should be today date style', function () {
    var today = new Date();
    var datePresenter = new _DatePresenter.DatePresenter(today, today.getMonth());
    expect(datePresenter.displayStyle()).toEqual(_DatePresenter.dateStyles.TODAY);
  });

  it('should be muted date style', function () {
    var juneDate = new Date('2017-06-01');
    var mayMonthIndex = 4;
    var datePresenter = new _DatePresenter.DatePresenter(juneDate, mayMonthIndex);
    expect(datePresenter.displayStyle()).toEqual(_DatePresenter.dateStyles.MUTED);
  });

  it('should be normal date style', function () {
    var juneDate = new Date('2017-06-01');
    var juneMonthIndex = 5;
    var datePresenter = new _DatePresenter.DatePresenter(juneDate, juneMonthIndex);
    expect(datePresenter.displayStyle()).toEqual(_DatePresenter.dateStyles.NORMAL);
  });
});