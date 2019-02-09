module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__("BVXd"));

var utils_1 = __webpack_require__("p8BD");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "20a2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nOHt")


/***/ }),

/***/ "2wwy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EhLH");


/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react-measure"
var external_react_measure_ = __webpack_require__("jvUQ");
var external_react_measure_default = /*#__PURE__*/__webpack_require__.n(external_react_measure_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: ./data/content.js
var content = __webpack_require__("zrV9");

// CONCATENATED MODULE: ./components/Socials.jsx





function SocialIcon(_ref) {
  var link = _ref.link,
      icon = _ref.icon;

  if (link) {
    return external_react_default.a.createElement("a", {
      href: link,
      target: "_blank",
      rel: "noreferrer noopener"
    }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: icon,
      style: {
        margin: '1px 6px 0',
        fontWeight: 400,
        color: '#fff'
      }
    }));
  }
}

var c = content["a" /* AppContent */].socialLinks;

var Socials_Socials = function Socials() {
  return external_react_default.a.createElement("span", null, SocialIcon(c.instagram), SocialIcon(c.facebook), SocialIcon(c.twitter), SocialIcon(c.email));
};

/* harmony default export */ var components_Socials = (Socials_Socials);
// EXTERNAL MODULE: ./styles/variables.js
var variables = __webpack_require__("lFMt");

// CONCATENATED MODULE: ./components/TopStrap.jsx








var TopStrap_TopStrap = function TopStrap() {
  var _useState = Object(external_react_["useState"])({
    width: -1,
    height: -1
  }),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  return external_react_default.a.createElement(external_react_measure_default.a, {
    bounds: true,
    onResize: function onResize(contentRect) {
      setDimensions(contentRect.bounds);
    }
  }, function (_ref) {
    var measureRef = _ref.measureRef;
    return external_react_default.a.createElement(Strap, {
      ref: measureRef
    }, external_react_default.a.createElement(LeftStrap, {
      width: dimensions.width
    }, external_react_default.a.createElement(HideMobile, {
      width: dimensions.width
    }, content["a" /* AppContent */].title), external_react_default.a.createElement(Spacer, {
      width: dimensions.width
    }), external_react_default.a.createElement(NewToYogaLink, {
      href: "/new"
    }, content["a" /* AppContent */].new_to_yoga)), external_react_default.a.createElement(RightStrap, {
      width: dimensions.width
    }, external_react_default.a.createElement(components_Socials, null), external_react_default.a.createElement(Spacer, null), external_react_default.a.createElement(BookInHeaderButton, {
      target: "_blank",
      rel: "noreferrer noopener",
      href: content["a" /* AppContent */].mindbody_link
    }, content["a" /* AppContent */].book_a_class)));
  });
};

var Strap = external_styled_components_default.a.div.withConfig({
  displayName: "TopStrap__Strap",
  componentId: "sc-11tlwuk-0"
})(["z-index:20;position:relative;background:#222;color:#fff;padding:0 3px;font-size:12.5px;width:100%;display:flex;flex-direction:row;justify-content:space-between;"]);
var RightStrap = external_styled_components_default.a.div.withConfig({
  displayName: "TopStrap__RightStrap",
  componentId: "sc-11tlwuk-1"
})(["display:", ";"], function (props) {
  return props.width <= 500 ? 'none' : 'block';
});
var LeftStrap = external_styled_components_default.a.div.withConfig({
  displayName: "TopStrap__LeftStrap",
  componentId: "sc-11tlwuk-2"
})(["", ";"], function (props) {
  return props.width <= 500 ? 'text-align: center; width: 100%;' : false;
});
var HideMobile = external_styled_components_default.a.div.withConfig({
  displayName: "TopStrap__HideMobile",
  componentId: "sc-11tlwuk-3"
})(["", ";"], function (props) {
  return props.width <= 500 ? 'display: none;' : 'display: inline-block;';
});
var NewToYogaLink = external_styled_components_default.a.a.withConfig({
  displayName: "TopStrap__NewToYogaLink",
  componentId: "sc-11tlwuk-4"
})(["color:", ";", ";"], variables["a" /* PureBrand */].pureRed, function (props) {
  return props.width <= 500 ? 'text-align: center;' : false;
});
var Spacer = external_styled_components_default.a.span.withConfig({
  displayName: "TopStrap__Spacer",
  componentId: "sc-11tlwuk-5"
})(["", ";display:inline-block;width:10px;"], function (props) {
  return props.width <= 500 ? 'display: none;' : false;
});
var BookInHeaderButton = external_styled_components_default.a.a.withConfig({
  displayName: "TopStrap__BookInHeaderButton",
  componentId: "sc-11tlwuk-6"
})(["color:#111;letter-spacing:1px;font-size:10px;font-weight:500;padding:3px 22px;background:", ";"], variables["a" /* PureBrand */].pureRed);
/* harmony default export */ var components_TopStrap = (TopStrap_TopStrap);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./utils/nav.jsx
var nav = __webpack_require__("xzoR");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// CONCATENATED MODULE: ./utils/buttons.js



function pureButton(text, link) {
  return external_react_default.a.createElement(external_reactstrap_["Button"], {
    size: "sm",
    className: "pureButton",
    href: link,
    alt: text
  }, text);
}


// CONCATENATED MODULE: ./components/nav/NavMembers.jsx















var NavMembers_NavMembers =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NavMembers, _Component);

  function NavMembers(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavMembers);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavMembers).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "setLocation", function (loc) {
      _this.setState({
        classes: loc
      });
    });

    _this.state = {
      classes: 'Intro'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(NavMembers, [{
    key: "render",
    value: function render() {
      var pricing;
      var context = this;
      pricing = external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement("div", {
        className: "flexCol"
      }, external_react_default.a.createElement("div", {
        style: {
          width: '100%',
          marginRight: 12,
          position: 'relative'
        }
      }, external_react_default.a.createElement("div", {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)'
        }
      }, external_react_default.a.createElement("span", {
        className: "intro"
      }, "$45 Intro Month")), external_react_default.a.createElement("img", {
        src: "https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/team_126.jpg",
        style: {
          width: 450
        },
        alt: "placeholder"
      })), external_react_default.a.createElement("div", {
        className: "navContent"
      }, Object(nav["b" /* navHeading */])(content["a" /* AppContent */].nav.new_to_yoga.title), external_react_default.a.createElement("p", {
        className: "highlight"
      }, content["a" /* AppContent */].nav.new_to_yoga.sub_title), external_react_default.a.createElement("p", null, content["a" /* AppContent */].nav.new_to_yoga.content), pureButton('Intro Month', '/new'))));

      function byName(val) {
        console.log('Val', val);
        return val.name === context.state.classes;
      }

      if (data_nav.classes.filter(byName)[0]) {
        pricing = data_nav.classes.filter(byName)[0].mega;
      }

      return external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 3
      }, Object(nav["b" /* navHeading */])('Class Options'), external_react_default.a.createElement("ul", null, external_react_default.a.createElement(NavMembers_SubNav, {
        locations: data_nav.classes,
        setLocation: this.setLocation
      })), Object(nav["b" /* navHeading */])('Student/Senior Discounts', '/members'), external_react_default.a.createElement("br", null), Object(nav["b" /* navHeading */])('Karma Program', '/members')), external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 8
      }, pricing));
    }
  }]);

  return NavMembers;
}(external_react_["Component"]);

var NavMembers_SubNav = function SubNav(_ref) {
  var locations = _ref.locations,
      setLocation = _ref.setLocation;
  return external_react_default.a.createElement("ul", {
    className: "sub-sub"
  }, locations.map(function (item) {
    return external_react_default.a.createElement("li", {
      key: "locc_".concat(item.name),
      onFocus: function onFocus() {
        return setLocation(item.name);
      },
      onMouseOver: function onMouseOver() {
        return setLocation(item.name);
      }
    }, external_react_default.a.createElement("a", {
      href: "/members"
    }, item.name));
  }));
};

/* harmony default export */ var nav_NavMembers = (NavMembers_NavMembers);
// CONCATENATED MODULE: ./components/Minimap.js






var Minimap_MiniMap =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MiniMap, _Component);

  function MiniMap() {
    Object(classCallCheck["a" /* default */])(this, MiniMap);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MiniMap).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MiniMap, [{
    key: "render",
    value: function render() {
      // AIzaSyAlAPJWPVIZimKXSTitFQtyeCFELQqVTSA Google Maps Key
      var address_n_map;
      address_n_map = this.props.hideMap ? false : external_react_default.a.createElement("div", {
        className: "flexCol"
      }, external_react_default.a.createElement("div", {
        className: "flexMap"
      }, external_react_default.a.createElement("img", {
        src: this.props.map,
        alt: "placeholder"
      })), external_react_default.a.createElement("div", {
        className: "flexAddress"
      }, this.props.address, external_react_default.a.createElement("br", null), this.props.city, external_react_default.a.createElement("br", null), this.props.postcode, " \u2022", ' ', external_react_default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: directionsLink(this.props.place_id, this.props.name)
      }, "Getting here"), external_react_default.a.createElement("br", null), this.props.phone));
      return external_react_default.a.createElement("div", {
        className: "minimap"
      }, address_n_map);
    }
  }]);

  return MiniMap;
}(external_react_["Component"]);

function directionsLink(loc, dest) {
  var base = 'https://www.google.com/maps/dir/?api=1&destination_place_id=' + loc + '&destination=' + encodeURI('Pure Yoga ' + dest);
  return base;
}
// EXTERNAL MODULE: ./data/locations.js
var data_locations = __webpack_require__("dpSZ");

// EXTERNAL MODULE: ./components/Schedule.jsx + 3 modules
var Schedule = __webpack_require__("wtxR");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2wwy");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./utils/src.js
var utils_src = __webpack_require__("P6V6");

// CONCATENATED MODULE: ./components/schedule/Custom.js












var Custom_ScheduleCustom =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ScheduleCustom, _Component);

  function ScheduleCustom(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ScheduleCustom);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ScheduleCustom).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "MindbodyFetch", function () {
      // Use if want to override
      // const filter = [
      //   { location: this.props.location || 'all' },
      //   { day: this.props.day || 'Today' },
      //   { class_style: this.props.class_style || 'all' },
      //   { teacher: this.props.teacher || 'all' }
      // ];
      var src = new utils_src["a" /* default */]({
        day: _this.props.day
      }, false).classes,
          params = [];
      src.filters.map(function (filter, index) {
        return params.push(values_default()(src.filters[index])[0] ? "&by_".concat(keys_default()(src.filters[index])[0], "=").concat(values_default()(src.filters[index])[0]) : '');
      });
      var url = params.reduce(function (acc, cv) {
        return acc + cv;
      }, src.base);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this.setState({
          classes: data.classes,
          loaded: true
        });
      }).catch(function (err) {
        return console.log('Did not fetch your things.');
      });
    });

    _this.state = {
      classes: [],
      loaded: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ScheduleCustom, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.MindbodyFetch();
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Schedule["a" /* Schedule */], {
        name: this.props.hide_title || this.props.name,
        location: this.props.name,
        mini: this.props.mini,
        day: this.props.day,
        classes: this.state.classes,
        loaded: this.state.loaded
      });
    }
  }]);

  return ScheduleCustom;
}(external_react_["Component"]);
// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__("TXK0");
var external_moment_timezone_default = /*#__PURE__*/__webpack_require__.n(external_moment_timezone_);

// CONCATENATED MODULE: ./components/nav/NavLocations.js












var NavLocations_NavLocations =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NavLocations, _Component);

  function NavLocations() {
    Object(classCallCheck["a" /* default */])(this, NavLocations);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavLocations).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(NavLocations, [{
    key: "render",
    value: function render() {
      var loc = this.props.location !== 'all' ? singleLocation(this.props.location, this.props.classes, this.props.loaded) : external_react_default.a.createElement(external_reactstrap_["Row"], null, allLocations(this.props.location, this.props.classes, this.props.loaded));
      return loc;
    }
  }]);

  return NavLocations;
}(external_react_["Component"]);

function allLocations(current, classes, loaded) {
  return data_locations["a" /* AppLocations */].all.filter(locationMatch, current).map(function (_location, index) {
    return external_react_default.a.createElement(external_reactstrap_["Col"], {
      key: index
    }, external_react_default.a.createElement(Minimap_MiniMap, {
      hideMap: true,
      city: _location.city,
      name: _location.name,
      address: _location.address,
      phone: _location.phone,
      map: _location.map,
      place_id: _location.google_place_id
    }), external_react_default.a.createElement(Schedule["a" /* Schedule */], {
      name: _location.name,
      location: _location.name,
      mini: true,
      day: 'Today',
      classes: classes,
      loaded: loaded
    }));
  });
}

function singleLocation(current, classes, loaded) {
  var today = external_moment_timezone_default()(new Date());
  var tomorrow = external_moment_timezone_default()(new Date()).add(1, 'days');
  var the_next_day = external_moment_timezone_default()(new Date()).add(2, 'days');
  return data_locations["a" /* AppLocations */].all.filter(locationMatch, current).map(function (_location, index) {
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_reactstrap_["Row"], {
      key: index
    }, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(Custom_ScheduleCustom, {
      name: _location.name,
      location: _location.name,
      mini: true,
      day: today.format('YYYY-MM-DD'),
      loaded: loaded,
      days: 1
    })), external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(Custom_ScheduleCustom, {
      name: _location.name,
      location: _location.name,
      mini: true,
      day: tomorrow.format('YYYY-MM-DD'),
      loaded: loaded,
      days: 1,
      hide_title: true
    })), external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(Custom_ScheduleCustom, {
      name: _location.name,
      location: _location.name,
      mini: true,
      day: the_next_day.format('YYYY-MM-DD'),
      loaded: loaded,
      days: 1,
      hide_title: true
    }))));
  });
}

function locationMatch(current) {
  if (current.name === this || this === 'all') {
    return true;
  }
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/nav/NavSchedule.jsx















var NavSchedule_NavSchedule =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NavSchedule, _Component);

  function NavSchedule(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavSchedule);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavSchedule).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "setLocation", function (loc) {
      _this.setState({
        location: loc
      });
    });

    _this.state = {
      location: 'all'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(NavSchedule, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loaded = _this$props.loaded,
          classes = _this$props.classes;
      var location = this.state.location;
      return external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 2
      }, Object(nav["b" /* navHeading */])('Classes by Location'), external_react_default.a.createElement(NavSchedule_SubNav, {
        locations: data_nav.locations,
        setLocation: this.setLocation
      }), Object(nav["b" /* navHeading */])('Workshops', '/workshops'), external_react_default.a.createElement("br", null), Object(nav["b" /* navHeading */])('Class Styles', '/class-styles'), external_react_default.a.createElement("br", null), Object(nav["b" /* navHeading */])('Classes by Teacher', '/team'), external_react_default.a.createElement("br", null), Object(nav["b" /* navHeading */])('New to Yoga?', '/new')), external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 10
      }, external_react_default.a.createElement(NavLocations_NavLocations, {
        location: location,
        loaded: loaded,
        classes: classes
      })));
    }
  }]);

  return NavSchedule;
}(external_react_["Component"]);

/* harmony default export */ var nav_NavSchedule = (NavSchedule_NavSchedule);

var NavSchedule_SubNav = function SubNav(_ref) {
  var locations = _ref.locations,
      setLocation = _ref.setLocation;
  return external_react_default.a.createElement("ul", {
    className: "sub-sub"
  }, locations.map(function (item) {
    return external_react_default.a.createElement("li", {
      key: item.name,
      onFocus: function onFocus() {
        return setLocation(item.name);
      },
      onMouseOver: function onMouseOver() {
        return setLocation(item.name);
      }
    }, external_react_default.a.createElement(link_default.a, {
      href: "/location/".concat(item.link)
    }, item.name));
  }));
};

NavSchedule_NavSchedule.defaultProps = {
  loaded: false
};
// CONCATENATED MODULE: ./components/nav/NavLogin.jsx











