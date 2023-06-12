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
  visit: "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwiY29kZSIsInZpc2l0IiwiaWQiLCJkYXRlIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQ1QsNmlCQUhKO0FBSUVDLE9BQUssRUFBRSxtQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsS0FBWCxFQUFrQixRQUFsQixFQUE0QixTQUE1QixDQUxSO0FBTUVDLE1BQUksRUFBRSw0R0FOUjtBQU9FQyxPQUFLLEVBQUUsRUFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQURzQixFQVd0QjtBQUNFTixPQUFLLEVBQUUsaUJBRFQ7QUFFRUMsYUFBVyxFQUNULGliQUhKO0FBSUVDLE9BQUssRUFBRSwwQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUxSO0FBTUVDLE1BQUksRUFBRSxpREFOUjtBQU9FQyxPQUFLLEVBQUUsRUFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQVhzQixFQXFCdEI7QUFDRU4sT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFDVCxpYUFISjtBQUlFQyxPQUFLLEVBQUUsb0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLFFBQVosRUFBc0IsTUFBdEIsRUFBOEIsS0FBOUIsRUFBcUMsWUFBckMsQ0FMUjtBQU1FQyxNQUFJLEVBQUUsNkNBTlI7QUFPRUMsT0FBSyxFQUFFLEVBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0FyQnNCLEVBK0J0QjtBQUNFTixPQUFLLEVBQUUsNEJBRFQ7QUFFRUMsYUFBVyxFQUNULGtTQUhKO0FBSUVDLE9BQUssRUFBRSxpQ0FKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELENBTFI7QUFNRUMsTUFBSSxFQUFFLEVBTlI7QUFPRUMsT0FBSyxFQUFFLHFDQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBL0JzQixFQXlDdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUNULHNqQkFISjtBQUlFQyxPQUFLLEVBQUUsR0FKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixHQUFqQixFQUFzQixPQUF0QixFQUErQixTQUEvQixDQUxSO0FBTUVDLE1BQUksRUFBRSxFQU5SO0FBT0VDLE9BQUssRUFBRSwwQkFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQXpDc0IsRUFtRHRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFDVCxpS0FISjtBQUlFQyxPQUFLLEVBQUUsc0JBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsS0FBdEIsQ0FMUjtBQU1FSSxNQUFJLEVBQUUsYUFOUjtBQU9FSCxNQUFJLEVBQUUsRUFQUjtBQVFFQyxPQUFLLEVBQUUsRUFSVDtBQVNFQyxJQUFFLEVBQUU7QUFUTixDQW5Ec0IsQ0FBakI7QUFnRUEsSUFBTUUsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FMMEIsRUFNMUI7QUFDRUQsTUFBSSxFQUFFLElBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FOMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTY0MDczOTc0ZTc1NzQwYzFkMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJSYXkgVHJhY2luZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSBsZWFybmVkIGFib3V0IGRpZmZlcmVudCB0ZWNobmlxdWVzIGFuZCBjb25jZXB0cyBpbiBjb21wdXRlciBncmFwaGljcy4gVGhlc2UgaW5jbHVkZSBzaGFkaW5nIG1ldGhvZHMgc3VjaCBhcyBHb3VyYXVkIHNoYWRpbmcgYW5kIFBob25nIHNoYWRpbmcsIHRleHR1cmUgbWFwcGluZywgYW50aS1hbGlhc2luZyBtZXRob2RzLCBoaWRkZW4gc3VyZmFjZSByZW1vdmFsIHVzaW5nIFotYnVmZmVyaW5nLCBhbmQgcmF5IHRyYWNpbmcuIEkgYWxzbyBnYWluZWQga25vd2xlZGdlIGFib3V0IHNwYXRpYWwgZGF0YSBzdHJ1Y3R1cmVzIGZvciBhY2NlbGVyYXRpbmcgcmF5IHRyYWNpbmcsIHRoZSBQaG9uZyBpbGx1bWluYXRpb24gbW9kZWwgaW4gcmF5IHRyYWNpbmcsIGFuZCB0aGUgaW1wb3J0YW5jZSBvZiBsaWdodCwgY29sb3IsIGFuZCBodW1hbiB2aXNpb24gaW4gY29tcHV0ZXIgZ3JhcGhpY3MuIEFkZGl0aW9uYWxseSwgY292ZXJlZCB0b3BpY3Mgc3VjaCBhcyB0ZXh0dXJlIHN5bnRoZXNpcywgc2NpZW50aWZpYyB2aXN1YWxpemF0aW9uLCBhbmQgYW5pbWF0aW9uIHByaW5jaXBsZXMuXCIsXHJcbiAgICBpbWFnZTogXCJpbWFnZXMvcmF5MTAxLnBuZ1wiLFxyXG4gICAgdGFnczogW1wiTWF0bGFiXCIsIFwiQysrXCIsIFwiUHl0aG9uXCIsIFwiQmxlbmRlclwiXSxcclxuICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL0pvaG5Ib2ZiYXVlci9GdW5kYW1lbnRhbHMtb2YtQ29tcHV0ZXItR3JhcGhpY3MvdHJlZS9tYWluL1Byb2plY3RfM19SYXl0cmFjaW5nL1Byb2plY3RfM1wiLFxyXG4gICAgdmlzaXQ6IFwiXCIsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvbXB1dGVyIFZpc2lvblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSSBleHBsb3JlZCBjb21wdXRlciB2aXNpb24gYW5kIGl0cyBhaW0gdG8gcHJvdmlkZSBjb21wdXRlcnMgd2l0aCBodW1hbi1sZXZlbCBwZXJjZXB0aW9uLiBCeSBlbXBsb3lpbmcgbWF0aCBhbmQgcGVyY2VwdGlvbiBwaXBlbGluZXMsIHdlIGRldGVybWluZSB3aGF0IHRvIGZvY3VzIG9uIGFuZCB3aGF0IHdlIGNhbiB1bmRlcnN0YW5kIHRocm91Z2ggaW1hZ2UgZmVhdHVyZXMgYW5kIHNlbWFudGljIHNlZ21lbnRhdGlvbi4gV2hpbGUgY29tcHV0ZXJzIGV4Y2VsIGF0IGNlcnRhaW4gdGFza3MsIGh1bWFucyBzdGlsbCBvdXRwZXJmb3JtIHRoZW0gaW4gbW9yZSBjb21wbGV4IGFzcGVjdHMsIGJ1dCBzaWduaWZpY2FudCBhZHZhbmNlbWVudHMgaGF2ZSBiZWVuIG1hZGUgaW4gdGhlIGZpZWxkLCByZXNoYXBpbmcgb3VyIHBlcmNlcHRpb24gb2YgZGlmZmljdWx0eS5cIixcclxuICAgIGltYWdlOiBcImltYWdlcy9pbWcwNV8wNGxpbmVzLnBuZ1wiLFxyXG4gICAgdGFnczogW1wiTWF0bGFiXCIsIFwicHl0aG9uXCJdLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vSm9obkhvZmJhdWVyL0NvbXB1dGVyLVZpc2lvblwiLFxyXG4gICAgdmlzaXQ6IFwiXCIsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNhcHN0b25lIFByb2plY3RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkkgZW5naW5lZXJlZCBhIExpYnJhcnkgd2Vic2l0ZSBwYWdlIHRoYXQgaW1wbGVtZW50cyBhdXRoZW50aWNhdGlvbiB0b2tlbnMgYW5kIGEgZGF0YWJhc2UgdG8gZmFjaWxpdGF0ZSB1c2VycyBpbiBwcm9jdXJpbmcgYm9va3MuIExldmVyYWdpbmcgYSBmdWxsIHN0YWNrIGZyYW1ld29yaywgSSBlbXBsb3llZCBEamFuZ28sIE15U1FMLCBQeXRob24sIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQuIFRoaXMgcHJvamVjdCBwcm92aWRlZCBtZSB3aXRoIGEgcHJvZm91bmQgaW1tZXJzaW9uIGluIHRoZSBtdWx0aWZhcmlvdXMgcmVhbG0gb2YgZnVsbCBzdGFjayBkZXZlbG9wbWVudCwgZW5jb21wYXNzaW5nIGEgcG9wdWxhciBmcmFtZXdvcmsgYWxvbmdzaWRlIGJvdGggc2VydmVyLXNpZGUgYW5kIGZyb250LWVuZCBwcm9ncmFtbWluZy5cIixcclxuICAgIGltYWdlOiBcImltYWdlcy9MaWJQYWdlLnBuZ1wiLFxyXG4gICAgdGFnczogW1wiTW9uZ29EQlwiLCBcIlB5dGhvblwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJKYXZhU2NyaXB0XCJdLFxyXG4gICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vSm9obkhvZmJhdWVyL0xpYnJhcnlQYWdlXCIsXHJcbiAgICB2aXNpdDogXCJcIixcclxuICAgIGlkOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUHVsc2FyIFNlYXJjaCBDb2xhYm9yYXRvcnlcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFwcGxpZWQgZXh0ZW5zaXZlIGFuYWx5c2lzIG9mIHRoZSBkYXRhIG9idGFpbmVkIGZyb20gdGhlIEFyZWNpYm8gUmFkaW8gVGVsZXNjb3BlIGFuZCBlcXVpdmFsZW50IGluc3RydW1lbnRzIHRvIG1ldGljdWxvdXNseSBjbGFzc2lmeSB0aGUgZGF0YSBpbnRvIHRocmVlIGNhdGVnb3JpZXMsIG5hbWVseSAnbm9pc2UnIChiYWNrZ3JvdW5kIHJhZGlhdGlvbiksIHJhZGlvIGZyZXF1ZW5jeSBpbnRlcmZlcmVuY2Ugb2YgaHVtYW4gb3JpZ2luLCBvciBmYXN0IHJhZGlvIGJ1cnN0LCBzdWNoIGFzIGEgcHVsc2FyLlwiLFxyXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL0dyZWVuX0JhbmtfVGVsZXNjb3BlLmpwZ1wiLFxyXG4gICAgdGFnczogW1wiUHl0aG9uXCJdLFxyXG4gICAgY29kZTogXCJcIixcclxuICAgIHZpc2l0OiBcImh0dHBzOi8vc2l0ZXMucHN1LmVkdS9wZW5uc3RhdGVwc2MvXCIsXHJcbiAgICBpZDogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhhY2stYS1UaG9uXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJbiBTZXB0ZW1iZXIgb2YgMjAxOCwgSSBoYWQgdGhlIG9wcG9ydHVuaXR5IHRvIHBhcnRpY2lwYXRlIGluIGEgbG9jYWwgSGFja2F0aG9uIGV2ZW50IGF0IERvd25pbmd0b3duIFN0ZW0gQWNhZGVteSwgd2hlcmUgbXkgdGVhbSBhbmQgSSBlbmdhZ2VkIGluIHRoZSBlbmQtdG8tZW5kIGRlc2lnbiwgcHJvZ3JhbW1pbmcsIGFuZCBkZW1vbnN0cmF0aW9uIG9mIGlubm92YXRpdmUgc29sdXRpb25zIGFpbWVkIGF0IHRhY2tsaW5nIHJlYWwtd29ybGQgaXNzdWVzLiBUaGlzIGV4cGVyaWVuY2UgaWduaXRlZCBteSBlbnRodXNpYXNtIHRvd2FyZHMgY29kaW5nIGNyZWF0aXZlIHByb2JsZW0tc29sdmluZyBpZGVhcyB0aGF0IGFyZSBwaXZvdGFsIHRvIHJlc29sdmluZyB0aGUgY2hhbGxlbmdlcyBvZiB0b2RheTsgYW5kIHdoZW4gSSByZWFsaXplZCBteSBwYXNzaW9uIGZvciBFbmdpbmVlcmluZy4gQWZ0ZXIgd2lubmluZyBzb21lIHByb3RvdHlwaW5nIGJyZWFkYm9hcmRzIG15IGludGVyZXN0cyBleHBsb2RlZCwgbGVhZGluZyBtZSB0byBhdHRlbmQgdHdvIEhhY2thdGhvbnMgYXQgUGVubiBTdGF0ZS5cIixcclxuICAgIGltYWdlOiBcIiBcIixcclxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcIkMjXCIsIFwiQ1wiLCBcIlVuaXR5XCIsIFwiQmxlbmRlclwiXSxcclxuICAgIGNvZGU6IFwiXCIsXHJcbiAgICB2aXNpdDogXCJodHRwczovL2hhY2twc3Uub3JnL2xpdmVcIixcclxuICAgIGlkOiA0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUm9ib3RpY3NcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlByb2dyYW0gVGVsZS1PcCBjb250cm9scyBhbmQgQXV0b25vbW91cyBjb250cm9scyBmb3IgSVIgYW5kIFNvbmFyIHNlbnNvcnMuIFV0aWxpemVkIG1vdG9yIGVuY29kZXJzIGZvciBtb3JlIHJvYnVzdCBkaXN0YW5jZSBtZWFzdXJlbWVudCBkdXJpbmcgYXV0b25vbW91cyBtb2RlLlwiLFxyXG4gICAgaW1hZ2U6IFwiaW1hZ2VzL3JvYm90aWNzNC5qcGdcIixcclxuICAgIHRhZ3M6IFtcIlJvYm90Q1wiLCBcIkFyZHVpbm9cIiwgXCJDKytcIl0sXHJcbiAgICBkYXRlOiBcIjIwMTQgLSAyMDE3XCIsXHJcbiAgICBjb2RlOiBcIlwiLFxyXG4gICAgdmlzaXQ6IFwiXCIsXHJcbiAgICBpZDogNCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcclxuICB7IHllYXI6IDIwMTcsIHRleHQ6IFwiSVQgSGlnaHNjaG9vbCBJbnRlcm5zaGlwXCIgfSxcclxuICB7IHllYXI6IDIwMTgsIHRleHQ6IFwiQ0FEIEhpZ2hzY2hvb2wgSW50ZXJuc2hpcCBjcmVhdGluZyBTaGVldCBNZXRhbCBQYXJ0c1wiIH0sXHJcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiBcIkhhY2stQS1UaG9uIEF0IFBlbm4gU3RhdGUgVW5pdmVyc2l0eSBQYXJrXCIgfSxcclxuICB7IHllYXI6IDIwMjAsIHRleHQ6IFwiU29mdHdhcmUgRGV2ZWxvcGVyIEludGVybnNoaXAgYXQgTmF2U2VhXCIgfSxcclxuICB7IHllYXI6IDIwMjEsIHRleHQ6IFwiR3JhZHVhdGVkIEZyb20gUGVubiBTdGF0ZSBVbml2ZXJzaXR5XCIgfSxcclxuICB7XHJcbiAgICB5ZWFyOiAyMDIyLFxyXG4gICAgdGV4dDogXCJRQSAmIEp1bmlvciBTb2Z0d2FyZSBFbmdpbmVlcmluZyBQb3NpdGlvbiBhdCBDYXBnZW1pbmlcIixcclxuICB9LFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9