(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "../node_modules/classnames/index.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/classnames/index.js from dll-reference vendor ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))("../node_modules/classnames/index.js");

/***/ }),

/***/ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************************************************!*\
  !*** delegated ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js from dll-reference vendor ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))("../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

/***/ }),

/***/ "../node_modules/html2canvas/dist/html2canvas.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/html2canvas/dist/html2canvas.js from dll-reference vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))("../node_modules/html2canvas/dist/html2canvas.js");

/***/ }),

/***/ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/isomorphic-fetch/fetch-npm-browserify.js from dll-reference vendor ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))("../node_modules/isomorphic-fetch/fetch-npm-browserify.js");

/***/ }),

/***/ "../node_modules/jspdf/dist/jspdf.min.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/jspdf/dist/jspdf.min.js from dll-reference vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))("../node_modules/jspdf/dist/jspdf.min.js");

/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!******************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference vendor ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))("../node_modules/prop-types/index.js");

/***/ }),

/***/ "./components/content.js":
/*!*******************************!*\
  !*** ./components/content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);








var Content =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Content, _React$Component);

  function Content(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Content);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Content).call(this, props));
    _this.state = {
      publications: []
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getPublications();
    }
  }, {
    key: "getPublications",
    value: function getPublications() {
      var _this2 = this;

      isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.github.com/users/fxpixels/repos').then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);

        if (!data.message) {
          _this2.setState({
            publications: data.filter(function (n) {
              return !n.fork;
            }).sort(function (a, b) {
              return a.stargazers_count < b.stargazers_count;
            }).slice(0, 6)
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          basics = _this$props.basics,
          work = _this$props.work,
          project = _this$props.project,
          education = _this$props.education,
          awards = _this$props.awards,
          skills = _this$props.skills,
          interests = _this$props.interests,
          references = _this$props.references,
          ontherpublications = _this$props.ontherpublications;
      var publications = this.state.publications;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "col-md-9 card-wrapper pull-right"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card background-card"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "text-uppercase"
      }, "\u80CC\u666F\u8D44\u6599"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "background-details"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail",
        id: "about"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fs-lg icon-board"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "mobile-title"
      }, "\u81EA\u6211\u63CF\u8FF0")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "title text-uppercase"
      }, "\u81EA\u6211\u63CF\u8FF0"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled clear-margin"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "card card-nested clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content mop-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, basics.summary.map(function (v, k) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: k,
          className: "mop-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, v));
      }))))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail",
        id: "work-experience"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fs-lg icon-office"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "mobile-title"
      }, "\u5DE5\u4F5C\u7ECF\u5386")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "title text-uppercase"
      }, "\u5DE5\u4F5C\u7ECF\u5386"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled clear-margin"
      }, work.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: "card card-nested clearfix"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
          className: "header-title"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: n.website,
          target: "_blank"
        }, n.company)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-text"
        }, n.position)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "text-muted"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "space-right"
        }, n.startDate, " - ", n.endDate))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mop-wrapper space-bottom"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, n.summary)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, n.highlights.map(function (v, k) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            key: k,
            className: "mop-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, v));
        }))));
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail",
        id: "education"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fs-lg icon-graduation-cap"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "mobile-title"
      }, "\u6559\u80B2\u7ECF\u5386")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "title text-uppercase"
      }, "\u6559\u80B2\u7ECF\u5386"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled clear-margin"
      }, education.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: "card card-nested"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "clear-margin relative"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, n.institution, "\uFF0C", n.studyType, "\uFF0C\xA0"), n.area), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "text-muted"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", null, n.startDate, " - ", n.endDate)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", null, n.gpa), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "space-top labels"
        }, n.courses.map(function (v, k) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
            key: k,
            className: "label label-info"
          }, v);
        }))));
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail",
        id: "project-experience"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fs-lg icon-child"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "mobile-title"
      }, "\u9879\u76EE\u7ECF\u9A8C")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "title text-uppercase"
      }, "\u9879\u76EE\u7ECF\u9A8C"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled clear-margin"
      }, project.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: "card card-nested"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
          className: "header-title"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: n.website,
          target: "_blank"
        }, n.organization)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-text"
        }, n.position)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "text-muted"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", null, n.startDate, " - ", n.endDate)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mop-wrapper space-bottom"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "\u6280\u672F\u6808\uFF1A", n.summary)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, n.highlights.map(function (v, k) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            key: k,
            className: "mop-wrapper"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, v));
        }))));
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail",
        id: "publications"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fs-lg icon-newspaper"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "mobile-title"
      }, "\u4F5C\u54C1\u5C55\u793A")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "title text-uppercase"
      }, "\u4F5C\u54C1\u5C55\u793A"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled clear-margin"
      }, publications.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: "card card-nested"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
          className: "header-title"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: n.html_url,
          target: "_blank"
        }, n.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "header-text"
        }, "Star: ", n.stargazers_count, " Fork: ", n.forks_count)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "text-muted"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", null, n.releaseDate)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "mop-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, n.description))));
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "\u5176\u4ED6\u9879\u76EE")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "other-publications"
      }, ontherpublications.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: n.href,
          target: "_blank"
        }, n.name), "\uFF1A", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, n.summary), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
          className: "text-muted"
        }, n.releaseDate));
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail",
        id: "skills"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fs-lg icon-tools"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "mobile-title"
      }, "\u6280\u80FD\u8BC4\u4EF7")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "title text-uppercase"
      }, "\u6280\u80FD\u8BC4\u4EF7"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled clear-margin"
      }, skills.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: "card card-nested card-skills"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "skill-info"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, n.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "space-top labels"
        }, n.keywords.map(function (v, k) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
            key: k,
            className: "label label-info"
          }, v);
        }))));
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail",
        id: "interests"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fs-lg icon-heart"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "mobile-title"
      }, "\u5174\u8DA3\u7231\u597D")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "title text-uppercase"
      }, "\u5174\u8DA3\u7231\u597D"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled clear-margin"
      }, interests.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: "card card-nested"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, n.name)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "space-top labels"
        }, n.keywords.map(function (v, k) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
            key: k,
            className: "label label-info"
          }, v);
        })));
      }))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "detail",
        id: "references"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fs-lg icon-thumbs-up"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "mobile-title"
      }, "\u5EA7\u53F3\u94ED")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "title text-uppercase"
      }, "\u5EA7\u53F3\u94ED"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "content"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "list-unstyled clear-margin"
      }, references.map(function (n, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          className: "card card-nested"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("blockquote", {
          className: "quote"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, n.reference), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", null, n.name)));
      }))))))));
    }
  }]);

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Footer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Footer, _React$Component);

  function Footer(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Footer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Footer).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "col-md-12 card-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer"
      }, "\u7B80\u5386\u6A21\u677F\u7531 skyvow \u8BBE\u8BA1\u5F00\u53D1\uFF0C\u6700\u540E\u66F4\u65B0\u4E8E", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "date"
      }, "2019-01-10")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Navbar);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Navbar).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "handlerClick", function (e) {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "scrollToAnchor", function (anchorName) {
      if (anchorName) {
        var anchorElement = document.getElementById(anchorName);

        if (anchorElement) {
          anchorElement.scrollIntoView();

          _this.setState({
            isOpen: false
          });
        }
      }
    });

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Navbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var btncls = classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        'js-floating-nav-trigger': true,
        'floating-nav-trigger': true,
        'is-open': isOpen
      });
      var navcls = classnames__WEBPACK_IMPORTED_MODULE_8___default()({
        'floating-nav': true,
        'js-floating-nav': true,
        'is-visible': isOpen
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "col-md-12 nav-card-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: btncls,
        href: "javascript:;",
        onClick: this.handlerClick
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon-bars"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "close-icon"
      }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: btncls,
        href: "javascript:;",
        onClick: this.props.renderHTMLtoPDF,
        style: {
          bottom: '80px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "glyphicon glyphicon-download-alt",
        style: {
          lineHeight: '50px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: navcls
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('about');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-board"
      }), "\u81EA\u6211\u63CF\u8FF0")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('work-experience');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-office"
      }), "\u5DE5\u4F5C\u7ECF\u5386")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('education');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-graduation-cap"
      }), "\u6559\u80B2\u7ECF\u5386")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('project-experience');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-child"
      }), "\u9879\u76EE\u7ECF\u9A8C")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('publications');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-newspaper"
      }), "\u4F5C\u54C1\u5C55\u793A")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('skills');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-tools"
      }), "\u6280\u80FD\u8BC4\u4EF7")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('awards');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-trophy"
      }), "\u8363\u8A89\u8BC1\u4E66")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('interests');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-heart"
      }), "\u5174\u8DA3\u7231\u597D")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "javascript:;",
        onClick: function onClick() {
          return _this2.scrollToAnchor('references');
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "mr-10 icon-thumbs-up"
      }), "\u5EA7\u53F3\u94ED")))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/siderbar.js":
/*!********************************!*\
  !*** ./components/siderbar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);









var SiderBar =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SiderBar, _React$Component);

  function SiderBar(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SiderBar);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(SiderBar).call(this, props));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SiderBar, [{
    key: "render",
    value: function render() {
      var picture = 'https://s.gravatar.com/avatar/9acdb04e603c1cac2b893190f6dd5911?s=100&amp;r=pg&amp;d=mm';
      var _this$props = this.props,
          basics = _this$props.basics,
          languages = _this$props.languages;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "col-md-3 card-wrapper profile-card-wrapper affix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card profile-card"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "profile-pic-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "profile-pic"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "media-object img-circle center-block",
        src: basics.picture || picture
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "name-and-profession text-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, basics.name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b", null, basics.position)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "text-muted"
      }, basics.label))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "contact-details clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "detail"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icon fs-lg icon-profile"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "info"
      }, basics.gender, " ", basics.age, "\u5C81 ", basics.worklife, "\u5E74\u5DE5\u4F5C\u7ECF\u9A8C")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "detail"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icon fs-lg icon-location"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "info"
      }, basics.location)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "detail"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icon fs-lg icon-mail"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "link-disguise",
        href: "mailto:".concat(basics.email)
      }, basics.email))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "detail"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icon fs-lg icon-link"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: basics.website,
        target: "_blank"
      }, basics.website)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "social-links text-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, basics.profiles.map(function (n, i) {
        var cls = classnames__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
          'iconfont': true,
          'social-link': true
        }, "iconfont-".concat(n.network), n.network));
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "profiles"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: n.url,
          target: "_blank"
        }, n.name));
      })))));
    }
  }]);

  return SiderBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SiderBar);

/***/ }),

