self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/CoreValues/CoreValues.js":
/*!*************************************************!*\
  !*** ./src/components/CoreValues/CoreValues.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wordcloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wordcloud */ "./node_modules/wordcloud/src/wordcloud2.js");
/* harmony import */ var wordcloud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wordcloud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoreValuesStyles */ "./src/components/CoreValues/CoreValuesStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "J:\\OneDrive\\OneDrive\\Documents\\GitHub\\portfolio\\src\\components\\CoreValues\\CoreValues.js",
    _this = undefined,
    _s = $RefreshSig$();






var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_5__.CoreValueData.length;

var CoreValue = function CoreValue() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: "smooth"
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_5__.CoreValueData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_5__.CoreValueData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    if (true) {
      window.addEventListener("resize", handleResize);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
      children: "Core Values"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        height: "400px",
        width: "1000px",
        margin: "auto"
      },
      id: "wordcloud-container"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.CoreValueData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselItem, {
              index: index,
              id: "carousel__item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselItemTitle, {
                children: [item.title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselItemImg, {
                  width: "208",
                  height: "6",
                  viewBox: "0 0 208 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                    fill: "url(#paint0_linear)",
                    "fill-opacity": "0.33"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                      id: "paint0_linear",
                      x1: "-4.30412e-10",
                      y1: "0.5",
                      x2: "208",
                      y2: "0.500295",
                      gradientUnits: "userSpaceOnUse",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        "stop-color": "white"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        "stop-color": "white",
                        "stop-opacity": "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselItemText, {
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_5__.CoreValueData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_s(CoreValue, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = CoreValue;
/* harmony default export */ __webpack_exports__["default"] = (CoreValue);

var _c;

$RefreshReg$(_c, "CoreValue");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/wordcloud/src/wordcloud2.js":
/*!**************************************************!*\
  !*** ./node_modules/wordcloud/src/wordcloud2.js ***!
  \**************************************************/
/***/ (function(module, exports) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2019 Tim Guan-tin Chien and contributors.
 * Released under the MIT license
 */



// setImmediate
if (!window.setImmediate) {
  window.setImmediate = (function setupSetImmediate () {
    return window.msSetImmediate ||
    window.webkitSetImmediate ||
    window.mozSetImmediate ||
    window.oSetImmediate ||
    (function setupSetZeroTimeout () {
      if (!window.postMessage || !window.addEventListener) {
        return null
      }

      var callbacks = [undefined]
      var message = 'zero-timeout-message'

      // Like setTimeout, but only takes a function argument.  There's
      // no time argument (always zero) and no arguments (you have to
      // use a closure).
      var setZeroTimeout = function setZeroTimeout (callback) {
        var id = callbacks.length
        callbacks.push(callback)
        window.postMessage(message + id.toString(36), '*')

        return id
      }

      window.addEventListener('message', function setZeroTimeoutMessage (evt) {
        // Skipping checking event source, retarded IE confused this window
        // object with another in the presence of iframe
        if (typeof evt.data !== 'string' ||
            evt.data.substr(0, message.length) !== message/* ||
            evt.source !== window */) {
          return
        }

        evt.stopImmediatePropagation()

        var id = parseInt(evt.data.substr(message.length), 36)
        if (!callbacks[id]) {
          return
        }

        callbacks[id]()
        callbacks[id] = undefined
      }, true)

      /* specify clearImmediate() here since we need the scope */
      window.clearImmediate = function clearZeroTimeout (id) {
        if (!callbacks[id]) {
          return
        }

        callbacks[id] = undefined
      }

      return setZeroTimeout
    })() ||
    // fallback
    function setImmediateFallback (fn) {
      window.setTimeout(fn, 0)
    }
  })()
}

if (!window.clearImmediate) {
  window.clearImmediate = (function setupClearImmediate () {
    return window.msClearImmediate ||
    window.webkitClearImmediate ||
    window.mozClearImmediate ||
    window.oClearImmediate ||
    // "clearZeroTimeout" is implement on the previous block ||
    // fallback
    function clearImmediateFallback (timer) {
      window.clearTimeout(timer)
    }
  })()
}

(function (global) {
  // Check if WordCloud can run on this browser
  var isSupported = (function isSupported () {
    var canvas = document.createElement('canvas')
    if (!canvas || !canvas.getContext) {
      return false
    }

    var ctx = canvas.getContext('2d')
    if (!ctx) {
      return false
    }
    if (!ctx.getImageData) {
      return false
    }
    if (!ctx.fillText) {
      return false
    }

    if (!Array.prototype.some) {
      return false
    }
    if (!Array.prototype.push) {
      return false
    }

    return true
  }())

  // Find out if the browser impose minium font size by
  // drawing small texts on a canvas and measure it's width.
  var minFontSize = (function getMinFontSize () {
    if (!isSupported) {
      return
    }

    var ctx = document.createElement('canvas').getContext('2d')

    // start from 20
    var size = 20

    // two sizes to measure
    var hanWidth, mWidth

    while (size) {
      ctx.font = size.toString(10) + 'px sans-serif'
      if ((ctx.measureText('\uFF37').width === hanWidth) &&
          (ctx.measureText('m').width) === mWidth) {
        return (size + 1)
      }

      hanWidth = ctx.measureText('\uFF37').width
      mWidth = ctx.measureText('m').width

      size--
    }

    return 0
  })()

  var getItemExtraData = function (item) {
    if (Array.isArray(item)) {
      var itemCopy = item.slice()
      // remove data we already have (word and weight)
      itemCopy.splice(0, 2)
      return itemCopy
    } else {
      return []
    }
  }

  // Based on http://jsfromhell.com/array/shuffle
  var shuffleArray = function shuffleArray (arr) {
    for (var j, x, i = arr.length; i;) {
      j = Math.floor(Math.random() * i)
      x = arr[--i]
      arr[i] = arr[j]
      arr[j] = x
    }
    return arr
  }

  var timer = {};
  var WordCloud = function WordCloud (elements, options) {
    if (!isSupported) {
      return
    }

    var timerId = Math.floor(Math.random() * Date.now())

    if (!Array.isArray(elements)) {
      elements = [elements]
    }

    elements.forEach(function (el, i) {
      if (typeof el === 'string') {
        elements[i] = document.getElementById(el)
        if (!elements[i]) {
          throw new Error('The element id specified is not found.')
        }
      } else if (!el.tagName && !el.appendChild) {
        throw new Error('You must pass valid HTML elements, or ID of the element.')
      }
    })

    /* Default values to be overwritten by options object */
    var settings = {
      list: [],
      fontFamily: '"Trebuchet MS", "Heiti TC", "微軟正黑體", ' +
                  '"Arial Unicode MS", "Droid Fallback Sans", sans-serif',
      fontWeight: 'normal',
      color: 'random-dark',
      minSize: 0, // 0 to disable
      weightFactor: 1,
      clearCanvas: true,
      backgroundColor: '#fff', // opaque white = rgba(255, 255, 255, 1)

      gridSize: 8,
      drawOutOfBound: false,
      shrinkToFit: false,
      origin: null,

      drawMask: false,
      maskColor: 'rgba(255,0,0,0.3)',
      maskGapWidth: 0.3,

      wait: 0,
      abortThreshold: 0, // disabled
      abort: function noop () {},

      minRotation: -Math.PI / 2,
      maxRotation: Math.PI / 2,
      rotationSteps: 0,

      shuffle: true,
      rotateRatio: 0.1,

      shape: 'circle',
      ellipticity: 0.65,

      classes: null,

      hover: null,
      click: null
    }

    if (options) {
      for (var key in options) {
        if (key in settings) {
          settings[key] = options[key]
        }
      }
    }

    /* Convert weightFactor into a function */
    if (typeof settings.weightFactor !== 'function') {
      var factor = settings.weightFactor
      settings.weightFactor = function weightFactor (pt) {
        return pt * factor // in px
      }
    }

    /* Convert shape into a function */
    if (typeof settings.shape !== 'function') {
      switch (settings.shape) {
        case 'circle':
        /* falls through */
        default:
          // 'circle' is the default and a shortcut in the code loop.
          settings.shape = 'circle'
          break

        case 'cardioid':
          settings.shape = function shapeCardioid (theta) {
            return 1 - Math.sin(theta)
          }
          break

          /*
          To work out an X-gon, one has to calculate "m",
          where 1/(cos(2*PI/X)+m*sin(2*PI/X)) = 1/(cos(0)+m*sin(0))
          http://www.wolframalpha.com/input/?i=1%2F%28cos%282*PI%2FX%29%2Bm*sin%28
          2*PI%2FX%29%29+%3D+1%2F%28cos%280%29%2Bm*sin%280%29%29
          Copy the solution into polar equation r = 1/(cos(t') + m*sin(t'))
          where t' equals to mod(t, 2PI/X)
         */

        case 'diamond':
          // http://www.wolframalpha.com/input/?i=plot+r+%3D+1%2F%28cos%28mod+
          // %28t%2C+PI%2F2%29%29%2Bsin%28mod+%28t%2C+PI%2F2%29%29%29%2C+t+%3D
          // +0+..+2*PI
          settings.shape = function shapeSquare (theta) {
            var thetaPrime = theta % (2 * Math.PI / 4)
            return 1 / (Math.cos(thetaPrime) + Math.sin(thetaPrime))
          }
          break

        case 'square':
          // http://www.wolframalpha.com/input/?i=plot+r+%3D+min(1%2Fabs(cos(t
          // )),1%2Fabs(sin(t)))),+t+%3D+0+..+2*PI
          settings.shape = function shapeSquare (theta) {
            return Math.min(
              1 / Math.abs(Math.cos(theta)),
              1 / Math.abs(Math.sin(theta))
            )
          }
          break

        case 'triangle-forward':
          // http://www.wolframalpha.com/input/?i=plot+r+%3D+1%2F%28cos%28mod+
          // %28t%2C+2*PI%2F3%29%29%2Bsqrt%283%29sin%28mod+%28t%2C+2*PI%2F3%29
          // %29%29%2C+t+%3D+0+..+2*PI
          settings.shape = function shapeTriangle (theta) {
            var thetaPrime = theta % (2 * Math.PI / 3)
            return 1 / (Math.cos(thetaPrime) +
                        Math.sqrt(3) * Math.sin(thetaPrime))
          }
          break

        case 'triangle':
        case 'triangle-upright':
          settings.shape = function shapeTriangle (theta) {
            var thetaPrime = (theta + Math.PI * 3 / 2) % (2 * Math.PI / 3)
            return 1 / (Math.cos(thetaPrime) +
                        Math.sqrt(3) * Math.sin(thetaPrime))
          }
          break

        case 'pentagon':
          settings.shape = function shapePentagon (theta) {
            var thetaPrime = (theta + 0.955) % (2 * Math.PI / 5)
            return 1 / (Math.cos(thetaPrime) +
                        0.726543 * Math.sin(thetaPrime))
          }
          break

        case 'star':
          settings.shape = function shapeStar (theta) {
            var thetaPrime = (theta + 0.955) % (2 * Math.PI / 10)
            if ((theta + 0.955) % (2 * Math.PI / 5) - (2 * Math.PI / 10) >= 0) {
              return 1 / (Math.cos((2 * Math.PI / 10) - thetaPrime) +
                          3.07768 * Math.sin((2 * Math.PI / 10) - thetaPrime))
            } else {
              return 1 / (Math.cos(thetaPrime) +
                          3.07768 * Math.sin(thetaPrime))
            }
          }
          break
      }
    }

    /* Make sure gridSize is a whole number and is not smaller than 4px */
    settings.gridSize = Math.max(Math.floor(settings.gridSize), 4)

    /* shorthand */
    var g = settings.gridSize
    var maskRectWidth = g - settings.maskGapWidth

    /* normalize rotation settings */
    var rotationRange = Math.abs(settings.maxRotation - settings.minRotation)
    var rotationSteps = Math.abs(Math.floor(settings.rotationSteps))
    var minRotation = Math.min(settings.maxRotation, settings.minRotation)

    /* information/object available to all functions, set when start() */
    var grid, // 2d array containing filling information
      ngx, ngy, // width and height of the grid
      center, // position of the center of the cloud
      maxRadius

    /* timestamp for measuring each putWord() action */
    var escapeTime

    /* function for getting the color of the text */
    var getTextColor
    function randomHslColor (min, max) {
      return 'hsl(' +
        (Math.random() * 360).toFixed() + ',' +
        (Math.random() * 30 + 70).toFixed() + '%,' +
        (Math.random() * (max - min) + min).toFixed() + '%)'
    }
    switch (settings.color) {
      case 'random-dark':
        getTextColor = function getRandomDarkColor () {
          return randomHslColor(10, 50)
        }
        break

      case 'random-light':
        getTextColor = function getRandomLightColor () {
          return randomHslColor(50, 90)
        }
        break

      default:
        if (typeof settings.color === 'function') {
          getTextColor = settings.color
        }
        break
    }

    /* function for getting the font-weight of the text */
    var getTextFontWeight
    if (typeof settings.fontWeight === 'function') {
      getTextFontWeight = settings.fontWeight
    }

    /* function for getting the classes of the text */
    var getTextClasses = null
    if (typeof settings.classes === 'function') {
      getTextClasses = settings.classes
    }

    /* Interactive */
    var interactive = false
    var infoGrid = []
    var hovered

    var getInfoGridFromMouseTouchEvent =
    function getInfoGridFromMouseTouchEvent (evt) {
      var canvas = evt.currentTarget
      var rect = canvas.getBoundingClientRect()
      var clientX
      var clientY
      /** Detect if touches are available */
      if (evt.touches) {
        clientX = evt.touches[0].clientX
        clientY = evt.touches[0].clientY
      } else {
        clientX = evt.clientX
        clientY = evt.clientY
      }
      var eventX = clientX - rect.left
      var eventY = clientY - rect.top

      var x = Math.floor(eventX * ((canvas.width / rect.width) || 1) / g)
      var y = Math.floor(eventY * ((canvas.height / rect.height) || 1) / g)

      return infoGrid[x][y]
    }

    var wordcloudhover = function wordcloudhover (evt) {
      var info = getInfoGridFromMouseTouchEvent(evt)

      if (hovered === info) {
        return
      }

      hovered = info
      if (!info) {
        settings.hover(undefined, undefined, evt)

        return
      }

      settings.hover(info.item, info.dimension, evt)
    }

    var wordcloudclick = function wordcloudclick (evt) {
      var info = getInfoGridFromMouseTouchEvent(evt)
      if (!info) {
        return
      }

      settings.click(info.item, info.dimension, evt)
      evt.preventDefault()
    }

    /* Get points on the grid for a given radius away from the center */
    var pointsAtRadius = []
    var getPointsAtRadius = function getPointsAtRadius (radius) {
      if (pointsAtRadius[radius]) {
        return pointsAtRadius[radius]
      }

      // Look for these number of points on each radius
      var T = radius * 8

      // Getting all the points at this radius
      var t = T
      var points = []

      if (radius === 0) {
        points.push([center[0], center[1], 0])
      }

      while (t--) {
        // distort the radius to put the cloud in shape
        var rx = 1
        if (settings.shape !== 'circle') {
          rx = settings.shape(t / T * 2 * Math.PI) // 0 to 1
        }

        // Push [x, y, t] t is used solely for getTextColor()
        points.push([
          center[0] + radius * rx * Math.cos(-t / T * 2 * Math.PI),
          center[1] + radius * rx * Math.sin(-t / T * 2 * Math.PI) *
            settings.ellipticity,
          t / T * 2 * Math.PI])
      }

      pointsAtRadius[radius] = points
      return points
    }

    /* Return true if we had spent too much time */
    var exceedTime = function exceedTime () {
      return ((settings.abortThreshold > 0) &&
        ((new Date()).getTime() - escapeTime > settings.abortThreshold))
    }

    /* Get the deg of rotation according to settings, and luck. */
    var getRotateDeg = function getRotateDeg () {
      if (settings.rotateRatio === 0) {
        return 0
      }

      if (Math.random() > settings.rotateRatio) {
        return 0
      }

      if (rotationRange === 0) {
        return minRotation
      }

      if (rotationSteps > 0) {
        // Min rotation + zero or more steps * span of one step
        return minRotation +
          Math.floor(Math.random() * rotationSteps) *
          rotationRange / (rotationSteps - 1)
      } else {
        return minRotation + Math.random() * rotationRange
      }
    }

    var getTextInfo = function getTextInfo (word, weight, rotateDeg, extraDataArray) {
      // calculate the acutal font size
      // fontSize === 0 means weightFactor function wants the text skipped,
      // and size < minSize means we cannot draw the text.
      var debug = false
      var fontSize = settings.weightFactor(weight)
      if (fontSize <= settings.minSize) {
        return false
      }

      // Scale factor here is to make sure fillText is not limited by
      // the minium font size set by browser.
      // It will always be 1 or 2n.
      var mu = 1
      if (fontSize < minFontSize) {
        mu = (function calculateScaleFactor () {
          var mu = 2
          while (mu * fontSize < minFontSize) {
            mu += 2
          }
          return mu
        })()
      }

      // Get fontWeight that will be used to set fctx.font
      var fontWeight
      if (getTextFontWeight) {
        fontWeight = getTextFontWeight(word, weight, fontSize, extraDataArray)
      } else {
        fontWeight = settings.fontWeight
      }

      var fcanvas = document.createElement('canvas')
      var fctx = fcanvas.getContext('2d', { willReadFrequently: true })

      fctx.font = fontWeight + ' ' +
        (fontSize * mu).toString(10) + 'px ' + settings.fontFamily

      // Estimate the dimension of the text with measureText().
      var fw = fctx.measureText(word).width / mu
      var fh = Math.max(fontSize * mu,
        fctx.measureText('m').width,
        fctx.measureText('\uFF37').width
      ) / mu

      // Create a boundary box that is larger than our estimates,
      // so text don't get cut of (it sill might)
      var boxWidth = fw + fh * 2
      var boxHeight = fh * 3
      var fgw = Math.ceil(boxWidth / g)
      var fgh = Math.ceil(boxHeight / g)
      boxWidth = fgw * g
      boxHeight = fgh * g

      // Calculate the proper offsets to make the text centered at
      // the preferred position.

      // This is simply half of the width.
      var fillTextOffsetX = -fw / 2
      // Instead of moving the box to the exact middle of the preferred
      // position, for Y-offset we move 0.4 instead, so Latin alphabets look
      // vertical centered.
      var fillTextOffsetY = -fh * 0.4

      // Calculate the actual dimension of the canvas, considering the rotation.
      var cgh = Math.ceil((boxWidth * Math.abs(Math.sin(rotateDeg)) +
                           boxHeight * Math.abs(Math.cos(rotateDeg))) / g)
      var cgw = Math.ceil((boxWidth * Math.abs(Math.cos(rotateDeg)) +
                           boxHeight * Math.abs(Math.sin(rotateDeg))) / g)
      var width = cgw * g
      var height = cgh * g

      fcanvas.setAttribute('width', width)
      fcanvas.setAttribute('height', height)

      if (debug) {
        // Attach fcanvas to the DOM
        document.body.appendChild(fcanvas)
        // Save it's state so that we could restore and draw the grid correctly.
        fctx.save()
      }

      // Scale the canvas with |mu|.
      fctx.scale(1 / mu, 1 / mu)
      fctx.translate(width * mu / 2, height * mu / 2)
      fctx.rotate(-rotateDeg)

      // Once the width/height is set, ctx info will be reset.
      // Set it again here.
      fctx.font = fontWeight + ' ' +
        (fontSize * mu).toString(10) + 'px ' + settings.fontFamily

      // Fill the text into the fcanvas.
      // XXX: We cannot because textBaseline = 'top' here because
      // Firefox and Chrome uses different default line-height for canvas.
      // Please read https://bugzil.la/737852#c6.
      // Here, we use textBaseline = 'middle' and draw the text at exactly
      // 0.5 * fontSize lower.
      fctx.fillStyle = '#000'
      fctx.textBaseline = 'middle'
      fctx.fillText(
        word, fillTextOffsetX * mu,
        (fillTextOffsetY + fontSize * 0.5) * mu
      )

      // Get the pixels of the text
      var imageData = fctx.getImageData(0, 0, width, height).data

      if (exceedTime()) {
        return false
      }

      if (debug) {
        // Draw the box of the original estimation
        fctx.strokeRect(
          fillTextOffsetX * mu,
          fillTextOffsetY, fw * mu, fh * mu
        )
        fctx.restore()
      }

      // Read the pixels and save the information to the occupied array
      var occupied = []
      var gx = cgw
      var gy, x, y
      var bounds = [cgh / 2, cgw / 2, cgh / 2, cgw / 2]
      while (gx--) {
        gy = cgh
        while (gy--) {
          y = g
          /* eslint no-labels: ["error", { "allowLoop": true }] */
          singleGridLoop: while (y--) {
            x = g
            while (x--) {
              if (imageData[((gy * g + y) * width +
                (gx * g + x)) * 4 + 3]) {
                occupied.push([gx, gy])

                if (gx < bounds[3]) {
                  bounds[3] = gx
                }
                if (gx > bounds[1]) {
                  bounds[1] = gx
                }
                if (gy < bounds[0]) {
                  bounds[0] = gy
                }
                if (gy > bounds[2]) {
                  bounds[2] = gy
                }

                if (debug) {
                  fctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
                  fctx.fillRect(gx * g, gy * g, g - 0.5, g - 0.5)
                }
                break singleGridLoop
              }
            }
          }
          if (debug) {
            fctx.fillStyle = 'rgba(0, 0, 255, 0.5)'
            fctx.fillRect(gx * g, gy * g, g - 0.5, g - 0.5)
          }
        }
      }

      if (debug) {
        fctx.fillStyle = 'rgba(0, 255, 0, 0.5)'
        fctx.fillRect(
          bounds[3] * g,
          bounds[0] * g,
          (bounds[1] - bounds[3] + 1) * g,
          (bounds[2] - bounds[0] + 1) * g
        )
      }

      // Return information needed to create the text on the real canvas
      return {
        mu: mu,
        occupied: occupied,
        bounds: bounds,
        gw: cgw,
        gh: cgh,
        fillTextOffsetX: fillTextOffsetX,
        fillTextOffsetY: fillTextOffsetY,
        fillTextWidth: fw,
        fillTextHeight: fh,
        fontSize: fontSize
      }
    }

    /* Determine if there is room available in the given dimension */
    var canFitText = function canFitText (gx, gy, gw, gh, occupied) {
      // Go through the occupied points,
      // return false if the space is not available.
      var i = occupied.length
      while (i--) {
        var px = gx + occupied[i][0]
        var py = gy + occupied[i][1]

        if (px >= ngx || py >= ngy || px < 0 || py < 0) {
          if (!settings.drawOutOfBound) {
            return false
          }
          continue
        }

        if (!grid[px][py]) {
          return false
        }
      }
      return true
    }

    /* Actually draw the text on the grid */
    var drawText = function drawText (gx, gy, info, word, weight, distance, theta, rotateDeg, attributes, extraDataArray) {
      var fontSize = info.fontSize
      var color
      if (getTextColor) {
        color = getTextColor(word, weight, fontSize, distance, theta, extraDataArray)
      } else {
        color = settings.color
      }

      // get fontWeight that will be used to set ctx.font and font style rule
      var fontWeight
      if (getTextFontWeight) {
        fontWeight = getTextFontWeight(word, weight, fontSize, extraDataArray)
      } else {
        fontWeight = settings.fontWeight
      }

      var classes
      if (getTextClasses) {
        classes = getTextClasses(word, weight, fontSize, extraDataArray)
      } else {
        classes = settings.classes
      }

      elements.forEach(function (el) {
        if (el.getContext) {
          var ctx = el.getContext('2d')
          var mu = info.mu

          // Save the current state before messing it
          ctx.save()
          ctx.scale(1 / mu, 1 / mu)

          ctx.font = fontWeight + ' ' +
                     (fontSize * mu).toString(10) + 'px ' + settings.fontFamily
          ctx.fillStyle = color

          // Translate the canvas position to the origin coordinate of where
          // the text should be put.
          ctx.translate(
            (gx + info.gw / 2) * g * mu,
            (gy + info.gh / 2) * g * mu
          )

          if (rotateDeg !== 0) {
            ctx.rotate(-rotateDeg)
          }

          // Finally, fill the text.

          // XXX: We cannot because textBaseline = 'top' here because
          // Firefox and Chrome uses different default line-height for canvas.
          // Please read https://bugzil.la/737852#c6.
          // Here, we use textBaseline = 'middle' and draw the text at exactly
          // 0.5 * fontSize lower.
          ctx.textBaseline = 'middle'
          ctx.fillText(
            word, info.fillTextOffsetX * mu,
            (info.fillTextOffsetY + fontSize * 0.5) * mu
          )

          // The below box is always matches how <span>s are positioned
          /* ctx.strokeRect(info.fillTextOffsetX, info.fillTextOffsetY,
            info.fillTextWidth, info.fillTextHeight) */

          // Restore the state.
          ctx.restore()
        } else {
          // drawText on DIV element
          var span = document.createElement('span')
          var transformRule = ''
          transformRule = 'rotate(' + (-rotateDeg / Math.PI * 180) + 'deg) '
          if (info.mu !== 1) {
            transformRule +=
              'translateX(-' + (info.fillTextWidth / 4) + 'px) ' +
              'scale(' + (1 / info.mu) + ')'
          }
          var styleRules = {
            position: 'absolute',
            display: 'block',
            font: fontWeight + ' ' +
              (fontSize * info.mu) + 'px ' + settings.fontFamily,
            left: ((gx + info.gw / 2) * g + info.fillTextOffsetX) + 'px',
            top: ((gy + info.gh / 2) * g + info.fillTextOffsetY) + 'px',
            width: info.fillTextWidth + 'px',
            height: info.fillTextHeight + 'px',
            lineHeight: fontSize + 'px',
            whiteSpace: 'nowrap',
            transform: transformRule,
            webkitTransform: transformRule,
            msTransform: transformRule,
            transformOrigin: '50% 40%',
            webkitTransformOrigin: '50% 40%',
            msTransformOrigin: '50% 40%'
          }
          if (color) {
            styleRules.color = color
          }
          span.textContent = word
          for (var cssProp in styleRules) {
            span.style[cssProp] = styleRules[cssProp]
          }
          if (attributes) {
            for (var attribute in attributes) {
              span.setAttribute(attribute, attributes[attribute])
            }
          }
          if (classes) {
            span.className += classes
          }
          el.appendChild(span)
        }
      })
    }

    /* Help function to updateGrid */
    var fillGridAt = function fillGridAt (x, y, drawMask, dimension, item) {
      if (x >= ngx || y >= ngy || x < 0 || y < 0) {
        return
      }

      grid[x][y] = false

      if (drawMask) {
        var ctx = elements[0].getContext('2d')
        ctx.fillRect(x * g, y * g, maskRectWidth, maskRectWidth)
      }

      if (interactive) {
        infoGrid[x][y] = { item: item, dimension: dimension }
      }
    }

    /* Update the filling information of the given space with occupied points.
       Draw the mask on the canvas if necessary. */
    var updateGrid = function updateGrid (gx, gy, gw, gh, info, item) {
      var occupied = info.occupied
      var drawMask = settings.drawMask
      var ctx
      if (drawMask) {
        ctx = elements[0].getContext('2d')
        ctx.save()
        ctx.fillStyle = settings.maskColor
      }

      var dimension
      if (interactive) {
        var bounds = info.bounds
        dimension = {
          x: (gx + bounds[3]) * g,
          y: (gy + bounds[0]) * g,
          w: (bounds[1] - bounds[3] + 1) * g,
          h: (bounds[2] - bounds[0] + 1) * g
        }
      }

      var i = occupied.length
      while (i--) {
        var px = gx + occupied[i][0]
        var py = gy + occupied[i][1]

        if (px >= ngx || py >= ngy || px < 0 || py < 0) {
          continue
        }

        fillGridAt(px, py, drawMask, dimension, item)
      }

      if (drawMask) {
        ctx.restore()
      }
    }

    /* putWord() processes each item on the list,
       calculate it's size and determine it's position, and actually
       put it on the canvas. */
    var putWord = function putWord (item) {
      var word, weight, attributes
      if (Array.isArray(item)) {
        word = item[0]
        weight = item[1]
      } else {
        word = item.word
        weight = item.weight
        attributes = item.attributes
      }
      var rotateDeg = getRotateDeg()

      var extraDataArray = getItemExtraData(item)

      // get info needed to put the text onto the canvas
      var info = getTextInfo(word, weight, rotateDeg, extraDataArray)

      // not getting the info means we shouldn't be drawing this one.
      if (!info) {
        return false
      }

      if (exceedTime()) {
        return false
      }

      // If drawOutOfBound is set to false,
      // skip the loop if we have already know the bounding box of
      // word is larger than the canvas.
      if (!settings.drawOutOfBound && !settings.shrinkToFit) {
        var bounds = info.bounds;
        if ((bounds[1] - bounds[3] + 1) > ngx ||
          (bounds[2] - bounds[0] + 1) > ngy) {
          return false
        }
      }

      // Determine the position to put the text by
      // start looking for the nearest points
      var r = maxRadius + 1

      var tryToPutWordAtPoint = function (gxy) {
        var gx = Math.floor(gxy[0] - info.gw / 2)
        var gy = Math.floor(gxy[1] - info.gh / 2)
        var gw = info.gw
        var gh = info.gh

        // If we cannot fit the text at this position, return false
        // and go to the next position.
        if (!canFitText(gx, gy, gw, gh, info.occupied)) {
          return false
        }

        // Actually put the text on the canvas
        drawText(gx, gy, info, word, weight,
          (maxRadius - r), gxy[2], rotateDeg, attributes, extraDataArray)

        // Mark the spaces on the grid as filled
        updateGrid(gx, gy, gw, gh, info, item)

        // Return true so some() will stop and also return true.
        return true
      }

      while (r--) {
        var points = getPointsAtRadius(maxRadius - r)

        if (settings.shuffle) {
          points = [].concat(points)
          shuffleArray(points)
        }

        // Try to fit the words by looking at each point.
        // array.some() will stop and return true
        // when putWordAtPoint() returns true.
        // If all the points returns false, array.some() returns false.
        var drawn = points.some(tryToPutWordAtPoint)

        if (drawn) {
          // leave putWord() and return true
          return true
        }
      }
      if (settings.shrinkToFit) {
        if (Array.isArray(item)) {
          item[1] = item[1] * 3 / 4
        } else {
          item.weight = item.weight * 3 / 4
        }
        return putWord(item)
      }
      // we tried all distances but text won't fit, return false
      return false
    }

    /* Send DOM event to all elements. Will stop sending event and return
       if the previous one is canceled (for cancelable events). */
    var sendEvent = function sendEvent (type, cancelable, details) {
      if (cancelable) {
        return !elements.some(function (el) {
          var event = new CustomEvent(type, {
            detail: details || {}
          })
          return !el.dispatchEvent(event)
        }, this)
      } else {
        elements.forEach(function (el) {
          var event = new CustomEvent(type, {
            detail: details || {}
          })
          el.dispatchEvent(event)
        }, this)
      }
    }

    /* Start drawing on a canvas */
    var start = function start () {
      // For dimensions, clearCanvas etc.,
      // we only care about the first element.
      var canvas = elements[0]

      if (canvas.getContext) {
        ngx = Math.ceil(canvas.width / g)
        ngy = Math.ceil(canvas.height / g)
      } else {
        var rect = canvas.getBoundingClientRect()
        ngx = Math.ceil(rect.width / g)
        ngy = Math.ceil(rect.height / g)
      }

      // Sending a wordcloudstart event which cause the previous loop to stop.
      // Do nothing if the event is canceled.
      if (!sendEvent('wordcloudstart', true)) {
        return
      }

      // Determine the center of the word cloud
      center = (settings.origin)
        ? [settings.origin[0] / g, settings.origin[1] / g]
        : [ngx / 2, ngy / 2]

      // Maxium radius to look for space
      maxRadius = Math.floor(Math.sqrt(ngx * ngx + ngy * ngy))

      /* Clear the canvas only if the clearCanvas is set,
         if not, update the grid to the current canvas state */
      grid = []

      var gx, gy, i
      if (!canvas.getContext || settings.clearCanvas) {
        elements.forEach(function (el) {
          if (el.getContext) {
            var ctx = el.getContext('2d')
            ctx.fillStyle = settings.backgroundColor
            ctx.clearRect(0, 0, ngx * (g + 1), ngy * (g + 1))
            ctx.fillRect(0, 0, ngx * (g + 1), ngy * (g + 1))
          } else {
            el.textContent = ''
            el.style.backgroundColor = settings.backgroundColor
            el.style.position = 'relative'
          }
        })

        /* fill the grid with empty state */
        gx = ngx
        while (gx--) {
          grid[gx] = []
          gy = ngy
          while (gy--) {
            grid[gx][gy] = true
          }
        }
      } else {
        /* Determine bgPixel by creating
           another canvas and fill the specified background color. */
        var bctx = document.createElement('canvas').getContext('2d')

        bctx.fillStyle = settings.backgroundColor
        bctx.fillRect(0, 0, 1, 1)
        var bgPixel = bctx.getImageData(0, 0, 1, 1).data

        /* Read back the pixels of the canvas we got to tell which part of the
           canvas is empty.
           (no clearCanvas only works with a canvas, not divs) */
        var imageData =
          canvas.getContext('2d').getImageData(0, 0, ngx * g, ngy * g).data

        gx = ngx
        var x, y
        while (gx--) {
          grid[gx] = []
          gy = ngy
          while (gy--) {
            y = g
            /* eslint no-labels: ["error", { "allowLoop": true }] */
            singleGridLoop: while (y--) {
              x = g
              while (x--) {
                i = 4
                while (i--) {
                  if (imageData[((gy * g + y) * ngx * g +
                                 (gx * g + x)) * 4 + i] !== bgPixel[i]) {
                    grid[gx][gy] = false
                    break singleGridLoop
                  }
                }
              }
            }
            if (grid[gx][gy] !== false) {
              grid[gx][gy] = true
            }
          }
        }

        imageData = bctx = bgPixel = undefined
      }

      // fill the infoGrid with empty state if we need it
      if (settings.hover || settings.click) {
        interactive = true

        /* fill the grid with empty state */
        gx = ngx + 1
        while (gx--) {
          infoGrid[gx] = []
        }

        if (settings.hover) {
          canvas.addEventListener('mousemove', wordcloudhover)
        }

        if (settings.click) {
          canvas.addEventListener('click', wordcloudclick)
          canvas.style.webkitTapHighlightColor = 'rgba(0, 0, 0, 0)'
        }

        canvas.addEventListener('wordcloudstart', function stopInteraction () {
          canvas.removeEventListener('wordcloudstart', stopInteraction)
          canvas.removeEventListener('mousemove', wordcloudhover)
          canvas.removeEventListener('click', wordcloudclick)
          hovered = undefined
        })
      }

      i = 0
      var loopingFunction, stoppingFunction
      if (settings.wait !== 0) {
        loopingFunction = window.setTimeout
        stoppingFunction = window.clearTimeout
      } else {
        loopingFunction = window.setImmediate
        stoppingFunction = window.clearImmediate
      }

      var addEventListener = function addEventListener (type, listener) {
        elements.forEach(function (el) {
          el.addEventListener(type, listener)
        }, this)
      }

      var removeEventListener = function removeEventListener (type, listener) {
        elements.forEach(function (el) {
          el.removeEventListener(type, listener)
        }, this)
      }

      var anotherWordCloudStart = function anotherWordCloudStart () {
        removeEventListener('wordcloudstart', anotherWordCloudStart)
        stoppingFunction(timer[timerId])
      }

      addEventListener('wordcloudstart', anotherWordCloudStart)
      timer[timerId] = loopingFunction(function loop () {
        if (i >= settings.list.length) {
          stoppingFunction(timer[timerId])
          sendEvent('wordcloudstop', false)
          removeEventListener('wordcloudstart', anotherWordCloudStart)
          delete timer[timerId];
          return
        }
        escapeTime = (new Date()).getTime()
        var drawn = putWord(settings.list[i])
        var canceled = !sendEvent('wordclouddrawn', true, {
          item: settings.list[i],
          drawn: drawn
        })
        if (exceedTime() || canceled) {
          stoppingFunction(timer[timerId])
          settings.abort()
          sendEvent('wordcloudabort', false)
          sendEvent('wordcloudstop', false)
          removeEventListener('wordcloudstart', anotherWordCloudStart)
          delete timer[timerId]
          return
        }
        i++
        timer[timerId] = loopingFunction(loop, settings.wait)
      }, settings.wait)
    }

    // All set, start the drawing
    start()
  }

  WordCloud.isSupported = isSupported
  WordCloud.minFontSize = minFontSize
  WordCloud.stop = function stop () {
    if (timer) {
      for (var timerId in timer) {
        window.clearImmediate(timer[timerId])
      }
    }
  }

  // Expose the library as an AMD module
  if (true) { // eslint-disable-line no-undef
    global.WordCloud = WordCloud
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return WordCloud }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) // eslint-disable-line no-undef
  } else {}
})(this) // jshint ignore:line


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29yZVZhbHVlcy9Db3JlVmFsdWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29yZGNsb3VkL3NyYy93b3JkY2xvdWQyLmpzIl0sIm5hbWVzIjpbIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwiQ29yZVZhbHVlRGF0YSIsIkNvcmVWYWx1ZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiaXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVdBO0FBTUE7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msc0VBQTdCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDY0MsK0NBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsTUFDZkMsVUFEZTtBQUFBLE1BQ0hDLGFBREc7O0FBRXRCLE1BQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQzdCLFdBQU9ELElBQUksQ0FBQ0UsUUFBTCxDQUFjO0FBQUVELFVBQUksRUFBSkEsSUFBRjtBQUFRRSxjQUFRLEVBQUU7QUFBbEIsS0FBZCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM1QkQsS0FBQyxDQUFDRSxjQUFGOztBQUVBLFFBQUlWLFdBQVcsQ0FBQ1csT0FBaEIsRUFBeUI7QUFDdkIsVUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDakJkLFdBQVcsQ0FBQ1csT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FBbEMsSUFBeUNOLENBQUMsR0FBR2Qsc0VBQTdDLENBRGlCLENBQW5CO0FBSUFPLFlBQU0sQ0FBQ0YsV0FBVyxDQUFDVyxPQUFiLEVBQXNCQyxVQUF0QixDQUFOO0FBQ0Q7QUFDRixHQVZEOztBQVlBLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSWhCLFdBQVcsQ0FBQ1csT0FBaEIsRUFBeUI7QUFDdkIsVUFBTU0sS0FBSyxHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FDWGxCLFdBQVcsQ0FBQ1csT0FBWixDQUFvQkMsVUFBcEIsSUFDRVosV0FBVyxDQUFDVyxPQUFaLENBQW9CSSxXQUFwQixHQUFrQyxHQURwQyxDQUFELEdBRUVwQixzRUFIVSxDQUFkO0FBTUFJLG1CQUFhLENBQUNrQixLQUFELENBQWI7QUFDRDtBQUNGLEdBVkQsQ0FwQnNCLENBZ0N0QjtBQUNBOzs7QUFDQUUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QmxCLFlBQU0sQ0FBQ0YsV0FBVyxDQUFDVyxPQUFiLEVBQXNCLENBQXRCLENBQU47QUFDRCxLQUZEOztBQUdBLGNBQW1DO0FBQ2pDVSxZQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRixZQUFsQztBQUNEO0FBQ0YsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFDRSxXQUFLLEVBQUU7QUFBRUcsY0FBTSxFQUFFLE9BQVY7QUFBbUJDLGFBQUssRUFBRSxRQUExQjtBQUFvQ0MsY0FBTSxFQUFFO0FBQTVDLE9BRFQ7QUFFRSxRQUFFLEVBQUM7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRSw4REFBQyxnRUFBRDtBQUFtQixTQUFHLEVBQUV6QixXQUF4QjtBQUFxQyxjQUFRLEVBQUVnQixZQUEvQztBQUFBLDZCQUNFO0FBQUEsa0JBQ0dyQixtRUFBQSxDQUFrQixVQUFDK0IsSUFBRCxFQUFPVCxLQUFQO0FBQUEsOEJBQ2pCLDhEQUFDLHVFQUFEO0FBRUUscUJBQU9BLEtBQUssS0FBS3ZCLG9CQUFvQixHQUFHLENBRjFDO0FBQUEsbUNBSUUsOERBQUMsMkRBQUQ7QUFDRSxtQkFBSyxFQUFFdUIsS0FEVDtBQUVFLGdCQUFFLDJCQUFvQkEsS0FBcEIsQ0FGSjtBQUdFLG9CQUFNLEVBQUVuQixVQUhWO0FBSUUscUJBQU8sRUFBRSxpQkFBQ1UsQ0FBRDtBQUFBLHVCQUFPRCxXQUFXLENBQUNDLENBQUQsRUFBSVMsS0FBSixDQUFsQjtBQUFBLGVBSlg7QUFBQSxzQ0FNRSw4REFBQyxnRUFBRDtBQUFBLDJCQUNHUyxJQUFJLENBQUNDLEtBRFIsZUFFRSw4REFBQyw4REFBRDtBQUNFLHVCQUFLLEVBQUMsS0FEUjtBQUVFLHdCQUFNLEVBQUMsR0FGVDtBQUdFLHlCQUFPLEVBQUMsV0FIVjtBQUlFLHNCQUFJLEVBQUMsTUFKUDtBQUtFLHVCQUFLLEVBQUMsNEJBTFI7QUFBQSwwQ0FPRTtBQUNFLGlDQUFVLFNBRFo7QUFFRSxpQ0FBVSxTQUZaO0FBR0UscUJBQUMsRUFBQywySkFISjtBQUlFLHdCQUFJLEVBQUMscUJBSlA7QUFLRSxvQ0FBYTtBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEYsZUFjRTtBQUFBLDJDQUNFO0FBQ0Usd0JBQUUsRUFBQyxlQURMO0FBRUUsd0JBQUUsRUFBQyxjQUZMO0FBR0Usd0JBQUUsRUFBQyxLQUhMO0FBSUUsd0JBQUUsRUFBQyxLQUpMO0FBS0Usd0JBQUUsRUFBQyxVQUxMO0FBTUUsbUNBQWEsRUFBQyxnQkFOaEI7QUFBQSw4Q0FRRTtBQUFNLHNDQUFXO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUkYsZUFTRTtBQUNFLDhCQUFNLEVBQUMsU0FEVDtBQUVFLHNDQUFXLE9BRmI7QUFHRSx3Q0FBYTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GLGVBeUNFLDhEQUFDLCtEQUFEO0FBQUEsMEJBQW1CRCxJQUFJLENBQUNFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLGFBQ09YLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFsQjtBQURIO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBNkRFLDhEQUFDLDhEQUFEO0FBQUEsZ0JBQ0d0QixtRUFBQSxDQUFrQixVQUFDK0IsSUFBRCxFQUFPVCxLQUFQO0FBQUEsNEJBQ2pCLDhEQUFDLDZEQUFEO0FBRUUsZUFBSyxFQUFFQSxLQUZUO0FBR0UsZ0JBQU0sRUFBRW5CLFVBSFY7QUFJRSxpQkFBTyxFQUFFLGlCQUFDVSxDQUFEO0FBQUEsbUJBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJUyxLQUFKLENBQWxCO0FBQUEsV0FKWDtBQUtFLGNBQUksRUFBQyxRQUxQO0FBQUEsaUNBT0UsOERBQUMsZ0VBQUQ7QUFBbUIsa0JBQU0sRUFBRW5CO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixXQUNPbUIsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdERixlQTBFRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEVELENBekhEOztHQUFNckIsUzs7S0FBQUEsUztBQTJITiwrREFBZUEsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLEdBQUc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLDJCQUEyQjs7QUFFdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsb0JBQW9CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxvQkFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBMEMsR0FBRztBQUNuRDtBQUNBLElBQUksaUNBQW9CLEVBQUUsbUNBQUUsYUFBYSxtQkFBbUI7QUFBQSxrR0FBQztBQUM3RCxHQUFHLE1BQU0sRUFJTjtBQUNILENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjQ0NzlhZjcwMDQyYzNlM2ViZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdvcmRDbG91ZCBmcm9tIFwid29yZGNsb3VkXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENhcm91c2VsQnV0dG9uLFxyXG4gIENhcm91c2VsQnV0dG9uRG90LFxyXG4gIENhcm91c2VsQnV0dG9ucyxcclxuICBDYXJvdXNlbENvbnRhaW5lcixcclxuICBDYXJvdXNlbEl0ZW0sXHJcbiAgQ2Fyb3VzZWxJdGVtSW1nLFxyXG4gIENhcm91c2VsSXRlbVRleHQsXHJcbiAgQ2Fyb3VzZWxJdGVtVGl0bGUsXHJcbiAgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxyXG59IGZyb20gXCIuL0NvcmVWYWx1ZXNTdHlsZXNcIjtcclxuaW1wb3J0IHtcclxuICBTZWN0aW9uLFxyXG4gIFNlY3Rpb25EaXZpZGVyLFxyXG4gIFNlY3Rpb25UZXh0LFxyXG4gIFNlY3Rpb25UaXRsZSxcclxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ29yZVZhbHVlRGF0YSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IENvcmVWYWx1ZURhdGEubGVuZ3RoO1xyXG5cclxuY29uc3QgQ29yZVZhbHVlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XHJcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICBjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBDb3JlVmFsdWVEYXRhLmxlbmd0aClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoXHJcbiAgICAgICAgKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXHJcbiAgICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICpcclxuICAgICAgICAgIENvcmVWYWx1ZURhdGEubGVuZ3RoXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXHJcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcclxuICAgIH07XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cclxuICAgICAgPFNlY3Rpb25UaXRsZT5Db3JlIFZhbHVlczwvU2VjdGlvblRpdGxlPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjQwMHB4XCIsIHdpZHRoOiBcIjEwMDBweFwiLCBtYXJnaW46IFwiYXV0b1wiIH19XHJcbiAgICAgICAgaWQ9XCJ3b3JkY2xvdWQtY29udGFpbmVyXCJcclxuICAgICAgPjwvZGl2PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7Q29yZVZhbHVlRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVxyXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1JbWdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMDggNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjAuMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMjA4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCJ3aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMC43OTQ3OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1jb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLW9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbUltZz5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD57aXRlbS5kZXNjcmlwdGlvbn08L0Nhcm91c2VsSXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XHJcbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XHJcbiAgICAgICAge0NvcmVWYWx1ZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENhcm91c2VsQnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0gLz5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWxCdXR0b25zPlxyXG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29yZVZhbHVlO1xyXG4iLCIvKiFcbiAqIHdvcmRjbG91ZDIuanNcbiAqIGh0dHA6Ly90aW1kcmVhbS5vcmcvd29yZGNsb3VkMi5qcy9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSAtIDIwMTkgVGltIEd1YW4tdGluIENoaWVuIGFuZCBjb250cmlidXRvcnMuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLy8gc2V0SW1tZWRpYXRlXG5pZiAoIXdpbmRvdy5zZXRJbW1lZGlhdGUpIHtcbiAgd2luZG93LnNldEltbWVkaWF0ZSA9IChmdW5jdGlvbiBzZXR1cFNldEltbWVkaWF0ZSAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tc1NldEltbWVkaWF0ZSB8fFxuICAgIHdpbmRvdy53ZWJraXRTZXRJbW1lZGlhdGUgfHxcbiAgICB3aW5kb3cubW96U2V0SW1tZWRpYXRlIHx8XG4gICAgd2luZG93Lm9TZXRJbW1lZGlhdGUgfHxcbiAgICAoZnVuY3Rpb24gc2V0dXBTZXRaZXJvVGltZW91dCAoKSB7XG4gICAgICBpZiAoIXdpbmRvdy5wb3N0TWVzc2FnZSB8fCAhd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbGxiYWNrcyA9IFt1bmRlZmluZWRdXG4gICAgICB2YXIgbWVzc2FnZSA9ICd6ZXJvLXRpbWVvdXQtbWVzc2FnZSdcblxuICAgICAgLy8gTGlrZSBzZXRUaW1lb3V0LCBidXQgb25seSB0YWtlcyBhIGZ1bmN0aW9uIGFyZ3VtZW50LiAgVGhlcmUnc1xuICAgICAgLy8gbm8gdGltZSBhcmd1bWVudCAoYWx3YXlzIHplcm8pIGFuZCBubyBhcmd1bWVudHMgKHlvdSBoYXZlIHRvXG4gICAgICAvLyB1c2UgYSBjbG9zdXJlKS5cbiAgICAgIHZhciBzZXRaZXJvVGltZW91dCA9IGZ1bmN0aW9uIHNldFplcm9UaW1lb3V0IChjYWxsYmFjaykge1xuICAgICAgICB2YXIgaWQgPSBjYWxsYmFja3MubGVuZ3RoXG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSArIGlkLnRvU3RyaW5nKDM2KSwgJyonKVxuXG4gICAgICAgIHJldHVybiBpZFxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIHNldFplcm9UaW1lb3V0TWVzc2FnZSAoZXZ0KSB7XG4gICAgICAgIC8vIFNraXBwaW5nIGNoZWNraW5nIGV2ZW50IHNvdXJjZSwgcmV0YXJkZWQgSUUgY29uZnVzZWQgdGhpcyB3aW5kb3dcbiAgICAgICAgLy8gb2JqZWN0IHdpdGggYW5vdGhlciBpbiB0aGUgcHJlc2VuY2Ugb2YgaWZyYW1lXG4gICAgICAgIGlmICh0eXBlb2YgZXZ0LmRhdGEgIT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICBldnQuZGF0YS5zdWJzdHIoMCwgbWVzc2FnZS5sZW5ndGgpICE9PSBtZXNzYWdlLyogfHxcbiAgICAgICAgICAgIGV2dC5zb3VyY2UgIT09IHdpbmRvdyAqLykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgdmFyIGlkID0gcGFyc2VJbnQoZXZ0LmRhdGEuc3Vic3RyKG1lc3NhZ2UubGVuZ3RoKSwgMzYpXG4gICAgICAgIGlmICghY2FsbGJhY2tzW2lkXSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2tzW2lkXSgpXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSB1bmRlZmluZWRcbiAgICAgIH0sIHRydWUpXG5cbiAgICAgIC8qIHNwZWNpZnkgY2xlYXJJbW1lZGlhdGUoKSBoZXJlIHNpbmNlIHdlIG5lZWQgdGhlIHNjb3BlICovXG4gICAgICB3aW5kb3cuY2xlYXJJbW1lZGlhdGUgPSBmdW5jdGlvbiBjbGVhclplcm9UaW1lb3V0IChpZCkge1xuICAgICAgICBpZiAoIWNhbGxiYWNrc1tpZF0pIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNldFplcm9UaW1lb3V0XG4gICAgfSkoKSB8fFxuICAgIC8vIGZhbGxiYWNrXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlRmFsbGJhY2sgKGZuKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmbiwgMClcbiAgICB9XG4gIH0pKClcbn1cblxuaWYgKCF3aW5kb3cuY2xlYXJJbW1lZGlhdGUpIHtcbiAgd2luZG93LmNsZWFySW1tZWRpYXRlID0gKGZ1bmN0aW9uIHNldHVwQ2xlYXJJbW1lZGlhdGUgKCkge1xuICAgIHJldHVybiB3aW5kb3cubXNDbGVhckltbWVkaWF0ZSB8fFxuICAgIHdpbmRvdy53ZWJraXRDbGVhckltbWVkaWF0ZSB8fFxuICAgIHdpbmRvdy5tb3pDbGVhckltbWVkaWF0ZSB8fFxuICAgIHdpbmRvdy5vQ2xlYXJJbW1lZGlhdGUgfHxcbiAgICAvLyBcImNsZWFyWmVyb1RpbWVvdXRcIiBpcyBpbXBsZW1lbnQgb24gdGhlIHByZXZpb3VzIGJsb2NrIHx8XG4gICAgLy8gZmFsbGJhY2tcbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZUZhbGxiYWNrICh0aW1lcikge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcilcbiAgICB9XG4gIH0pKClcbn1cblxuKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgLy8gQ2hlY2sgaWYgV29yZENsb3VkIGNhbiBydW4gb24gdGhpcyBicm93c2VyXG4gIHZhciBpc1N1cHBvcnRlZCA9IChmdW5jdGlvbiBpc1N1cHBvcnRlZCAoKSB7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgaWYgKCFjYW52YXMgfHwgIWNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBpZiAoIWN0eCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghY3R4LmdldEltYWdlRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghY3R4LmZpbGxUZXh0KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LnByb3RvdHlwZS5zb21lKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKCFBcnJheS5wcm90b3R5cGUucHVzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSgpKVxuXG4gIC8vIEZpbmQgb3V0IGlmIHRoZSBicm93c2VyIGltcG9zZSBtaW5pdW0gZm9udCBzaXplIGJ5XG4gIC8vIGRyYXdpbmcgc21hbGwgdGV4dHMgb24gYSBjYW52YXMgYW5kIG1lYXN1cmUgaXQncyB3aWR0aC5cbiAgdmFyIG1pbkZvbnRTaXplID0gKGZ1bmN0aW9uIGdldE1pbkZvbnRTaXplICgpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgLy8gc3RhcnQgZnJvbSAyMFxuICAgIHZhciBzaXplID0gMjBcblxuICAgIC8vIHR3byBzaXplcyB0byBtZWFzdXJlXG4gICAgdmFyIGhhbldpZHRoLCBtV2lkdGhcblxuICAgIHdoaWxlIChzaXplKSB7XG4gICAgICBjdHguZm9udCA9IHNpemUudG9TdHJpbmcoMTApICsgJ3B4IHNhbnMtc2VyaWYnXG4gICAgICBpZiAoKGN0eC5tZWFzdXJlVGV4dCgnXFx1RkYzNycpLndpZHRoID09PSBoYW5XaWR0aCkgJiZcbiAgICAgICAgICAoY3R4Lm1lYXN1cmVUZXh0KCdtJykud2lkdGgpID09PSBtV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIChzaXplICsgMSlcbiAgICAgIH1cblxuICAgICAgaGFuV2lkdGggPSBjdHgubWVhc3VyZVRleHQoJ1xcdUZGMzcnKS53aWR0aFxuICAgICAgbVdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KCdtJykud2lkdGhcblxuICAgICAgc2l6ZS0tXG4gICAgfVxuXG4gICAgcmV0dXJuIDBcbiAgfSkoKVxuXG4gIHZhciBnZXRJdGVtRXh0cmFEYXRhID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgdmFyIGl0ZW1Db3B5ID0gaXRlbS5zbGljZSgpXG4gICAgICAvLyByZW1vdmUgZGF0YSB3ZSBhbHJlYWR5IGhhdmUgKHdvcmQgYW5kIHdlaWdodClcbiAgICAgIGl0ZW1Db3B5LnNwbGljZSgwLCAyKVxuICAgICAgcmV0dXJuIGl0ZW1Db3B5XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgfVxuXG4gIC8vIEJhc2VkIG9uIGh0dHA6Ly9qc2Zyb21oZWxsLmNvbS9hcnJheS9zaHVmZmxlXG4gIHZhciBzaHVmZmxlQXJyYXkgPSBmdW5jdGlvbiBzaHVmZmxlQXJyYXkgKGFycikge1xuICAgIGZvciAodmFyIGosIHgsIGkgPSBhcnIubGVuZ3RoOyBpOykge1xuICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpXG4gICAgICB4ID0gYXJyWy0taV1cbiAgICAgIGFycltpXSA9IGFycltqXVxuICAgICAgYXJyW2pdID0geFxuICAgIH1cbiAgICByZXR1cm4gYXJyXG4gIH1cblxuICB2YXIgdGltZXIgPSB7fTtcbiAgdmFyIFdvcmRDbG91ZCA9IGZ1bmN0aW9uIFdvcmRDbG91ZCAoZWxlbWVudHMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgdGltZXJJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIERhdGUubm93KCkpXG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICBlbGVtZW50cyA9IFtlbGVtZW50c11cbiAgICB9XG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHNbaV0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbClcbiAgICAgICAgaWYgKCFlbGVtZW50c1tpXSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGVsZW1lbnQgaWQgc3BlY2lmaWVkIGlzIG5vdCBmb3VuZC4nKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFlbC50YWdOYW1lICYmICFlbC5hcHBlbmRDaGlsZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHBhc3MgdmFsaWQgSFRNTCBlbGVtZW50cywgb3IgSUQgb2YgdGhlIGVsZW1lbnQuJylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLyogRGVmYXVsdCB2YWx1ZXMgdG8gYmUgb3ZlcndyaXR0ZW4gYnkgb3B0aW9ucyBvYmplY3QgKi9cbiAgICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGZvbnRGYW1pbHk6ICdcIlRyZWJ1Y2hldCBNU1wiLCBcIkhlaXRpIFRDXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsICcgK1xuICAgICAgICAgICAgICAgICAgJ1wiQXJpYWwgVW5pY29kZSBNU1wiLCBcIkRyb2lkIEZhbGxiYWNrIFNhbnNcIiwgc2Fucy1zZXJpZicsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIGNvbG9yOiAncmFuZG9tLWRhcmsnLFxuICAgICAgbWluU2l6ZTogMCwgLy8gMCB0byBkaXNhYmxlXG4gICAgICB3ZWlnaHRGYWN0b3I6IDEsXG4gICAgICBjbGVhckNhbnZhczogdHJ1ZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCAvLyBvcGFxdWUgd2hpdGUgPSByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXG5cbiAgICAgIGdyaWRTaXplOiA4LFxuICAgICAgZHJhd091dE9mQm91bmQ6IGZhbHNlLFxuICAgICAgc2hyaW5rVG9GaXQ6IGZhbHNlLFxuICAgICAgb3JpZ2luOiBudWxsLFxuXG4gICAgICBkcmF3TWFzazogZmFsc2UsXG4gICAgICBtYXNrQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMC4zKScsXG4gICAgICBtYXNrR2FwV2lkdGg6IDAuMyxcblxuICAgICAgd2FpdDogMCxcbiAgICAgIGFib3J0VGhyZXNob2xkOiAwLCAvLyBkaXNhYmxlZFxuICAgICAgYWJvcnQ6IGZ1bmN0aW9uIG5vb3AgKCkge30sXG5cbiAgICAgIG1pblJvdGF0aW9uOiAtTWF0aC5QSSAvIDIsXG4gICAgICBtYXhSb3RhdGlvbjogTWF0aC5QSSAvIDIsXG4gICAgICByb3RhdGlvblN0ZXBzOiAwLFxuXG4gICAgICBzaHVmZmxlOiB0cnVlLFxuICAgICAgcm90YXRlUmF0aW86IDAuMSxcblxuICAgICAgc2hhcGU6ICdjaXJjbGUnLFxuICAgICAgZWxsaXB0aWNpdHk6IDAuNjUsXG5cbiAgICAgIGNsYXNzZXM6IG51bGwsXG5cbiAgICAgIGhvdmVyOiBudWxsLFxuICAgICAgY2xpY2s6IG51bGxcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGtleSBpbiBzZXR0aW5ncykge1xuICAgICAgICAgIHNldHRpbmdzW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIENvbnZlcnQgd2VpZ2h0RmFjdG9yIGludG8gYSBmdW5jdGlvbiAqL1xuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3Mud2VpZ2h0RmFjdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgZmFjdG9yID0gc2V0dGluZ3Mud2VpZ2h0RmFjdG9yXG4gICAgICBzZXR0aW5ncy53ZWlnaHRGYWN0b3IgPSBmdW5jdGlvbiB3ZWlnaHRGYWN0b3IgKHB0KSB7XG4gICAgICAgIHJldHVybiBwdCAqIGZhY3RvciAvLyBpbiBweFxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIENvbnZlcnQgc2hhcGUgaW50byBhIGZ1bmN0aW9uICovXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5zaGFwZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3dpdGNoIChzZXR0aW5ncy5zaGFwZSkge1xuICAgICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gJ2NpcmNsZScgaXMgdGhlIGRlZmF1bHQgYW5kIGEgc2hvcnRjdXQgaW4gdGhlIGNvZGUgbG9vcC5cbiAgICAgICAgICBzZXR0aW5ncy5zaGFwZSA9ICdjaXJjbGUnXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdjYXJkaW9pZCc6XG4gICAgICAgICAgc2V0dGluZ3Muc2hhcGUgPSBmdW5jdGlvbiBzaGFwZUNhcmRpb2lkICh0aGV0YSkge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbih0aGV0YSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgVG8gd29yayBvdXQgYW4gWC1nb24sIG9uZSBoYXMgdG8gY2FsY3VsYXRlIFwibVwiLFxuICAgICAgICAgIHdoZXJlIDEvKGNvcygyKlBJL1gpK20qc2luKDIqUEkvWCkpID0gMS8oY29zKDApK20qc2luKDApKVxuICAgICAgICAgIGh0dHA6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT0xJTJGJTI4Y29zJTI4MipQSSUyRlglMjklMkJtKnNpbiUyOFxuICAgICAgICAgIDIqUEklMkZYJTI5JTI5KyUzRCsxJTJGJTI4Y29zJTI4MCUyOSUyQm0qc2luJTI4MCUyOSUyOVxuICAgICAgICAgIENvcHkgdGhlIHNvbHV0aW9uIGludG8gcG9sYXIgZXF1YXRpb24gciA9IDEvKGNvcyh0JykgKyBtKnNpbih0JykpXG4gICAgICAgICAgd2hlcmUgdCcgZXF1YWxzIHRvIG1vZCh0LCAyUEkvWClcbiAgICAgICAgICovXG5cbiAgICAgICAgY2FzZSAnZGlhbW9uZCc6XG4gICAgICAgICAgLy8gaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXBsb3QrcislM0QrMSUyRiUyOGNvcyUyOG1vZCtcbiAgICAgICAgICAvLyAlMjh0JTJDK1BJJTJGMiUyOSUyOSUyQnNpbiUyOG1vZCslMjh0JTJDK1BJJTJGMiUyOSUyOSUyOSUyQyt0KyUzRFxuICAgICAgICAgIC8vICswKy4uKzIqUElcbiAgICAgICAgICBzZXR0aW5ncy5zaGFwZSA9IGZ1bmN0aW9uIHNoYXBlU3F1YXJlICh0aGV0YSkge1xuICAgICAgICAgICAgdmFyIHRoZXRhUHJpbWUgPSB0aGV0YSAlICgyICogTWF0aC5QSSAvIDQpXG4gICAgICAgICAgICByZXR1cm4gMSAvIChNYXRoLmNvcyh0aGV0YVByaW1lKSArIE1hdGguc2luKHRoZXRhUHJpbWUpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICAgICAgLy8gaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXBsb3QrcislM0QrbWluKDElMkZhYnMoY29zKHRcbiAgICAgICAgICAvLyApKSwxJTJGYWJzKHNpbih0KSkpKSwrdCslM0QrMCsuLisyKlBJXG4gICAgICAgICAgc2V0dGluZ3Muc2hhcGUgPSBmdW5jdGlvbiBzaGFwZVNxdWFyZSAodGhldGEpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihcbiAgICAgICAgICAgICAgMSAvIE1hdGguYWJzKE1hdGguY29zKHRoZXRhKSksXG4gICAgICAgICAgICAgIDEgLyBNYXRoLmFicyhNYXRoLnNpbih0aGV0YSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAndHJpYW5nbGUtZm9yd2FyZCc6XG4gICAgICAgICAgLy8gaHR0cDovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0Lz9pPXBsb3QrcislM0QrMSUyRiUyOGNvcyUyOG1vZCtcbiAgICAgICAgICAvLyAlMjh0JTJDKzIqUEklMkYzJTI5JTI5JTJCc3FydCUyODMlMjlzaW4lMjhtb2QrJTI4dCUyQysyKlBJJTJGMyUyOVxuICAgICAgICAgIC8vICUyOSUyOSUyQyt0KyUzRCswKy4uKzIqUElcbiAgICAgICAgICBzZXR0aW5ncy5zaGFwZSA9IGZ1bmN0aW9uIHNoYXBlVHJpYW5nbGUgKHRoZXRhKSB7XG4gICAgICAgICAgICB2YXIgdGhldGFQcmltZSA9IHRoZXRhICUgKDIgKiBNYXRoLlBJIC8gMylcbiAgICAgICAgICAgIHJldHVybiAxIC8gKE1hdGguY29zKHRoZXRhUHJpbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguc3FydCgzKSAqIE1hdGguc2luKHRoZXRhUHJpbWUpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgICAgY2FzZSAndHJpYW5nbGUtdXByaWdodCc6XG4gICAgICAgICAgc2V0dGluZ3Muc2hhcGUgPSBmdW5jdGlvbiBzaGFwZVRyaWFuZ2xlICh0aGV0YSkge1xuICAgICAgICAgICAgdmFyIHRoZXRhUHJpbWUgPSAodGhldGEgKyBNYXRoLlBJICogMyAvIDIpICUgKDIgKiBNYXRoLlBJIC8gMylcbiAgICAgICAgICAgIHJldHVybiAxIC8gKE1hdGguY29zKHRoZXRhUHJpbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguc3FydCgzKSAqIE1hdGguc2luKHRoZXRhUHJpbWUpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3BlbnRhZ29uJzpcbiAgICAgICAgICBzZXR0aW5ncy5zaGFwZSA9IGZ1bmN0aW9uIHNoYXBlUGVudGFnb24gKHRoZXRhKSB7XG4gICAgICAgICAgICB2YXIgdGhldGFQcmltZSA9ICh0aGV0YSArIDAuOTU1KSAlICgyICogTWF0aC5QSSAvIDUpXG4gICAgICAgICAgICByZXR1cm4gMSAvIChNYXRoLmNvcyh0aGV0YVByaW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjcyNjU0MyAqIE1hdGguc2luKHRoZXRhUHJpbWUpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgJ3N0YXInOlxuICAgICAgICAgIHNldHRpbmdzLnNoYXBlID0gZnVuY3Rpb24gc2hhcGVTdGFyICh0aGV0YSkge1xuICAgICAgICAgICAgdmFyIHRoZXRhUHJpbWUgPSAodGhldGEgKyAwLjk1NSkgJSAoMiAqIE1hdGguUEkgLyAxMClcbiAgICAgICAgICAgIGlmICgodGhldGEgKyAwLjk1NSkgJSAoMiAqIE1hdGguUEkgLyA1KSAtICgyICogTWF0aC5QSSAvIDEwKSA+PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxIC8gKE1hdGguY29zKCgyICogTWF0aC5QSSAvIDEwKSAtIHRoZXRhUHJpbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMy4wNzc2OCAqIE1hdGguc2luKCgyICogTWF0aC5QSSAvIDEwKSAtIHRoZXRhUHJpbWUpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDEgLyAoTWF0aC5jb3ModGhldGFQcmltZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAzLjA3NzY4ICogTWF0aC5zaW4odGhldGFQcmltZSkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogTWFrZSBzdXJlIGdyaWRTaXplIGlzIGEgd2hvbGUgbnVtYmVyIGFuZCBpcyBub3Qgc21hbGxlciB0aGFuIDRweCAqL1xuICAgIHNldHRpbmdzLmdyaWRTaXplID0gTWF0aC5tYXgoTWF0aC5mbG9vcihzZXR0aW5ncy5ncmlkU2l6ZSksIDQpXG5cbiAgICAvKiBzaG9ydGhhbmQgKi9cbiAgICB2YXIgZyA9IHNldHRpbmdzLmdyaWRTaXplXG4gICAgdmFyIG1hc2tSZWN0V2lkdGggPSBnIC0gc2V0dGluZ3MubWFza0dhcFdpZHRoXG5cbiAgICAvKiBub3JtYWxpemUgcm90YXRpb24gc2V0dGluZ3MgKi9cbiAgICB2YXIgcm90YXRpb25SYW5nZSA9IE1hdGguYWJzKHNldHRpbmdzLm1heFJvdGF0aW9uIC0gc2V0dGluZ3MubWluUm90YXRpb24pXG4gICAgdmFyIHJvdGF0aW9uU3RlcHMgPSBNYXRoLmFicyhNYXRoLmZsb29yKHNldHRpbmdzLnJvdGF0aW9uU3RlcHMpKVxuICAgIHZhciBtaW5Sb3RhdGlvbiA9IE1hdGgubWluKHNldHRpbmdzLm1heFJvdGF0aW9uLCBzZXR0aW5ncy5taW5Sb3RhdGlvbilcblxuICAgIC8qIGluZm9ybWF0aW9uL29iamVjdCBhdmFpbGFibGUgdG8gYWxsIGZ1bmN0aW9ucywgc2V0IHdoZW4gc3RhcnQoKSAqL1xuICAgIHZhciBncmlkLCAvLyAyZCBhcnJheSBjb250YWluaW5nIGZpbGxpbmcgaW5mb3JtYXRpb25cbiAgICAgIG5neCwgbmd5LCAvLyB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBncmlkXG4gICAgICBjZW50ZXIsIC8vIHBvc2l0aW9uIG9mIHRoZSBjZW50ZXIgb2YgdGhlIGNsb3VkXG4gICAgICBtYXhSYWRpdXNcblxuICAgIC8qIHRpbWVzdGFtcCBmb3IgbWVhc3VyaW5nIGVhY2ggcHV0V29yZCgpIGFjdGlvbiAqL1xuICAgIHZhciBlc2NhcGVUaW1lXG5cbiAgICAvKiBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgY29sb3Igb2YgdGhlIHRleHQgKi9cbiAgICB2YXIgZ2V0VGV4dENvbG9yXG4gICAgZnVuY3Rpb24gcmFuZG9tSHNsQ29sb3IgKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gJ2hzbCgnICtcbiAgICAgICAgKE1hdGgucmFuZG9tKCkgKiAzNjApLnRvRml4ZWQoKSArICcsJyArXG4gICAgICAgIChNYXRoLnJhbmRvbSgpICogMzAgKyA3MCkudG9GaXhlZCgpICsgJyUsJyArXG4gICAgICAgIChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pLnRvRml4ZWQoKSArICclKSdcbiAgICB9XG4gICAgc3dpdGNoIChzZXR0aW5ncy5jb2xvcikge1xuICAgICAgY2FzZSAncmFuZG9tLWRhcmsnOlxuICAgICAgICBnZXRUZXh0Q29sb3IgPSBmdW5jdGlvbiBnZXRSYW5kb21EYXJrQ29sb3IgKCkge1xuICAgICAgICAgIHJldHVybiByYW5kb21Ic2xDb2xvcigxMCwgNTApXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAncmFuZG9tLWxpZ2h0JzpcbiAgICAgICAgZ2V0VGV4dENvbG9yID0gZnVuY3Rpb24gZ2V0UmFuZG9tTGlnaHRDb2xvciAoKSB7XG4gICAgICAgICAgcmV0dXJuIHJhbmRvbUhzbENvbG9yKDUwLCA5MClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLmNvbG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0VGV4dENvbG9yID0gc2V0dGluZ3MuY29sb3JcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIC8qIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHRoZSBmb250LXdlaWdodCBvZiB0aGUgdGV4dCAqL1xuICAgIHZhciBnZXRUZXh0Rm9udFdlaWdodFxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MuZm9udFdlaWdodCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZ2V0VGV4dEZvbnRXZWlnaHQgPSBzZXR0aW5ncy5mb250V2VpZ2h0XG4gICAgfVxuXG4gICAgLyogZnVuY3Rpb24gZm9yIGdldHRpbmcgdGhlIGNsYXNzZXMgb2YgdGhlIHRleHQgKi9cbiAgICB2YXIgZ2V0VGV4dENsYXNzZXMgPSBudWxsXG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5jbGFzc2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBnZXRUZXh0Q2xhc3NlcyA9IHNldHRpbmdzLmNsYXNzZXNcbiAgICB9XG5cbiAgICAvKiBJbnRlcmFjdGl2ZSAqL1xuICAgIHZhciBpbnRlcmFjdGl2ZSA9IGZhbHNlXG4gICAgdmFyIGluZm9HcmlkID0gW11cbiAgICB2YXIgaG92ZXJlZFxuXG4gICAgdmFyIGdldEluZm9HcmlkRnJvbU1vdXNlVG91Y2hFdmVudCA9XG4gICAgZnVuY3Rpb24gZ2V0SW5mb0dyaWRGcm9tTW91c2VUb3VjaEV2ZW50IChldnQpIHtcbiAgICAgIHZhciBjYW52YXMgPSBldnQuY3VycmVudFRhcmdldFxuICAgICAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHZhciBjbGllbnRYXG4gICAgICB2YXIgY2xpZW50WVxuICAgICAgLyoqIERldGVjdCBpZiB0b3VjaGVzIGFyZSBhdmFpbGFibGUgKi9cbiAgICAgIGlmIChldnQudG91Y2hlcykge1xuICAgICAgICBjbGllbnRYID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICBjbGllbnRZID0gZXZ0LnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xpZW50WCA9IGV2dC5jbGllbnRYXG4gICAgICAgIGNsaWVudFkgPSBldnQuY2xpZW50WVxuICAgICAgfVxuICAgICAgdmFyIGV2ZW50WCA9IGNsaWVudFggLSByZWN0LmxlZnRcbiAgICAgIHZhciBldmVudFkgPSBjbGllbnRZIC0gcmVjdC50b3BcblxuICAgICAgdmFyIHggPSBNYXRoLmZsb29yKGV2ZW50WCAqICgoY2FudmFzLndpZHRoIC8gcmVjdC53aWR0aCkgfHwgMSkgLyBnKVxuICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKGV2ZW50WSAqICgoY2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0KSB8fCAxKSAvIGcpXG5cbiAgICAgIHJldHVybiBpbmZvR3JpZFt4XVt5XVxuICAgIH1cblxuICAgIHZhciB3b3JkY2xvdWRob3ZlciA9IGZ1bmN0aW9uIHdvcmRjbG91ZGhvdmVyIChldnQpIHtcbiAgICAgIHZhciBpbmZvID0gZ2V0SW5mb0dyaWRGcm9tTW91c2VUb3VjaEV2ZW50KGV2dClcblxuICAgICAgaWYgKGhvdmVyZWQgPT09IGluZm8pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGhvdmVyZWQgPSBpbmZvXG4gICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgc2V0dGluZ3MuaG92ZXIodW5kZWZpbmVkLCB1bmRlZmluZWQsIGV2dClcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0dGluZ3MuaG92ZXIoaW5mby5pdGVtLCBpbmZvLmRpbWVuc2lvbiwgZXZ0KVxuICAgIH1cblxuICAgIHZhciB3b3JkY2xvdWRjbGljayA9IGZ1bmN0aW9uIHdvcmRjbG91ZGNsaWNrIChldnQpIHtcbiAgICAgIHZhciBpbmZvID0gZ2V0SW5mb0dyaWRGcm9tTW91c2VUb3VjaEV2ZW50KGV2dClcbiAgICAgIGlmICghaW5mbykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0dGluZ3MuY2xpY2soaW5mby5pdGVtLCBpbmZvLmRpbWVuc2lvbiwgZXZ0KVxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICAvKiBHZXQgcG9pbnRzIG9uIHRoZSBncmlkIGZvciBhIGdpdmVuIHJhZGl1cyBhd2F5IGZyb20gdGhlIGNlbnRlciAqL1xuICAgIHZhciBwb2ludHNBdFJhZGl1cyA9IFtdXG4gICAgdmFyIGdldFBvaW50c0F0UmFkaXVzID0gZnVuY3Rpb24gZ2V0UG9pbnRzQXRSYWRpdXMgKHJhZGl1cykge1xuICAgICAgaWYgKHBvaW50c0F0UmFkaXVzW3JhZGl1c10pIHtcbiAgICAgICAgcmV0dXJuIHBvaW50c0F0UmFkaXVzW3JhZGl1c11cbiAgICAgIH1cblxuICAgICAgLy8gTG9vayBmb3IgdGhlc2UgbnVtYmVyIG9mIHBvaW50cyBvbiBlYWNoIHJhZGl1c1xuICAgICAgdmFyIFQgPSByYWRpdXMgKiA4XG5cbiAgICAgIC8vIEdldHRpbmcgYWxsIHRoZSBwb2ludHMgYXQgdGhpcyByYWRpdXNcbiAgICAgIHZhciB0ID0gVFxuICAgICAgdmFyIHBvaW50cyA9IFtdXG5cbiAgICAgIGlmIChyYWRpdXMgPT09IDApIHtcbiAgICAgICAgcG9pbnRzLnB1c2goW2NlbnRlclswXSwgY2VudGVyWzFdLCAwXSlcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHQtLSkge1xuICAgICAgICAvLyBkaXN0b3J0IHRoZSByYWRpdXMgdG8gcHV0IHRoZSBjbG91ZCBpbiBzaGFwZVxuICAgICAgICB2YXIgcnggPSAxXG4gICAgICAgIGlmIChzZXR0aW5ncy5zaGFwZSAhPT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICByeCA9IHNldHRpbmdzLnNoYXBlKHQgLyBUICogMiAqIE1hdGguUEkpIC8vIDAgdG8gMVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVzaCBbeCwgeSwgdF0gdCBpcyB1c2VkIHNvbGVseSBmb3IgZ2V0VGV4dENvbG9yKClcbiAgICAgICAgcG9pbnRzLnB1c2goW1xuICAgICAgICAgIGNlbnRlclswXSArIHJhZGl1cyAqIHJ4ICogTWF0aC5jb3MoLXQgLyBUICogMiAqIE1hdGguUEkpLFxuICAgICAgICAgIGNlbnRlclsxXSArIHJhZGl1cyAqIHJ4ICogTWF0aC5zaW4oLXQgLyBUICogMiAqIE1hdGguUEkpICpcbiAgICAgICAgICAgIHNldHRpbmdzLmVsbGlwdGljaXR5LFxuICAgICAgICAgIHQgLyBUICogMiAqIE1hdGguUEldKVxuICAgICAgfVxuXG4gICAgICBwb2ludHNBdFJhZGl1c1tyYWRpdXNdID0gcG9pbnRzXG4gICAgICByZXR1cm4gcG9pbnRzXG4gICAgfVxuXG4gICAgLyogUmV0dXJuIHRydWUgaWYgd2UgaGFkIHNwZW50IHRvbyBtdWNoIHRpbWUgKi9cbiAgICB2YXIgZXhjZWVkVGltZSA9IGZ1bmN0aW9uIGV4Y2VlZFRpbWUgKCkge1xuICAgICAgcmV0dXJuICgoc2V0dGluZ3MuYWJvcnRUaHJlc2hvbGQgPiAwKSAmJlxuICAgICAgICAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIGVzY2FwZVRpbWUgPiBzZXR0aW5ncy5hYm9ydFRocmVzaG9sZCkpXG4gICAgfVxuXG4gICAgLyogR2V0IHRoZSBkZWcgb2Ygcm90YXRpb24gYWNjb3JkaW5nIHRvIHNldHRpbmdzLCBhbmQgbHVjay4gKi9cbiAgICB2YXIgZ2V0Um90YXRlRGVnID0gZnVuY3Rpb24gZ2V0Um90YXRlRGVnICgpIHtcbiAgICAgIGlmIChzZXR0aW5ncy5yb3RhdGVSYXRpbyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IHNldHRpbmdzLnJvdGF0ZVJhdGlvKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG5cbiAgICAgIGlmIChyb3RhdGlvblJhbmdlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBtaW5Sb3RhdGlvblxuICAgICAgfVxuXG4gICAgICBpZiAocm90YXRpb25TdGVwcyA+IDApIHtcbiAgICAgICAgLy8gTWluIHJvdGF0aW9uICsgemVybyBvciBtb3JlIHN0ZXBzICogc3BhbiBvZiBvbmUgc3RlcFxuICAgICAgICByZXR1cm4gbWluUm90YXRpb24gK1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvdGF0aW9uU3RlcHMpICpcbiAgICAgICAgICByb3RhdGlvblJhbmdlIC8gKHJvdGF0aW9uU3RlcHMgLSAxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1pblJvdGF0aW9uICsgTWF0aC5yYW5kb20oKSAqIHJvdGF0aW9uUmFuZ2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ2V0VGV4dEluZm8gPSBmdW5jdGlvbiBnZXRUZXh0SW5mbyAod29yZCwgd2VpZ2h0LCByb3RhdGVEZWcsIGV4dHJhRGF0YUFycmF5KSB7XG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIGFjdXRhbCBmb250IHNpemVcbiAgICAgIC8vIGZvbnRTaXplID09PSAwIG1lYW5zIHdlaWdodEZhY3RvciBmdW5jdGlvbiB3YW50cyB0aGUgdGV4dCBza2lwcGVkLFxuICAgICAgLy8gYW5kIHNpemUgPCBtaW5TaXplIG1lYW5zIHdlIGNhbm5vdCBkcmF3IHRoZSB0ZXh0LlxuICAgICAgdmFyIGRlYnVnID0gZmFsc2VcbiAgICAgIHZhciBmb250U2l6ZSA9IHNldHRpbmdzLndlaWdodEZhY3Rvcih3ZWlnaHQpXG4gICAgICBpZiAoZm9udFNpemUgPD0gc2V0dGluZ3MubWluU2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgLy8gU2NhbGUgZmFjdG9yIGhlcmUgaXMgdG8gbWFrZSBzdXJlIGZpbGxUZXh0IGlzIG5vdCBsaW1pdGVkIGJ5XG4gICAgICAvLyB0aGUgbWluaXVtIGZvbnQgc2l6ZSBzZXQgYnkgYnJvd3Nlci5cbiAgICAgIC8vIEl0IHdpbGwgYWx3YXlzIGJlIDEgb3IgMm4uXG4gICAgICB2YXIgbXUgPSAxXG4gICAgICBpZiAoZm9udFNpemUgPCBtaW5Gb250U2l6ZSkge1xuICAgICAgICBtdSA9IChmdW5jdGlvbiBjYWxjdWxhdGVTY2FsZUZhY3RvciAoKSB7XG4gICAgICAgICAgdmFyIG11ID0gMlxuICAgICAgICAgIHdoaWxlIChtdSAqIGZvbnRTaXplIDwgbWluRm9udFNpemUpIHtcbiAgICAgICAgICAgIG11ICs9IDJcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG11XG4gICAgICAgIH0pKClcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGZvbnRXZWlnaHQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gc2V0IGZjdHguZm9udFxuICAgICAgdmFyIGZvbnRXZWlnaHRcbiAgICAgIGlmIChnZXRUZXh0Rm9udFdlaWdodCkge1xuICAgICAgICBmb250V2VpZ2h0ID0gZ2V0VGV4dEZvbnRXZWlnaHQod29yZCwgd2VpZ2h0LCBmb250U2l6ZSwgZXh0cmFEYXRhQXJyYXkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb250V2VpZ2h0ID0gc2V0dGluZ3MuZm9udFdlaWdodFxuICAgICAgfVxuXG4gICAgICB2YXIgZmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB2YXIgZmN0eCA9IGZjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KVxuXG4gICAgICBmY3R4LmZvbnQgPSBmb250V2VpZ2h0ICsgJyAnICtcbiAgICAgICAgKGZvbnRTaXplICogbXUpLnRvU3RyaW5nKDEwKSArICdweCAnICsgc2V0dGluZ3MuZm9udEZhbWlseVxuXG4gICAgICAvLyBFc3RpbWF0ZSB0aGUgZGltZW5zaW9uIG9mIHRoZSB0ZXh0IHdpdGggbWVhc3VyZVRleHQoKS5cbiAgICAgIHZhciBmdyA9IGZjdHgubWVhc3VyZVRleHQod29yZCkud2lkdGggLyBtdVxuICAgICAgdmFyIGZoID0gTWF0aC5tYXgoZm9udFNpemUgKiBtdSxcbiAgICAgICAgZmN0eC5tZWFzdXJlVGV4dCgnbScpLndpZHRoLFxuICAgICAgICBmY3R4Lm1lYXN1cmVUZXh0KCdcXHVGRjM3Jykud2lkdGhcbiAgICAgICkgLyBtdVxuXG4gICAgICAvLyBDcmVhdGUgYSBib3VuZGFyeSBib3ggdGhhdCBpcyBsYXJnZXIgdGhhbiBvdXIgZXN0aW1hdGVzLFxuICAgICAgLy8gc28gdGV4dCBkb24ndCBnZXQgY3V0IG9mIChpdCBzaWxsIG1pZ2h0KVxuICAgICAgdmFyIGJveFdpZHRoID0gZncgKyBmaCAqIDJcbiAgICAgIHZhciBib3hIZWlnaHQgPSBmaCAqIDNcbiAgICAgIHZhciBmZ3cgPSBNYXRoLmNlaWwoYm94V2lkdGggLyBnKVxuICAgICAgdmFyIGZnaCA9IE1hdGguY2VpbChib3hIZWlnaHQgLyBnKVxuICAgICAgYm94V2lkdGggPSBmZ3cgKiBnXG4gICAgICBib3hIZWlnaHQgPSBmZ2ggKiBnXG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcHJvcGVyIG9mZnNldHMgdG8gbWFrZSB0aGUgdGV4dCBjZW50ZXJlZCBhdFxuICAgICAgLy8gdGhlIHByZWZlcnJlZCBwb3NpdGlvbi5cblxuICAgICAgLy8gVGhpcyBpcyBzaW1wbHkgaGFsZiBvZiB0aGUgd2lkdGguXG4gICAgICB2YXIgZmlsbFRleHRPZmZzZXRYID0gLWZ3IC8gMlxuICAgICAgLy8gSW5zdGVhZCBvZiBtb3ZpbmcgdGhlIGJveCB0byB0aGUgZXhhY3QgbWlkZGxlIG9mIHRoZSBwcmVmZXJyZWRcbiAgICAgIC8vIHBvc2l0aW9uLCBmb3IgWS1vZmZzZXQgd2UgbW92ZSAwLjQgaW5zdGVhZCwgc28gTGF0aW4gYWxwaGFiZXRzIGxvb2tcbiAgICAgIC8vIHZlcnRpY2FsIGNlbnRlcmVkLlxuICAgICAgdmFyIGZpbGxUZXh0T2Zmc2V0WSA9IC1maCAqIDAuNFxuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGFjdHVhbCBkaW1lbnNpb24gb2YgdGhlIGNhbnZhcywgY29uc2lkZXJpbmcgdGhlIHJvdGF0aW9uLlxuICAgICAgdmFyIGNnaCA9IE1hdGguY2VpbCgoYm94V2lkdGggKiBNYXRoLmFicyhNYXRoLnNpbihyb3RhdGVEZWcpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBib3hIZWlnaHQgKiBNYXRoLmFicyhNYXRoLmNvcyhyb3RhdGVEZWcpKSkgLyBnKVxuICAgICAgdmFyIGNndyA9IE1hdGguY2VpbCgoYm94V2lkdGggKiBNYXRoLmFicyhNYXRoLmNvcyhyb3RhdGVEZWcpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBib3hIZWlnaHQgKiBNYXRoLmFicyhNYXRoLnNpbihyb3RhdGVEZWcpKSkgLyBnKVxuICAgICAgdmFyIHdpZHRoID0gY2d3ICogZ1xuICAgICAgdmFyIGhlaWdodCA9IGNnaCAqIGdcblxuICAgICAgZmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpXG4gICAgICBmY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KVxuXG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgLy8gQXR0YWNoIGZjYW52YXMgdG8gdGhlIERPTVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZjYW52YXMpXG4gICAgICAgIC8vIFNhdmUgaXQncyBzdGF0ZSBzbyB0aGF0IHdlIGNvdWxkIHJlc3RvcmUgYW5kIGRyYXcgdGhlIGdyaWQgY29ycmVjdGx5LlxuICAgICAgICBmY3R4LnNhdmUoKVxuICAgICAgfVxuXG4gICAgICAvLyBTY2FsZSB0aGUgY2FudmFzIHdpdGggfG11fC5cbiAgICAgIGZjdHguc2NhbGUoMSAvIG11LCAxIC8gbXUpXG4gICAgICBmY3R4LnRyYW5zbGF0ZSh3aWR0aCAqIG11IC8gMiwgaGVpZ2h0ICogbXUgLyAyKVxuICAgICAgZmN0eC5yb3RhdGUoLXJvdGF0ZURlZylcblxuICAgICAgLy8gT25jZSB0aGUgd2lkdGgvaGVpZ2h0IGlzIHNldCwgY3R4IGluZm8gd2lsbCBiZSByZXNldC5cbiAgICAgIC8vIFNldCBpdCBhZ2FpbiBoZXJlLlxuICAgICAgZmN0eC5mb250ID0gZm9udFdlaWdodCArICcgJyArXG4gICAgICAgIChmb250U2l6ZSAqIG11KS50b1N0cmluZygxMCkgKyAncHggJyArIHNldHRpbmdzLmZvbnRGYW1pbHlcblxuICAgICAgLy8gRmlsbCB0aGUgdGV4dCBpbnRvIHRoZSBmY2FudmFzLlxuICAgICAgLy8gWFhYOiBXZSBjYW5ub3QgYmVjYXVzZSB0ZXh0QmFzZWxpbmUgPSAndG9wJyBoZXJlIGJlY2F1c2VcbiAgICAgIC8vIEZpcmVmb3ggYW5kIENocm9tZSB1c2VzIGRpZmZlcmVudCBkZWZhdWx0IGxpbmUtaGVpZ2h0IGZvciBjYW52YXMuXG4gICAgICAvLyBQbGVhc2UgcmVhZCBodHRwczovL2J1Z3ppbC5sYS83Mzc4NTIjYzYuXG4gICAgICAvLyBIZXJlLCB3ZSB1c2UgdGV4dEJhc2VsaW5lID0gJ21pZGRsZScgYW5kIGRyYXcgdGhlIHRleHQgYXQgZXhhY3RseVxuICAgICAgLy8gMC41ICogZm9udFNpemUgbG93ZXIuXG4gICAgICBmY3R4LmZpbGxTdHlsZSA9ICcjMDAwJ1xuICAgICAgZmN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJ1xuICAgICAgZmN0eC5maWxsVGV4dChcbiAgICAgICAgd29yZCwgZmlsbFRleHRPZmZzZXRYICogbXUsXG4gICAgICAgIChmaWxsVGV4dE9mZnNldFkgKyBmb250U2l6ZSAqIDAuNSkgKiBtdVxuICAgICAgKVxuXG4gICAgICAvLyBHZXQgdGhlIHBpeGVscyBvZiB0aGUgdGV4dFxuICAgICAgdmFyIGltYWdlRGF0YSA9IGZjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpLmRhdGFcblxuICAgICAgaWYgKGV4Y2VlZFRpbWUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIC8vIERyYXcgdGhlIGJveCBvZiB0aGUgb3JpZ2luYWwgZXN0aW1hdGlvblxuICAgICAgICBmY3R4LnN0cm9rZVJlY3QoXG4gICAgICAgICAgZmlsbFRleHRPZmZzZXRYICogbXUsXG4gICAgICAgICAgZmlsbFRleHRPZmZzZXRZLCBmdyAqIG11LCBmaCAqIG11XG4gICAgICAgIClcbiAgICAgICAgZmN0eC5yZXN0b3JlKClcbiAgICAgIH1cblxuICAgICAgLy8gUmVhZCB0aGUgcGl4ZWxzIGFuZCBzYXZlIHRoZSBpbmZvcm1hdGlvbiB0byB0aGUgb2NjdXBpZWQgYXJyYXlcbiAgICAgIHZhciBvY2N1cGllZCA9IFtdXG4gICAgICB2YXIgZ3ggPSBjZ3dcbiAgICAgIHZhciBneSwgeCwgeVxuICAgICAgdmFyIGJvdW5kcyA9IFtjZ2ggLyAyLCBjZ3cgLyAyLCBjZ2ggLyAyLCBjZ3cgLyAyXVxuICAgICAgd2hpbGUgKGd4LS0pIHtcbiAgICAgICAgZ3kgPSBjZ2hcbiAgICAgICAgd2hpbGUgKGd5LS0pIHtcbiAgICAgICAgICB5ID0gZ1xuICAgICAgICAgIC8qIGVzbGludCBuby1sYWJlbHM6IFtcImVycm9yXCIsIHsgXCJhbGxvd0xvb3BcIjogdHJ1ZSB9XSAqL1xuICAgICAgICAgIHNpbmdsZUdyaWRMb29wOiB3aGlsZSAoeS0tKSB7XG4gICAgICAgICAgICB4ID0gZ1xuICAgICAgICAgICAgd2hpbGUgKHgtLSkge1xuICAgICAgICAgICAgICBpZiAoaW1hZ2VEYXRhWygoZ3kgKiBnICsgeSkgKiB3aWR0aCArXG4gICAgICAgICAgICAgICAgKGd4ICogZyArIHgpKSAqIDQgKyAzXSkge1xuICAgICAgICAgICAgICAgIG9jY3VwaWVkLnB1c2goW2d4LCBneV0pXG5cbiAgICAgICAgICAgICAgICBpZiAoZ3ggPCBib3VuZHNbM10pIHtcbiAgICAgICAgICAgICAgICAgIGJvdW5kc1szXSA9IGd4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChneCA+IGJvdW5kc1sxXSkge1xuICAgICAgICAgICAgICAgICAgYm91bmRzWzFdID0gZ3hcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGd5IDwgYm91bmRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICBib3VuZHNbMF0gPSBneVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3kgPiBib3VuZHNbMl0pIHtcbiAgICAgICAgICAgICAgICAgIGJvdW5kc1syXSA9IGd5XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICBmY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMCwgMCwgMC41KSdcbiAgICAgICAgICAgICAgICAgIGZjdHguZmlsbFJlY3QoZ3ggKiBnLCBneSAqIGcsIGcgLSAwLjUsIGcgLSAwLjUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrIHNpbmdsZUdyaWRMb29wXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBmY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDI1NSwgMC41KSdcbiAgICAgICAgICAgIGZjdHguZmlsbFJlY3QoZ3ggKiBnLCBneSAqIGcsIGcgLSAwLjUsIGcgLSAwLjUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICBmY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDI1NSwgMCwgMC41KSdcbiAgICAgICAgZmN0eC5maWxsUmVjdChcbiAgICAgICAgICBib3VuZHNbM10gKiBnLFxuICAgICAgICAgIGJvdW5kc1swXSAqIGcsXG4gICAgICAgICAgKGJvdW5kc1sxXSAtIGJvdW5kc1szXSArIDEpICogZyxcbiAgICAgICAgICAoYm91bmRzWzJdIC0gYm91bmRzWzBdICsgMSkgKiBnXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIGluZm9ybWF0aW9uIG5lZWRlZCB0byBjcmVhdGUgdGhlIHRleHQgb24gdGhlIHJlYWwgY2FudmFzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtdTogbXUsXG4gICAgICAgIG9jY3VwaWVkOiBvY2N1cGllZCxcbiAgICAgICAgYm91bmRzOiBib3VuZHMsXG4gICAgICAgIGd3OiBjZ3csXG4gICAgICAgIGdoOiBjZ2gsXG4gICAgICAgIGZpbGxUZXh0T2Zmc2V0WDogZmlsbFRleHRPZmZzZXRYLFxuICAgICAgICBmaWxsVGV4dE9mZnNldFk6IGZpbGxUZXh0T2Zmc2V0WSxcbiAgICAgICAgZmlsbFRleHRXaWR0aDogZncsXG4gICAgICAgIGZpbGxUZXh0SGVpZ2h0OiBmaCxcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogRGV0ZXJtaW5lIGlmIHRoZXJlIGlzIHJvb20gYXZhaWxhYmxlIGluIHRoZSBnaXZlbiBkaW1lbnNpb24gKi9cbiAgICB2YXIgY2FuRml0VGV4dCA9IGZ1bmN0aW9uIGNhbkZpdFRleHQgKGd4LCBneSwgZ3csIGdoLCBvY2N1cGllZCkge1xuICAgICAgLy8gR28gdGhyb3VnaCB0aGUgb2NjdXBpZWQgcG9pbnRzLFxuICAgICAgLy8gcmV0dXJuIGZhbHNlIGlmIHRoZSBzcGFjZSBpcyBub3QgYXZhaWxhYmxlLlxuICAgICAgdmFyIGkgPSBvY2N1cGllZC5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIHB4ID0gZ3ggKyBvY2N1cGllZFtpXVswXVxuICAgICAgICB2YXIgcHkgPSBneSArIG9jY3VwaWVkW2ldWzFdXG5cbiAgICAgICAgaWYgKHB4ID49IG5neCB8fCBweSA+PSBuZ3kgfHwgcHggPCAwIHx8IHB5IDwgMCkge1xuICAgICAgICAgIGlmICghc2V0dGluZ3MuZHJhd091dE9mQm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFncmlkW3B4XVtweV0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKiBBY3R1YWxseSBkcmF3IHRoZSB0ZXh0IG9uIHRoZSBncmlkICovXG4gICAgdmFyIGRyYXdUZXh0ID0gZnVuY3Rpb24gZHJhd1RleHQgKGd4LCBneSwgaW5mbywgd29yZCwgd2VpZ2h0LCBkaXN0YW5jZSwgdGhldGEsIHJvdGF0ZURlZywgYXR0cmlidXRlcywgZXh0cmFEYXRhQXJyYXkpIHtcbiAgICAgIHZhciBmb250U2l6ZSA9IGluZm8uZm9udFNpemVcbiAgICAgIHZhciBjb2xvclxuICAgICAgaWYgKGdldFRleHRDb2xvcikge1xuICAgICAgICBjb2xvciA9IGdldFRleHRDb2xvcih3b3JkLCB3ZWlnaHQsIGZvbnRTaXplLCBkaXN0YW5jZSwgdGhldGEsIGV4dHJhRGF0YUFycmF5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sb3IgPSBzZXR0aW5ncy5jb2xvclxuICAgICAgfVxuXG4gICAgICAvLyBnZXQgZm9udFdlaWdodCB0aGF0IHdpbGwgYmUgdXNlZCB0byBzZXQgY3R4LmZvbnQgYW5kIGZvbnQgc3R5bGUgcnVsZVxuICAgICAgdmFyIGZvbnRXZWlnaHRcbiAgICAgIGlmIChnZXRUZXh0Rm9udFdlaWdodCkge1xuICAgICAgICBmb250V2VpZ2h0ID0gZ2V0VGV4dEZvbnRXZWlnaHQod29yZCwgd2VpZ2h0LCBmb250U2l6ZSwgZXh0cmFEYXRhQXJyYXkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb250V2VpZ2h0ID0gc2V0dGluZ3MuZm9udFdlaWdodFxuICAgICAgfVxuXG4gICAgICB2YXIgY2xhc3Nlc1xuICAgICAgaWYgKGdldFRleHRDbGFzc2VzKSB7XG4gICAgICAgIGNsYXNzZXMgPSBnZXRUZXh0Q2xhc3Nlcyh3b3JkLCB3ZWlnaHQsIGZvbnRTaXplLCBleHRyYURhdGFBcnJheSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzZXMgPSBzZXR0aW5ncy5jbGFzc2VzXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGlmIChlbC5nZXRDb250ZXh0KSB7XG4gICAgICAgICAgdmFyIGN0eCA9IGVsLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgICB2YXIgbXUgPSBpbmZvLm11XG5cbiAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHN0YXRlIGJlZm9yZSBtZXNzaW5nIGl0XG4gICAgICAgICAgY3R4LnNhdmUoKVxuICAgICAgICAgIGN0eC5zY2FsZSgxIC8gbXUsIDEgLyBtdSlcblxuICAgICAgICAgIGN0eC5mb250ID0gZm9udFdlaWdodCArICcgJyArXG4gICAgICAgICAgICAgICAgICAgICAoZm9udFNpemUgKiBtdSkudG9TdHJpbmcoMTApICsgJ3B4ICcgKyBzZXR0aW5ncy5mb250RmFtaWx5XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yXG5cbiAgICAgICAgICAvLyBUcmFuc2xhdGUgdGhlIGNhbnZhcyBwb3NpdGlvbiB0byB0aGUgb3JpZ2luIGNvb3JkaW5hdGUgb2Ygd2hlcmVcbiAgICAgICAgICAvLyB0aGUgdGV4dCBzaG91bGQgYmUgcHV0LlxuICAgICAgICAgIGN0eC50cmFuc2xhdGUoXG4gICAgICAgICAgICAoZ3ggKyBpbmZvLmd3IC8gMikgKiBnICogbXUsXG4gICAgICAgICAgICAoZ3kgKyBpbmZvLmdoIC8gMikgKiBnICogbXVcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAocm90YXRlRGVnICE9PSAwKSB7XG4gICAgICAgICAgICBjdHgucm90YXRlKC1yb3RhdGVEZWcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRmluYWxseSwgZmlsbCB0aGUgdGV4dC5cblxuICAgICAgICAgIC8vIFhYWDogV2UgY2Fubm90IGJlY2F1c2UgdGV4dEJhc2VsaW5lID0gJ3RvcCcgaGVyZSBiZWNhdXNlXG4gICAgICAgICAgLy8gRmlyZWZveCBhbmQgQ2hyb21lIHVzZXMgZGlmZmVyZW50IGRlZmF1bHQgbGluZS1oZWlnaHQgZm9yIGNhbnZhcy5cbiAgICAgICAgICAvLyBQbGVhc2UgcmVhZCBodHRwczovL2J1Z3ppbC5sYS83Mzc4NTIjYzYuXG4gICAgICAgICAgLy8gSGVyZSwgd2UgdXNlIHRleHRCYXNlbGluZSA9ICdtaWRkbGUnIGFuZCBkcmF3IHRoZSB0ZXh0IGF0IGV4YWN0bHlcbiAgICAgICAgICAvLyAwLjUgKiBmb250U2l6ZSBsb3dlci5cbiAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSdcbiAgICAgICAgICBjdHguZmlsbFRleHQoXG4gICAgICAgICAgICB3b3JkLCBpbmZvLmZpbGxUZXh0T2Zmc2V0WCAqIG11LFxuICAgICAgICAgICAgKGluZm8uZmlsbFRleHRPZmZzZXRZICsgZm9udFNpemUgKiAwLjUpICogbXVcbiAgICAgICAgICApXG5cbiAgICAgICAgICAvLyBUaGUgYmVsb3cgYm94IGlzIGFsd2F5cyBtYXRjaGVzIGhvdyA8c3Bhbj5zIGFyZSBwb3NpdGlvbmVkXG4gICAgICAgICAgLyogY3R4LnN0cm9rZVJlY3QoaW5mby5maWxsVGV4dE9mZnNldFgsIGluZm8uZmlsbFRleHRPZmZzZXRZLFxuICAgICAgICAgICAgaW5mby5maWxsVGV4dFdpZHRoLCBpbmZvLmZpbGxUZXh0SGVpZ2h0KSAqL1xuXG4gICAgICAgICAgLy8gUmVzdG9yZSB0aGUgc3RhdGUuXG4gICAgICAgICAgY3R4LnJlc3RvcmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGRyYXdUZXh0IG9uIERJViBlbGVtZW50XG4gICAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICB2YXIgdHJhbnNmb3JtUnVsZSA9ICcnXG4gICAgICAgICAgdHJhbnNmb3JtUnVsZSA9ICdyb3RhdGUoJyArICgtcm90YXRlRGVnIC8gTWF0aC5QSSAqIDE4MCkgKyAnZGVnKSAnXG4gICAgICAgICAgaWYgKGluZm8ubXUgIT09IDEpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVJ1bGUgKz1cbiAgICAgICAgICAgICAgJ3RyYW5zbGF0ZVgoLScgKyAoaW5mby5maWxsVGV4dFdpZHRoIC8gNCkgKyAncHgpICcgK1xuICAgICAgICAgICAgICAnc2NhbGUoJyArICgxIC8gaW5mby5tdSkgKyAnKSdcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHN0eWxlUnVsZXMgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBmb250OiBmb250V2VpZ2h0ICsgJyAnICtcbiAgICAgICAgICAgICAgKGZvbnRTaXplICogaW5mby5tdSkgKyAncHggJyArIHNldHRpbmdzLmZvbnRGYW1pbHksXG4gICAgICAgICAgICBsZWZ0OiAoKGd4ICsgaW5mby5ndyAvIDIpICogZyArIGluZm8uZmlsbFRleHRPZmZzZXRYKSArICdweCcsXG4gICAgICAgICAgICB0b3A6ICgoZ3kgKyBpbmZvLmdoIC8gMikgKiBnICsgaW5mby5maWxsVGV4dE9mZnNldFkpICsgJ3B4JyxcbiAgICAgICAgICAgIHdpZHRoOiBpbmZvLmZpbGxUZXh0V2lkdGggKyAncHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiBpbmZvLmZpbGxUZXh0SGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IGZvbnRTaXplICsgJ3B4JyxcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1SdWxlLFxuICAgICAgICAgICAgd2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm1SdWxlLFxuICAgICAgICAgICAgbXNUcmFuc2Zvcm06IHRyYW5zZm9ybVJ1bGUsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNDAlJyxcbiAgICAgICAgICAgIHdlYmtpdFRyYW5zZm9ybU9yaWdpbjogJzUwJSA0MCUnLFxuICAgICAgICAgICAgbXNUcmFuc2Zvcm1PcmlnaW46ICc1MCUgNDAlJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgICAgIHN0eWxlUnVsZXMuY29sb3IgPSBjb2xvclxuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gd29yZFxuICAgICAgICAgIGZvciAodmFyIGNzc1Byb3AgaW4gc3R5bGVSdWxlcykge1xuICAgICAgICAgICAgc3Bhbi5zdHlsZVtjc3NQcm9wXSA9IHN0eWxlUnVsZXNbY3NzUHJvcF1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgYXR0cmlidXRlc1thdHRyaWJ1dGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2xhc3Nlcykge1xuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgKz0gY2xhc3Nlc1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qIEhlbHAgZnVuY3Rpb24gdG8gdXBkYXRlR3JpZCAqL1xuICAgIHZhciBmaWxsR3JpZEF0ID0gZnVuY3Rpb24gZmlsbEdyaWRBdCAoeCwgeSwgZHJhd01hc2ssIGRpbWVuc2lvbiwgaXRlbSkge1xuICAgICAgaWYgKHggPj0gbmd4IHx8IHkgPj0gbmd5IHx8IHggPCAwIHx8IHkgPCAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBncmlkW3hdW3ldID0gZmFsc2VcblxuICAgICAgaWYgKGRyYXdNYXNrKSB7XG4gICAgICAgIHZhciBjdHggPSBlbGVtZW50c1swXS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGN0eC5maWxsUmVjdCh4ICogZywgeSAqIGcsIG1hc2tSZWN0V2lkdGgsIG1hc2tSZWN0V2lkdGgpXG4gICAgICB9XG5cbiAgICAgIGlmIChpbnRlcmFjdGl2ZSkge1xuICAgICAgICBpbmZvR3JpZFt4XVt5XSA9IHsgaXRlbTogaXRlbSwgZGltZW5zaW9uOiBkaW1lbnNpb24gfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFVwZGF0ZSB0aGUgZmlsbGluZyBpbmZvcm1hdGlvbiBvZiB0aGUgZ2l2ZW4gc3BhY2Ugd2l0aCBvY2N1cGllZCBwb2ludHMuXG4gICAgICAgRHJhdyB0aGUgbWFzayBvbiB0aGUgY2FudmFzIGlmIG5lY2Vzc2FyeS4gKi9cbiAgICB2YXIgdXBkYXRlR3JpZCA9IGZ1bmN0aW9uIHVwZGF0ZUdyaWQgKGd4LCBneSwgZ3csIGdoLCBpbmZvLCBpdGVtKSB7XG4gICAgICB2YXIgb2NjdXBpZWQgPSBpbmZvLm9jY3VwaWVkXG4gICAgICB2YXIgZHJhd01hc2sgPSBzZXR0aW5ncy5kcmF3TWFza1xuICAgICAgdmFyIGN0eFxuICAgICAgaWYgKGRyYXdNYXNrKSB7XG4gICAgICAgIGN0eCA9IGVsZW1lbnRzWzBdLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgY3R4LnNhdmUoKVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gc2V0dGluZ3MubWFza0NvbG9yXG4gICAgICB9XG5cbiAgICAgIHZhciBkaW1lbnNpb25cbiAgICAgIGlmIChpbnRlcmFjdGl2ZSkge1xuICAgICAgICB2YXIgYm91bmRzID0gaW5mby5ib3VuZHNcbiAgICAgICAgZGltZW5zaW9uID0ge1xuICAgICAgICAgIHg6IChneCArIGJvdW5kc1szXSkgKiBnLFxuICAgICAgICAgIHk6IChneSArIGJvdW5kc1swXSkgKiBnLFxuICAgICAgICAgIHc6IChib3VuZHNbMV0gLSBib3VuZHNbM10gKyAxKSAqIGcsXG4gICAgICAgICAgaDogKGJvdW5kc1syXSAtIGJvdW5kc1swXSArIDEpICogZ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpID0gb2NjdXBpZWQubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBweCA9IGd4ICsgb2NjdXBpZWRbaV1bMF1cbiAgICAgICAgdmFyIHB5ID0gZ3kgKyBvY2N1cGllZFtpXVsxXVxuXG4gICAgICAgIGlmIChweCA+PSBuZ3ggfHwgcHkgPj0gbmd5IHx8IHB4IDwgMCB8fCBweSA8IDApIHtcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgZmlsbEdyaWRBdChweCwgcHksIGRyYXdNYXNrLCBkaW1lbnNpb24sIGl0ZW0pXG4gICAgICB9XG5cbiAgICAgIGlmIChkcmF3TWFzaykge1xuICAgICAgICBjdHgucmVzdG9yZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogcHV0V29yZCgpIHByb2Nlc3NlcyBlYWNoIGl0ZW0gb24gdGhlIGxpc3QsXG4gICAgICAgY2FsY3VsYXRlIGl0J3Mgc2l6ZSBhbmQgZGV0ZXJtaW5lIGl0J3MgcG9zaXRpb24sIGFuZCBhY3R1YWxseVxuICAgICAgIHB1dCBpdCBvbiB0aGUgY2FudmFzLiAqL1xuICAgIHZhciBwdXRXb3JkID0gZnVuY3Rpb24gcHV0V29yZCAoaXRlbSkge1xuICAgICAgdmFyIHdvcmQsIHdlaWdodCwgYXR0cmlidXRlc1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgd29yZCA9IGl0ZW1bMF1cbiAgICAgICAgd2VpZ2h0ID0gaXRlbVsxXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd29yZCA9IGl0ZW0ud29yZFxuICAgICAgICB3ZWlnaHQgPSBpdGVtLndlaWdodFxuICAgICAgICBhdHRyaWJ1dGVzID0gaXRlbS5hdHRyaWJ1dGVzXG4gICAgICB9XG4gICAgICB2YXIgcm90YXRlRGVnID0gZ2V0Um90YXRlRGVnKClcblxuICAgICAgdmFyIGV4dHJhRGF0YUFycmF5ID0gZ2V0SXRlbUV4dHJhRGF0YShpdGVtKVxuXG4gICAgICAvLyBnZXQgaW5mbyBuZWVkZWQgdG8gcHV0IHRoZSB0ZXh0IG9udG8gdGhlIGNhbnZhc1xuICAgICAgdmFyIGluZm8gPSBnZXRUZXh0SW5mbyh3b3JkLCB3ZWlnaHQsIHJvdGF0ZURlZywgZXh0cmFEYXRhQXJyYXkpXG5cbiAgICAgIC8vIG5vdCBnZXR0aW5nIHRoZSBpbmZvIG1lYW5zIHdlIHNob3VsZG4ndCBiZSBkcmF3aW5nIHRoaXMgb25lLlxuICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoZXhjZWVkVGltZSgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBkcmF3T3V0T2ZCb3VuZCBpcyBzZXQgdG8gZmFsc2UsXG4gICAgICAvLyBza2lwIHRoZSBsb29wIGlmIHdlIGhhdmUgYWxyZWFkeSBrbm93IHRoZSBib3VuZGluZyBib3ggb2ZcbiAgICAgIC8vIHdvcmQgaXMgbGFyZ2VyIHRoYW4gdGhlIGNhbnZhcy5cbiAgICAgIGlmICghc2V0dGluZ3MuZHJhd091dE9mQm91bmQgJiYgIXNldHRpbmdzLnNocmlua1RvRml0KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBpbmZvLmJvdW5kcztcbiAgICAgICAgaWYgKChib3VuZHNbMV0gLSBib3VuZHNbM10gKyAxKSA+IG5neCB8fFxuICAgICAgICAgIChib3VuZHNbMl0gLSBib3VuZHNbMF0gKyAxKSA+IG5neSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gdG8gcHV0IHRoZSB0ZXh0IGJ5XG4gICAgICAvLyBzdGFydCBsb29raW5nIGZvciB0aGUgbmVhcmVzdCBwb2ludHNcbiAgICAgIHZhciByID0gbWF4UmFkaXVzICsgMVxuXG4gICAgICB2YXIgdHJ5VG9QdXRXb3JkQXRQb2ludCA9IGZ1bmN0aW9uIChneHkpIHtcbiAgICAgICAgdmFyIGd4ID0gTWF0aC5mbG9vcihneHlbMF0gLSBpbmZvLmd3IC8gMilcbiAgICAgICAgdmFyIGd5ID0gTWF0aC5mbG9vcihneHlbMV0gLSBpbmZvLmdoIC8gMilcbiAgICAgICAgdmFyIGd3ID0gaW5mby5nd1xuICAgICAgICB2YXIgZ2ggPSBpbmZvLmdoXG5cbiAgICAgICAgLy8gSWYgd2UgY2Fubm90IGZpdCB0aGUgdGV4dCBhdCB0aGlzIHBvc2l0aW9uLCByZXR1cm4gZmFsc2VcbiAgICAgICAgLy8gYW5kIGdvIHRvIHRoZSBuZXh0IHBvc2l0aW9uLlxuICAgICAgICBpZiAoIWNhbkZpdFRleHQoZ3gsIGd5LCBndywgZ2gsIGluZm8ub2NjdXBpZWQpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBBY3R1YWxseSBwdXQgdGhlIHRleHQgb24gdGhlIGNhbnZhc1xuICAgICAgICBkcmF3VGV4dChneCwgZ3ksIGluZm8sIHdvcmQsIHdlaWdodCxcbiAgICAgICAgICAobWF4UmFkaXVzIC0gciksIGd4eVsyXSwgcm90YXRlRGVnLCBhdHRyaWJ1dGVzLCBleHRyYURhdGFBcnJheSlcblxuICAgICAgICAvLyBNYXJrIHRoZSBzcGFjZXMgb24gdGhlIGdyaWQgYXMgZmlsbGVkXG4gICAgICAgIHVwZGF0ZUdyaWQoZ3gsIGd5LCBndywgZ2gsIGluZm8sIGl0ZW0pXG5cbiAgICAgICAgLy8gUmV0dXJuIHRydWUgc28gc29tZSgpIHdpbGwgc3RvcCBhbmQgYWxzbyByZXR1cm4gdHJ1ZS5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHItLSkge1xuICAgICAgICB2YXIgcG9pbnRzID0gZ2V0UG9pbnRzQXRSYWRpdXMobWF4UmFkaXVzIC0gcilcblxuICAgICAgICBpZiAoc2V0dGluZ3Muc2h1ZmZsZSkge1xuICAgICAgICAgIHBvaW50cyA9IFtdLmNvbmNhdChwb2ludHMpXG4gICAgICAgICAgc2h1ZmZsZUFycmF5KHBvaW50cylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRyeSB0byBmaXQgdGhlIHdvcmRzIGJ5IGxvb2tpbmcgYXQgZWFjaCBwb2ludC5cbiAgICAgICAgLy8gYXJyYXkuc29tZSgpIHdpbGwgc3RvcCBhbmQgcmV0dXJuIHRydWVcbiAgICAgICAgLy8gd2hlbiBwdXRXb3JkQXRQb2ludCgpIHJldHVybnMgdHJ1ZS5cbiAgICAgICAgLy8gSWYgYWxsIHRoZSBwb2ludHMgcmV0dXJucyBmYWxzZSwgYXJyYXkuc29tZSgpIHJldHVybnMgZmFsc2UuXG4gICAgICAgIHZhciBkcmF3biA9IHBvaW50cy5zb21lKHRyeVRvUHV0V29yZEF0UG9pbnQpXG5cbiAgICAgICAgaWYgKGRyYXduKSB7XG4gICAgICAgICAgLy8gbGVhdmUgcHV0V29yZCgpIGFuZCByZXR1cm4gdHJ1ZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZXR0aW5ncy5zaHJpbmtUb0ZpdCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgIGl0ZW1bMV0gPSBpdGVtWzFdICogMyAvIDRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLndlaWdodCA9IGl0ZW0ud2VpZ2h0ICogMyAvIDRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHV0V29yZChpdGVtKVxuICAgICAgfVxuICAgICAgLy8gd2UgdHJpZWQgYWxsIGRpc3RhbmNlcyBidXQgdGV4dCB3b24ndCBmaXQsIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLyogU2VuZCBET00gZXZlbnQgdG8gYWxsIGVsZW1lbnRzLiBXaWxsIHN0b3Agc2VuZGluZyBldmVudCBhbmQgcmV0dXJuXG4gICAgICAgaWYgdGhlIHByZXZpb3VzIG9uZSBpcyBjYW5jZWxlZCAoZm9yIGNhbmNlbGFibGUgZXZlbnRzKS4gKi9cbiAgICB2YXIgc2VuZEV2ZW50ID0gZnVuY3Rpb24gc2VuZEV2ZW50ICh0eXBlLCBjYW5jZWxhYmxlLCBkZXRhaWxzKSB7XG4gICAgICBpZiAoY2FuY2VsYWJsZSkge1xuICAgICAgICByZXR1cm4gIWVsZW1lbnRzLnNvbWUoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcbiAgICAgICAgICAgIGRldGFpbDogZGV0YWlscyB8fCB7fVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmV0dXJuICFlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICB9LCB0aGlzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWxzIHx8IHt9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgICB9LCB0aGlzKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qIFN0YXJ0IGRyYXdpbmcgb24gYSBjYW52YXMgKi9cbiAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbiBzdGFydCAoKSB7XG4gICAgICAvLyBGb3IgZGltZW5zaW9ucywgY2xlYXJDYW52YXMgZXRjLixcbiAgICAgIC8vIHdlIG9ubHkgY2FyZSBhYm91dCB0aGUgZmlyc3QgZWxlbWVudC5cbiAgICAgIHZhciBjYW52YXMgPSBlbGVtZW50c1swXVxuXG4gICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgbmd4ID0gTWF0aC5jZWlsKGNhbnZhcy53aWR0aCAvIGcpXG4gICAgICAgIG5neSA9IE1hdGguY2VpbChjYW52YXMuaGVpZ2h0IC8gZylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIG5neCA9IE1hdGguY2VpbChyZWN0LndpZHRoIC8gZylcbiAgICAgICAgbmd5ID0gTWF0aC5jZWlsKHJlY3QuaGVpZ2h0IC8gZylcbiAgICAgIH1cblxuICAgICAgLy8gU2VuZGluZyBhIHdvcmRjbG91ZHN0YXJ0IGV2ZW50IHdoaWNoIGNhdXNlIHRoZSBwcmV2aW91cyBsb29wIHRvIHN0b3AuXG4gICAgICAvLyBEbyBub3RoaW5nIGlmIHRoZSBldmVudCBpcyBjYW5jZWxlZC5cbiAgICAgIGlmICghc2VuZEV2ZW50KCd3b3JkY2xvdWRzdGFydCcsIHRydWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGNlbnRlciBvZiB0aGUgd29yZCBjbG91ZFxuICAgICAgY2VudGVyID0gKHNldHRpbmdzLm9yaWdpbilcbiAgICAgICAgPyBbc2V0dGluZ3Mub3JpZ2luWzBdIC8gZywgc2V0dGluZ3Mub3JpZ2luWzFdIC8gZ11cbiAgICAgICAgOiBbbmd4IC8gMiwgbmd5IC8gMl1cblxuICAgICAgLy8gTWF4aXVtIHJhZGl1cyB0byBsb29rIGZvciBzcGFjZVxuICAgICAgbWF4UmFkaXVzID0gTWF0aC5mbG9vcihNYXRoLnNxcnQobmd4ICogbmd4ICsgbmd5ICogbmd5KSlcblxuICAgICAgLyogQ2xlYXIgdGhlIGNhbnZhcyBvbmx5IGlmIHRoZSBjbGVhckNhbnZhcyBpcyBzZXQsXG4gICAgICAgICBpZiBub3QsIHVwZGF0ZSB0aGUgZ3JpZCB0byB0aGUgY3VycmVudCBjYW52YXMgc3RhdGUgKi9cbiAgICAgIGdyaWQgPSBbXVxuXG4gICAgICB2YXIgZ3gsIGd5LCBpXG4gICAgICBpZiAoIWNhbnZhcy5nZXRDb250ZXh0IHx8IHNldHRpbmdzLmNsZWFyQ2FudmFzKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgaWYgKGVsLmdldENvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBjdHggPSBlbC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIG5neCAqIChnICsgMSksIG5neSAqIChnICsgMSkpXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgbmd4ICogKGcgKyAxKSwgbmd5ICogKGcgKyAxKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2V0dGluZ3MuYmFja2dyb3VuZENvbG9yXG4gICAgICAgICAgICBlbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLyogZmlsbCB0aGUgZ3JpZCB3aXRoIGVtcHR5IHN0YXRlICovXG4gICAgICAgIGd4ID0gbmd4XG4gICAgICAgIHdoaWxlIChneC0tKSB7XG4gICAgICAgICAgZ3JpZFtneF0gPSBbXVxuICAgICAgICAgIGd5ID0gbmd5XG4gICAgICAgICAgd2hpbGUgKGd5LS0pIHtcbiAgICAgICAgICAgIGdyaWRbZ3hdW2d5XSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIERldGVybWluZSBiZ1BpeGVsIGJ5IGNyZWF0aW5nXG4gICAgICAgICAgIGFub3RoZXIgY2FudmFzIGFuZCBmaWxsIHRoZSBzcGVjaWZpZWQgYmFja2dyb3VuZCBjb2xvci4gKi9cbiAgICAgICAgdmFyIGJjdHggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKS5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgICAgYmN0eC5maWxsU3R5bGUgPSBzZXR0aW5ncy5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgYmN0eC5maWxsUmVjdCgwLCAwLCAxLCAxKVxuICAgICAgICB2YXIgYmdQaXhlbCA9IGJjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGFcblxuICAgICAgICAvKiBSZWFkIGJhY2sgdGhlIHBpeGVscyBvZiB0aGUgY2FudmFzIHdlIGdvdCB0byB0ZWxsIHdoaWNoIHBhcnQgb2YgdGhlXG4gICAgICAgICAgIGNhbnZhcyBpcyBlbXB0eS5cbiAgICAgICAgICAgKG5vIGNsZWFyQ2FudmFzIG9ubHkgd29ya3Mgd2l0aCBhIGNhbnZhcywgbm90IGRpdnMpICovXG4gICAgICAgIHZhciBpbWFnZURhdGEgPVxuICAgICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YSgwLCAwLCBuZ3ggKiBnLCBuZ3kgKiBnKS5kYXRhXG5cbiAgICAgICAgZ3ggPSBuZ3hcbiAgICAgICAgdmFyIHgsIHlcbiAgICAgICAgd2hpbGUgKGd4LS0pIHtcbiAgICAgICAgICBncmlkW2d4XSA9IFtdXG4gICAgICAgICAgZ3kgPSBuZ3lcbiAgICAgICAgICB3aGlsZSAoZ3ktLSkge1xuICAgICAgICAgICAgeSA9IGdcbiAgICAgICAgICAgIC8qIGVzbGludCBuby1sYWJlbHM6IFtcImVycm9yXCIsIHsgXCJhbGxvd0xvb3BcIjogdHJ1ZSB9XSAqL1xuICAgICAgICAgICAgc2luZ2xlR3JpZExvb3A6IHdoaWxlICh5LS0pIHtcbiAgICAgICAgICAgICAgeCA9IGdcbiAgICAgICAgICAgICAgd2hpbGUgKHgtLSkge1xuICAgICAgICAgICAgICAgIGkgPSA0XG4gICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGltYWdlRGF0YVsoKGd5ICogZyArIHkpICogbmd4ICogZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ3ggKiBnICsgeCkpICogNCArIGldICE9PSBiZ1BpeGVsW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRbZ3hdW2d5XSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrIHNpbmdsZUdyaWRMb29wXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ3JpZFtneF1bZ3ldICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBncmlkW2d4XVtneV0gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VEYXRhID0gYmN0eCA9IGJnUGl4ZWwgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgLy8gZmlsbCB0aGUgaW5mb0dyaWQgd2l0aCBlbXB0eSBzdGF0ZSBpZiB3ZSBuZWVkIGl0XG4gICAgICBpZiAoc2V0dGluZ3MuaG92ZXIgfHwgc2V0dGluZ3MuY2xpY2spIHtcbiAgICAgICAgaW50ZXJhY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgLyogZmlsbCB0aGUgZ3JpZCB3aXRoIGVtcHR5IHN0YXRlICovXG4gICAgICAgIGd4ID0gbmd4ICsgMVxuICAgICAgICB3aGlsZSAoZ3gtLSkge1xuICAgICAgICAgIGluZm9HcmlkW2d4XSA9IFtdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3MuaG92ZXIpIHtcbiAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgd29yZGNsb3VkaG92ZXIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZ3MuY2xpY2spIHtcbiAgICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3b3JkY2xvdWRjbGljaylcbiAgICAgICAgICBjYW52YXMuc3R5bGUud2Via2l0VGFwSGlnaGxpZ2h0Q29sb3IgPSAncmdiYSgwLCAwLCAwLCAwKSdcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3b3JkY2xvdWRzdGFydCcsIGZ1bmN0aW9uIHN0b3BJbnRlcmFjdGlvbiAoKSB7XG4gICAgICAgICAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dvcmRjbG91ZHN0YXJ0Jywgc3RvcEludGVyYWN0aW9uKVxuICAgICAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB3b3JkY2xvdWRob3ZlcilcbiAgICAgICAgICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3b3JkY2xvdWRjbGljaylcbiAgICAgICAgICBob3ZlcmVkID0gdW5kZWZpbmVkXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGkgPSAwXG4gICAgICB2YXIgbG9vcGluZ0Z1bmN0aW9uLCBzdG9wcGluZ0Z1bmN0aW9uXG4gICAgICBpZiAoc2V0dGluZ3Mud2FpdCAhPT0gMCkge1xuICAgICAgICBsb29waW5nRnVuY3Rpb24gPSB3aW5kb3cuc2V0VGltZW91dFxuICAgICAgICBzdG9wcGluZ0Z1bmN0aW9uID0gd2luZG93LmNsZWFyVGltZW91dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9vcGluZ0Z1bmN0aW9uID0gd2luZG93LnNldEltbWVkaWF0ZVxuICAgICAgICBzdG9wcGluZ0Z1bmN0aW9uID0gd2luZG93LmNsZWFySW1tZWRpYXRlXG4gICAgICB9XG5cbiAgICAgIHZhciBhZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lciAodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKVxuICAgICAgICB9LCB0aGlzKVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIgKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcilcbiAgICAgICAgfSwgdGhpcylcbiAgICAgIH1cblxuICAgICAgdmFyIGFub3RoZXJXb3JkQ2xvdWRTdGFydCA9IGZ1bmN0aW9uIGFub3RoZXJXb3JkQ2xvdWRTdGFydCAoKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dvcmRjbG91ZHN0YXJ0JywgYW5vdGhlcldvcmRDbG91ZFN0YXJ0KVxuICAgICAgICBzdG9wcGluZ0Z1bmN0aW9uKHRpbWVyW3RpbWVySWRdKVxuICAgICAgfVxuXG4gICAgICBhZGRFdmVudExpc3RlbmVyKCd3b3JkY2xvdWRzdGFydCcsIGFub3RoZXJXb3JkQ2xvdWRTdGFydClcbiAgICAgIHRpbWVyW3RpbWVySWRdID0gbG9vcGluZ0Z1bmN0aW9uKGZ1bmN0aW9uIGxvb3AgKCkge1xuICAgICAgICBpZiAoaSA+PSBzZXR0aW5ncy5saXN0Lmxlbmd0aCkge1xuICAgICAgICAgIHN0b3BwaW5nRnVuY3Rpb24odGltZXJbdGltZXJJZF0pXG4gICAgICAgICAgc2VuZEV2ZW50KCd3b3JkY2xvdWRzdG9wJywgZmFsc2UpXG4gICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignd29yZGNsb3Vkc3RhcnQnLCBhbm90aGVyV29yZENsb3VkU3RhcnQpXG4gICAgICAgICAgZGVsZXRlIHRpbWVyW3RpbWVySWRdO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVzY2FwZVRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgIHZhciBkcmF3biA9IHB1dFdvcmQoc2V0dGluZ3MubGlzdFtpXSlcbiAgICAgICAgdmFyIGNhbmNlbGVkID0gIXNlbmRFdmVudCgnd29yZGNsb3VkZHJhd24nLCB0cnVlLCB7XG4gICAgICAgICAgaXRlbTogc2V0dGluZ3MubGlzdFtpXSxcbiAgICAgICAgICBkcmF3bjogZHJhd25cbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGV4Y2VlZFRpbWUoKSB8fCBjYW5jZWxlZCkge1xuICAgICAgICAgIHN0b3BwaW5nRnVuY3Rpb24odGltZXJbdGltZXJJZF0pXG4gICAgICAgICAgc2V0dGluZ3MuYWJvcnQoKVxuICAgICAgICAgIHNlbmRFdmVudCgnd29yZGNsb3VkYWJvcnQnLCBmYWxzZSlcbiAgICAgICAgICBzZW5kRXZlbnQoJ3dvcmRjbG91ZHN0b3AnLCBmYWxzZSlcbiAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCd3b3JkY2xvdWRzdGFydCcsIGFub3RoZXJXb3JkQ2xvdWRTdGFydClcbiAgICAgICAgICBkZWxldGUgdGltZXJbdGltZXJJZF1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICAgICAgdGltZXJbdGltZXJJZF0gPSBsb29waW5nRnVuY3Rpb24obG9vcCwgc2V0dGluZ3Mud2FpdClcbiAgICAgIH0sIHNldHRpbmdzLndhaXQpXG4gICAgfVxuXG4gICAgLy8gQWxsIHNldCwgc3RhcnQgdGhlIGRyYXdpbmdcbiAgICBzdGFydCgpXG4gIH1cblxuICBXb3JkQ2xvdWQuaXNTdXBwb3J0ZWQgPSBpc1N1cHBvcnRlZFxuICBXb3JkQ2xvdWQubWluRm9udFNpemUgPSBtaW5Gb250U2l6ZVxuICBXb3JkQ2xvdWQuc3RvcCA9IGZ1bmN0aW9uIHN0b3AgKCkge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgZm9yICh2YXIgdGltZXJJZCBpbiB0aW1lcikge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbW1lZGlhdGUodGltZXJbdGltZXJJZF0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRXhwb3NlIHRoZSBsaWJyYXJ5IGFzIGFuIEFNRCBtb2R1bGVcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gICAgZ2xvYmFsLldvcmRDbG91ZCA9IFdvcmRDbG91ZFxuICAgIGRlZmluZSgnd29yZGNsb3VkJywgW10sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIFdvcmRDbG91ZCB9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgIG1vZHVsZS5leHBvcnRzID0gV29yZENsb3VkIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWwuV29yZENsb3VkID0gV29yZENsb3VkXG4gIH1cbn0pKHRoaXMpIC8vIGpzaGludCBpZ25vcmU6bGluZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==