self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px 0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px 0";
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,#ffffff 18.77%,rgba(255,255,255,0.66) 60.15% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? "65px" : "56px";
}, function (props) {
  return props.main ? "76px" : "56px";
}, function (props) {
  return props.main ? "58px 0 16px" : "0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "40px 0 12px" : "0";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? "28px" : "32px";
}, function (props) {
  return props.main ? "32px" : "40px";
}, function (props) {
  return props.main ? "16px 0 8px" : "0";
});
var SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.colorAlt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? "150px" : "262px";
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? "52px" : "64px";
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? "20px" : "24px";
}, function (_ref4) {
  var alt = _ref4.alt,
      form = _ref4.form;
  return alt || form ? "0" : "0 0 80px";
}, function (_ref5) {
  var alt = _ref5.alt;
  return alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)";
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? ".5" : "1";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref7) {
  var alt = _ref7.alt;
  return alt ? "150px" : "184px";
}, function (_ref8) {
  var alt = _ref8.alt;
  return alt ? "52px" : "48px";
}, function (_ref9) {
  var alt = _ref9.alt;
  return alt ? "20px" : "16px";
}, function (_ref10) {
  var alt = _ref10.alt;
  return alt ? "0" : "64px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref11) {
  var alt = _ref11.alt;
  return alt ? "0" : "32px";
});
var ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:0.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], function (_ref12) {
  var alt = _ref12.alt;
  return alt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? ".5" : "1";
}, function (_ref14) {
  var alt = _ref14.alt;
  return alt ? "20px" : "24px";
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref16) {
  var alt = _ref16.alt;
  return alt ? "20px" : "16px";
}, function (props) {
  return props.theme.breakpoints.sm;
});
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], function (_ref17) {
  var large = _ref17.large;
  return large ? "24px" : "16px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref18) {
  var large = _ref18.large;
  return large ? "16px" : "8px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref19) {
  var large = _ref19.large;
  return large ? "0" : "8px";
});
var LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], function (_ref20) {
  var large = _ref20.large;
  return large ? "32px" : "24px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref21) {
  var nav = _ref21.nav;
  return nav ? "16px" : "24px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref22) {
  var large = _ref22.large;
  return large ? "32px" : "16px";
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDZTQUNQLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWxDO0FBQUEsQ0FETyxFQUVBLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNFLEdBQU4sR0FBWSxLQUFaLEdBQW9CLFFBQWhDO0FBQUEsQ0FGQSxFQUdQLFVBQUNGLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFBcEM7QUFBQSxDQUhPLEVBV1QsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBWFMsRUFnQlQsVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBaEJTLEVBaUJMLFVBQUNQLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIs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QUgsVUFBR0EsS0FBSDtBQUFBLFNBQWdCQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BQWpDO0FBQUEsQ0FUVSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMTNhYjRkNGNkNjg3MDFjZjJmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIil9O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gKHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwiKX07XHJcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMzJweCA0OHB4IDBcIil9O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgcGFkZGluZzogMjRweCA0OHB4IDA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMTZweCAxNnB4IDBcIil9O1xyXG5cclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNjVweFwiIDogXCI1NnB4XCIpfTtcclxuICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI3NnB4XCIgOiBcIjU2cHhcIil9O1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTIxLjU3ZGVnLFxyXG4gICAgI2ZmZmZmZiAxOC43NyUsXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDYwLjE1JVxyXG4gICk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1OHB4IDAgMTZweFwiIDogXCIwXCIpfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjU2cHhcIiA6IFwiNDhweFwiKX07XHJcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1NnB4XCIgOiBcIjQ4cHhcIil9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNDBweCAwIDEycHhcIiA6IFwiMFwiKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCIyOHB4XCIgOiBcIjMycHhcIil9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMzJweFwiIDogXCI0MHB4XCIpfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMTZweCAwIDhweFwiIDogXCIwXCIpfTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzLjZyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWF4LXdpZHRoOiA2NzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMuY29sb3JBbHRcclxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSlcIlxyXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKVwifTtcclxuXHJcbiAgbWFyZ2luOiAkeyhwcm9wcykgPT4gKHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIil9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1heC13aWR0aDogNjcycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGYxNjI0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjE1MHB4XCIgOiBcIjI2MnB4XCIpfTtcclxuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjUycHhcIiA6IFwiNjRweFwiKX07XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMjRweFwiKX07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAkeyh7IGFsdCwgZm9ybSB9KSA9PiAoYWx0IHx8IGZvcm0gPyBcIjBcIiA6IFwiMCAwIDgwcHhcIil9O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+XHJcbiAgICBhbHRcclxuICAgICAgPyBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjYyMmUgMCUsICNCMTMzRkYgMTAwJSlcIlxyXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKVwifTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gKGRpc2FibGVkID8gXCIuNVwiIDogXCIxXCIpfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgd2lkdGg6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjE1MHB4XCIgOiBcIjE4NHB4XCIpfTtcclxuICAgIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiNTJweFwiIDogXCI0OHB4XCIpfTtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIxNnB4XCIpfTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjBcIiA6IFwiNjRweFwiKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjBcIiA6IFwiMzJweFwiKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT5cclxuICAgIGFsdFxyXG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKVwiXHJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpXCJ9O1xyXG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gKGRpc2FibGVkID8gXCIuNVwiIDogXCIxXCIpfTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIyMHB4XCIgOiBcIjI0cHhcIil9O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PlxyXG4gICAgZGlzYWJsZWRcclxuICAgICAgPyBcImluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKVwiXHJcbiAgICAgIDogXCJub25lXCJ9O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjphY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwZGJkOCAwJSwgI2IxMzNmZiAxMDAlKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIxNnB4XCIpfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIyNHB4XCIgOiBcIjE2cHhcIil9O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIxNnB4XCIgOiBcIjhweFwiKX07XHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMFwiIDogXCI4cHhcIil9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIzMnB4XCIgOiBcIjI0cHhcIil9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBoZWlnaHQ6ICR7KHsgbmF2IH0pID0+IChuYXYgPyBcIjE2cHhcIiA6IFwiMjRweFwiKX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIzMnB4XCIgOiBcIjE2cHhcIil9O1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==