var t = content["a" /* AppContent */].login;
var NavLogin_NavLogin =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NavLogin, _Component);

  function NavLogin(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavLogin);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavLogin).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "setLocation", function (loc) {
      _this.setState({
        classes: loc
      });
    });

    _this.state = {
      classes: 'Intro'
    };
    return _this;
  }

  Object(createClass["a" /* default */])(NavLogin, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 9
      }, Object(nav["b" /* navHeading */])('Mindbody'), external_react_default.a.createElement("p", null, t.sub_title), external_react_default.a.createElement("p", null, t.account_difficulties, " ", external_react_default.a.createElement("a", {
        href: "/"
      }, "Contact Us"))), external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 3
      }, external_react_default.a.createElement("div", {
        id: "loginLinks"
      }, external_react_default.a.createElement("div", null, Object(nav["b" /* navHeading */])('Already a member?'), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
        className: "btn btn-primary btn-red pureButton btn-sm",
        href: "/login"
      }, "Login"))), Object(nav["b" /* navHeading */])('New to Pure?'), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
        className: "btn btn-primary btn-red pureButton btn-sm",
        href: "/"
      }, "Sign Up")))));
    }
  }]);

  return NavLogin;
}(external_react_["Component"]);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "textile-js"
var external_textile_js_ = __webpack_require__("gX4A");
var external_textile_js_default = /*#__PURE__*/__webpack_require__.n(external_textile_js_);

// CONCATENATED MODULE: ./utils/helpers.js


var helpers_AppHelpers =
/*#__PURE__*/
function () {
  function AppHelpers() {
    Object(classCallCheck["a" /* default */])(this, AppHelpers);
  }

  Object(createClass["a" /* default */])(AppHelpers, null, [{
    key: "slashJoin",
    value: function slashJoin(arr) {
      return arr.filter(Boolean).map(function (item, index) {
        return item;
      }).join(' / ');
    }
  }]);

  return AppHelpers;
}();
// EXTERNAL MODULE: ./components/evolve/config.js + 1 modules
var config = __webpack_require__("CGBx");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// CONCATENATED MODULE: ./components/team/utils.js
function Link(handle) {
  return ['/team', handle].join('/');
}
// CONCATENATED MODULE: ./components/team/Card.jsx












var Card_TeacherCard =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(TeacherCard, _Component);

  function TeacherCard(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, TeacherCard);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(TeacherCard).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "loadTeacher", function () {
      var path = Link(_this.props.teacher.slug);

      _this.props.history.push(path);
    });

    _this.state = {
      bg: _this.props.teacher.pose_1.card.url
    };
    return _this;
  }

  Object(createClass["a" /* default */])(TeacherCard, [{
    key: "render",
    // shuffleImages = () => {
    //   const timages = [
    //     this.props.teacher.pose_1.card.url,
    //     this.props.teacher.pose_2.card.url,
    //     this.props.teacher.pose_3.card.url
    //   ].filter(function(el) {
    //     return el != null;
    //   });
    //   this.setState({ bg: timages[Math.floor(Math.random() * timages.length)] });
    // };
    value: function render() {
      var _this2 = this;

      var teacher = this.props.teacher;
      return external_react_default.a.createElement(TeacherProfile // onMouseOver={() => this.shuffleImages()}
      , {
        dropped: this.props.dropped,
        onClick: function onClick() {
          return _this2.loadTeacher();
        }
      }, external_react_default.a.createElement(TeacherImg, {
        bg_img: this.state.bg
      }), external_react_default.a.createElement(TeacherInfo, null, external_react_default.a.createElement(TeacherName, null, teacher.first_name, " ", teacher.last_name, external_react_default.a.createElement(TeacherPosition, null, teacher.position))));
    }
  }]);

  return TeacherCard;
}(external_react_["Component"]);

var isDropped = Object(external_styled_components_["css"])(["border:1px solid #f5f5f5;box-shadow:2px 2px 2px #ccc;margin:4px auto;width:85%;"]);
var TeacherProfile = external_styled_components_default.a.div.withConfig({
  displayName: "Card__TeacherProfile",
  componentId: "byz7dx-0"
})(["position:relative;cursor:pointer;max-width:320px;width:90%;margin:0 auto;overflow:hidden;background:#fff;border-radius:8px;border:1px solid #f5f5f5;box-shadow:0 0 80px #dedede;opacity:0.9;", " margin-bottom:1em;z-index:100;transition:all 0.5s;&:hover{z-index:110;box-shadow:0 0 120px #eee;opacity:1;}"], function (props) {
  return props.dropped ? isDropped : false;
});
var TeacherImg = external_styled_components_default.a.div.withConfig({
  displayName: "Card__TeacherImg",
  componentId: "byz7dx-1"
})(["background-size:cover;background-image:url(", ");background-position:center center;width:100%;padding-top:110%;background-repeat:none;transition:all 0.5s;z-index:0;"], function (props) {
  return props.bg_img;
});
var TeacherInfo = external_styled_components_default.a.div.withConfig({
  displayName: "Card__TeacherInfo",
  componentId: "byz7dx-2"
})(["width:100%;position:absolute;bottom:6px;left:8px;text-align:left;"]);
var TeacherName = external_styled_components_default.a.div.withConfig({
  displayName: "Card__TeacherName",
  componentId: "byz7dx-3"
})(["color:#333;padding:4px;margin:0 auto;font-size:1em;text-shadow:0 0 10px #fff;"]);
var TeacherPosition = external_styled_components_default.a.span.withConfig({
  displayName: "Card__TeacherPosition",
  componentId: "byz7dx-4"
})(["display:block;color:#888;font-size:11px;font-weight:bold;text-transform:uppercase;"]);
/* harmony default export */ var Card = (Object(external_react_router_dom_["withRouter"])(Card_TeacherCard));
// EXTERNAL MODULE: ./utils/tools.js
var tools = __webpack_require__("s02U");

// CONCATENATED MODULE: ./components/evolve/teachers.js














var teachers_ref = [config["a" /* EvolveConfig */].style],
    style = teachers_ref[0];

var noFetchError = function noFetchError() {
  return console.log('Did not fetch.');
};

var teachers_EvolveTeachers =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(EvolveTeachers, _Component);

  function EvolveTeachers(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EvolveTeachers);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(EvolveTeachers).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "fetchYogaTeachers",
    /*#__PURE__*/
    Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var response, json;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(tools["a" /* AppHelpers */].mbParams(_this.props, 'workshopTeachers')).catch(noFetchError);

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json().catch(noFetchError);

            case 5:
              json = _context.sent;

              _this.setState({
                teachers: json.teachers,
                loaded: true
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      loaded: false,
      teachers: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(EvolveTeachers, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchYogaTeachers();
    }
  }, {
    key: "componentWilllUnmount",
    value: function componentWilllUnmount() {
      this.setState({
        teachers: false,
        loaded: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var teachers = this.state.teachers.map(function (teacher, index) {
        return external_react_default.a.createElement(FlexCol, {
          key: 'teacher_card_' + index
        }, external_react_default.a.createElement(Card, {
          teacher: teacher
        }));
      });
      return external_react_default.a.createElement("div", null, this.props.header ? external_react_default.a.createElement("h1", {
        style: style.teaser.heading
      }, "Your Teachers") : false, external_react_default.a.createElement(FlexRow, null, this.state.loaded ? teachers : 'Loading...'));
    }
  }]);

  return EvolveTeachers;
}(external_react_["Component"]);


var FlexRow = external_styled_components_default.a.div.withConfig({
  displayName: "teachers__FlexRow",
  componentId: "zp07tn-0"
})(["display:flex;width:100%;margin:auto;flex-direction:row;justify-content:left;"]);
var FlexCol = external_styled_components_default.a.div.withConfig({
  displayName: "teachers__FlexCol",
  componentId: "zp07tn-1"
})(["min-width:50%;text-align:left;p{font-size:1.1em;line-height:1.4em;white-space:pre-wrap;font-family:futura-pt;font-style:normal;font-size:18px;letter-spacing:.05em;line-height:2em;font-weight:300;}}"]);
// EXTERNAL MODULE: ./components/Favorite.jsx + 1 modules
var Favorite = __webpack_require__("Y9N/");

// CONCATENATED MODULE: ./components/evolve/teaser.jsx









/* eslint-disable no-undef */









var teaser_ref = [config["a" /* EvolveConfig */].zone, config["a" /* EvolveConfig */].style],
    zone = teaser_ref[0],
    teaser_style = teaser_ref[1];
var defaultTab = 'Overview';

var teaser_EvolveTeaser =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(EvolveTeaser, _Component);

  function EvolveTeaser(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EvolveTeaser);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(EvolveTeaser).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "setView", function (view) {
      _this.setState({
        view: view
      });
    });

    _this.state = {
      view: _this.props.wsTab,
      height: false // videoURL: false,

    };
    _this.myRef = external_react_default.a.createRef();
    return _this;
  }

  Object(createClass["a" /* default */])(EvolveTeaser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo({
        top: this.myRef.current.offsetTop + 200,
        behavior: 'smooth'
      });
      this.setState({
        view: defaultTab,
        height: document.getElementById('teaser').clientHeight
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        view: defaultTab,
        height: false
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.workShop !== this.state.workShop) {
        this.setView(defaultTab);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          workShop = _this$props.workShop,
          hideDescription = _this$props.hideDescription;
      var _this$state = this.state,
          view = _this$state.view,
          height = _this$state.height;
      var infoTabs = [defaultTab, workShop.teacher_text ? 'Teachers' : false, 'Full Details'].filter(Boolean);
      var bg = {
        backgroundImage: "url(".concat(workShop.hero_image.url ? workShop.hero_image.url.replace('dev', 'prod') : '', ")"),
        opacity: view === infoTabs[0] ? 1 : 0.2,
        width: view === infoTabs[0] ? '55%' : '90%',
        filter: "grayscale(".concat(view === infoTabs[0] ? 0 : 50, "%) blur(").concat(view === infoTabs[0] ? 0 : 3, "px)"),
        transition: 'all 0.1s',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      };
      var endTime = workShop.endTime > workShop.startTime ? external_moment_timezone_default.a.tz(workShop.endTime, zone).format('h:mma') : false;
      var startTime = workShop.startTime ? external_moment_timezone_default.a.tz(workShop.startTime, zone).format('h:mma') : false;
      var endDate = workShop.endTime > workShop.startTime ? external_moment_timezone_default.a.tz(workShop.endTime, zone).format('ll') : false;
      var startDate = workShop.startTime ? external_moment_timezone_default.a.tz(workShop.startTime, zone).format('ll') : false;
      var dates = workShop.customDates || [startDate, endDate].filter(Boolean).join(' - ');
      var times = workShop.customTimes || [startTime, endTime].filter(Boolean).join(' - ');
      var location = "Pure ".concat(workShop.location);
      var desc = workShop.custom_teaser || workShop.description;
      var italic = {
        fontStyle: 'oblique'
      };
      var teacher = workShop.teacher_text ? external_react_default.a.createElement("span", null, external_react_default.a.createElement("strong", null, "Teacher", workShop.teacher_text.includes(' and ') ? 's' : false), ' ', ": ", workShop.teacher_text) : false;
      var investment = workShop.investment ? external_react_default.a.createElement("span", null, external_react_default.a.createElement("strong", null, "Investment"), ": ", workShop.investment) : false;
      var tabs = infoTabs.map(function (tab) {
        return external_react_default.a.createElement("span", {
          onClick: function onClick() {
            return _this2.setView(tab);
          },
          style: tab === view ? Object(objectSpread["a" /* default */])({}, teaser_style.teaser.bottom_tabs.tab, teaser_style.teaser.bottom_tabs.tab.active) : teaser_style.teaser.bottom_tabs.tab
        }, tab);
      });
      var bookNow = workShop.mindbody_link ? external_react_default.a.createElement("a", {
        href: workShop.mindbody_link,
        target: "_blank",
        rel: "noopener noreferrer",
        style: teaser_style.teaser.book_now
      }, "Book Now") : false;
      var teaserContent = external_react_default.a.createElement(TeaserContent, {
        id: "teaser",
        rowWidth: this.props.rowWidth
      }, external_react_default.a.createElement("span", {
        style: teaser_style.teaser.type
      }, external_react_default.a.createElement("span", {
        style: teaser_style.teaser.type_brand
      }, "PURE"), ' ', workShop.workshop_type), external_react_default.a.createElement("h1", {
        style: teaser_style.teaser.heading
      }, workShop.title), external_react_default.a.createElement("strong", {
        style: teaser_style.teaser.details
      }, helpers_AppHelpers.slashJoin([dates, times, location])), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, workShop.subtitle)), external_react_default.a.createElement("div", {
        style: teaser_style.teaser.description,
        dangerouslySetInnerHTML: {
          __html: external_textile_js_default()(desc)
        }
      }), external_react_default.a.createElement("div", {
        style: teaser_style.flex
      }, external_react_default.a.createElement("a", {
        href: "/evolve/".concat(workShop.id, "/").concat(workShop.title.toLowerCase().replace(/ /g, '-')),
        style: teaser_style.teaser.more_info
      }, "More info"), "\xA0", bookNow, external_react_default.a.createElement(Favorite["a" /* default */], {
        id: [workShop.id].join('-'),
        favorite_type: "ws"
      })), external_react_default.a.createElement("div", {
        style: Object(objectSpread["a" /* default */])({}, italic, teaser_style.teaser.description)
      }, teacher, external_react_default.a.createElement("br", null), investment));
      var minHeight = {
        minHeight: height,
        paddingRight: '2.5%'
      };
      var teachersContent = external_react_default.a.createElement("div", {
        style: {
          textAlign: 'left',
          paddingLeft: '2.5%',
          paddingTop: '1em',
          textTransform: 'uppercase'
        }
      }, external_react_default.a.createElement(teachers_EvolveTeachers, {
        id: workShop.id
      }));
      var fullDetailsContent = external_react_default.a.createElement("div", {
        style: Object(objectSpread["a" /* default */])({}, teaser_style.teaser.content, minHeight)
      }, external_react_default.a.createElement("h1", {
        style: teaser_style.teaser.heading
      }, workShop.title), external_react_default.a.createElement("br", null), external_react_default.a.createElement("div", {
        style: teaser_style.teaser.description,
        dangerouslySetInnerHTML: {
          __html: external_textile_js_default()(workShop.description)
        }
      }));
      var locationContent = external_react_default.a.createElement("div", {
        style: Object(objectSpread["a" /* default */])({}, teaser_style.teaser.content, minHeight)
      }, external_react_default.a.createElement("div", null, "Loc!"));
      var currentView = teaserContent;

      switch (view) {
        case 'Overview':
          currentView = teaserContent;
          break;

        case 'Teachers':
          currentView = teachersContent;
          break;

        case 'Full Details':
          currentView = fullDetailsContent;
          break;

        case 'Location':
          currentView = locationContent;
          break;

        default:
          currentView = false;
      }

      var video = workShop.video ? external_react_default.a.createElement("video", {
        id: "background-video",
        loop: true,
        autoPlay: true
      }, external_react_default.a.createElement("source", {
        src: workShop.video,
        type: "video/mp4"
      }), external_react_default.a.createElement("source", {
        src: workShop.video,
        type: "video/ogg"
      }), "Your browser does not support the video tag.") : false;
      var left = this.props.rowWidth >= 500 ? external_react_default.a.createElement("div", {
        style: Object(objectSpread["a" /* default */])({}, teaser_style.teaser.bg, bg)
      }, video, external_react_default.a.createElement("div", {
        style: teaser_style.teaser.left_grad
      })) : false;
      return external_react_default.a.createElement("div", {
        ref: this.myRef,
        style: teaser_style.teaser,
        id: "workshop_".concat(workShop.id)
      }, external_react_default.a.createElement("span", {
        style: teaser_style.close,
        onClick: function onClick() {
          return hideDescription();
        }
      }, "X"), left, currentView, external_react_default.a.createElement("div", {
        style: teaser_style.teaser.bottom_fade
      }), external_react_default.a.createElement(BottomTabs, {
        style: teaser_style.teaser.bottom_tabs
      }, tabs));
    }
  }]);

  return EvolveTeaser;
}(external_react_["Component"]);

var BottomTabs = external_styled_components_default.a.div.withConfig({
  displayName: "teaser__BottomTabs",
  componentId: "sc-1ns44pr-0"
})(["position:relative;display:flex;justify-content:center;z-index:20;max-width:95%;margin:1em auto 0 auto;padding-bottom:0;"]);
var TeaserContent = external_styled_components_default.a.div.withConfig({
  displayName: "teaser__TeaserContent",
  componentId: "sc-1ns44pr-1"
})(["position:relative;width:100%;margin:0 0 0 0.25%;z-index:10;padding:1em 2.5%;padding-right:", ";display:'block';"], function (props) {
  return props.rowWidth >= 500 ? '40%' : '0%';
});
/* harmony default export */ var evolve_teaser = (teaser_EvolveTeaser);
// CONCATENATED MODULE: ./components/MiniWorkshop.jsx











