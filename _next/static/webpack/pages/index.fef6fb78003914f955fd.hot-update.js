self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: "Ray Tracing",
  description: "I learned about different techniques and concepts in computer graphics. These include shading methods such as Gouraud shading and Phong shading, texture mapping, anti-aliasing methods, hidden surface removal using Z-buffering, and ray tracing. I also gained knowledge about spatial data structures for accelerating ray tracing, the Phong illumination model in ray tracing, and the importance of light, color, and human vision in computer graphics. Additionally, covered topics such as texture synthesis, scientific visualization, and animation principles.",
  image: "images/ray101.png",
  tags: ["Matlab", "C++", "Python", "Blender"],
  code: "https://github.com/JohnHofbauer/Fundamentals-of-Computer-Graphics/tree/main/Project_3_Raytracing/Project_3",
  visit: "",
  id: 0
}, {
  title: "Computer Vision",
  description: "I explored computer vision and its aim to provide computers with human-level perception. By employing math and perception pipelines, we determine what to focus on and what we can understand through image features and semantic segmentation. While computers excel at certain tasks, humans still outperform them in more complex aspects, but significant advancements have been made in the field, reshaping our perception of difficulty.",
  image: "images/img05_04lines.png",
  tags: ["Matlab", "python"],
  code: "https://github.com/JohnHofbauer/Computer-Vision",
  visit: "",
  id: 1
}, {
  title: "Capstone Project",
  description: "I engineered a Library website page that implements authentication tokens and a database to facilitate users in procuring books. Leveraging a full stack framework, I employed Django, MySQL, Python, HTML, CSS, and JavaScript. This project provided me with a profound immersion in the multifarious realm of full stack development, encompassing a popular framework alongside both server-side and front-end programming.",
  image: "images/LibPage.png",
  tags: ["MongoDB", "Python", "HTML", "CSS", "JavaScript"],
  code: "https://github.com/JohnHofbauer/LibraryPage",
  visit: "",
  id: 2
}, {
  title: "Pulsar Search Colaboratory",
  description: "Applied extensive analysis of the data obtained from the Arecibo Radio Telescope and equivalent instruments to meticulously classify the data into three categories, namely 'noise' (background radiation), radio frequency interference of human origin, or fast radio burst, such as a pulsar.",
  image: "images/Green_Bank_Telescope.jpg",
  tags: ["Python"],
  code: "",
  visit: "https://sites.psu.edu/pennstatepsc/",
  id: 3
}, {
  title: "Hack-a-Thon",
  description: "In September of 2018, I had the opportunity to participate in a local Hackathon event at Downingtown Stem Academy, where my team and I engaged in the end-to-end design, programming, and demonstration of innovative solutions aimed at tackling real-world issues. This experience ignited my enthusiasm towards coding creative problem-solving ideas that are pivotal to resolving the challenges of today; and when I realized my passion for Engineering. After winning some prototyping breadboards my interests exploded, leading me to attend two Hackathons at Penn State.",
  image: " ",
  tags: ["Python", "C#", "C", "Unity", "Blender"],
  code: "",
  visit: "https://hackpsu.org/live",
  id: 4
}, {
  title: "Robotics",
  description: "Program Tele-Op controls and Autonomous controls for IR and Sonar sensors. Utilized motor encoders for more robust distance measurement during autonomous mode.",
  image: "images/robotics4.jpg",
  tags: ["RobotC", "Arduino", "C++"],
  date: "2014 - 2017",
  code: "",
  visit: "https://www.ftc7244.org/",
  id: 4
}];
var TimeLineData = [{
  year: 2017,
  text: "IT Highschool Internship"
}, {
  year: 2018,
  text: "CAD Highschool Internship creating Sheet Metal Parts"
}, {
  year: 2019,
  text: "Hack-A-Thon At Penn State University Park"
}, {
  year: 2020,
  text: "Software Developer Internship at NavSea"
}, {
  year: 2021,
  text: "Graduated From Penn State University"
}, {
  year: 2022,
  text: "QA & Junior Software Engineering Position at Capgemini"
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwiY29kZSIsInZpc2l0IiwiaWQiLCJkYXRlIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQ1QsNmlCQUhKO0FBSUVDLE9BQUssRUFBRSxtQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixRQUFsQixFQUE0QixTQUE1QixDQUxSO0FBTUVDLE1BQUksRUFBRSw0R0FOUjtBQU9FQyxPQUFLLEVBQUUsRUFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQURzQixFQVd0QjtBQUNFTixPQUFLLEVBQUUsaUJBRFQ7QUFFRUMsYUFBVyxFQUNULGliQUhKO0FBSUVDLE9BQUssRUFBRSwwQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUxSO0FBTUVDLE1BQUksRUFBRSxpREFOUjtBQU9FQyxPQUFLLEVBQUUsRUFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQVhzQixFQXFCdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFDVCxpYUFISjtBQUlFQyxPQUFLLEVBQUUsb0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsTUFBdEIsRUFBOEIsS0FBOUIsRUFBcUMsWUFBckMsQ0FMUjtBQU1FQyxNQUFJLEVBQUUsNkNBTlI7QUFPRUMsT0FBSyxFQUFFLEVBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0FyQnNCLEVBK0J0QjtBQUNFTixPQUFLLEVBQUUsNEJBRFQ7QUFFRUMsYUFBVyxFQUNULGtTQUhKO0FBSUVDLE9BQUssRUFBRSxpQ0FKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELENBTFI7QUFNRUMsTUFBSSxFQUFFLEVBTlI7QUFPRUMsT0FBSyxFQUFFLHFDQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBL0JzQixFQXlDdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUNULHNqQkFISjtBQUlFQyxPQUFLLEVBQUUsR0FKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixHQUFqQixFQUFzQixPQUF0QixFQUErQixTQUEvQixDQUxSO0FBTUVDLE1BQUksRUFBRSxFQU5SO0FBT0VDLE9BQUssRUFBRSwwQkFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQXpDc0IsRUFtRHRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFDVCxpS0FISjtBQUlFQyxPQUFLLEVBQUUsc0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsS0FBdEIsQ0FMUjtBQU1FSSxNQUFJLEVBQUUsYUFOUjtBQU9FSCxNQUFJLEVBQUUsRUFQUjtBQVFFQyxPQUFLLEVBQUUsMEJBUlQ7QUFTRUMsSUFBRSxFQUFFO0FBVE4sQ0FuRHNCLENBQWpCO0FBZ0VBLElBQU1FLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLEVBTTFCO0FBQ0VELE1BQUksRUFBRSxJQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTjBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZlZjZmYjc4MDAzOTE0Zjk1NWZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUmF5IFRyYWNpbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgbGVhcm5lZCBhYm91dCBkaWZmZXJlbnQgdGVjaG5pcXVlcyBhbmQgY29uY2VwdHMgaW4gY29tcHV0ZXIgZ3JhcGhpY3MuIFRoZXNlIGluY2x1ZGUgc2hhZGluZyBtZXRob2RzIHN1Y2ggYXMgR291cmF1ZCBzaGFkaW5nIGFuZCBQaG9uZyBzaGFkaW5nLCB0ZXh0dXJlIG1hcHBpbmcsIGFudGktYWxpYXNpbmcgbWV0aG9kcywgaGlkZGVuIHN1cmZhY2UgcmVtb3ZhbCB1c2luZyBaLWJ1ZmZlcmluZywgYW5kIHJheSB0cmFjaW5nLiBJIGFsc28gZ2FpbmVkIGtub3dsZWRnZSBhYm91dCBzcGF0aWFsIGRhdGEgc3RydWN0dXJlcyBmb3IgYWNjZWxlcmF0aW5nIHJheSB0cmFjaW5nLCB0aGUgUGhvbmcgaWxsdW1pbmF0aW9uIG1vZGVsIGluIHJheSB0cmFjaW5nLCBhbmQgdGhlIGltcG9ydGFuY2Ugb2YgbGlnaHQsIGNvbG9yLCBhbmQgaHVtYW4gdmlzaW9uIGluIGNvbXB1dGVyIGdyYXBoaWNzLiBBZGRpdGlvbmFsbHksIGNvdmVyZWQgdG9waWNzIHN1Y2ggYXMgdGV4dHVyZSBzeW50aGVzaXMsIHNjaWVudGlmaWMgdmlzdWFsaXphdGlvbiwgYW5kIGFuaW1hdGlvbiBwcmluY2lwbGVzLlwiLFxyXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL3JheTEwMS5wbmdcIixcclxuICAgIHRhZ3M6IFtcIk1hdGxhYlwiLCBcIkMrK1wiLCBcIlB5dGhvblwiLCBcIkJsZW5kZXJcIl0sXHJcbiAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huSG9mYmF1ZXIvRnVuZGFtZW50YWxzLW9mLUNvbXB1dGVyLUdyYXBoaWNzL3RyZWUvbWFpbi9Qcm9qZWN0XzNfUmF5dHJhY2luZy9Qcm9qZWN0XzNcIixcclxuICAgIHZpc2l0OiBcIlwiLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDb21wdXRlciBWaXNpb25cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgZXhwbG9yZWQgY29tcHV0ZXIgdmlzaW9uIGFuZCBpdHMgYWltIHRvIHByb3ZpZGUgY29tcHV0ZXJzIHdpdGggaHVtYW4tbGV2ZWwgcGVyY2VwdGlvbi4gQnkgZW1wbG95aW5nIG1hdGggYW5kIHBlcmNlcHRpb24gcGlwZWxpbmVzLCB3ZSBkZXRlcm1pbmUgd2hhdCB0byBmb2N1cyBvbiBhbmQgd2hhdCB3ZSBjYW4gdW5kZXJzdGFuZCB0aHJvdWdoIGltYWdlIGZlYXR1cmVzIGFuZCBzZW1hbnRpYyBzZWdtZW50YXRpb24uIFdoaWxlIGNvbXB1dGVycyBleGNlbCBhdCBjZXJ0YWluIHRhc2tzLCBodW1hbnMgc3RpbGwgb3V0cGVyZm9ybSB0aGVtIGluIG1vcmUgY29tcGxleCBhc3BlY3RzLCBidXQgc2lnbmlmaWNhbnQgYWR2YW5jZW1lbnRzIGhhdmUgYmVlbiBtYWRlIGluIHRoZSBmaWVsZCwgcmVzaGFwaW5nIG91ciBwZXJjZXB0aW9uIG9mIGRpZmZpY3VsdHkuXCIsXHJcbiAgICBpbWFnZTogXCJpbWFnZXMvaW1nMDVfMDRsaW5lcy5wbmdcIixcclxuICAgIHRhZ3M6IFtcIk1hdGxhYlwiLCBcInB5dGhvblwiXSxcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL0pvaG5Ib2ZiYXVlci9Db21wdXRlci1WaXNpb25cIixcclxuICAgIHZpc2l0OiBcIlwiLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDYXBzdG9uZSBQcm9qZWN0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJIGVuZ2luZWVyZWQgYSBMaWJyYXJ5IHdlYnNpdGUgcGFnZSB0aGF0IGltcGxlbWVudHMgYXV0aGVudGljYXRpb24gdG9rZW5zIGFuZCBhIGRhdGFiYXNlIHRvIGZhY2lsaXRhdGUgdXNlcnMgaW4gcHJvY3VyaW5nIGJvb2tzLiBMZXZlcmFnaW5nIGEgZnVsbCBzdGFjayBmcmFtZXdvcmssIEkgZW1wbG95ZWQgRGphbmdvLCBNeVNRTCwgUHl0aG9uLCBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBUaGlzIHByb2plY3QgcHJvdmlkZWQgbWUgd2l0aCBhIHByb2ZvdW5kIGltbWVyc2lvbiBpbiB0aGUgbXVsdGlmYXJpb3VzIHJlYWxtIG9mIGZ1bGwgc3RhY2sgZGV2ZWxvcG1lbnQsIGVuY29tcGFzc2luZyBhIHBvcHVsYXIgZnJhbWV3b3JrIGFsb25nc2lkZSBib3RoIHNlcnZlci1zaWRlIGFuZCBmcm9udC1lbmQgcHJvZ3JhbW1pbmcuXCIsXHJcbiAgICBpbWFnZTogXCJpbWFnZXMvTGliUGFnZS5wbmdcIixcclxuICAgIHRhZ3M6IFtcIk1vbmdvREJcIiwgXCJQeXRob25cIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiSmF2YVNjcmlwdFwiXSxcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL0pvaG5Ib2ZiYXVlci9MaWJyYXJ5UGFnZVwiLFxyXG4gICAgdmlzaXQ6IFwiXCIsXHJcbiAgICBpZDogMixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlB1bHNhciBTZWFyY2ggQ29sYWJvcmF0b3J5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBcHBsaWVkIGV4dGVuc2l2ZSBhbmFseXNpcyBvZiB0aGUgZGF0YSBvYnRhaW5lZCBmcm9tIHRoZSBBcmVjaWJvIFJhZGlvIFRlbGVzY29wZSBhbmQgZXF1aXZhbGVudCBpbnN0cnVtZW50cyB0byBtZXRpY3Vsb3VzbHkgY2xhc3NpZnkgdGhlIGRhdGEgaW50byB0aHJlZSBjYXRlZ29yaWVzLCBuYW1lbHkgJ25vaXNlJyAoYmFja2dyb3VuZCByYWRpYXRpb24pLCByYWRpbyBmcmVxdWVuY3kgaW50ZXJmZXJlbmNlIG9mIGh1bWFuIG9yaWdpbiwgb3IgZmFzdCByYWRpbyBidXJzdCwgc3VjaCBhcyBhIHB1bHNhci5cIixcclxuICAgIGltYWdlOiBcImltYWdlcy9HcmVlbl9CYW5rX1RlbGVzY29wZS5qcGdcIixcclxuICAgIHRhZ3M6IFtcIlB5dGhvblwiXSxcclxuICAgIGNvZGU6IFwiXCIsXHJcbiAgICB2aXNpdDogXCJodHRwczovL3NpdGVzLnBzdS5lZHUvcGVubnN0YXRlcHNjL1wiLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJIYWNrLWEtVGhvblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSW4gU2VwdGVtYmVyIG9mIDIwMTgsIEkgaGFkIHRoZSBvcHBvcnR1bml0eSB0byBwYXJ0aWNpcGF0ZSBpbiBhIGxvY2FsIEhhY2thdGhvbiBldmVudCBhdCBEb3duaW5ndG93biBTdGVtIEFjYWRlbXksIHdoZXJlIG15IHRlYW0gYW5kIEkgZW5nYWdlZCBpbiB0aGUgZW5kLXRvLWVuZCBkZXNpZ24sIHByb2dyYW1taW5nLCBhbmQgZGVtb25zdHJhdGlvbiBvZiBpbm5vdmF0aXZlIHNvbHV0aW9ucyBhaW1lZCBhdCB0YWNrbGluZyByZWFsLXdvcmxkIGlzc3Vlcy4gVGhpcyBleHBlcmllbmNlIGlnbml0ZWQgbXkgZW50aHVzaWFzbSB0b3dhcmRzIGNvZGluZyBjcmVhdGl2ZSBwcm9ibGVtLXNvbHZpbmcgaWRlYXMgdGhhdCBhcmUgcGl2b3RhbCB0byByZXNvbHZpbmcgdGhlIGNoYWxsZW5nZXMgb2YgdG9kYXk7IGFuZCB3aGVuIEkgcmVhbGl6ZWQgbXkgcGFzc2lvbiBmb3IgRW5naW5lZXJpbmcuIEFmdGVyIHdpbm5pbmcgc29tZSBwcm90b3R5cGluZyBicmVhZGJvYXJkcyBteSBpbnRlcmVzdHMgZXhwbG9kZWQsIGxlYWRpbmcgbWUgdG8gYXR0ZW5kIHR3byBIYWNrYXRob25zIGF0IFBlbm4gU3RhdGUuXCIsXHJcbiAgICBpbWFnZTogXCIgXCIsXHJcbiAgICB0YWdzOiBbXCJQeXRob25cIiwgXCJDI1wiLCBcIkNcIiwgXCJVbml0eVwiLCBcIkJsZW5kZXJcIl0sXHJcbiAgICBjb2RlOiBcIlwiLFxyXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9oYWNrcHN1Lm9yZy9saXZlXCIsXHJcbiAgICBpZDogNCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlJvYm90aWNzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcm9ncmFtIFRlbGUtT3AgY29udHJvbHMgYW5kIEF1dG9ub21vdXMgY29udHJvbHMgZm9yIElSIGFuZCBTb25hciBzZW5zb3JzLiBVdGlsaXplZCBtb3RvciBlbmNvZGVycyBmb3IgbW9yZSByb2J1c3QgZGlzdGFuY2UgbWVhc3VyZW1lbnQgZHVyaW5nIGF1dG9ub21vdXMgbW9kZS5cIixcclxuICAgIGltYWdlOiBcImltYWdlcy9yb2JvdGljczQuanBnXCIsXHJcbiAgICB0YWdzOiBbXCJSb2JvdENcIiwgXCJBcmR1aW5vXCIsIFwiQysrXCJdLFxyXG4gICAgZGF0ZTogXCIyMDE0IC0gMjAxN1wiLFxyXG4gICAgY29kZTogXCJcIixcclxuICAgIHZpc2l0OiBcImh0dHBzOi8vd3d3LmZ0YzcyNDQub3JnL1wiLFxyXG4gICAgaWQ6IDQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXHJcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiBcIklUIEhpZ2hzY2hvb2wgSW50ZXJuc2hpcFwiIH0sXHJcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiBcIkNBRCBIaWdoc2Nob29sIEludGVybnNoaXAgY3JlYXRpbmcgU2hlZXQgTWV0YWwgUGFydHNcIiB9LFxyXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogXCJIYWNrLUEtVGhvbiBBdCBQZW5uIFN0YXRlIFVuaXZlcnNpdHkgUGFya1wiIH0sXHJcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiBcIlNvZnR3YXJlIERldmVsb3BlciBJbnRlcm5zaGlwIGF0IE5hdlNlYVwiIH0sXHJcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiBcIkdyYWR1YXRlZCBGcm9tIFBlbm4gU3RhdGUgVW5pdmVyc2l0eVwiIH0sXHJcbiAge1xyXG4gICAgeWVhcjogMjAyMixcclxuICAgIHRleHQ6IFwiUUEgJiBKdW5pb3IgU29mdHdhcmUgRW5naW5lZXJpbmcgUG9zaXRpb24gYXQgQ2FwZ2VtaW5pXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==