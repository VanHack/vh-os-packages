"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _radio = _interopRequireDefault(require("../../Components/Input/radio"));

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _checkbox = _interopRequireDefault(require("../../Components/Input/checkbox"));

var _TargetLocation = _interopRequireDefault(require("../../Components/TargetLocation"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHRelocationSection = function VHRelocationSection(props) {
  var salaryRangeCadList = props.salaryRangeCadList;
  var salaryRangeEurList = props.salaryRangeEurList;
  var visaStatusCanadianList = props.visaStatusCanadianList;
  var visaStatusEUList = props.visaStatusEUList;
  var noticePeriodList = props.noticePeriodList;
  var remoteJobList = props.remoteJobList;
  var openForRemoteJobs = props.openForRemoteJobs != undefined ? remoteJobList[props.openForRemoteJobs] : [];
  var salaryRangeCad = props.salaryRangeCad != undefined ? salaryRangeCadList[props.salaryRangeCad] : [];
  var salaryRangeEur = props.salaryRangeEur != undefined ? salaryRangeEurList[parseInt(props.salaryRangeEur)] : [];
  var visaStatusCanadian = props.visaStatusCanadian != undefined ? visaStatusCanadianList.find(function (element) {
    return element.value === props.visaStatusCanadian;
  }) : [];
  var visaStatusEU = props.visaStatusEU != undefined ? visaStatusEUList[props.visaStatusEU] : [];
  var noticePeriod = props.noticePeriod != undefined ? noticePeriodList[props.noticePeriod] : [];
  var companySize = props.companySize ? props.companySize : [{
    value: false
  }, {
    value: false
  }, {
    value: false
  }];
  var firstChoice = props.firstChoice ? props.firstChoice : {};
  var targetLocation = props.targetLocation ? props.targetLocation.items : [];
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

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Text.default, {
    marginBottom: 2,
    className: "vh-general-section-title ".concat(props.className ? props.className : ''),
    text: "Relocation",
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-general-section-card ".concat(props.className ? props.className : '')
  }, props.preLoading ? _react.default.createElement(_Grid.Row, null, _react.default.createElement(_reactPreloadSkeleton.RelocationSkeleton, null)) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 10,
    width: '50%',
    id: "remote-jobs"
  }, _react.default.createElement(_Select.default, {
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
  })), props.openForRemoteJobs < 2 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Grid.Row, {
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
    marginBottom: 8,
    width: '600px',
    id: "target-location"
  }, _react.default.createElement(_TargetLocation.default, {
    onEvent: props.onEvent,
    items: targetLocation
  })), preferedCountries.length > 0 && _react.default.createElement(_Grid.Row, {
    width: '50%',
    responsive: true,
    id: "preferred-country"
  }, _react.default.createElement(_Select.default, {
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
  }))), _react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true,
    marginBottom: 5
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true,
    responsive: true,
    id: "salary-cad"
  }, _react.default.createElement(_Select.default, {
    caption: 'Annual salary expectation CAD',
    leftText: "$CAD",
    className: "vh-general-section-salaryRangeCad ".concat(props.className ? props.className : ''),
    currentItem: salaryRangeCad,
    data: "salaryRangeCad",
    items: salaryRangeCadList,
    onEvent: props.onEvent,
    isLoading: props.controls.salaryRangeCad.loading,
    description: props.controls.salaryRangeCad.error && props.controls.salaryRangeCad.message,
    descriptionColor: "red",
    captionColor: props.controls.salaryRangeCad.loading ? "gray-40" : props.controls.salaryRangeCad.error ? "red" : "gray-90"
  })), _react.default.createElement(_Grid.Row, {
    id: "salary-eu"
  }, _react.default.createElement(_Select.default, {
    caption: 'Annual salary expectation EUR',
    className: "vh-general-section-salaryRangeEur ".concat(props.className ? props.className : ''),
    currentItem: salaryRangeEur,
    data: "salaryRangeEur",
    items: salaryRangeEurList,
    onEvent: props.onEvent,
    isLoading: props.controls.salaryRangeEur.loading,
    description: props.controls.salaryRangeEur.error && props.controls.salaryRangeEur.message,
    descriptionColor: "red-light",
    captionColor: props.controls.salaryRangeEur.loading ? "gray-40" : props.controls.salaryRangeEur.error ? "red" : "gray-90"
  })))), _react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true,
    marginBottom: 5
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true,
    id: "visa-cad"
  }, _react.default.createElement(_Select.default, {
    caption: "Canadian visa status",
    className: "vh-general-section-visaStatusCanadian ".concat(props.className ? props.className : ''),
    currentItem: visaStatusCanadian,
    data: "visaStatusCanadian",
    items: visaStatusCanadianList,
    onEvent: props.onEvent,
    isLoading: props.controls.visaStatusCanadian.loading,
    description: props.controls.visaStatusCanadian.error && props.controls.visaStatusCanadian.message,
    descriptionColor: "red",
    captionColor: props.controls.visaStatusCanadian.loading ? "gray-40" : props.controls.visaStatusCanadian.error ? "red" : "gray-90"
  })), _react.default.createElement(_Grid.Row, {
    id: "visa-eu"
  }, _react.default.createElement(_Select.default, {
    caption: "EU visa status",
    className: "vh-general-section-visaStatusEU ".concat(props.className ? props.className : ''),
    currentItem: visaStatusEU,
    data: "visaStatusEU",
    items: visaStatusEUList,
    onEvent: props.onEvent,
    isLoading: props.controls.visaStatusEU.loading,
    description: props.controls.visaStatusEU.error && props.controls.visaStatusEU.message,
    descriptionColor: "red",
    captionColor: props.controls.visaStatusEU.loading ? "gray-40" : props.controls.visaStatusEU.error ? "red" : "gray-90"
  })))), _react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom: 5
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom: 5,
    responsive: true,
    id: "passaport-valid"
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true
  }, _react.default.createElement(_radio.default, {
    input: true,
    data: 'passportValid',
    color: "gray-90",
    variant: "platform1",
    onEvent: props.onEvent,
    text: 'Do you have a valid passport?',
    checked: props.passportValid,
    value: props.passportExpirationDate
  })), _react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 3
  }, _react.default.createElement(_TitleDescription.default, {
    className: "vh-general-section-companySize ".concat(props.className ? props.className : ''),
    descriptionColor: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : "gray-90",
    descriptionVariant: "caption",
    inline: true,
    onEvent: props.onEvent,
    title: "What size company do you prefer?",
    titleColor: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : "gray-90",
    titleVariant: "platform1"
  })), _react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true,
    marginBottom: 5
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_checkbox.default, {
    checked: companySize[0].value,
    className: "",
    color: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : 'gray-90',
    data: {
      id: 'companySize',
      label: 'yes',
      value: '1'
    },
    disabled: props.controls.companySize.loading,
    onEvent: props.onEvent,
    title: "Startup",
    value: "123",
    variant: "platform1"
  })), _react.default.createElement(_checkbox.default, {
    checked: companySize[1].value,
    className: "",
    color: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : 'gray-90',
    data: {
      id: 'companySize',
      label: 'yes',
      value: '2'
    },
    disabled: props.controls.companySize.loading,
    onEvent: props.onEvent,
    title: "Midsize",
    value: "123",
    variant: "platform1"
  }), _react.default.createElement(_checkbox.default, {
    checked: companySize[2].value,
    className: "",
    color: props.controls.companySize.loading ? "gray-40" : props.controls.companySize.error ? "red" : 'gray-90',
    data: {
      id: 'companySize',
      label: 'yes',
      value: '4'
    },
    disabled: props.controls.companySize.loading,
    onEvent: props.onEvent,
    title: "Corporate",
    value: "123",
    variant: "platform1"
  })))), _react.default.createElement(_Grid.Row, {
    row: true,
    responsive: true
  }, _react.default.createElement(_Grid.Row, {
    paddingRight8: true,
    id: "looking-job"
  }, _react.default.createElement(_radio.default, {
    data: 'activelyLookingForJob',
    color: "gray-90",
    variant: "platform1",
    onEvent: props.onEvent,
    text: 'Are you actively looking for a job?',
    checked: props.activelyLookingForJob
  })), _react.default.createElement(_Grid.Row, {
    id: "notice-period"
  }, _react.default.createElement(_Select.default, {
    caption: "What is your notice period?",
    className: "vh-general-section-notice-period ".concat(props.className ? props.className : ''),
    currentItem: noticePeriod,
    data: "noticePeriod",
    items: noticePeriodList,
    onEvent: props.onEvent,
    isLoading: props.controls.noticePeriod.loading,
    description: props.controls.noticePeriod.error && props.controls.noticePeriod.message,
    descriptionColor: "red-light",
    captionColor: props.controls.noticePeriod.loading ? "gray-40" : props.controls.noticePeriod.error ? "red" : "gray-90"
  }))))))));
};

VHRelocationSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHRelocationSection;
exports.default = _default;