var MiniWorkshop_ref = [config["a" /* EvolveConfig */].style],
    MiniWorkshop_style = MiniWorkshop_ref[0];

var MiniWorkshop_MiniWorkshop =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(MiniWorkshop, _Component);

  function MiniWorkshop(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MiniWorkshop);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MiniWorkshop).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "expandElement", function () {
      var inView = _this.props.inView;

      _this.setState({
        hovered: inView || false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "despandElement", function () {
      _this.setState({
        hovered: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "handleKeyPress", function () {
      // eslint-disable-next-line no-console
      console.log('Keys Were Pressed');
    });

    _this.state = {
      hovered: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(MiniWorkshop, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        hovered: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          workshop = _this$props.workshop,
          isActive = _this$props.isActive,
          noneActive = _this$props.noneActive,
          _onClick = _this$props.onClick,
          rowWidth = _this$props.rowWidth;
      var hovered = this.state.hovered;
      var data = workshop;
      var hasImage = data.teaser_image.url;
      var widthizer = rowWidth >= 500 ? '32%' : '95%';
      var colWidth = {
        overflow: 'display',
        minWidth: hovered && noneActive ? widthizer : widthizer,
        transition: 'all 0.5s',
        marginTop: hovered && noneActive ? 0 : 5,
        borderColor: isActive ? 'pink' : 'transparent',
        opacity: isActive || hovered || noneActive ? 1 : 0.45
      };
      var openArrow = {
        opacity: hovered ? 1 : 0,
        transition: 'all 0.5s'
      };
      return hasImage ? external_react_default.a.createElement("div", {
        style: Object(objectSpread["a" /* default */])({}, MiniWorkshop_style.row.col, colWidth),
        onFocus: function onFocus() {
          return _this2.expandElement();
        },
        onMouseOver: function onMouseOver() {
          return _this2.expandElement();
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.despandElement();
        },
        onClick: function onClick() {
          return _onClick();
        },
        onKeyPress: this.handleKeyPress,
        role: "presentation"
      }, external_react_default.a.createElement("img", {
        src: data.teaser_image.url.replace('dev', 'prod'),
        alt: data.title,
        style: {
          transition: 'all 0.4s',
          boxShadow: hovered ? '0px 10px 50px #999' : false
        }
      }), external_react_default.a.createElement("div", {
        style: Object(objectSpread["a" /* default */])({}, MiniWorkshop_style.row.openArrow, openArrow)
      }, "V")) : false;
    }
  }]);

  return MiniWorkshop;
}(external_react_["Component"]);

/* harmony default export */ var components_MiniWorkshop = (MiniWorkshop_MiniWorkshop);
// CONCATENATED MODULE: ./components/evolve/row.jsx
















var row_ref = [config["a" /* EvolveConfig */].style],
    row_style = row_ref[0];

var row_EvolveRow =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(EvolveRow, _Component);

  function EvolveRow(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, EvolveRow);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(EvolveRow).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "showDescription", function (ws) {
      var isLink = _this.props.isLink;
      var loadedWorkshop = _this.state.loadedWorkshop;

      if (isLink) {
        alert("/evolve/".concat(ws.id, "/").concat(ws.title.toLowerCase().replace(/ /g, '-')));
      } else {
        _this.setState({
          loadedWorkshop: loadedWorkshop && loadedWorkshop.id === ws.id ? false : external_react_default.a.createElement(evolve_teaser, {
            workShop: ws,
            wsTab: 'Overview',
            hideDescription: function hideDescription() {
              return _this.hideDescription();
            },
            rowWidth: _this.state.dimensions.width
          }),
          wsTab: 'Overview'
        });
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "hideDescription", function () {
      _this.setState({
        loadedWorkshop: false
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "fadeOthers", function () {
      _this.setState({// hovered: true,
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "fadeOthers", function () {
      _this.setState({// hovered: true,
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "shouldScrollDown", function (element) {
      var start = _this.state.start;
      var arrow;

      if (start !== 0) {
        arrow = element;
      }

      return arrow;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "shouldScrollUp", function (element, count) {
      var finish = _this.state.finish;
      var arrow;

      if (finish <= count) {
        arrow = element;
      }

      return arrow;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "isFirstPosition", function (spacer) {
      var start = _this.state.start;
      var arrow;

      if (start === 0) {
        arrow = spacer;
      }

      return arrow;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "scrollUp", function () {
      var _this$state = _this.state,
          start = _this$state.start,
          finish = _this$state.finish;

      _this.setState({
        start: start + 1,
        finish: finish + 1
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "scrollDown", function () {
      var _this$state2 = _this.state,
          start = _this$state2.start,
          finish = _this$state2.finish;

      _this.setState({
        start: start - 1,
        finish: finish - 1
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "notThisOne", function (ws) {
      return ws.id !== _this.props.not;
    });

    _this.state = {
      // hovered: false,
      loadedWorkshop: false,
      start: 0,
      finish: 4,
      wsTab: false,
      dimensions: {
        width: -1,
        height: -1
      }
    };
    return _this;
  }

  Object(createClass["a" /* default */])(EvolveRow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          loadedWorkshop = _this$state3.loadedWorkshop,
          start = _this$state3.start,
          finish = _this$state3.finish,
          dimensions = _this$state3.dimensions;
      var _this$props = this.props,
          limit = _this$props.limit,
          skip = _this$props.skip,
          workshops = _this$props.workshops,
          not = _this$props.not,
          title = _this$props.title;
      var wst = loadedWorkshop;
      var workshopsList = limit || skip ? workshops.slice(skip, limit + skip) : workshops;

      if (not) {
        workshopsList = workshopsList.filter(this.notThisOne);
      }

      var cols = workshopsList.slice(start, finish).map(function (ws, index) {
        return external_react_default.a.createElement(components_MiniWorkshop, {
          workshop: ws,
          noneActive: !loadedWorkshop,
          isActive: loadedWorkshop === ws,
          onClick: function onClick() {
            return _this2.showDescription(ws);
          },
          key: ws.id,
          inView: index <= 2,
          rowWidth: dimensions.width,
          onMouseEnter: function onMouseEnter() {
            return _this2.fadeOthers();
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.unfadeOthers();
          }
        });
      });
      var scrollUp = this.shouldScrollUp(external_react_default.a.createElement(ScrollRightButton, {
        role: "button",
        onClick: function onClick() {
          return _this2.scrollUp();
        }
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faChevronRight"],
        style: {
          fontWeight: 300,
          color: '#DC9D9D',
          fontSize: 36
        }
      })), workshopsList.length);
      var scrollBack = this.shouldScrollDown(external_react_default.a.createElement(ScrollLeftButton, {
        role: "button",
        onClick: function onClick() {
          return _this2.scrollDown();
        }
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faChevronLeft"],
        style: {
          fontWeight: 300,
          color: '#DC9D9D',
          fontSize: 36
        }
      })));
      var pTitle = title ? external_react_default.a.createElement("h3", {
        style: row_style.row.header
      }, title) : false;
      return external_react_default.a.createElement(external_react_measure_default.a, {
        bounds: true,
        onResize: function onResize(contentRect) {
          _this2.setState({
            dimensions: contentRect.bounds
          });
        }
      }, function (_ref2) {
        var measureRef = _ref2.measureRef;
        return external_react_default.a.createElement("div", {
          className: "evolveRowContainer",
          style: row_style.row.container,
          ref: measureRef
        }, workshopsList.length >= 1 ? pTitle : false, external_react_default.a.createElement("div", {
          style: row_style.row
        }, external_react_default.a.createElement("div", {
          style: row_style.row.spacer
        }), scrollBack, cols, external_react_default.a.createElement("div", {
          style: {
            minWidth: '31%'
          }
        }), external_react_default.a.createElement("div", {
          style: {
            minWidth: '31%'
          }
        }), external_react_default.a.createElement("div", {
          style: {
            minWidth: '31%'
          }
        }), scrollUp, external_react_default.a.createElement("div", {
          style: row_style.row.spacer
        })), external_react_default.a.createElement("div", null, wst));
      });
    }
  }]);

  return EvolveRow;
}(external_react_["Component"]);

var ScrollRightButton = external_styled_components_default.a.button.withConfig({
  displayName: "row__ScrollRightButton",
  componentId: "sc-1v86wof-0"
})(["position:absolute;right:0;width:4.3%;z-index:10;height:100%;background:rgba(255,255,255,0.3);border:none;transition:all 0.5s;cursor:pointer;&:hover{svg{transform:scale(1.2);}background:rgba(255,255,255,0);}"]);
var ScrollLeftButton = external_styled_components_default.a.button.withConfig({
  displayName: "row__ScrollLeftButton",
  componentId: "sc-1v86wof-1"
})(["position:absolute;left:0;z-index:10;height:100%;background:none;border:none;transition:all 0.5s;cursor:pointer;&:hover{svg{transform:scale(1.2);}background:rgba(1,1,1,0.05);}"]);
/* harmony default export */ var row = (row_EvolveRow);
// CONCATENATED MODULE: ./components/nav/NavEvolutions.jsx











var NavEvolutions_NavEvolutions =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NavEvolutions, _Component);

  function NavEvolutions() {
    Object(classCallCheck["a" /* default */])(this, NavEvolutions);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavEvolutions).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(NavEvolutions, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          workshops = _this$props.workshops,
          evolution = _this$props.evolution;
      var workshopsCol = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 9
      }, external_react_default.a.createElement("p", null, content["a" /* AppContent */].nav.workshops.content), external_react_default.a.createElement(external_reactstrap_["Row"], null, workshops), Object(nav["b" /* navHeading */])('See All', '/workshops')));
      var retreats = 'Retreat Stuff';
      var training = 'Training';
      var display = evolution === 'Workshops' ? workshopsCol : false;
      display = evolution === 'Retreats' ? retreats : display;
      display = evolution === 'Training' ? training : display;
      return display;
    }
  }]);

  return NavEvolutions;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/nav/NavEvolve.jsx

















var NavEvolve_noFetchError = function noFetchError() {
  return console.log('Did not fetch.');
};

var NavEvolve_NavEvolve =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NavEvolve, _Component);

  function NavEvolve(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, NavEvolve);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavEvolve).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "setLocation", function (loc) {
      _this.setState({
        evolution: loc
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "fetchYogaWorkshops",
    /*#__PURE__*/
    Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var response, json;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(tools["a" /* AppHelpers */].mbParams(_this.props, 'workshops')).catch(NavEvolve_noFetchError);

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json().catch(NavEvolve_noFetchError);

            case 5:
              json = _context.sent;

              _this.setState({
                workshops: json.workshops.slice(0, 6),
                loaded: true
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      evolution: 'Workshops',
      workshops: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(NavEvolve, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchYogaWorkshops();
    }
  }, {
    key: "render",
    value: function render() {
      var workshops = [{
        title: 'Upcoming Workshops',
        workshops: this.state.workshops,
        limit: 3,
        skip: 0
      }, {
        title: false,
        workshops: this.state.workshops,
        limit: 3,
        skip: 3
      }].map(function (evolve, index) {
        return external_react_default.a.createElement(row, {
          limit: evolve.limit,
          skip: evolve.skip,
          title: evolve.title,
          workshops: evolve.workshops,
          key: index,
          isLink: true
        });
      });
      return external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 3
      }, Object(nav["b" /* navHeading */])('Evolve Your Practice'), external_react_default.a.createElement("ul", null, external_react_default.a.createElement(NavEvolve_SubNav, {
        locations: data_nav.evolutions,
        setLocation: this.setLocation
      }))), external_react_default.a.createElement(NavEvolutions_NavEvolutions, {
        evolution: this.state.evolution,
        workshops: workshops
      }));
    }
  }]);

  return NavEvolve;
}(external_react_["Component"]);

var NavEvolve_SubNav =
/*#__PURE__*/
function (_Component2) {
  Object(inherits["a" /* default */])(SubNav, _Component2);

  function SubNav() {
    Object(classCallCheck["a" /* default */])(this, SubNav);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SubNav).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(SubNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.props.locations.map(function (item, index) {
        return external_react_default.a.createElement("li", {
          key: index,
          onMouseOver: function onMouseOver() {
            return _this2.props.setLocation(item.name);
          }
        }, item.name);
      });
      return external_react_default.a.createElement("ul", {
        className: "sub-sub"
      }, items);
    }
  }]);

  return SubNav;
}(external_react_["Component"]);
// CONCATENATED MODULE: ./components/nav/NavPricing.jsx







function bulletSentence(contents) {
  var bull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var bullets = contents.split('.');
  bullets = bullets.map(function (item) {
    if (item) {
      return external_react_default.a.createElement("li", null, bull, item.trim());
    }

    return false;
  });
  return external_react_default.a.createElement("ul", null, bullets);
}

var NavPricing_NavPricing = function NavPricing(_ref) {
  var name = _ref.name,
      sub_title = _ref.sub_title,
      terms = _ref.terms,
      price = _ref.price,
      description = _ref.description;
  return external_react_default.a.createElement("div", {
    className: "price-block"
  }, Object(nav["b" /* navHeading */])(name), external_react_default.a.createElement("p", {
    className: "highlight"
  }, sub_title), external_react_default.a.createElement("p", null, bulletSentence(description, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faCheck"],
    style: {
      margin: '1px 6px 0',
      fontWeight: 400
    }
  }))), external_react_default.a.createElement("p", null, terms, " ", price), external_react_default.a.createElement("p", null, pureButton('Learn More', '/members')));
};

/* harmony default export */ var nav_NavPricing = (NavPricing_NavPricing);
// CONCATENATED MODULE: ./components/MiniBlog.jsx












var MiniBlog_Mini =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Mini, _Component);

  function Mini() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Mini);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Mini)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "isFull", function () {
      return _this.props.size === 'full';
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Mini, [{
    key: "render",
    value: function render() {
      var teaser = external_react_default.a.createElement("p", null, this.props.desc);
      var blogClassName = this.isFull() ? 'mini-blog flexCol' : 'mini-blog';
      var read_more = external_react_default.a.createElement(link_default.a, {
        href: "/journal/".concat(this.props.slug)
      }, external_react_default.a.createElement("a", {
        className: "btn btn-primary btn-sm btn-red"
      }, "Read more..."));
      var img = this.props.teaser_image ? external_react_default.a.createElement("img", {
        src: this.props.teaser_image.background_image.url,
        alt: "Blog Post",
        style: {
          maxWidth: '100%'
        }
      }) : false;
      return external_react_default.a.createElement(BlogTeaser, {
        onClick: this.routeChange
      }, external_react_default.a.createElement("div", {
        className: blogClassName,
        style: {
          position: 'relative'
        }
      }, external_react_default.a.createElement(ImageHolder, {
        isFull: this.isFull()
      }, img, this.isFull() || !this.props.header ? external_react_default.a.createElement(SubCategory, null, this.props.category) : false), external_react_default.a.createElement("div", {
        style: {
          paddingTop: this.props.header ? '1em' : false,
          width: '100%',
          minWidth: this.isFull() ? 250 : false,
          lineHeight: 1.4,
          background: this.props.header ? '#f5f5f5' : false,
          position: this.props.header ? 'absolute' : false,
          bottom: this.props.header ? 0 : false
        }
      }, this.isFull() || this.props.header ? external_react_default.a.createElement(SubTitle, null, this.props.category) : false, this.isFull() ? Object(nav["b" /* navHeading */])(this.props.name) : external_react_default.a.createElement(BlogTitle, {
        style: {
          fontSize: this.props.header ? '1.8em' : false
        }
      }, this.props.name), this.isFull() || this.props.header ? teaser : false, this.isFull() ? read_more : false)));
    }
  }]);

  return Mini;
}(external_react_["Component"]);

