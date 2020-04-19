"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _Select = _interopRequireDefault(require("../Input/Select"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _Simple = _interopRequireDefault(require("../Input/Simple"));

var _Icon2 = _interopRequireDefault(require("../Input/Icon/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FifthStep = function FifthStep(props) {
  var citizenships = props.countries;
  var citizenship = props.citizenship != undefined ? citizenships.find(function (element) {
    return element.value === props.citizenship;
  }) : {};
  var location = props.location != undefined ? citizenships.find(function (element) {
    return element.value === props.location;
  }) : {};
  var genders = props.genders;
  var gender = props.gender != undefined ? [genders[props.gender]] : {};
  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom: 10,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    autoWidth: true,
    marginRight: 5
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: 'user',
    title: "city",
    md: true,
    color: "gray-50"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "h4",
    color: "gray-90",
    text: 'Personal Info'
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true,
    marginBottom: 5
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 3,
    id: "citezenship"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.citizenship.preLoading || false,
    caption: "Citizenship",
    placeholder: "Select an option",
    className: "vh-general-section-citizenship ".concat(props.className ? props.className : ''),
    currentItem: citizenship,
    data: "citizenship",
    items: citizenships,
    onEvent: props.onEvent,
    isLoading: props.controls.citizenship.loading,
    description: props.controls.citizenship.error && props.controls.citizenship.message,
    descriptionColor: "gray-90",
    captionColor: props.controls.citizenship.loading ? "gray-40" : props.controls.citizenship.error ? "red" : 'gray-90'
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    id: "location"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.location.preLoading || false,
    caption: "Location",
    placeholder: "Select an option",
    className: "vh-general-section-location ".concat(props.className ? props.className : ''),
    currentItem: location,
    data: "location",
    items: citizenships,
    onEvent: props.onEvent,
    isLoading: props.controls.location.loading,
    description: props.controls.location.error && props.controls.location.message,
    descriptionColor: "gray-90",
    captionColor: props.controls.location.loading ? "gray-40" : props.controls.location.error ? "red" : 'gray-90'
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 3,
    id: "gender"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    preLoading: props.controls.gender.preLoading || false,
    caption: "Gender",
    placeholder: "Select an option",
    className: "vh-general-section-gender ".concat(props.className ? props.className : ''),
    currentItem: gender,
    data: "gender",
    items: genders,
    onEvent: props.onEvent,
    isLoading: props.controls.gender.loading,
    description: props.controls.gender.error && props.controls.gender.message,
    descriptionColor: "red",
    captionColor: props.controls.gender.loading ? "gray-40" : props.controls.gender.error ? "red" : 'gray-90'
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    marginleft: 3
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    id: "phone"
  }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-phone ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.phone.loading ? "gray-40" : props.controls.phone.error ? "red-light" : "gray-90",
    preLoading: props.controls.phone.preLoading || false,
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "Phone number",
    titleColor: props.controls.phone.loading ? "gray-40" : props.controls.phone.error ? "red" : "gray-90",
    titleVariant: "platform1"
  }), !props.controls.phone.preLoading && /*#__PURE__*/_react.default.createElement(_Simple.default, {
    data: "phone",
    onEvent: props.onEvent,
    disabled: props.controls.phone.loading,
    error: props.controls.phone.error,
    loading: props.controls.phone.loading,
    placeholder: "+1 778 000 0000",
    value: props.phone
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true,
    marginTop: 15
  }, /*#__PURE__*/_react.default.createElement(_Icon2.default, {
    className: "",
    disabled: props.controls.linkedin.loading,
    error: props.controls.linkedin.error,
    loading: props.controls.linkedin.loading,
    data: 'linkedin',
    icon: "linkedin",
    onEvent: props.onEvent,
    placeholder: "http://linkedin.com/",
    value: props.linkedin
  }))));
};

FifthStep.defaultProps = {
  className: ""
};
FifthStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = FifthStep;
exports.default = _default;