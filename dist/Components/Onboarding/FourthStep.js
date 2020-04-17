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

var _radio = _interopRequireDefault(require("../Input/radio"));

var _TargetLocation = _interopRequireDefault(require("../TargetLocation/"));

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FourthStep = function FourthStep(props) {
  var visaStatusCanadianList = props.visaStatusCanadianList;
  var visaStatusEUList = props.visaStatusEUList;
  var targetLocation = props.targetLocation ? props.targetLocation.items : [];
  var visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList[props.visaStatusCanadian] : [];
  var visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : [];
  var firstChoice = props.firstChoice ? props.firstChoice : {};
  var remoteJobList = props.remoteJobList;
  var openForRemoteJobs = props.openForRemoteJobs != undefined ? remoteJobList[props.openForRemoteJobs] : [];
  var preferedCountries = [];

  if (targetLocation != undefined && targetLocation.length > 0) {
    targetLocation.map(function (country) {
      if (country.status) {
        preferedCountries.push({
          value: country.id,
          label: country.name
        });
      }
    });
  }

  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom: 10,
    alignItemsCenter: true
  }, _react.default.createElement(_Grid.Row, {
    autoWidth: true,
    marginRight: 5
  }, _react.default.createElement(_Icon.default, {
    icon: 'relocation',
    title: "city",
    md: true,
    color: "gray-50"
  })), _react.default.createElement(_Grid.Row, {
    width: '70%'
  }, _react.default.createElement(_Text.default, {
    variant: "h4",
    color: "gray-90",
    text: 'Relocation'
  }))), _react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 10,
    style: {
      padding: '1px'
    },
    width: '50%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: 'Are you open to remote jobs?',
    className: "vh-relocation-section-openForRemoteJobs ".concat(props.className ? props.className : ''),
    currentItem: openForRemoteJobs,
    data: "openForRemoteJobs",
    items: remoteJobList,
    onEvent: props.onEvent,
    isLoading: props.controls.openForRemoteJobs.loading,
    description: props.controls.openForRemoteJobs.error && props.controls.openForRemoteJobs.message,
    descriptionColor: "red",
    captionColor: props.controls.openForRemoteJobs.loading ? "gray-40" : props.controls.openForRemoteJobs.error ? "red" : "gray-90"
  })), props.openForRemoteJobs !== null && props.openForRemoteJobs < 2 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 1
  }, _react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-companySize ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red-light" : "gray-90",
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "Where would you like to work?",
    titleColor: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : "gray-90",
    titleVariant: "platform1"
  })), _react.default.createElement(_Grid.Row, {
    marginBottom: 5,
    width: '100%'
  }, _react.default.createElement(_TargetLocation.default, {
    onEvent: props.onEvent,
    items: targetLocation
  })), preferedCountries.length > 0 && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '50%',
    responsive: true,
    id: "preferred-country"
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: 'Which country is your first choice?',
    className: "vh-general-section-firstChoice ".concat(props.className ? props.className : ''),
    currentItem: firstChoice,
    data: "firstChoice",
    items: preferedCountries,
    onEvent: props.onEvent,
    isLoading: props.controls.firstChoice.loading,
    description: props.controls.firstChoice.error && props.controls.firstChoice.message,
    descriptionColor: "red",
    captionColor: props.controls.firstChoice.loading ? "gray-40" : props.controls.firstChoice.error ? "red" : "gray-90"
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, _react.default.createElement(_Select.default, {
    caption: "Canadian Visa Status",
    className: "vh-general-section-visaStatusCanadian ".concat(props.className ? props.className : ''),
    currentItem: visaStatusCanadian,
    data: "visaStatusCanadian",
    items: visaStatusCanadianList,
    onEvent: props.onEvent,
    isLoading: props.controls.visaStatusCanadian.loading,
    description: props.controls.visaStatusCanadian.error && props.controls.visaStatusCanadian.message,
    descriptionColor: "red",
    captionColor: props.controls.visaStatusCanadian.loading ? "gray-40" : props.controls.visaStatusCanadian.error ? "red" : "gray-90"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Select.default, {
    caption: "EU Visa Status",
    className: "vh-general-section-visaStatusEU ".concat(props.className ? props.className : ''),
    currentItem: visaStatusEU,
    data: "visaStatusEU",
    items: visaStatusEUList,
    onEvent: props.onEvent,
    isLoading: props.controls.visaStatusEU.loading,
    description: props.controls.visaStatusEU.error && props.controls.visaStatusEU.message,
    descriptionColor: "red",
    captionColor: props.controls.visaStatusEU.loading ? "gray-40" : props.controls.visaStatusEU.error ? "red" : "gray-90"
  })))));
};

FourthStep.defaultProps = {
  className: ""
};
FourthStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = FourthStep;
exports.default = _default;