var BlogTitle = external_styled_components_default.a.strong.withConfig({
  displayName: "MiniBlog__BlogTitle",
  componentId: "pglbth-0"
})(["font-weight:650;font-size:0.9em;line-height:1.2em;display:block;"]);
var BlogTeaser = external_styled_components_default.a.div.withConfig({
  displayName: "MiniBlog__BlogTeaser",
  componentId: "pglbth-1"
})(["margin-bottom:2.4em;cursor:pointer;"]);
var SubTitle = external_styled_components_default.a.div.withConfig({
  displayName: "MiniBlog__SubTitle",
  componentId: "pglbth-2"
})(["clear:both;font-weight:100;font-size:13px;letter-spacing:1px;color:palevioletred;"]);
var SubCategory = external_styled_components_default.a.span.withConfig({
  displayName: "MiniBlog__SubCategory",
  componentId: "pglbth-3"
})(["display:inline-block;position:absolute;font-size:11px;background:rgba(255,255,255,0.7);padding:1px 5px;text-transform:uppercase;color:#333;bottom:10px;left:0;"]);
var ImageHolder = external_styled_components_default.a.div.withConfig({
  displayName: "MiniBlog__ImageHolder",
  componentId: "pglbth-4"
})(["position:relative;margin-bottom:12px;padding:", ";"], function (props) {
  return props.isFull ? '0 10px 0 0' : '0';
});
/* harmony default export */ var MiniBlog = (MiniBlog_Mini);
// CONCATENATED MODULE: ./components/nav/NavBlog.jsx









var NavBlog_NavBlog =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(NavBlog, _Component);

  function NavBlog() {
    Object(classCallCheck["a" /* default */])(this, NavBlog);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(NavBlog).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(NavBlog, [{
    key: "render",
    value: function render() {
      console.log('na blo', this.props.data);
      var blog_data, featured_blog, blogs, feature;
      blog_data = this.props.data;
      featured_blog = this.props.data.length ? blog_data[0] : false;
      blogs = blog_data.slice(1, 4).map(function (blog, index) {
        return external_react_default.a.createElement(external_reactstrap_["Col"], {
          key: blog.slug
        }, external_react_default.a.createElement(MiniBlog, {
          name: blog.title,
          category: blog.category,
          teaser_image: blog.teaser_image,
          slug: blog.slug
        }));
      });
      feature = featured_blog ? external_react_default.a.createElement(MiniBlog, {
        name: featured_blog.title,
        category: featured_blog.category,
        size: "full",
        desc: featured_blog.teaser,
        teaser_image: featured_blog.teaser_image,
        slug: featured_blog.slug
      }) : false;
      return external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 6
      }, feature), external_react_default.a.createElement(external_reactstrap_["Col"], {
        xs: 6
      }, Object(nav["b" /* navHeading */])('Latest Posts'), external_react_default.a.createElement(external_reactstrap_["Row"], null, blogs), Object(nav["b" /* navHeading */])('View All', 'https://online.pureyogaottawa.com')));
    }
  }]);

  return NavBlog;
}(external_react_["Component"]);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// CONCATENATED MODULE: ./data/blog.jsx









function BlogData(WrappedComponent, PureData) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(inherits["a" /* default */])(_class, _React$Component);

      function _class(props) {
        var _this;

        Object(classCallCheck["a" /* default */])(this, _class);

        _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(_class).call(this, props));
        _this.state = {
          blogs: []
        };
        return _this;
      }

      Object(createClass["a" /* default */])(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.MindbodyBlogInit();
        }
      }, {
        key: "MindbodyBlogInit",
        value: function MindbodyBlogInit() {
          var _this2 = this;

          var src = new PureData(this.props, false).blogs,
              params = [];
          src.filters.map(function (filter, index) {
            return params.push(values_default()(src.filters[index])[0] ? "&by_".concat(keys_default()(src.filters[index])[0], "=").concat(values_default()(src.filters[index])[0]) : '');
          });
          var url = params.reduce(function (acc, cv) {
            return acc + cv;
          }, src.base);
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            return _this2.setState({
              blogs: data.blogs,
              loaded_blogs: true
            });
          }).then(function () {
            return console.log('inside mount', _this2.state);
          }).catch(function (err) {
            return console.log('Did not fetch your things.');
          });
        }
      }, {
        key: "render",
        value: function render() {
          return external_react_default.a.createElement(WrappedComponent, Object(esm_extends["a" /* default */])({
            data: this.state.blogs
          }, this.props));
        }
      }]);

      return _class;
    }(external_react_default.a.Component)
  );
} // export default BlogData();
// CONCATENATED MODULE: ./data/nav.jsx






 // import { NavStream } from '../nav/NavStream';





var Blog = new BlogData(NavBlog_NavBlog, utils_src["a" /* default */]);
var AppNav = {
  main: [{
    name: 'Home',
    link: '/',
    has_mega: false,
    desktop: false
  }, {
    name: 'Schedule',
    link: '/schedule',
    has_mega: true,
    mega: external_react_default.a.createElement(nav_NavSchedule, null)
  }, {
    name: 'Evolve',
    link: '/evolve',
    has_mega: true,
    mega: external_react_default.a.createElement(NavEvolve_NavEvolve, null),
    sub_nav: '(Workshops and Training)'
  }, {
    name: 'Pricing',
    link: '/members',
    has_mega: true,
    mega: external_react_default.a.createElement(nav_NavMembers, null)
  }, {
    name: 'Team',
    link: '/team',
    has_mega: false
  }, {
    name: 'Journal',
    link: '/journals',
    has_mega: true,
    mega: external_react_default.a.createElement(Blog, null)
  }, {
    name: 'Pure Online',
    link: 'https://onlinepureyoga.com',
    has_mega: false,
    mega: false
  }, {
    name: 'Contact',
    link: '/contact',
    has_mega: false
  }, {
    name: 'Search',
    icon: external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faSearch"],
      style: {
        margin: '1px 6px 0',
        fontWeight: 400
      }
    }),
    link: '/search',
    has_mega: false
  }, {
    name: 'User',
    icon: external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
      icon: free_solid_svg_icons_["faUser"],
      style: {
        margin: '1px 6px 0',
        fontWeight: 400
      }
    }),
    link: '/login',
    has_mega: true,
    mega: external_react_default.a.createElement(NavLogin_NavLogin, null)
  }],
  locations: [{
    name: 'Pure Yoga Westboro',
    link: 'westboro'
  }, {
    name: 'Pure Yoga Centretown',
    link: 'centretown'
  }, {
    name: 'Pure Yoga Downtown',
    link: 'downtown'
  }],
  evolutions: [{
    name: 'Workshops, Training & Retreats' // {
    //   name: 'Training'
    // },
    // {
    //   name: 'Retreats'
    // }

  }],
  classes: [{
    name: 'Intro Month',
    mega: external_react_default.a.createElement(nav_NavPricing, {
      name: "Intro Month",
      price: "$45",
      description: "Any Class. Any Studio. Any Time.",
      sub_title: "Perfect for New to Yoga or New to Pure. Come join us."
    })
  }, {
    name: 'Monthly Unlimited',
    mega: external_react_default.a.createElement(nav_NavPricing, {
      name: "Monthly Unlimited",
      price: "$150",
      sub_title: "One Month Unlimited. Start whenever you like.",
      description: "Any Class. Any Studio. Any Time.",
      terms: ""
    })
  }, {
    name: 'Pure Membership',
    mega: external_react_default.a.createElement(nav_NavPricing, {
      name: "Pure Membership",
      price: "$110/mo",
      description: "Any Class. Any Studio. Any Time.",
      sub_title: "Save over 30% for unlimited Yoga.",
      terms: "4 months (Automatic auto-renew Payment)."
    })
  }, {
    name: 'Class Packs : 5 | 10',
    mega: external_react_default.a.createElement(nav_NavPricing, {
      name: "Class Packs",
      price: "5 Classes: $82. 10 Classes: $152",
      sub_title: "5 or 10 Class Packs Available.",
      description: "Any Class. Any Studio. Any Time."
    })
  }, {
    name: 'Drop In',
    mega: external_react_default.a.createElement(nav_NavPricing, {
      name: "Drop In",
      price: "$20",
      sub_title: "Book In Advance or Just Turn Up.",
      description: "Any Class. Any Studio. Any Time."
    })
  }],
  footer: [{
    name: 'About Pure Yoga',
    link: '/about'
  }, {
    name: 'Faqs',
    link: '/faqs'
  }, {
    name: 'Mindbody Login',
    link: 'https://clients.mindbodyonline.com/classic/ws?studioid=21952&sessionChecked=true'
  }, {
    name: 'Westboro',
    link: '/location/westboro'
  }, {
    name: 'Centretown',
    link: '/location/centretown'
  }, {
    name: 'Downtown',
    link: '/location/downtown'
  }, {
    name: 'Contact',
    link: '/contact'
  }]
};
/* harmony default export */ var data_nav = (AppNav);
// CONCATENATED MODULE: ./components/PureNavBar.jsx













var PureNavBar_PureNavBar =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(PureNavBar, _Component);

  function PureNavBar(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, PureNavBar);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(PureNavBar).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "showDropdown", function (e) {
      _this.setState({
        activeMenu: e
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "toggle", function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    });

    _this.state = {
      isOpen: false,
      // Hardcode Menu Name for Dev
      activeMenu: ''
    };
    return _this;
  }

  Object(createClass["a" /* default */])(PureNavBar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var sub = this.state.isOpen || external_react_default.a.createElement(PureNavBar_SubNav, {
        active_menu_item: this.state.activeMenu,
        active: this.showDropdown,
        classes: this.props.classes,
        loaded: this.props.loaded
      });
      return external_react_default.a.createElement(external_reactstrap_["Navbar"], {
        color: "light",
        expand: "md",
        style: {
          zIndex: 150,
          backgroundColor: 'none',
          border: 'none'
        }
      }, external_react_default.a.createElement(external_reactstrap_["NavbarBrand"], {
        href: "/",
        style: {
          margin: 0,
          padding: 0
        }
      }, external_react_default.a.createElement("svg", {
        width: "210px",
        height: "58px",
        viewBox: "0 0 1869 428",
        version: "1.1"
      }, external_react_default.a.createElement("g", {
        id: "Page-1",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }, external_react_default.a.createElement("path", {
        d: "M432.870013,281 L432.870013,158.5 L483.970013,158.5 C508.470013,158.5 521.945013,171.975 521.945013,191.575 C521.945013,211.175 508.470013,224.825 483.970013,224.825 L441.620013,224.825 L441.620013,281 L432.870013,281 Z M441.620013,216.775 L483.095013,216.775 C502.345013,216.775 513.195013,207.675 513.195013,191.575 C513.195013,175.65 502.345013,166.55 483.095013,166.55 L441.620013,166.55 L441.620013,216.775 Z M639.755012,283.1 C611.055012,283.1 590.580012,264.2 590.580012,228.675 L590.580012,158.5 L599.330012,158.5 L599.330012,228.675 C599.330012,258.075 614.905012,274.875 639.755012,274.875 C664.605012,274.875 680.005012,258.25 680.005012,228.675 L680.005012,158.5 L688.755012,158.5 L688.755012,228.675 C688.755012,264.2 668.105012,283.1 639.755012,283.1 Z M766.49001,281 L766.49001,158.5 L820.91501,158.5 C844.89001,158.5 858.36501,171.625 858.36501,190.875 C858.36501,208.2 847.69001,220.8 828.09001,223.075 L868.16501,281 L858.01501,281 L818.11501,223.775 L775.24001,223.775 L775.24001,281 L766.49001,281 Z M775.24001,215.725 L820.21501,215.725 C838.76501,215.725 849.61501,206.975 849.61501,191.05 C849.61501,175.475 838.76501,166.55 820.21501,166.55 L775.24001,166.55 L775.24001,215.725 Z M938.550008,281 L938.550008,158.5 L1020.80001,158.5 L1020.80001,166.55 L947.300008,166.55 L947.300008,211 L1008.02501,211 L1008.02501,219.225 L947.300008,219.225 L947.300008,272.95 L1023.60001,272.95 L1023.60001,281 L938.550008,281 Z M1217.22001,281 L1217.22001,224.3 L1169.62001,158.5 L1180.12001,158.5 L1221.77001,216.075 L1263.77001,158.5 L1273.74501,158.5 L1225.97001,224.125 L1225.97001,281 L1217.22001,281 Z M1388.405,274.875 C1417.455,274.875 1440.38,251.425 1440.38,219.75 C1440.38,188.075 1417.455,164.8 1388.405,164.8 C1359.355,164.8 1336.255,188.075 1336.255,219.75 C1336.255,251.425 1359.355,274.875 1388.405,274.875 Z M1388.405,283.1 C1353.58,283.1 1327.33,256.15 1327.33,219.75 C1327.33,183.525 1353.58,156.4 1388.405,156.4 C1422.88,156.4 1449.305,183.525 1449.305,219.75 C1449.305,256.15 1422.88,283.1 1388.405,283.1 Z M1580.24,283.1 C1545.765,283.1 1518.64,256.675 1518.64,219.75 C1518.64,182.825 1545.59,156.4 1580.24,156.4 C1595.465,156.4 1609.465,160.775 1620.14,169 L1620.14,178.275 C1608.765,169.35 1594.765,164.8 1580.94,164.8 C1550.84,164.8 1527.565,187.55 1527.565,219.925 C1527.565,251.95 1551.015,274.875 1580.24,274.875 C1595.465,274.875 1609.29,270.15 1618.39,260.525 L1618.39,210.825 L1627.14,210.825 L1627.14,263.85 C1616.815,275.05 1600.89,283.1 1580.24,283.1 Z M1691.575,281 L1747.05,157.8 L1755.1,157.8 L1810.4,281 L1801.3,281 L1785.2,245.3 L1716.775,245.3 L1700.675,281 L1691.575,281 Z M1719.925,237.6 L1782.05,237.6 L1751.075,169.175 L1719.925,237.6 Z",
        id: "PURE-YOGA",
        fill: "#000000"
      }), external_react_default.a.createElement("path", {
        d: "M309.162884,327.761696 C308.02162,323.844127 291.092869,300.152163 275.685804,284.108786 C269.979483,278.139157 259.327685,272.729181 253.431153,266.013349 C243.920619,255.006846 221.85618,217.696667 212.535856,206.130511 C212.535856,206.130511 211.204382,185.609913 207.400168,176.468919 C204.356797,169.006883 195.797316,164.15656 195.797316,164.15656 C193.704999,141.770452 195.797316,136.920129 193.324577,114.720572 C191.802892,100.542704 184.194464,89.536201 181.911936,68.6425006 C181.911936,68.6425006 183.0532,67.3366443 183.814043,64.9114827 C184.765097,62.2997701 183.814043,59.6880576 183.243411,56.3301415 C182.672779,52.0394708 183.0532,47.1891475 182.482568,43.4581296 C182.292358,41.5926206 181.341304,35.9960938 180.20004,35.9960938 C179.629408,35.9960938 180.009829,38.6078063 179.439197,44.2043332 C179.439197,44.7639859 179.248987,43.2715787 178.488144,42.8984769 C178.297933,42.711926 178.297933,48.8681056 177.917512,53.1587762 C177.156669,60.0611594 175.444773,70.6945605 175.254562,75.9179856 C175.064352,82.6338179 175.064352,94.7596261 175.634984,101.475458 C176.395826,108.377842 179.819619,121.622955 180.20004,128.525338 C180.580461,135.427722 176.966458,158.186931 176.966458,158.186931 C176.966458,158.186931 170.118874,167.701027 169.358031,185.423362 C168.597188,205.757409 169.16782,187.10232 168.406978,213.405996 C168.406978,213.405996 159.086654,226.091457 149.766331,238.403816 C136.641793,255.566499 133.218001,261.349577 123.897678,270.30402 C118.571778,275.340894 108.871034,279.445014 96.5073391,288.959109 C83.5730126,298.846307 71.0191075,317.501396 59.9868878,326.828941 C59.226045,327.575145 57.3239382,329.067552 56.9435168,330.186857 C56.7533062,330.933061 56.1826741,337.648893 56.9435168,338.581648 C59.4162557,341.753013 69.1170006,340.820258 69.6876327,340.820258 C72.3505822,340.633708 73.4918463,340.074055 73.682057,339.1413 C73.8722677,338.395097 71.5897395,338.208546 70.8288968,337.648893 C68.9267899,336.156486 69.497422,328.507899 69.497422,328.507899 C84.1436447,316.008989 100.501763,305.935241 126.750838,290.078415 C145.581696,278.69881 170.499295,257.245457 170.499295,257.245457 C170.879717,274.781241 170.689506,271.050223 171.450349,290.264966 C172.020981,302.577325 176.776248,333.917875 176.966458,340.633708 C176.966458,343.618522 174.303509,348.655396 172.972034,351.45366 C172.401402,352.759516 171.260138,354.625025 169.738452,355.930881 C166.885292,358.542594 165.744028,359.475348 166.31466,360.035001 C167.075503,360.594653 172.211191,357.423288 173.732877,355.930881 C173.732877,355.930881 173.162245,357.236737 172.401402,359.102246 C171.450349,361.340857 170.499295,363.579468 171.450349,363.95257 C172.211191,364.139121 173.732877,362.460162 174.68393,360.967755 C176.015405,359.102246 177.34688,356.117432 177.34688,356.117432 C177.917512,356.117432 179.439197,356.677085 180.20004,357.423288 C180.20004,357.423288 180.580461,359.475348 180.770672,361.340857 C181.151094,363.392917 181.911936,365.071875 182.86299,365.071875 C184.194464,365.071875 184.194464,363.019815 184.004254,361.340857 C183.814043,359.84845 183.814043,357.79639 183.814043,357.79639 C187.047625,357.982941 187.808467,360.967755 189.330153,362.460162 C190.661628,363.766019 191.802892,363.766019 192.183313,363.579468 C193.134367,363.019815 191.802892,361.340857 191.042049,359.84845 C190.281206,358.542594 189.330153,356.677085 189.330153,356.677085 C189.330153,356.677085 192.373524,357.423288 192.944156,355.557779 C193.134367,355.184677 191.802892,354.811576 190.471417,354.251923 C189.330153,353.69227 188.188889,353.132618 188.188889,353.132618 C187.047625,348.468845 186.286782,346.603336 185.71615,342.872318 C185.335729,340.820258 184.384675,337.462342 184.384675,335.783384 C184.004254,324.030678 185.145518,319.740007 185.71615,309.666259 C185.906361,306.494894 186.286782,297.167349 186.286782,291.011169 C185.71615,269.184714 186.857414,259.297517 186.857414,259.297517 C186.857414,259.297517 189.900785,248.477565 191.42247,245.119649 C191.42247,245.119649 217.100913,257.99166 250.387783,285.04154 C286.337602,314.330031 297.750243,326.082738 297.750243,326.082738 C297.750243,326.082738 298.320875,333.917875 296.608979,336.343037 C296.608979,336.343037 294.516661,337.462342 294.516661,338.021995 C294.706872,339.514402 296.9894,340.260606 299.271928,340.633708 C303.836985,341.19336 309.923727,340.447157 310.87478,339.327851 C312.016044,338.208546 310.113937,331.306163 309.162884,327.761696",
        id: "Path",
        fill: "#000000"
      }), external_react_default.a.createElement("path", {
        d: "M185.589844,358.125654 C111.217466,358.125654 50.7304688,298.802469 50.7304688,225.861068 C50.7304688,152.919668 111.217466,93.5964827 185.589844,93.5964827 C259.962221,93.5964827 320.449219,152.919668 320.449219,225.861068 C320.449219,298.802469 259.962221,358.125654 185.589844,358.125654 M185.589844,111.318818 C121.298633,111.318818 68.8004837,162.620314 68.8004837,225.861068 C68.8004837,288.915271 121.108422,340.403319 185.589844,340.403319 C249.881055,340.403319 302.379204,289.101822 302.379204,225.861068 C302.379204,162.620314 249.881055,111.318818 185.589844,111.318818",
        id: "Shape",
        fill: "#000000",
        "fill-rule": "nonzero"
      })))), external_react_default.a.createElement(external_reactstrap_["NavbarToggler"], {
        onClick: function onClick() {
          return _this2.toggle();
        }
      }, this.state.isOpen ? 'X' : '|||'), external_react_default.a.createElement(external_reactstrap_["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, external_react_default.a.createElement(external_reactstrap_["Nav"], {
        className: "ml-auto",
        navbar: true,
        onClick: function onClick() {
          return _this2.toggle();
        }
      }, external_react_default.a.createElement("br", null), external_react_default.a.createElement(nav["a" /* NavList */], {
        nav_items: data_nav.main,
        active: this.showDropdown
      }))), sub);
    }
  }]);

  return PureNavBar;
}(external_react_["Component"]);

