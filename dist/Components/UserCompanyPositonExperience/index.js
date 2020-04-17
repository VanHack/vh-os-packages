"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _MainTitleDescription = _interopRequireDefault(require("../MainTitleDescription"));

var _UserPositonExperience = _interopRequireDefault(require("../UserPositonExperience"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHUserCompanyExperience = function VHUserCompanyExperience(props) {
  var industryList = props.industryList;
  var companyList = props.companyList;

  var _React$useState = _react.default.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentItem = _React$useState2[0],
      setCurrentItem = _React$useState2[1];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    marginBottom: 5
  }, _react.default.createElement(_MainTitleDescription.default, {
    hover: true,
    setNewExperience: props.setNewExperience,
    pointer: true,
    onEvent: props.onEvent,
    data: {
      label: 'openModalExperience',
      item: props.item
    },
    onOpen: props.onOpen,
    setCurrentItem: props.setCurrentItem,
    item: props.item,
    title: props.item.companyName,
    description: "".concat(props.item.industry, " - ").concat(props.item.companySizeStr, " - ").concat(props.item.country),
    rightTitle: props.rightTitle,
    className: "vh-user-company-position-experience ".concat(props.className ? props.className : '')
  })), _react.default.createElement(_Grid.Row, {
    paddingRight: 5
  }, props.item.workExperiences.map(function (userPosition) {
    return _react.default.createElement(_UserPositonExperience.default, _extends({
      className: "vh-user-company-position-experience ".concat(props.className ? props.className : '')
    }, userPosition));
  })));
};

VHUserCompanyExperience.defaultProps = {
  className: "",
  rightTitle: ""
};
VHUserCompanyExperience.propTypes = {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired,
  rightTitle: _propTypes.default.string,
  className: _propTypes.default.string,
  userPositions: _propTypes.default.shape({})
};
var _default = VHUserCompanyExperience;
exports.default = _default;