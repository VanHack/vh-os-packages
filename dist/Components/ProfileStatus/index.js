"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base/"));

var _Text = _interopRequireDefault(require("../../Components/Text/"));

var _Icon = _interopRequireDefault(require("../Icon/"));

var S = _interopRequireWildcard(require("./styles"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHProfileStatus = function VHProfileStatus(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModalReview = _React$useState2[0],
      setOpenModalReview = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openModalReview && /*#__PURE__*/_react.default.createElement(VHModalProfileReview, {
    openModal: openModalReview,
    onClose: function onClose() {
      return setOpenModalReview(false);
    },
    onEvent: props.onEvent,
    notes: props.review.notes
  }), /*#__PURE__*/_react.default.createElement(_Base.default, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    responsive: true,
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: 'profile',
    color: "gray-90",
    text: 'Profile Review',
    md: true
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "black-90",
    onEvent: props.onEvent,
    data: 'addRole',
    variant: 'subtitle2',
    text: "Profile Review"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    width: '80%'
  }, props.review && props.review.canRequestReview && !props.review.isUnderReview && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "gradient-primary",
    onEvent: props.onEvent,
    data: 'RequestProfileReview',
    variant: 'platform',
    text: "Request",
    cursor: true
  })), props.reviewInProgress || props.review && props.review.isUnderReview && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Under review"
  })), props.review && props.review.notes.length > 0 && /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    cursor: true,
    color: "gradient-primary",
    onEvent: props.onEvent,
    data: "ViewReview",
    text: "Check Review",
    onOpen: function onOpen() {
      setOpenModalReview(true);
    }
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    alignItemsCenter: true,
    borderRight: true,
    borderLeft: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: 'language',
    color: "gray-90",
    text: 'Profile Review',
    md: true
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "black-90",
    onEvent: props.onEvent,
    data: 'addRole',
    variant: 'subtitle2',
    text: "English Verification"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true,
    width: '80%'
  }, props.englishVerification && (props.englishVerification.status === 'NoTest' || props.englishVerification.status == 'CanStartAgain' || props.englishVerification.status == 'VoidTest') && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "gradient-primary",
    onEvent: props.onEvent,
    data: 'StartEnglishVerification',
    variant: 'platform',
    text: "Start now",
    cursor: true
  })), props.englishLevel !== 'NoEnglish' && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "gray-80",
    onEvent: props.onEvent,
    data: 'label',
    variant: 'platform',
    text: props.englishLevel
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: 'skills',
    color: "gray-90",
    text: 'Profile Review',
    md: true
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    alignItemsCenter: true,
    width: '80%'
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "black-90",
    onEvent: props.onEvent,
    data: 'addRole',
    variant: 'subtitle2',
    text: "Code Test"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    color: "gradient-primary",
    onEvent: props.onEvent,
    data: 'StartCodeTest',
    variant: 'platform',
    text: "Start code test",
    cursor: true
  })))))));
};

VHProfileStatus.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHProfileStatus;
exports.default = _default;