var PureNavBar_SubNav = function SubNav(props) {
  var megamenu, mega_display, active_menu_item, dropdowns; // set vars

  var _ref = [props.active_menu_item, '', data_nav.main];
  active_menu_item = _ref[0];
  mega_display = _ref[1];
  dropdowns = _ref[2];

  function hasMega(item) {
    return item.has_mega !== false && item.name === active_menu_item;
  }

  megamenu = dropdowns.filter(function (item) {
    return hasMega(item);
  }).map(function (menu_item, index) {
    return external_react_default.a.createElement("span", {
      key: index
    }, menu_item.name === 'Schedule' ? external_react_default.a.createElement(nav_NavSchedule, {
      classes: props.classes,
      loaded: props.loaded
    }) : menu_item.mega);
  });

  if (active_menu_item !== '' && active_menu_item !== 'Contact' && active_menu_item !== 'Team' && active_menu_item !== 'Stream' && active_menu_item !== 'Pure Online') {
    mega_display = external_react_default.a.createElement("div", {
      onClick: function onClick() {
        return props.active('');
      },
      id: "sub-nav",
      onMouseLeave: function onMouseLeave() {
        return props.active('');
      }
    }, external_react_default.a.createElement(external_reactstrap_["Container"], {
      fluid: true
    }, megamenu), external_react_default.a.createElement("br", null));
  }

  return mega_display;
};

/* harmony default export */ var components_PureNavBar = (PureNavBar_PureNavBar);
// CONCATENATED MODULE: ./components/PureHeader.jsx




/* harmony default export */ var PureHeader = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_TopStrap, null), external_react_default.a.createElement(components_PureNavBar, {
    classes: [],
    loaded: false
  }));
});
var Mep = external_styled_components_default.a.div.withConfig({
  displayName: "PureHeader__Mep",
  componentId: "sc-1r4myx6-0"
})(["color:red;"]);
// CONCATENATED MODULE: ./components/PureFooter.jsx




var footerLinks = data_nav.footer.map(function (link) {
  return external_react_default.a.createElement("a", {
    href: link.link,
    key: link.link,
    alt: "Footer Link"
  }, link.name);
});

var PureFooter_Footer = function Footer() {
  return external_react_default.a.createElement(external_reactstrap_["Container"], {
    id: "footer",
    fluid: true
  }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
    md: 9,
    xs: 12,
    className: "footer-links"
  }, external_react_default.a.createElement(components_Socials, null), footerLinks, ' | ', external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://docs.pureyogaottawa.com/p/terms-and-conditions"
  }, "Terms"), external_react_default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://docs.pureyogaottawa.com/p/privacy-policy"
  }, "Privacy")), external_react_default.a.createElement(external_reactstrap_["Col"], {
    md: 3,
    xs: 12,
    className: "footer-links"
  }, "\xA9 2019 Pure Yoga Ottawa")));
};

/* harmony default export */ var PureFooter = (PureFooter_Footer);
// CONCATENATED MODULE: ./components/Layout.js



/* harmony default export */ var Layout = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(PureHeader, null), children, external_react_default.a.createElement(PureFooter, null));
});

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "BVXd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__("UWCm");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "CGBx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./components/evolve/styles.js
var rowWidth = '100%';
var futura = '"Futura PT Medium", sans-serif'; // const futura_light = '"Futura PT Light", sans-serif';
// const lusty = 'lust-script, sans-serif';

var cortado = '"cortado", sans-serif';
var heroFont = cortado;
var whiteness = '245,245,245';
var white = '255,255,255';
var teaserLeftCol = '60%';
var teaserRightCol = '40%'; // eslint-disable-next-line import/prefer-default-export

var style = {
  body: {
    background: "rgba(".concat(whiteness, ",1)")
  },
  close: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: '2.5%',
    right: '2%',
    textShadow: '0 0 12px #999',
    zIndex: 100,
    fontSize: 20
  },
  row: {
    minWidth: '100%',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    container: {
      marginBottom: '2em'
    },
    header: {
      paddingLeft: '2.5%',
      fontSize: '1.1em',
      fontWeight: 600,
      letterSpacing: 0.5,
      fontFamily: futura,
      marginBottom: 0
    },
    spacer: {
      minWidth: '2.5%'
    },
    col: {
      position: 'relative',
      minWidth: '31%',
      border: '3px solid transparent',
      display: 'block',
      cursor: 'pointer',
      img: {
        background: '#fff'
      }
    },
    openArrow: {
      color: '#fff',
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }
  },
  page: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: "linear-gradient(rgba(".concat(whiteness, ", 0),rgba(").concat(whiteness, ", 0.15),rgba(").concat(whiteness, ", 0.5),rgba(").concat(whiteness, ", 0.5),rgba(").concat(whiteness, ", 1))"),
    heading: {
      textAlign: 'center',
      fontFamily: heroFont,
      fontSize: '5em',
      color: '#fff',
      textShadow: '0 0 2px #000',
      marginBottom: 100
    },
    flex: {
      display: 'flex',
      justifyItems: 'space-between'
    }
  },
  teaser: {
    width: '100%',
    fontSize: '1em',
    background: '#fff',
    margin: 0,
    position: 'relative',
    height: '100%',
    transition: 'height 1s',
    type: {
      fontSize: '0.8em',
      fontWeight: 100,
      color: '#333',
      textTransform: 'uppercase'
    },
    type_brand: {
      fontWeight: 'bold',
      color: '#111'
    },
    heading: {
      fontSize: '1.8em',
      lineHeight: '1.1em',
      margin: 0,
      fontWeight: 400,
      fontFamily: futura,
      textTransform: 'uppercase'
    },
    details: {
      fontFamily: futura,
      fontSize: '1em',
      fontWeight: 'bold',
      lineHeight: '1.2em',
      display: 'block',
      color: '#666',
      marginTop: 6,
      detail: {
        wrap: 'no-wrap'
      }
    },
    description: {
      fontSize: '0.9em',
      color: '#333',
      maxWidth: '90%'
    },
    content: {
      position: 'relative',
      width: rowWidth,
      margin: '0 0 0 0.25%',
      zIndex: 10,
      padding: '1em 2.5%',
      paddingRight: teaserLeftCol,
      display: 'block'
    },
    more_info: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid #ccc',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    book_now: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid pink',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    add_to_favorites: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid #fff',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    left_grad: {
      backgroundImage: 'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1))',
      position: 'absolute',
      left: 0,
      width: '15%',
      top: 0,
      bottom: 0,
      zIndex: 8
    },
    bottom_fade: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 42,
      background: "linear-gradient(rgba(".concat(white, ", 0),rgba(").concat(white, ", 0.35),rgba(").concat(white, ", 1))"),
      zIndex: 4
    },
    bottom_fade_page: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 52,
      background: "linear-gradient(rgba(".concat(whiteness, ", 0),rgba(").concat(whiteness, ", 0.35),rgba(").concat(whiteness, ", 1))"),
      zIndex: 4
    },
    bottom_tabs: {
      tab: {
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontWeight: 750,
        margin: '0 12px',
        borderBottom: '4px solid rgba(255,255,255,0.8)',
        active: {
          borderBottom: '4px solid pink'
        }
      }
    },
    bg: {
      position: 'absolute',
      height: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      width: teaserRightCol,
      zIndex: 1,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }
};
// CONCATENATED MODULE: ./components/evolve/config.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvolveConfig; });
 // eslint-disable-next-line import/prefer-default-export

var EvolveConfig = {
  zone: 'Etc/GMT',
  rowWidth: '92%',
  style: style,
  row_size: 3
};

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EhLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("20a2");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5Yp1");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s02U");





 // import fetch from 'isomorphic-unfetch'



var noFetchError = function noFetchError() {
  return new Throw('Nope!');
};

var Post = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, props.router.query.title, " ", props.router.query.id), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "This is the blog post content."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, props.classes.map(function (show, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      as: "/p/".concat(show.id),
      href: "/post?id=".concat(show.id)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, show.class_details.id)));
  })));
});
Post.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(_utils_tools__WEBPACK_IMPORTED_MODULE_6__[/* AppHelpers */ "a"].mbParams({}, 'classes'));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();

        case 6:
          json = _context.sent;
          return _context.abrupt("return", {
            classes: json.classes,
            loaded_classes: true
          });

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          noFetchError();

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this, [[0, 10]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Jojx":
/***/ (function(module, exports) {

module.exports = require("mailto-link");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "P6V6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PureData; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");


// const env = 'local';
var env = 'prod';

var PureData =
/*#__PURE__*/
function () {
  function PureData(props) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, PureData);

    this.limit = limit;
    this.props = props;
    this.src = env === 'local' ? 'http://localhost:5000/api/v1/' : 'https://cdn.pureyogaottawa.com/api/v1/';
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PureData, [{
    key: "postEndpoint",
    value: function postEndpoint(endpoint) {
      return "".concat(this.src + endpoint, ".json?key=98123");
    }
  }, {
    key: "endpoint",
    value: function endpoint(_endpoint) {
      return "".concat(this.src + _endpoint, ".json?key=98123");
    }
  }, {
    key: "endpointWithClientId",
    value: function endpointWithClientId(endpoint, client_id) {
      return "".concat(this.src + endpoint, "?client_id=").concat(client_id, "&key=98123");
    }
  }, {
    key: "findEndpoint",
    value: function findEndpoint(endpoint, id) {
      return "".concat(this.src + endpoint, "/").concat(id, ".json&key=98123");
    }
  }, {
    key: "findEndpointRelations",
    value: function findEndpointRelations(endpoint, id, relations) {
      return "".concat(this.src + endpoint, "/").concat(id, "/").concat(relations, ".json?key=98123");
    }
  }, {
    key: "classes",
    get: function get() {
      return {
        base: this.endpoint('weekly_timetables'),
        filters: [{
          location: this.props.location || 'all'
        }, {
          day: this.props.day || 'Today'
        }, {
          days: this.props.days || 1
        }, {
          class_style: this.props.class_style || 'all'
        }, {
          teacher: this.props.teacher || 'all'
        }, {
          blog: this.props.blog || false
        }]
      };
    }
  }, {
    key: "login",
    get: function get() {
      return {
        base: this.postEndpoint('mindbody/login'),
        filters: []
      };
    }
  }, {
    key: "teachers",
    get: function get() {
      return {
        base: this.endpoint('teachers'),
        filters: [{
          teacher: this.props.teacher
        }]
      };
    }
  }, {
    key: "banners",
    get: function get() {
      return {
        base: this.endpoint('banners'),
        filters: [{
          type: this.props.type
        }]
      };
    }
  }, {
    key: "videos",
    get: function get() {
      return {
        base: this.endpoint('videos'),
        filters: [{
          teacher: this.props.teacher
        }]
      };
    }
  }, {
    key: "booked_classes",
    get: function get() {
      return {
        base: this.props.user_id ? this.endpointWithClientId('mindbody/get_classes', this.props.user_id) : '',
        filters: [{
          client_id: this.props.client_id
        }]
      };
    }
  }, {
    key: "workshops",
    get: function get() {
      return {
        base: this.endpoint('workshops'),
        filters: [{
          teacher: this.props.teacher
        }, {
          id: this.props.id
        }]
      };
    }
  }, {
    key: "pricing",
    get: function get() {
      return {
        base: this.endpoint('pricing'),
        filters: []
      };
    } // get workshop() {
    //   return {
    //     base: this.endpoint('workshop'),
    //     filters: [{ workshop: this.props.workshop }]
    //   };
    // }

  }, {
    key: "remove_favorite",
    get: function get() {
      return {
        base: this.endpoint('mindbody/remove_favorite'),
        filters: []
      };
    }
  }, {
    key: "add_favorite",
    get: function get() {
      return {
        base: this.endpoint('mindbody/add_favorite'),
        filters: []
      };
    }
  }, {
    key: "contents",
    get: function get() {
      return {
        base: this.endpoint('contents'),
        filters: [{
          workshops_only: this.props.workshopsOnly
        }, {
          blogs_only: this.props.blogsOnly
        }, {
          teacher: this.props.teacher
        }]
      };
    }
  }, {
    key: "classStyles",
    get: function get() {
      return {
        base: this.endpoint('class_styles'),
        filters: [{
          class_style: this.props.class_style
        }]
      };
    }
  }, {
    key: "blogs",
    get: function get() {
      return {
        base: this.endpoint('blogs'),
        filters: [{
          teacher: this.props.teacher
        }]
      };
    }
  }, {
    key: "blog",
    get: function get() {
      console.log('Blog Prop', this.props);
      return {
        base: this.endpoint('blogs'),
        filters: [{
          blog: this.props.match.params.handle
        }]
      };
    }
  }, {
    key: "workshopTeachers",
    get: function get() {
      return {
        base: this.findEndpointRelations('workshops', this.props.id, 'teachers'),
        filters: []
      };
    }
  }]);

  return PureData;
}();



