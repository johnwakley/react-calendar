'use strict';

var _templateObject = _taggedTemplateLiteral(['background: papayawhip;'], ['background: papayawhip;']);

var _media = require('../media');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var customSizes = {
  mobile: 100,
  tablet: 200,
  desktop: 300
};

var customMedia = (0, _media.mediaWithBreakpoints)(customSizes);

describe('media', function () {
  it('should have default mobile breakpoint', function () {
    var style = _media.media.mobile(_templateObject);
    expect(style).toMatchSnapshot();
  });

  it('should have default tablet breakpoint', function () {
    var style = _media.media.tablet(_templateObject);
    expect(style).toMatchSnapshot();
  });

  it('should have default desktop breakpoint', function () {
    var style = _media.media.desktop(_templateObject);
    expect(style).toMatchSnapshot();
  });

  it('should have custom mobile breakpoint', function () {
    var style = customMedia.mobile(_templateObject);
    expect(style).toMatchSnapshot();
  });

  it('should have custom tablet breakpoint', function () {
    var style = customMedia.tablet(_templateObject);
    expect(style).toMatchSnapshot();
  });

  it('should have custom desktop breakpoint', function () {
    var style = customMedia.desktop(_templateObject);
    expect(style).toMatchSnapshot();
  });
});