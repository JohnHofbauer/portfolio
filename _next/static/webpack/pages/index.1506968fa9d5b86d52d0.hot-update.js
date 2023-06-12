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

    if (typeof document !== "undefined") {
      var container = document.getElementById("wordcloud-container");

      if (container) {
        wordcloud__WEBPACK_IMPORTED_MODULE_2___default()(container, {
          gridSize: 9,
          weightFactor: 16,
          fontFamily: "Hiragino Mincho Pro, serif",
          color: "random-light",
          backgroundColor: "#12d45",
          rotateRatio: 0,
          list: [["Integrity", 10], ["Excellence", 4], ["Innovation", 2], ["Teamwork", 1], ["Respect", 4], ["Adaptability", 4], ["Sustainability", 3], ["Transparency", 3], ["Diversity and Inclusion", 4], ["Accountability", 5], ["Customer Focus", 5], ["Empowerment", 4], ["Continuous Learning", 3], ["Open Communication", 3], ["Creativity", 3], ["Trust", 4], ["Collaboration", 1], ["Responsibility", 2], ["Quality", 2], ["Humility", 2], ["Passion", 1], ["Resilience", 1], ["Ownership", 3], ["Flexibility", 2], ["Empathy", 1], ["Social Responsibility", 1], ["Equality", 4], ["Inclusivity", 2], ["Empowering Others", 1], ["Work-Life Balance", 1], ["Fairness", 1]]
        });
      }
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionTitle, {
      children: "Core Values"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
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
                    lineNumber: 145,
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
                        lineNumber: 161,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        "stop-color": "white",
                        "stop-opacity": "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CoreValuesStyles__WEBPACK_IMPORTED_MODULE_3__.CarouselItemText, {
                children: item.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
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
            lineNumber: 186,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29yZVZhbHVlcy9Db3JlVmFsdWVzLmpzIl0sIm5hbWVzIjpbIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwiQ29yZVZhbHVlRGF0YSIsIkNvcmVWYWx1ZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJXb3JkQ2xvdWQiLCJncmlkU2l6ZSIsIndlaWdodEZhY3RvciIsImZvbnRGYW1pbHkiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInJvdGF0ZVJhdGlvIiwibGlzdCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiaXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVdBO0FBTUE7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0Msc0VBQTdCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDY0MsK0NBQVEsQ0FBQyxDQUFELENBRHRCO0FBQUEsTUFDZkMsVUFEZTtBQUFBLE1BQ0hDLGFBREc7O0FBRXRCLE1BQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FB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QSx1QkFORixlQXlDRSw4REFBQywrREFBRDtBQUFBLDBCQUFtQkQsSUFBSSxDQUFDRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixhQUNPdEIsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURpQjtBQUFBLFNBQWxCO0FBREg7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUE2REUsOERBQUMsOERBQUQ7QUFBQSxnQkFDR3RCLG1FQUFBLENBQWtCLFVBQUMwQyxJQUFELEVBQU9wQixLQUFQO0FBQUEsNEJBQ2pCLDhEQUFDLDZEQUFEO0FBRUUsZUFBSyxFQUFFQSxLQUZUO0FBR0UsZ0JBQU0sRUFBRW5CLFVBSFY7QUFJRSxpQkFBTyxFQUFFLGlCQUFDVSxDQUFEO0FBQUEsbUJBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJUyxLQUFKLENBQWxCO0FBQUEsV0FKWDtBQUtFLGNBQUksRUFBQyxRQUxQO0FBQUEsaUNBT0UsOERBQUMsZ0VBQUQ7QUFBbUIsa0JBQU0sRUFBRW5CO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixXQUNPbUIsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdERixlQTBFRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEVELENBeEtEOztHQUFNckIsUzs7S0FBQUEsUztBQTBLTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNTA2OTY4ZmE5ZDViODZkNTJkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV29yZENsb3VkIGZyb20gXCJ3b3JkY2xvdWRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2Fyb3VzZWxCdXR0b24sXHJcbiAgQ2Fyb3VzZWxCdXR0b25Eb3QsXHJcbiAgQ2Fyb3VzZWxCdXR0b25zLFxyXG4gIENhcm91c2VsQ29udGFpbmVyLFxyXG4gIENhcm91c2VsSXRlbSxcclxuICBDYXJvdXNlbEl0ZW1JbWcsXHJcbiAgQ2Fyb3VzZWxJdGVtVGV4dCxcclxuICBDYXJvdXNlbEl0ZW1UaXRsZSxcclxuICBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUsXHJcbn0gZnJvbSBcIi4vQ29yZVZhbHVlc1N0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIFNlY3Rpb24sXHJcbiAgU2VjdGlvbkRpdmlkZXIsXHJcbiAgU2VjdGlvblRleHQsXHJcbiAgU2VjdGlvblRpdGxlLFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDb3JlVmFsdWVEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gQ29yZVZhbHVlRGF0YS5sZW5ndGg7XHJcblxyXG5jb25zdCBDb3JlVmFsdWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcclxuICAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIENvcmVWYWx1ZURhdGEubGVuZ3RoKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZChcclxuICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC9cclxuICAgICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKlxyXG4gICAgICAgICAgQ29yZVZhbHVlRGF0YS5sZW5ndGhcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcclxuICAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xyXG4gICAgfTtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29yZGNsb3VkLWNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgICBXb3JkQ2xvdWQoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICBncmlkU2l6ZTogOSxcclxuICAgICAgICAgIHdlaWdodEZhY3RvcjogMTYsXHJcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkhpcmFnaW5vIE1pbmNobyBQcm8sIHNlcmlmXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCJyYW5kb20tbGlnaHRcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMTJkNDVcIixcclxuICAgICAgICAgIHJvdGF0ZVJhdGlvOiAwLFxyXG4gICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICBbXCJJbnRlZ3JpdHlcIiwgMTBdLFxyXG4gICAgICAgICAgICBbXCJFeGNlbGxlbmNlXCIsIDRdLFxyXG4gICAgICAgICAgICBbXCJJbm5vdmF0aW9uXCIsIDJdLFxyXG4gICAgICAgICAgICBbXCJUZWFtd29ya1wiLCAxXSxcclxuICAgICAgICAgICAgW1wiUmVzcGVjdFwiLCA0XSxcclxuICAgICAgICAgICAgW1wiQWRhcHRhYmlsaXR5XCIsIDRdLFxyXG4gICAgICAgICAgICBbXCJTdXN0YWluYWJpbGl0eVwiLCAzXSxcclxuICAgICAgICAgICAgW1wiVHJhbnNwYXJlbmN5XCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJEaXZlcnNpdHkgYW5kIEluY2x1c2lvblwiLCA0XSxcclxuICAgICAgICAgICAgW1wiQWNjb3VudGFiaWxpdHlcIiwgNV0sXHJcbiAgICAgICAgICAgIFtcIkN1c3RvbWVyIEZvY3VzXCIsIDVdLFxyXG4gICAgICAgICAgICBbXCJFbXBvd2VybWVudFwiLCA0XSxcclxuICAgICAgICAgICAgW1wiQ29udGludW91cyBMZWFybmluZ1wiLCAzXSxcclxuICAgICAgICAgICAgW1wiT3BlbiBDb21tdW5pY2F0aW9uXCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJDcmVhdGl2aXR5XCIsIDNdLFxyXG4gICAgICAgICAgICBbXCJUcnVzdFwiLCA0XSxcclxuICAgICAgICAgICAgW1wiQ29sbGFib3JhdGlvblwiLCAxXSxcclxuICAgICAgICAgICAgW1wiUmVzcG9uc2liaWxpdHlcIiwgMl0sXHJcbiAgICAgICAgICAgIFtcIlF1YWxpdHlcIiwgMl0sXHJcbiAgICAgICAgICAgIFtcIkh1bWlsaXR5XCIsIDJdLFxyXG4gICAgICAgICAgICBbXCJQYXNzaW9uXCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJSZXNpbGllbmNlXCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJPd25lcnNoaXBcIiwgM10sXHJcbiAgICAgICAgICAgIFtcIkZsZXhpYmlsaXR5XCIsIDJdLFxyXG4gICAgICAgICAgICBbXCJFbXBhdGh5XCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJTb2NpYWwgUmVzcG9uc2liaWxpdHlcIiwgMV0sXHJcbiAgICAgICAgICAgIFtcIkVxdWFsaXR5XCIsIDRdLFxyXG4gICAgICAgICAgICBbXCJJbmNsdXNpdml0eVwiLCAyXSxcclxuICAgICAgICAgICAgW1wiRW1wb3dlcmluZyBPdGhlcnNcIiwgMV0sXHJcbiAgICAgICAgICAgIFtcIldvcmstTGlmZSBCYWxhbmNlXCIsIDFdLFxyXG4gICAgICAgICAgICBbXCJGYWlybmVzc1wiLCAxXSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGU+Q29yZSBWYWx1ZXM8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI0MDBweFwiLCB3aWR0aDogXCIxMDAwcHhcIiwgbWFyZ2luOiBcImF1dG9cIiB9fVxyXG4gICAgICAgIGlkPVwid29yZGNsb3VkLWNvbnRhaW5lclwiXHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge0NvcmVWYWx1ZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0uZGVzY3JpcHRpb259PC9DYXJvdXNlbEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxyXG4gICAgICA8Q2Fyb3VzZWxCdXR0b25zPlxyXG4gICAgICAgIHtDb3JlVmFsdWVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cclxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcmVWYWx1ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==