/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TXK0":
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UWCm":
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Y9N/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");

// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// EXTERNAL MODULE: ./utils/tools.js
var tools = __webpack_require__("s02U");

// CONCATENATED MODULE: ./components/Notifications.js




var Notifications_Notifications =
/*#__PURE__*/
function () {
  function Notifications(msg) {
    var _this = this;

    Object(classCallCheck["a" /* default */])(this, Notifications);

    Object(defineProperty["a" /* default */])(this, "customNotifier", function () {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-undef
      alert("Error: ".concat(_this.msg));
    });

    this.msg = msg;
  }

  Object(createClass["a" /* default */])(Notifications, [{
    key: "notify",
    value: function notify() {
      var alertUser = this.customNotifier();
      return alertUser;
    }
  }]);

  return Notifications;
}();

/* harmony default export */ var components_Notifications = (Notifications_Notifications);
// CONCATENATED MODULE: ./components/Favorite.jsx











/* eslint-disable camelcase */









var Favorite_Favorite =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Favorite, _Component);

  function Favorite(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Favorite);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Favorite).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "toggleFavorite",
    /*#__PURE__*/
    Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var favorite;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              favorite = _this.state.favorite;
              _context.next = 3;
              return _this.callToggleFavorite(favorite ? 'remove_favorite' : 'add_favorite');

            case 3:
              _this.setState({
                favorite: favorite || true
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "callToggleFavorite",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2(toggleType) {
        var url, notifier, _this$props, favorite_type, id, response, json;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = tools["a" /* AppHelpers */].mbParams({}, toggleType);
                notifier = new components_Notifications('You Must Login to collect favorites.');
                _this$props = _this.props, favorite_type = _this$props.favorite_type, id = _this$props.id;
                _context2.next = 5;
                return fetch(url, {
                  method: 'POST',
                  body: stringify_default()({
                    client_id: _this.client_id,
                    fid: "".concat(favorite_type, ".").concat(id)
                  }),
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }).catch(function () {
                  return notifier.notify();
                });

              case 5:
                response = _context2.sent;
                _context2.next = 8;
                return response.json().catch(function () {
                  return notifier.notify();
                });

              case 8:
                json = _context2.sent;

                if (!json.data) {
                  notifier.notify();
                } else {
                  _this.setState({
                    fids: json.data.favorites
                  });

                  _this.setCookies();
                }

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "setCookies", function () {
      var cookies = _this.props.cookies;
      var fids = _this.state.fids;
      cookies.set('fids', fids);
    });

    var _this$props2 = _this.props,
        _cookies = _this$props2.cookies,
        _favorite_type = _this$props2.favorite_type,
        _id = _this$props2.id;
    _this.client_id = _cookies.get('user_id') || false;

    var _fids = _cookies.get('fids') || [];

    _this.state = {
      favorite: _fids.includes("".concat(_favorite_type, ".").concat(_id))
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Favorite, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var favorite = this.state.favorite;
      var _this$props3 = this.props,
          size = _this$props3.size,
          showText = _this$props3.showText; // const [count, setCount] = useState(0);

      return external_react_default.a.createElement("span", null, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: favorite ? free_solid_svg_icons_["faHeart"] : free_regular_svg_icons_["faHeart"],
        style: {
          width: size === 'tiny' ? 10 : false,
          margin: '1px 6px 0',
          fontWeight: 400,
          opacity: size === 'tiny' ? '0.2' : false
        },
        onClick: function onClick() {
          return _this2.toggleFavorite();
        }
      }), showText && !favorite ? 'Add Favorite' : '');
    }
  }]);

  return Favorite;
}(external_react_["Component"]);

/* harmony default export */ var components_Favorite = __webpack_exports__["a"] = (Object(external_react_cookie_["withCookies"])(Favorite_Favorite));

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "b3CU":
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__("pbKT");

var setPrototypeOf = __webpack_require__("vjea");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _typeof2 = _interopRequireDefault(__webpack_require__("iZP3"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("20a2"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? url_1.format(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? url_1.format(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "dpSZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLocations; });
// eslint-disable-next-line import/prefer-default-export
var AppLocations = {
  all: [{
    name: 'Pure Yoga Westboro',
    description: 'Some handy info about this place... How hot is the hot room? First location? Door opens when? Do I need a key etc... Facilities',
    handle: 'westboro',
    address: '279A Richmond Road',
    phone: '613-680-PURE (7873)',
    city: 'Ottawa, ON',
    postcode: 'K1Z 6X3',
    info: 'westboro@pureyogaottawa.com',
    facilities: ["Women's and Men's change rooms", 'Lockers (BYO padlock)', 'Showers with body wash', 'Waiting Room', 'Yoga apparel and accessories boutique', 'Reception / Front Desk', 'Mat hire & Towel hire', 'Free filtered water (BYO bottle)', 'Yoga props (straps, blocks)', 'Purchase Memberships or Drop ins'],
    google_place_id: 'ChIJEdJT4gIEzkwRQ-FMPxtJ_Qw',
    bus_schedules: [{
      name: 'Westboro Bus Station Map',
      link: 'http://www.octranspo.com/images/files/maps/area_map/WEB.pdf'
    }],
    where_to_park: '...missing...',
    images: [''],
    map: 'https://www.google.ca/maps/vt/data=qRx1kFp8Ep9FtRKPY9l198ZvqcX-352k2C62IuzPiQEXT9VPIbIWD9zSZqCyLMPdliMcQ2mrsvbd9eJpln08yj8xZ0EbEAkHWp7JhB4MkkrA9AGpU-sfeZU6lH8RUZud2PHjbXKeDHm9TM4ZgmHdBgFIRzDDNhpEsRDBcqDYeMq5PnEze4Lkw3q9Pro1g2sW3xNFv_FiibDAv34W0QBM37gRFXAo3QJcL90cbnBKGA'
  }, {
    name: 'Pure Yoga Centretown',
    description: 'Some handy info about this place... How hot is the hot room? First location? Door opens when? Do I need a key etc... Facilities',
    handle: 'centretown',
    address: '359 Bank Street',
    phone: '613-695-PURE (7873)',
    city: 'Ottawa, ON',
    postcode: 'K2P 1X9',
    info: 'centretown@pureyogaottawa.com',
    where_to_park: '...missing...',
    facilities: ["Women's and Men's change rooms", 'Lockers (BYO padlock)', 'Showers with body wash', 'Waiting Room', 'Yoga apparel and accessories boutique', 'Reception / Front Desk', 'Mat hire & Towel hire', 'Free filtered water (BYO bottle)', 'Yoga props (straps, blocks)', 'Purchase Memberships or Drop ins'],
    bus_schedules: [{
      name: 'Route 7',
      link: 'http://plan.octranspo.com/plan/RouteSchedules?RouteKey=7~~Direction1&ShowOptions=false'
    }, {
      name: 'Route 6',
      link: 'http://plan.octranspo.com/plan/RouteSchedules?RouteKey=6~~Direction1&ShowOptions=false'
    }],
    images: [''],
    google_place_id: 'ChIJ0UWDuK0FzkwRcA2_43tT8Ac',
    map: 'https://www.google.ca/maps/vt/data=kgLgAqSQEqr4N-iCDEjhohkWbdEAgv4Ou670_PVkLN7jko-6sAwgpiKICG3M6FzlpjnKNko6tU0tyWNXznF5F06gW8PIGWkbjWSeNeqSbxjqzv7XrQand8I1cwl9GQKLLyTvfA0xyJAOrcQg3oJtAezPbhohwsqlALCZ00ZdPch7f3gIXP2ZPF9Eyl3wMCosBJRA8oy5x4XLc0aomExz4SMrsf3xBj42M_NkRHTW'
  }, {
    name: 'Pure Yoga Downtown',
    description: 'Some handy info about this place... How hot is the hot room? First location? Door opens when? Do I need a key etc... Facilities',
    handle: 'downtown',
    address: '71 Bank Street (Suite 3)',
    phone: '613-422-PURE (7873)',
    postcode: 'K1P 5N2',
    facilities: ["Women's and Men's change rooms", 'Lockers (BYO padlock)', 'Showers with body wash', 'Waiting Room', 'Yoga apparel and accessories boutique', 'Reception / Front Desk', 'Mat hire & Towel hire', 'Free filtered water (BYO bottle)', 'Yoga props (straps, blocks)', 'Purchase Memberships or Drop ins'],
    images: [''],
    city: 'Ottawa, ON',
    where_to_park: '...missing...',
    bus_schedules: [{
      name: 'Downtown OC Transpo',
      link: 'http://www.octranspo.com/ready4rail/downtown'
    }],
    info: 'downtown@pureyogaottawa.com',
    google_place_id: 'ChIJ1UKdsVUEzkwRkWn-PxYgUhg',
    map: 'https://s3.amazonaws.com/pureyogaottawa.com/website/maps/dt-map.png'
  }]
}; // all map https://www.google.ca/maps/vt/data=gMNvC-tgvlIpjj11pEQooup0WOYHn7E8ZmffLI_VZ8XrOophIrPE2moe7TyaRaLyISpfr4SiNyGhEJyzz1c7Kpb_dO4ffY5QanlsimHvp3ZHO17j2b50OjfUuigWDqAtgXe-Sa_oID7KxKc9pJjUCfVd44mXKp9GOJDMR-V0TwzYOErZy9vfvXapzeWlqrRtLFGhCe1UinvVJIfdsX__PrV7DtmBvXm8AxYELwKd_A_ZPfunHLSwxBw8hLrIC7ELOFUQXI3cZ8ljlnfcYtPo3Dxhzcfe3vxXiRHr7SR95z53j7NVHMZ78S--kTYw0j1ZHeo4mJtsDgnOVOQ9YSMxHp3vDIxruBzkYK_fgTifTd_VLsRR-nCVkFoy299Nl-u2YISIK0Tfpt4MPV_SH4w9DgqiR_m7l-1dDXXTGRqbEcOaGvDOWqhlWHQtNlhy-zmDMN-GMKte04vcBhXVfQPxEF6qj1uDvJNl8Q3s67RJqeAgilDzmklxXIlOnLO_kSBlqK9YdcW7K_FvSvJrxBJOZynCIqMKx7daoPA_WI6IBayUyMmmTIoyGHYD8loCeWuPJ9VV2Gath5rXXq8yUP7scztwHjLdqhdCehIltaOhbOQxye8OmDtFWfgY2HpozjNOQ23aRu2yp4Lp-aVbiy4g

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gX4A":
/***/ (function(module, exports) {

module.exports = require("textile-js");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "jvUQ":
/***/ (function(module, exports) {

module.exports = require("react-measure");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lFMt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Variables */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PureBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return colors; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/prefer-default-export */

var Variables = {
  bodyBg: '#ccc',
  pureBlack: '#111',
  pureBlue: '#767F84',
  pureRed: '#DC9D9D',
  pureReception: '#E4C9BE',
  pureWomens: '#B6ABB1',
  pureMens: '#A3AEB2',
  pureMens2: '#BEBEE4',
  pureSeating: '#E9DAD5'
};
var PureBrand = {
  pureRed: Variables.pureRed,
  pureBlue: Variables.pureBlue
};
var fonts = {
  primary: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["text-transform:uppercase;font-family:futura-pt,sans-serif;line-height:1em;font-weight:600;letter-spacing:0px;"]),
  secondary: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:lust-script,sans-serif;font-weight:300;text-transform:none;"]),
  highlight: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:bodoni-urw,serif;"]),
  p: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:bodoni-urw,serif;"]),
  small: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:12px;"]),
  medium: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:15px;"]),
  large: Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:22px;"])
};
var colors = {
  bg: '#ccc',
  black: '#111',
  blue: '#90B8D4',
  red: '#D49090',
  green: '#99D490',
  pink: '#DC9D9D',
  links: '#90B8D4'
};


/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _assign = _interopRequireDefault(__webpack_require__("UXZV"));

var _typeof2 = _interopRequireDefault(__webpack_require__("iZP3"));

var _construct2 = _interopRequireDefault(__webpack_require__("b3CU"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__("qxCs"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__("0Bsm");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pbKT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s02U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHelpers; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2wwy");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("P6V6");






var AppHelpers =
/*#__PURE__*/
function () {
  function AppHelpers() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, AppHelpers);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AppHelpers, null, [{
    key: "slashJoin",
    value: function slashJoin(arr) {
      var items;
      items = arr.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          key: 'slash_' + index
        }, item.name);
      });
      return items.join(' / ');
    }
  }, {
    key: "mbParams",
    value: function mbParams(props, call) {
      var src = new _src__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"](props, false)[call];
      var params = [];
      src.filters.map(function (filter, index) {
        return params.push(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(src.filters[index])[0] ? "&by_".concat(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(src.filters[index])[0], "=").concat(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(src.filters[index])[0]) : '');
      });
      var url = params.reduce(function (acc, cv) {
        return acc + cv;
      }, src.base);
      return url;
    }
  }]);

  return AppHelpers;
}();

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vY2J":
/***/ (function(module, exports) {

module.exports = require("react-add-to-calendar");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wEaX":
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "wtxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");

// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__("TXK0");
var external_moment_timezone_default = /*#__PURE__*/__webpack_require__.n(external_moment_timezone_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./utils/nav.jsx
var nav = __webpack_require__("xzoR");

// EXTERNAL MODULE: ./styles/variables.js
var variables = __webpack_require__("lFMt");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__("wEaX");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2wwy");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "react-add-to-calendar"
var external_react_add_to_calendar_ = __webpack_require__("vY2J");
var external_react_add_to_calendar_default = /*#__PURE__*/__webpack_require__.n(external_react_add_to_calendar_);

// EXTERNAL MODULE: ./utils/src.js
var utils_src = __webpack_require__("P6V6");

// EXTERNAL MODULE: external "mailto-link"
var external_mailto_link_ = __webpack_require__("Jojx");
var external_mailto_link_default = /*#__PURE__*/__webpack_require__.n(external_mailto_link_);

// EXTERNAL MODULE: ./components/Favorite.jsx + 1 modules
var Favorite = __webpack_require__("Y9N/");

// CONCATENATED MODULE: ./components/schedule/Summary.js


















var zone = 'Etc/GMT';
var format = 'h:mma';
var Summary_ClassSummary =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ClassSummary, _Component);

  function ClassSummary(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ClassSummary);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ClassSummary).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "grabTeacher", function () {
      var src = new utils_src["a" /* default */]({
        teacher: _this.props.teacher.name.replace(/ +(?= )/g, '').replace(' ', '-').toLowerCase()
      }, false).teachers,
          params = [];
      src.filters.map(function (filter, index) {
        return params.push(values_default()(src.filters[index])[0] ? "&by_".concat(keys_default()(src.filters[index])[0], "=").concat(values_default()(src.filters[index])[0]) : '');
      });
      var url = params.reduce(function (acc, cv) {
        return acc + cv;
      }, src.base);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this.setState({
          teacher: data.teachers,
          loaded_teacher: true
        });
      }).then(function () {
        return console.log('inside mount', _this.state);
      }).catch(function (err) {
        return console.log('Did not fetch your things.');
      });
    });

    _this.state = {
      loaded_teacher: false,
      teacher: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ClassSummary, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.grabTeacher();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var location_name, class_title, end_time, start_time, teacher_name, class_description, _event, tp, come_early_message;

      tp = this.props;
      teacher_name = tp.teacher.name;
      class_description = tp.details.class_description.description ? tp.details.class_description.description.replace(/<\/?[^>]+(>|$)/g, '') : "A Hot Yoga Class w/ ".concat(teacher_name);
      location_name = tp.details.location.name;
      class_title = tp.details.class_description.name;
      start_time = external_moment_timezone_["tz"](this.props.yoga_class.start_time, zone);
      end_time = external_moment_timezone_["tz"](this.props.yoga_class.end_time, zone);
      var start_t = external_moment_timezone_["tz"](this.props.yoga_class.start_time, zone);
      var end_t = external_moment_timezone_["tz"](this.props.yoga_class.end_time, zone);
      come_early_message = 'Please arrive 10 mins before class.';
      _event = {
        title: "".concat(class_title, " w/ ").concat(teacher_name, " -- @ Pure Yoga"),
        description: "".concat(class_description, " \n\n ").concat(come_early_message),
        location: "".concat(location_name, ", Ottawa, Ontario"),
        startTime: start_t.add(5, 'hours'),
        endTime: end_t.add(5, 'hours')
      };
      console.log('tp', tp);
      var fave = this.state.teacher ? external_react_default.a.createElement(Favorite["a" /* default */], {
        id: [this.state.teacher.id].join('-'),
        favorite_type: "tr"
      }) : false;
      return external_react_default.a.createElement(ClassSummaryComponent, null, external_react_default.a.createElement("div", {
        className: "summary-bg"
      }, external_react_default.a.createElement(CloseButton, {
        onClick: function onClick() {
          return _this2.props.toggle();
        }
      }, "X"), external_react_default.a.createElement("div", {
        className: "summary-bg-img",
        style: {
          backgroundImage: "url('https://s3.amazonaws.com/pureyogaottawa.com/website/studio/Pure%20Yoga%20Downtown.jpg')"
        }
      }), external_react_default.a.createElement("div", {
        className: "white-strap"
      }), external_react_default.a.createElement("div", {
        className: "summary-header"
      }, external_react_default.a.createElement("div", {
        className: "summary-teacher"
      }, external_react_default.a.createElement("img", {
        alt: this.props.name,
        src: this.state.loaded_teacher && this.state.teacher ? this.state.teacher.headshot.small_thumb.url : false
      })), external_react_default.a.createElement("div", {
        className: "summary-title"
      }, external_react_default.a.createElement("strong", {
        style: {
          color: '#fff',
          fontWeight: 'bold'
        }
      }, class_title), external_react_default.a.createElement("br", null), "w/ ", teacher_name, " ", fave, ' ', this.props.details.substitute ? '(Sub)' : false, external_react_default.a.createElement("br", null)))), external_react_default.a.createElement("div", {
        className: "summary-content"
      }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, start_time.format(format), " - ", end_time.format(format), ",", ' ', this.props.details.location.name)), external_react_default.a.createElement("p", null, class_description), external_react_default.a.createElement("p", null, external_react_default.a.createElement("em", null, come_early_message))), external_react_default.a.createElement("div", {
        className: "summary-footer"
      }, external_react_default.a.createElement(external_react_add_to_calendar_default.a, {
        event: _event,
        displayItemIcons: false
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", null, external_react_default.a.createElement(Favorite["a" /* default */], {
        id: [this.props.teacher.id, tp.details.class_description.id].join('-'),
        favorite_type: "yct"
      })), external_react_default.a.createElement("span", null, ' ', external_react_default.a.createElement("a", {
        href: external_mailto_link_default()({
          subject: _event.title,
          body: "".concat(_event.title, "\n\n").concat(start_time.format(format), " - ").concat(end_time.format(format), " - ").concat(start_time.format('d Y'), "\n\n").concat(class_description, "\n\n").concat(this.props.details.location.name)
        })
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faEnvelope"],
        style: {
          margin: '1px 6px 0',
          fontWeight: 400
        }
      }))))));
    }
  }]);

  return ClassSummary;
}(external_react_["Component"]);
var ClassSummaryComponent = external_styled_components_default.a.div.withConfig({
  displayName: "Summary__ClassSummaryComponent",
  componentId: "zlyzd2-0"
})([".summary-header{min-height:110px;padding:1em 1em 0;position:relative;display:flex;z-index:10;color:#fff;align-items:baseline;.summary-teacher{img{width:100%;height:100%;}width:20%;border-radius:50%;overflow:hidden;margin-right:12px;border:3px solid #fff;}}.summary-title{line-height:1.3em;text-transform:none;strong{text-transform:uppercase;font-size:1.3em;font-weight:bold;}}.summary-content{margin-top:-12px;margin-left:25%;margin-right:5%;margin-bottom:12px;z-index:10;position:relative;p{line-height:1.6em;margin:0;}strong{font-weight:700;}em{color:#999;}}.white-strap{position:absolute;bottom:0;left:0;right:0;height:22px;background:#fff;z-index:5;}.summary-bg{background:#111;position:relative;.summary-bg-img{z-index:1;position:absolute;top:0;left:0;right:0;bottom:15px;background-size:cover;opacity:0.8;mix-blend-mode:screen;background-position:center center;width:100%;}}.summary-footer{background:#efefef;padding:4px 8px;border-top:1px solid #eee;display:flex;justify-content:space-between;a{color:#333;text-transform:uppercase;}}"]);
var CloseButton = external_styled_components_default.a.a.withConfig({
  displayName: "Summary__CloseButton",
  componentId: "zlyzd2-1"
})(["position:absolute;top:5px;right:5px;color:#333;background:rgba(255,255,255,0.5);z-index:100;display:block;width:20px;height:20px;text-align:center;border-radius:50%;cursor:pointer;"]);
// CONCATENATED MODULE: ./components/schedule/Row.jsx








