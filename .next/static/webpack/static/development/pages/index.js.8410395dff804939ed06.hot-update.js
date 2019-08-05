webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _sections_home_thumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/home/thumbs */ "./sections/home/thumbs/index.js");
/* harmony import */ var _sections_home_landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/home/landing */ "./sections/home/landing/index.js");
/* harmony import */ var _sections_home_bio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/home/bio */ "./sections/home/bio/index.js");
var _jsxFileName = "/Users/justin.w/Documents/GitHub/portfolio/pages/index.js";





function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_home_landing__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_home_thumbs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sections_home_bio__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/***/ }),

/***/ "./sections/home/bio/Bio.styled.js":
/*!*****************************************!*\
  !*** ./sections/home/bio/Bio.styled.js ***!
  \*****************************************/
/*! exports provided: ContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 960px;\n    margin: 0 auto;\n\n    padding-top: 80px;\n    padding-bottom: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./sections/home/bio/index.js":
/*!************************************!*\
  !*** ./sections/home/bio/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bio_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bio.styled */ "./sections/home/bio/Bio.styled.js");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Grid */ "./components/Grid.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Typography */ "./components/Typography.js");
var _jsxFileName = "/Users/justin.w/Documents/GitHub/portfolio/sections/home/bio/index.js";





var Bio = function Bio() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bio_styled__WEBPACK_IMPORTED_MODULE_1__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["SubHeading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Background"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Small"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["Body"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "I'm a product designer at ecobee, where my team designs software for smart hardware. My role revolves around our commercial offering, SmartBuildings, a SAAS product that lets companies manage all of their thermostats through a single interface. Hailing from a 7 year background in corporate finance and data management, I transitioned into design by way of YSDN (2015-2018)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_2__["Small"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_3__["Body"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Lately, I think a lot about how to better design, test and measure how well software can meet and exceed customer needs."));
};

/* harmony default export */ __webpack_exports__["default"] = (Bio);

/***/ })

})
//# sourceMappingURL=index.js.8410395dff804939ed06.hot-update.js.map