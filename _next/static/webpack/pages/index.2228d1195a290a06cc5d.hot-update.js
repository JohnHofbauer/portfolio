self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/CoreValues/CoreValues.js":
/*!*************************************************!*\
  !*** ./src/components/CoreValues/CoreValues.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoreValuesStyles */ "./src/components/CoreValues/CoreValuesStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "J:\\OneDrive\\OneDrive\\Documents\\GitHub\\portfolio\\src\\components\\CoreValues\\CoreValues.js",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


var WordCloud = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_react-wordcloud_dist_index_module_js"), __webpack_require__.e("src_components_CoreValues_ReactWordCloud_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ReactWordCloud */ "./src/components/CoreValues/ReactWordCloud.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./ReactWordCloud */ "./src/components/CoreValues/ReactWordCloud.js")];
    },
    modules: ["..\\components\\CoreValues\\CoreValues.js -> " + "./ReactWordCloud"]
  }
});
_c2 = WordCloud;



var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.CoreValueData.length;

var CoreValue = function CoreValue() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: "smooth"
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.CoreValueData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.CoreValueData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return __jsx(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Core Values"), __jsx(WordCloud, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
    ref: carouselRef,
    onScroll: handleScroll,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.CoreValueData.map(function (item, index) {
    return __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
      key: index,
      "final": index === TOTAL_CAROUSEL_COUNT - 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
      index: index,
      id: "carousel__item-".concat(index),
      active: activeItem,
      onClick: function onClick(e) {
        return handleClick(e, index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }, __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, item.title, __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
      width: "208",
      height: "6",
      viewBox: "0 0 208 6",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }, __jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
      fill: "url(#paint0_linear)",
      "fill-opacity": "0.33",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }), __jsx("defs", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, __jsx("linearGradient", {
      id: "paint0_linear",
      x1: "-4.30412e-10",
      y1: "0.5",
      x2: "208",
      y2: "0.500295",
      gradientUnits: "userSpaceOnUse",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 23
      }
    }, __jsx("stop", {
      "stop-color": "white",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }), __jsx("stop", {
      offset: "0.79478",
      "stop-color": "white",
      "stop-opacity": "0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    }))))), __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }, item.description)));
  }))), __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, _constants_constants__WEBPACK_IMPORTED_MODULE_4__.CoreValueData.map(function (item, index) {
    return __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
      key: index,
      index: index,
      active: activeItem,
      onClick: function onClick(e) {
        return handleClick(e, index);
      },
      type: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }
    }, __jsx(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
      active: activeItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }));
  })), __jsx(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }));
};

_s(CoreValue, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c3 = CoreValue;
/* harmony default export */ __webpack_exports__["default"] = (CoreValue);

var _c, _c2, _c3;

$RefreshReg$(_c, "WordCloud$dynamic");
$RefreshReg$(_c2, "WordCloud");
$RefreshReg$(_c3, "CoreValue");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29yZVZhbHVlcy9Db3JlVmFsdWVzLmpzIl0sIm5hbWVzIjpbIldvcmRDbG91ZCIsImR5bmFtaWMiLCJzc3IiLCJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsIkNvcmVWYWx1ZURhdGEiLCJDb3JlVmFsdWUiLCJ1c2VTdGF0ZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJzY3JvbGwiLCJub2RlIiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoYW5kbGVDbGljayIsImUiLCJpIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFdpZHRoIiwiaGFuZGxlU2Nyb2xsIiwiaW5kZXgiLCJyb3VuZCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSxtVEFBTjtBQUFBLENBQUQsRUFBbUM7QUFDMURDLEtBQUcsRUFBRSxLQURxRDtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsdUVBQXFCO0FBQUE7QUFBQSxnRUFBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFuQyxDQUF6QjtNQUFNRixTO0FBSU47QUFXQTtBQU1BO0FBRUEsSUFBTUcsb0JBQW9CLEdBQUdDLHNFQUE3Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLCtDQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ2ZDLFVBRGU7QUFBQSxNQUNIQyxhQURHOztBQUV0QixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVB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S0FBSixDQUFsQjtBQUFBLE9BSlg7QUFLRSxVQUFJLEVBQUMsUUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BT0UsTUFBQyxnRUFBRDtBQUFtQixZQUFNLEVBQUVuQixVQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsQ0FEaUI7QUFBQSxHQUFsQixDQURILENBekRGLEVBc0VFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRFRixDQURGO0FBMEVELENBcEhEOztHQUFNRixTOztNQUFBQSxTO0FBc0hOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIyMjhkMTE5NWEyOTBhMDZjYzVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5jb25zdCBXb3JkQ2xvdWQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vUmVhY3RXb3JkQ2xvdWRcIiksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2Fyb3VzZWxCdXR0b24sXHJcbiAgQ2Fyb3VzZWxCdXR0b25Eb3QsXHJcbiAgQ2Fyb3VzZWxCdXR0b25zLFxyXG4gIENhcm91c2VsQ29udGFpbmVyLFxyXG4gIENhcm91c2VsSXRlbSxcclxuICBDYXJvdXNlbEl0ZW1JbWcsXHJcbiAgQ2Fyb3VzZWxJdGVtVGV4dCxcclxuICBDYXJvdXNlbEl0ZW1UaXRsZSxcclxuICBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUsXHJcbn0gZnJvbSBcIi4vQ29yZVZhbHVlc1N0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIFNlY3Rpb24sXHJcbiAgU2VjdGlvbkRpdmlkZXIsXHJcbiAgU2VjdGlvblRleHQsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDb3JlVmFsdWVEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gQ29yZVZhbHVlRGF0YS5sZW5ndGg7XHJcblxyXG5jb25zdCBDb3JlVmFsdWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcclxuICAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIENvcmVWYWx1ZURhdGEubGVuZ3RoKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcclxuICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC9cclxuICAgICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKlxyXG4gICAgICAgICAgQ29yZVZhbHVlRGF0YS5sZW5ndGhcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcclxuICAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cclxuICAgICAgPFNlY3Rpb25UaXRsZT5Db3JlIFZhbHVlczwvU2VjdGlvblRpdGxlPlxyXG4gICAgICA8V29yZENsb3VkIC8+XHJcbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge0NvcmVWYWx1ZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0uZGVzY3JpcHRpb259PC9DYXJvdXNlbEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxyXG4gICAgICA8Q2Fyb3VzZWxCdXR0b25zPlxyXG4gICAgICAgIHtDb3JlVmFsdWVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cclxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcmVWYWx1ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==