/* eslint-disable camelcase */







 // import Favorite from '../Favorite';

var Row_zone = 'Etc/GMT';

var Row_ScheduleRow =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ScheduleRow, _Component);

  function ScheduleRow(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, ScheduleRow);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ScheduleRow).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "handleClick", function () {
      _this.setState(_this.toggleHoverState);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "toggleHoverState", function (state) {
      return {
        popoverOpen: !state.popoverOpen,
        isHovering: !state.isHovering
      };
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)), "hidePopup", function () {
      return {
        popoverOpen: false
      };
    });

    _this.state = {
      popoverOpen: false,
      hovered: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(ScheduleRow, [{
    key: "isMini",
    value: function isMini() {
      var mini = this.props.mini;
      return mini === true;
    }
  }, {
    key: "isBooked",
    value: function isBooked() {
      // eslint-disable-next-line camelcase
      var _this$props = this.props,
          cookies = _this$props.cookies,
          yoga_class = _this$props.yoga_class;
      return cookies.cookies.class_ids && cookies.cookies.class_ids.includes(yoga_class.class_details.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          yoga_class = _this$props2.yoga_class,
          id = _this$props2.id,
          hideTeacher = _this$props2.hideTeacher,
          index_key = _this$props2.index_key;
      var _this$state = this.state,
          hovered = _this$state.hovered,
          toggle = _this$state.toggle,
          popoverOpen = _this$state.popoverOpen;
      var popoverId = "popoverId_".concat(yoga_class.class_details.id);
      var summary = external_react_default.a.createElement(Summary_ClassSummary, {
        teacher: yoga_class.teacher_details,
        details: yoga_class.class_details,
        yoga_class: yoga_class,
        target: id,
        toggle: function toggle() {
          return _this2.handleClick();
        }
      });
      var popover = external_react_default.a.createElement(external_reactstrap_["Popover"], {
        placement: "bottom",
        isOpen: popoverOpen,
        target: popoverId,
        toggle: toggle,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            hovered: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            hovered: false,
            popoverOpen: !hovered
          });
        }
      }, external_react_default.a.createElement(external_reactstrap_["PopoverBody"], null, summary));
      var withe = hideTeacher || external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", {
        style: {
          fontSize: 12
        }
      }, "/w "), yoga_class.teacher.split(' ')[0], yoga_class.class_details.substitute ? external_react_default.a.createElement("span", {
        style: {
          fontSize: '10px',
          textTransform: 'uppercase',
          color: '#999'
        }
      }, ' ', "sub") : false);

      if (this.isBooked()) {
        // eslint-disable-next-line no-console
        console.log('IS BOOKED');
      }

      return external_react_default.a.createElement(external_react_default.a.Fragment, {
        key: index_key
      }, external_react_default.a.createElement("tr", {
        className: isFuture(yoga_class.start_time) ? 'bookable' : 'not_bookable'
      }, external_react_default.a.createElement("td", {
        className: "class-times"
      }, external_moment_timezone_["tz"](yoga_class.start_time, Row_zone).format('h:mm'), external_react_default.a.createElement("span", null, external_moment_timezone_["tz"](yoga_class.start_time, Row_zone).format('a'))), external_react_default.a.createElement("td", {
        style: {
          minWidth: 1,
          width: 2
        }
      }), external_react_default.a.createElement("td", {
        className: "class-title",
        style: {
          position: 'relative',
          textAlign: 'left'
        }
      }, external_react_default.a.createElement(PopoverButton, {
        onClick: this.handleClick,
        onFocus: function onFocus() {
          return console.log('Focused');
        },
        type: "button"
      }, popover, external_react_default.a.createElement("span", {
        id: popoverId
      }, external_react_default.a.createElement("strong", null, yoga_class.class_name, " ", withe, ' '), external_react_default.a.createElement("br", null), this.isMini() ? '' : external_react_default.a.createElement("span", {
        className: "highlight"
      }, yoga_class.location)))), external_react_default.a.createElement("td", {
        className: "class-action"
      }, isFuture(yoga_class.start_time) ? external_react_default.a.createElement("a", {
        href: "/",
        className: "btn btn-sm book-class"
      }, "BOOK", this.isBooked() ? 'ED' : false) : external_react_default.a.createElement("a", {
        href: "/",
        className: "btn btn-sm book-class unbookable"
      }, "LOOK", this.isBooked() ? 'ED' : false))));
    }
  }]);

  return ScheduleRow;
}(external_react_["Component"]);

var PopoverButton = external_styled_components_default.a.button.withConfig({
  displayName: "Row__PopoverButton",
  componentId: "sc-9ecu3l-0"
})(["background:none;border:none;text-align:left;cursor:pointer;&:hover{opacity:0.8;}&:focus{outline:0;}"]);
/* harmony default export */ var Row = (Object(external_react_cookie_["withCookies"])(Row_ScheduleRow));
// CONCATENATED MODULE: ./components/schedule/Classes.jsx









var Classes_ScheduleClasses =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ScheduleClasses, _Component);

  function ScheduleClasses() {
    Object(classCallCheck["a" /* default */])(this, ScheduleClasses);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ScheduleClasses).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(ScheduleClasses, [{
    key: "render",
    value: function render() {
      var _false = false,
          dateText = _false.dateText;
      var _this$props = this.props,
          location = _this$props.location,
          classes = _this$props.classes,
          mini = _this$props.mini;
      var classList = location ? classes.filter(function f(_class) {
        return _class.location === this;
      }, location) : classes;
      var rows = classList.map(function (_class, index) {
        dateText = index === 0 || classes[index - 1].day !== _class.day ? external_react_default.a.createElement("tr", {
          key: "class_".concat(_class.id)
        }, external_react_default.a.createElement("td", {
          colSpan: 5
        }, external_react_default.a.createElement("span", {
          className: "highlight",
          style: {
            paddingTop: '1.6em',
            display: 'block'
          }
        }, _class.day))) : false;
        return external_react_default.a.createElement(external_react_default.a.Fragment, {
          key: dateText
        }, dateText, external_react_default.a.createElement(Row, {
          yoga_class: _class,
          index_key: index,
          mini: mini
        }));
      });
      return classes.length >= 1 ? rows : external_react_default.a.createElement("p", {
        style: {
          textAlign: 'center'
        }
      }, "No classes were loaded for this period.");
    }
  }]);

  return ScheduleClasses;
}(external_react_["Component"]);

/* harmony default export */ var Classes = (Classes_ScheduleClasses);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Schedule.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isFuture; });









var hasClasses = function hasClasses(c) {
  return c.length >= 1;
};

var isMiniSchedule = function isMiniSchedule(m) {
  return m === true;
}; // eslint-disable-next-line camelcase


function Schedule(_ref) {
  var classes = _ref.classes,
      location = _ref.location,
      mini = _ref.mini,
      loaded = _ref.loaded,
      name = _ref.name,
      full_link = _ref.full_link;
  var schedule = hasClasses(classes) ? external_react_default.a.createElement(Classes, {
    classes: classes,
    location: location,
    mini: isMiniSchedule(mini)
  }) : external_react_default.a.createElement("tr", null, external_react_default.a.createElement("td", null, loaded ? 'No classes at this location today.' : external_react_default.a.createElement("div", null, "Spinner")));
  var innerSchedule = external_react_default.a.createElement("div", {
    className: "schedule-container"
  }, external_react_default.a.createElement("div", {
    className: "schedule-heading"
  }, Object(nav["b" /* navHeading */])(name)), external_react_default.a.createElement("table", null, external_react_default.a.createElement("tbody", null, schedule)), external_react_default.a.createElement(BottomLink, null, !(!isMiniSchedule(mini) && full_link !== false) ? external_react_default.a.createElement("br", null) : external_react_default.a.createElement(link_default.a, {
    href: "/schedule/".concat(name.toLowerCase().replace('pure yoga ', ''))
  }, external_react_default.a.createElement("span", null, "Full ".concat(name.split(' ')[2], " Schedule"), "\xA0\xBB"))));
  return external_react_default.a.createElement(ScheduleBlock, {
    className: "schedule"
  }, hasClasses(classes) >= 1 ? innerSchedule : external_react_default.a.createElement(LoadBlock, null, "Spinner"));
}
function isFuture(startTime) {
  return external_moment_timezone_default()(startTime).add(5, 'hours').isAfter();
}
var highlightFont = Object(external_styled_components_["css"])(["font-family:bodoni-urw,serif;letter-spacing:0.02em;font-weight:400;font-style:italic;"]);
var pureButton = Object(external_styled_components_["css"])(["background:", ";border-color:", ";color:#333;text-transform:uppercase;letter-spacing:1px;border-radius:6px;&:hover{background:", ";border-color:", ";}"], variables["a" /* PureBrand */].pureRed, variables["a" /* PureBrand */].pureRed, variables["a" /* PureBrand */].pureBlue, variables["a" /* PureBrand */].pureBlue);
var primaryFont = Object(external_styled_components_["css"])(["text-transform:none;font-family:proxima-nova,sans-serif;font-weight:400;"]);
var secondaryFont = Object(external_styled_components_["css"])(["font-family:'Futura PT Medium',sans-serif;text-transform:uppercase;font-weight:600;letter-spacing:1px;"]);
var ScheduleBlock = external_styled_components_default.a.div.withConfig({
  displayName: "Schedule__ScheduleBlock",
  componentId: "sc-16egqoj-0"
})(["background:rgba(255,255,255,0.9);border:1px solid #efefef;border-radius:6px;width:100%;tr{transition:all 0.3s;}tr:hover{background:#eee;}tr td{border-bottom:1px solid #eee;padding-bottom:0.3em;}td.class-times{letter-spacing:0px;padding-top:3px;font-size:0.9em;max-width:75px;min-width:42px;width:5%;opacity:1;span{font-size:0.8em;}}div.schedule-container{width:90%;margin:0 auto;}table{width:100%;}td.class-teacher{transition:all 0.3s;max-width:32px;filter:saturate(0);opacity:0.3;}tr:hover td.class-teacher{filter:saturate(1);opacity:1;}td.class-title{strong{", " font-weight:900;}color:#111;span{opacity:1;}}tr:hover > td.class-action{padding-left:12px;}td.class-action{transition:all 0.5s;text-align:right;}.highlight{text-align:left;", " color:#666;font-size:1.05em;}.book-class{", " font-size:12px;&.unbookable{background:#fff;}}.heading{font-size:1.1em;", " display:block;padding:1em;}"], primaryFont, highlightFont, pureButton, secondaryFont);
var BottomLink = external_styled_components_default.a.div.withConfig({
  displayName: "Schedule__BottomLink",
  componentId: "sc-16egqoj-1"
})(["text-align:center;margin:6px;a{border-radius:8px;display:block;padding:0.5em;color:#666;background:#fafafa;", ";&:hover{background:#eee;color:#111;text-decoration:none;}}"], secondaryFont);
var LoadBlock = external_styled_components_default.a.div.withConfig({
  displayName: "Schedule__LoadBlock",
  componentId: "sc-16egqoj-2"
})(["display:flex;width:100%;justify-content:center;align-content:center;text-align:center;padding:2em;"]);

/***/ }),

/***/ "xzoR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return navHeading; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);











