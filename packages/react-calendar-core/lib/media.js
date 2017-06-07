'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = exports.mediaWithBreakpoints = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      @media (max-width: ', 'em) {\n        ', '\n      }\n    '], ['\n      @media (max-width: ', 'em) {\n        ', '\n      }\n    ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
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

var defaultSizes = {
  mobile: 640,
  tablet: 1280,
  desktop: 1920
};

var mediaWithBreakpoints = exports.mediaWithBreakpoints = function mediaWithBreakpoints() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSizes;

  var breaks = Object.assign({}, defaultSizes, breakpoints);

  // Iterate through the breakpoints and create a media template
  return Object.keys(breaks).reduce(function (acc, label) {
    acc[label] = function () {
      return (0, _styledComponents.css)(_templateObject, breaks[label] / 16, _styledComponents.css.apply(undefined, arguments));
    };

    return acc;
  }, {});
};

var media = exports.media = mediaWithBreakpoints();