/***/ "./containers/main.js":
/*!****************************!*\
  !*** ./containers/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! html2canvas */ "../node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf */ "../node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_siderbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/siderbar */ "./components/siderbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/content */ "./components/content.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _utils_resume__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/resume */ "./utils/resume.js");

















var Main =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Main, _React$Component);

  function Main() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Main);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Main)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "renderHTMLtoPDF", function () {
      html2canvas__WEBPACK_IMPORTED_MODULE_8___default()(document.body, {
        onrendered: function onrendered(canvas) {
          var contentWidth = canvas.width;
          var contentHeight = canvas.height; //一页pdf显示html页面生成的canvas高度

          var pageHeight = contentWidth / 592.28 * 841.89; //未生成pdf的html页面高度

          var leftHeight = contentHeight; //页面偏移

          var position = 0; //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高

          var imgWidth = 595.28;
          var imgHeight = 592.28 / contentWidth * contentHeight;
          var pageData = canvas.toDataURL('image/jpeg', 1.0);
          var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_9___default.a('', 'pt', 'a4'); //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
          //当内容未超过pdf一页显示的范围，无需分页

          if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
          } else {
            while (leftHeight > 0) {
              pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
              leftHeight -= pageHeight;
              position -= 841.89; //避免添加空白页

              if (leftHeight > 0) {
                pdf.addPage();
              }
            }
          }

          pdf.save('冯培成-web前端工程师.pdf');
        }
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var loading = document.getElementById('loading');
      loading.style.display = 'none';
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row main clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        renderHTMLtoPDF: this.renderHTMLtoPDF
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_siderbar__WEBPACK_IMPORTED_MODULE_11__["default"], _utils_resume__WEBPACK_IMPORTED_MODULE_15__["default"]), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_content__WEBPACK_IMPORTED_MODULE_13__["default"], _utils_resume__WEBPACK_IMPORTED_MODULE_15__["default"])));
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_10__["hot"])(module)(Main));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/resume.js":
/*!*************************!*\
  !*** ./utils/resume.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'basics': {
    'position': 'Web 前端工程师',
    'name': '冯培成',
    'gender': '男',
    'age': new Date().getFullYear() - 1996,
    'worklife': new Date().getFullYear() - 2018 + '+',
    'label': '我想要早睡。',
    'picture': 'https://www.fxpixels.site/avatar.jpg',
    'email': 'Iampcfox@gmail.com',
    'phone': '18826492921',
    'website': 'https://github.com/FxPixels',
    'summary': ['个人主攻 Web 前端，' + (new Date().getFullYear() - 2018) + '年+前端开发经验，项目类型涉及：电子商务、SPA 应用（PC/Moblie）等等', '喜欢关注 Web 前端相关新技术（Vue、React...），对于新技术有很强的学习兴趣', '喜欢参与开源项目开发，有一些简单的开源项目，不定时会更新 Github 小项目（https://github.com/FxPixels）', '热爱前端这份工作，热爱实用且简约的设计，追求友好的交互设计'],
    'location': '广东省 广州市',
    'profiles': [{
      'name': 'Home',
      'network': 'home',
      'username': 'FxPixels',
      'url': 'https://www.fxpixels.site'
    }, {
      'name': 'GitHub',
      'network': 'github',
      'username': 'FxPixels',
      'url': 'https://github.com/FxPixels'
    }, {
      'name': 'Gitee',
      'network': 'gitee',
      'username': 'FxPixels',
      'url': 'https://gitee.com/fxpixels'
    }, {
      'name': 'Blog',
      'network': 'blog',
      'username': 'FxPixels',
      'url': 'https://blog.fxpixels.site'
    }]
  },
  'work': [{
    'company': '微天下（广州）科技有限公司',
    'position': 'Web 前端工程师',
    'website': '',
    'startDate': '2018.09',
    'endDate': '2018.12',
    'summary': '公司主要外包商城，本人独立负责商城小程序的开发（基于 mpvue 和原生均有）：',
    'highlights': ['负责商城小程序的开发，交互设计及维护', '参与原有商城项目的对接']
  }, {
    'company': '佛山市盈道科技有限公司',
    'position': 'Web 前端 & PHP工程师',
    'website': '',
    'startDate': '2018.01',
    'endDate': '2018.08',
    'summary': '公司业务主要为外包商城、区块链相关业务等，本人主要职责如下：',
    'highlights': ['商城、区块链相关业务前后台 PC 端和移动端页面的前端开发（主要采用 HUI/Bootstrap），并负责部分后端功能开发，如登录注册、个人信息、 操作记录、用户任务等偏向用户信息的功能', '独立开发区块链 PC 端软件（基于 Electron），并实现客户端后端逻辑，如用户登录、信息记录、用户详情等。']
  }],
  'project': [{
    'organization': '威玛仕德商城小程序',
    'position': 'Web前端工程师',
    'website': '',
    'startDate': '2018.09',
    'endDate': '2018.12',
    'summary': '微信小程序',
    'highlights': ['实现商品列表分类、搜索、 微信支付、优惠券、购物车、预约线下店铺、个人信息、订单列表、收货地址、 消费记录等一系列功能', '实现分销商系统，包括提现、团队收益等', '参与项目小程序UI讨论与设计']
  }, {
    'organization': '星动之域H5游戏',
    'position': 'Web前端 & PHP工程师',
    'website': '',
    'startDate': '2018.06',
    'endDate': '2018.08',
    'summary': 'HUI + Laravel + CentOS',
    'highlights': ['负责参与项目的移动端前端开发及维护，并负责部分后端业务开发，如；', '实现用户信息的增删改查、用户任务、查看情行K线等功能']
  }, {
    'organization': 'BAEC交易平台',
    'position': 'Web前端 & PHP工程师',
    'website': '',
    'startDate': '2018.01',
    'endDate': '2018.05',
    'summary': 'MUI + JQuery + Bootstrap + ThinkPHP + Windows',
    'highlights': ['负责参与项目的移动端H5和PC端（主要是后台）前端开发及维护，并负责部分后端业务开发，如发布行情信息、导出交易记录等；', '实现用户信息、用户任务、交易记录、K线历史等功能']
  }],
  'education': [{
    'institution': '仲恺农业工程学院',
    'area': '环境科学',
    'studyType': '本科',
    'startDate': '2014.09',
    'endDate': '2018.06',
    'gpa': '',
    'courses': [// '数据结构',
      // '操作系统',
      // '编译原理'
    ]
  }],
  'awards': [{
    'title': '全国计算机二级证书',
    'date': '2013-11-01',
    'awarder': '教育部考试中心',
    'summary': ''
  }],
  'ontherpublications': [{
    'name': '树莓派3B+实时运行状态',
    // 'publisher': 'skyvow',
    'releaseDate': '2019.01',
    'href': 'https://pi.fxpixels.site',
    'summary': '主要显示树莓派3B+运行时CPU、内存、硬盘、IO等状态'
  }, {
    'name': 'Vue OS 练习',
    // 'publisher': 'skyvow',
    'releaseDate': '2018.12',
    'href': 'https://vue.os.fxpixels.site',
    'summary': '技术栈：Vue；一个仿Mac在线系统'
  }, {
    'name': 'Electron 练习',
    // 'publisher': 'skyvow',
    'releaseDate': '2018.05',
    'href': 'https://gitee.com/fxpixels/Electron-React',
    'summary': '技术栈：Electron + React；一个交易平台界面'
  }, {
    'name': 'Vue后台练习',
    // 'publisher': 'skyvow',
    'releaseDate': '2017.12',
    'href': 'https://vue.backend.fxpixels.site',
    'summary': '技术栈：Vue + ThinkPHP；一个前后端分离的后台'
  }, {
    'name': '仿简书网',
    // 'publisher': 'skyvow',
    'releaseDate': '2017.10',
    'href': 'https://js.fxpixels.site',
    'summary': '技术栈：Laravel；根据不同地区显示天气现象、温度、湿度、pm2.5等信息'
  }, {
    'name': '天气预报与环境信息',
    // 'publisher': 'skyvow',
    'releaseDate': '2017.09',
    'href': 'https://env.fxpixels.site',
    'summary': '技术栈：Vue + ThinkPHP；根据不同地区显示天气现象、温度、湿度、pm2.5等信息'
  }],
  'skills': [{
    'name': '前端',
    'level': 'master',
    'keywords': ['Photoshop', 'HTML', 'CSS', 'Javascript', 'Sass', 'Webpack', 'Vue', 'React', 'Electron']
  }, {
    'name': '后端',
    'level': 'master',
    'keywords': ['CentOS', 'PHP', 'Python', 'NodeJS']
  }],
  'languages': [{
    'language': '中文',
    'fluency': '母语'
  }],
  'interests': [{
    'name': '社交',
    'keywords': ['知乎', '掘金', '微信', 'QQ']
  }, {
    'name': '创作',
    'keywords': ['Midi音乐', '钢笔画']
  }],
  'references': [{
    'name': '鲁迅',
    'reference': '愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一分热，发一分光。就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。此后如竟没有炬火，我便是唯一的光…'
  }]
});

/***/ })

}]);
//# sourceMappingURL=index.chunk.js.map