var NavList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(NavList, _Component);

  function NavList(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NavList);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(NavList).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)), "activateDropdown", function (v) {
      return _this.props.active(v);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)), "hideDropdown", function (v) {
      return _this.props.active('');
    });

    _this.state = {
      is_hovered: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(NavList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var nav = this.props.nav_items.filter(isDesktop).map(function (nav, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: nav.link
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          activeClassName: "active",
          className: "nav-link",
          onMouseOver: function onMouseOver() {
            return _this2.activateDropdown(nav.name);
          },
          onClick: function onClick() {
            return _this2.hideDropdown();
          }
        }, nav.icon ? nav.icon : nav.name)));
      });
      return nav;
    }
  }]);

  return NavList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

function navHeading(text) {
  var link = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var element = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
    className: "heading"
  }, text);

  if (link !== false) {
    element = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
      className: "heading"
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
      href: link,
      alt: text
    }, text, " \xBB"));
  }

  return element;
}

function isDesktop(item) {
  return item.desktop !== false;
}



/***/ }),

/***/ "zrV9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable import/prefer-default-export */


var brand = 'Pure Yoga Ottawa';
var socialLinks = {
  facebook: {
    link: 'https://www.facebook.com/PureYogaOttawa',
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebook"]
  },
  twitter: {
    link: 'https://twitter.com/pureyogaottawa',
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"]
  },
  instagram: {
    link: 'https://www.instagram.com/pureyogaottawa/?hl=en',
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"]
  },
  vimeo: {
    link: '',
    icon: ''
  },
  youtube: {
    link: '',
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"]
  },
  email: {
    link: '/contact',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEnvelope"]
  }
};
var login = {
  title: 'Login to Mindbody',
  subtitle: 'Login to your Mindbody account to manage your membership.',
  account_difficulties: 'Account difficulties',
  powered_by: 'Powered by MindBody',
  login: 'Login',
  logout: 'Logout'
};
var AppContent = {
  brand: brand,
  socialLinks: socialLinks,
  login: login,
  mindbody_link: 'https://clients.mindbodyonline.com/classic/ws?studioid=21952&sessionChecked=true',
  title: 'Ottawa Hot Yoga Studio',
  new_to_yoga: 'New to yoga? Find out more...',
  hot_yoga_schedule: 'Hot Yoga Schedule',
  book_a_class: 'BOOK A CLASS',
  one_pass: '1 pass. 3 studios. Find your class.',
  apps: 'Get the schedule on your phone.',
  footnote: 'Please note: We encourage you to be in studio 10 minutes before class starts to secure your position.',
  nav: {
    new_to_yoga: {
      title: 'NEW TO PURE YOGA OTTAWA?',
      sub_title: 'Our intro month is just $45',
      content: 'We welcome you to come and see how Pure Yoga can help you grow and transform. Our intro month is just $45 and lets you try as many classes as you like!'
    },
    workshops: {
      title: 'Workshops/Training/Retreats',
      content: 'Evolve your practice through our wide range of Workshops, Training and Retreats.'
    }
  },
  subscribe: {
    text: 'Sign up for inspiration, exclusive offers, contests and the inside scoop on events.',
    button: 'Sign Up'
  },
  // HOMEPAGE STUFF
  new_to_yoga_strap: 'New to Yoga?',
  new_to_yoga_strap_subtitle: 'Pure Yoga is a space for everybody.',
  new_to_yoga_strap_cta: 'Learn more',
  evolve_your_practice: 'Evolve your practice.',
  evolve_your_practice_subtitle: 'Share in our passion for yoga.',
  // PAGES CONTENT
  home: {
    page_title: "".concat(brand, " - Westboro, Centretown, Downtown | Hot Yoga Studio"),
    banners: [{}],
    about_pure: "<p>Whether you come to Pure Yoga Ottawa for a workout or stress relief, ultimately, yoga is about growth and transformation.</p>\n    <p> At Pure Yoga we are completely dedicated to the evolution of our students. With our amazing team of highly trained teachers, you are always in the best hands.</p>",
    tagline: 'Come join the community, where we can all grow together.'
  },
  class_styles: {
    title: 'Class Styles'
  },
  class_style: {},
  new: {
    title: 'New to Yoga. New to Pure.',
    page_title: 'New to Yoga? New to Pure?',
    cta: 'Sign Up',
    top_banner: {
      title: 'New Beginnings',
      sub_title: 'New to Yoga? New to Pure?',
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_121.jpg']
    },
    what_is: {
      title: 'What is Hot Yoga?',
      contents: ['We love hot yoga! Our hot yoga classes build strength and flexibility and are for everyone, whether you’re a complete beginner or a lifelong committed yogi.', 'Our yoga studios are heated to around 30 degrees. Hot yoga not only helps you to detox by flushing toxins out of the skin through sweat, but heats up the muscles allowing you to approach the postures from a safe place. Practicing in a hot room elevates the heart rate, which makes the body work harder. This will give you a little more of an intense workout-for those who want to develop strength, flexibility and tone along with the cardiovascular workout.'],
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_123.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_124.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_126.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_19.jpg']
    },
    offer: {
      title: 'Some offer',
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_19.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_131.jpg']
    },
    where: {
      title: 'Westboro. Centretown. Downtown.',
      sub_title: '3 Studios. 1 Pass.',
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_131.jpg']
    },
    intro: {
      title: 'Introductory Offer',
      promo: 'Pure Yoga Intro Month Special',
      price: '40',
      deal: '1 month of unlimited yoga (that’s right: any class, any time) for one whole month. You can start your month whenever you like, and you will get 30 days (from that day) to do try as many classes you want.',
      link: 'http://clients.mindbodyonline.com/ws.asp?studioid=21952&stype=41&prodid=60',
      contents: ['We welcome you to come and see how Pure Yoga can help you grow and transform.', 'Whether you come to Pure Yoga Ottawa for a workout or stress relief, we are completely dedicated to the evolution of our students. With our amazing team of highly trained teachers, you are always in the best hands.', '<a href="/faqs">Frequently Asked Questions</a>']
    },
    benefits: {
      title: 'The Benefits',
      contents: ['Detoxify - embrace the sweat! Sweating is nature’s detoxification. It stimulates the lymphatic system, which allows everyday toxins to be shed from the skin helping to cleanse and purify the body. Every time you practice hot yoga you’re helping cleanse your body from the inside out, and you’ll feel amazing for it. ', 'Get Flexible - practicing yoga in the heat extends the benefits of regular yoga by helping the muscles relax further and allowing for increased flexibility and strength.', 'Elevate your heart rate - You know how good it feels to get the heart pumping! Doing yoga in a heated setting elevates the heart rate making the body work harder. You get more of the benefits of a cardio workout than you would doing yoga in a cooler setting.', 'Relax and clear your mind - When you practice yoga in a heated room, the heat helps you to switch off and focus on the practice as you move through the asanas. Hot yoga becomes a type of moving meditation, allowing you to detach from the stresses and strains of daily life.']
    },
    sweat: {
      title: 'Sweat with us',
      sub_title: 'A space for everybody.',
      contents: ['One', 'Two'],
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_15.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_47.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_125.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_128.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_46.jpg']
    },
    more_info: {
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_121.jpg']
    }
  },
  evolve: {
    title: 'Evolve',
    page_title: "Evolve Your Practice | Workshops, Training, Retreats | ".concat(brand),
    subtitle: 'Workshops, Training, Retreats',
    bottom_section: {
      title: 'Evolve Your Practice',
      text: 'An elevated and energised you'
    },
    show: {
      you_might_also_like: 'You might also like'
    }
  },
  locations: {
    page_title: ''
  },
  schedule: {
    title: 'Practice',
    page_title: "Schedule & Class Times | 3 Locations. 1 Pass | ".concat(brand),
    subtitle: '3 Studios. 1 Pass.',
    bottom_section: {
      title: 'Title',
      text: 'Hello there.'
    }
  },
  team: {
    title: 'Pure Yogis',
    page_title: "Meet your team | Pure Yogis | ".concat(brand),
    contents: {
      title: 'We love what we do.',
      subtitle: 'And we want to share our passion with you.',
      paragraphs: ['At Pure Yoga Ottawa we are completely dedicated to the evolution of our students. With our amazing team of highly trained teachers, you are always in the best hands. Our experienced teachers are among the best and most passionate in Canada and beyond, and their energy and enthusiasm for yoga is infectious!', 'Yoga is a journey. Each of our teachers has their own unique and creative style, a product of who taught them, where they have travelled and practiced yoga, and the inspiration that has resonated with them along the way. And so this is passed on to you, and the journey continues…']
    },
    team_heading: 'YOUR TEAM',
    video_heading: 'The People of Pure',
    subtitle: 'Good Vibes'
  },
  members: {
    path: '/members',
    title: 'Community',
    page_title: "Join Our Community | Yoga for Everybody | ".concat(brand),
    subtitle: 'Yoga, For Everyone',
    memberships: 'Membership Packages',
    memberships_subtitle: 'One Pass. 3 Studios',
    class_packages: 'Class Packages',
    class_packages_subtitle: 'Afraid of commitment?',
    call_to_action: 'Book Now',
    students_seniors: 'STUDENT/SENIOR DISCOUNTS',
    discounts: 'Full time students and seniors receive $15 off of any class package.  Check in studio for student auto renew membership prices. Valid Student ID must be provided.'
  },
  stream: {
    title: 'Anywhere',
    page_title: "Pure Yoga Online | Workshops, Training, Retreats | ".concat(brand),
    subtitle: ''
  },
  journal: {
    path: '/journals',
    title: 'Extend',
    page_title: "Blog | Yoga, Home, Health, You | ".concat(brand),
    subtitle: 'A Guide to Better Living',
    blog_title: 'Journal',
    intro: 'Why this and that something journal...'
  },
  contact: {
    title: 'Connect',
    page_title: "Contact Us | ".concat(brand),
    subtitle: 'Contact Us',
    helptitle: 'Helpful Links',
    locations: 'Our Locations',
    send: 'Send Message'
  },
  faqs: {
    title: 'Faqs',
    page_title: "Faqs | Ask Us Anything | ".concat(brand),
    subtitle: "We've got answers.",
    text: 'Got a question not answered here? Ask us.',
    questions: [{
      question: 'Are all your classes ‘hot’? ',
      answer: 'All our classes are taught in studios heated to approximately 30 degrees. Although it’s called ‘hot yoga’ it’s a comfortable heat, which your body will enjoy and adapt to quickly. Our studios are heated using clean infrared heating panels that allow your body to heat up, instead of just heating the air around you. '
    }, {
      question: 'Which class is best for a beginner?',
      answer: 'All of our classes are accessible for all levels. Please let your teacher know you’re a beginner and they will be sure to assist you wherever you need extra guidance. '
    }, {
      question: 'What do I need to bring with me?',
      answer: 'A yoga mat (available to rent), A couple of towels (available to rent). A water bottle<li>Comfortable clothing to wear to class. A change of clothes (you will get sweaty!)'
    }, {
      question: 'How much does it cost to come to Pure Yoga? ',
      answer: 'If you’re new to Pure Yoga, we have an amazing “Intro Month” special where you can come to unlimited classes for just $40 for one month. We also have single class drop in fees, class packages and memberships available, as well as students and seniors discounts - please visit our pricing page for more information. '
    }, {
      question: 'Do I need to buy a membership for each of your studios? ',
      answer: 'No, once you purchase a Pure Yoga membership you can choose to come to any of our studios '
    }, {
      question: 'Do you hire mats, and how much does it cost? ',
      answer: 'Yes, we have mats available for hire at all of our studios. The cost is $2.00 per visit. '
    }, {
      question: 'Do I need to book? ',
      answer: 'Our website has an online booking functionality through Mindbody, so you can easily book in for your preferred class. We do recommend booking. Reserved spots will be held until 10 minutes before class starts. '
    }, {
      question: 'How do I know what class will suit me?',
      answer: 'We teach a wide range of styles from slower, posture deepening ‘yin’ classes,to more active style strength building ‘power’ classes, as well as flow and beats classes. Visit the class styles page to find out more '
    }, {
      question: 'Do you sell yoga clothing and accessories?',
      answer: 'Yes we stock some really great yoga brands including our own branded merchandise, as well as Spiritual Gangster, Brunette the Label, Vuori, Lululemon and more. We also have a range of yoga accessories available in each studio. '
    }, {
      question: 'Can I take a break during the class?',
      answer: 'Yes, we encourage you listen to your own body. We ask that you remain in the studio during class, but as we teach to all levels, you’re welcome to take a break and rest on your mat whenever you need to. '
    }, {
      question: 'Can I drink water during class?',
      answer: 'Yes, We have filtered water available in each studio for you to fill your drink bottle.'
    }, {
      question: 'How long are your classes?',
      answer: 'Our Westboro and Centretown classes are usually 1 hour long, with the occasional 75 minute class. Downtown classes are usually 50 minute long. Please check the schedule for timing.'
    }, {
      question: 'What should I wear to class?',
      answer: 'Wear comfortable clothing that is not too loose. Most of our yogis wear fitted yoga tights and a tank top, and don’t forget to bring a towel so you can wipe away the sweat!'
    }, {
      question: 'Are there showers at each studio?',
      answer: 'Yes we have beautiful change room and shower facilities at each studio. Body wash is provided in each shower. Our change rooms also have lockers (bring a padlock if you wish to lock) '
    }, {
      question: 'Can I eat or drink before yoga class?',
      answer: 'Yes, although we recommend not practicing yoga on a full stomach as it can be uncomfortable.'
    }, {
      question: 'Can I practice hot yoga while pregnant or breastfeeding?',
      answer: 'Yes, we allow pregnant and breastfeeding women to practice yoga at our studios. Many women enjoy practicing yoga throughout their pregnancy, and if you feel comfortable to do so, and have the go-ahead from your doctor or midwife, you’re welcome to practice with us. Please always inform your teacher if you are pregnant.'
    }, {
      question: 'What can I expect from Pure Yoga?',
      answer: 'We’re a fun, friendly and inclusive place. When you come to practice with us, we’ll encourage you along your yoga path, and provide a happy place that you’ll use to support your healthy and positive lifestyle. What you’ll find at Pure Yoga is a welcoming environment where classes are tailored to all levels, led by some of Canada’s most experienced and passionate teachers.'
    }]
  },
  about: {
    title: 'About Pure Yoga.',
    page_title: 'About Pure Yoga',
    what_is: {
      title: 'About Pure Yoga.',
      contents: ['Pure Yoga was founded by lifelong best friends Amber Stratton and Jen Dalgleish. Their dream was to create a yoga studio of the same calibre as the ones they had visited in other big cities around the world, and a place for yogis to come and have fun, relax and grow the love of their practice both on and off the mat. ', 'The dream was realised with the opening of the Westboro studio in 2012. Ottawa finally had a world-class yoga studio. Pure Yoga quickly expanded to open the Centretown and Downtown locations, and Pure Ottawa grew further with the addition of the Pure Kitchen vegetarian restaurants.'],
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/about/2.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/about/4.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/about/12.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/about/1.jpg']
    },
    where: {
      title: 'Westboro. Centretown. Downtown.',
      sub_title: '3 Studios. 1 Pass.',
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_131.jpg']
    },
    benefits: {
      title: "Ottawa's Yogi Community",
      contents: ['Today Pure Yoga remains a favourite destination for Ottawa’s yogi community. A huge range of class styles are taught across the different studio locations, led by experienced and passionate teachers from Ottawa and beyond, including founders Jen and Amber. As well as scheduled yoga classes, Pure Yoga also offers an exciting range of workshop events for yogis to expand their practice, as well as teacher training programs, both here in Ottawa and abroad. Pure Yoga leads a series of yoga retreats throughout the year, to exotic places such as Costa Rica and Australia as well as Canadian destinations. Pure Yoga classes can now also be streamed online for home practice.']
    },
    sweat: {
      contents: ['Quite simply, we think yoga should be an uplifting, fun and enjoyable part of your life. We want to help you to develop your passion, and live and love the ‘Pure’ lifestyle. Whether you’re a local, a visitor, student, teenager or a grandparent, we want Pure Yoga to become YOUR happy place. Come and join our community, we look forward to welcoming you.'],
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/about/8.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/about/6.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/about/10.jpg', 'https://s3.amazonaws.com/pureyogaottawa.com/website/about/5.jpg']
    },
    more_info: {
      imgs: ['https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_121.jpg']
    }
  },
  terms: {
    title: 'Terms of Use',
    contents: ['One']
  },
  privacy: {
    title: 'Privacy Policy',
    contents: ['One']
  }
};

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });