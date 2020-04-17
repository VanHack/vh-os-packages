"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Modal = _interopRequireDefault(require("../Modal"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select"));

var _Simple = _interopRequireDefault(require("../../Components/Input/Simple"));

var _index = _interopRequireDefault(require("../../Components/Text/index"));

var _index2 = _interopRequireDefault(require("../../Components/Button-New/index"));

var S = _interopRequireWildcard(require("./styles"));

var _index3 = require("../../util/index");

var _IconText = _interopRequireDefault(require("../../Components/IconText/"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHModalLicenses = function VHModalLicenses(props) {
  var item = props.currentItem ? props.currentItem : {};

  var _React$useState = _react.default.useState(item.institution),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      institution = _React$useState2[0],
      setDegreeTitle = _React$useState2[1];

  var _React$useState3 = _react.default.useState(item.title),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      title = _React$useState4[0],
      setSchoolName = _React$useState4[1];

  var _React$useState5 = _react.default.useState((0, _index3.getFormatedDate)(item.yearOfComplete)),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      yearOfComplete = _React$useState6[0],
      setStartYear = _React$useState6[1];

  return _react.default.createElement(_Modal.default, {
    width: "732",
    minWidth: "660",
    open: props.openModal,
    onClose: props.onClose,
    onEvent: props.onEvent,
    header: _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(_TitleDescription.default, {
      title: 'Add Licenses and Certifications',
      description: '',
      titleVariant: "h3",
      titleColor: "black-50",
      descriptionColor: "gray-90",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    content: _react.default.createElement(_Grid.Row, {
      column: true
    }, _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Instituition"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: institution,
      data: {
        id: "modalLicenses",
        field: "institution"
      }
    }), props.modalLicenses.institution.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Title"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: title,
      data: {
        id: "modalLicenses",
        field: "title"
      }
    }), props.modalLicenses.title.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      justifySpaceBetween: true
    }, _react.default.createElement(_Grid.Row, {
      width: '40%',
      marginRight: 4
    }, _react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Start Date"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      type: 'date',
      onEvent: props.onEvent,
      value: yearOfComplete,
      data: {
        id: "modalLicenses",
        field: "yearOfComplete"
      }
    }), props.modalLicenses.yearOfComplete.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required"))), _react.default.createElement(_Grid.Row, {
      row: true
    }, item.id && _react.default.createElement(_Grid.Row, {
      alignItemsLeft: true
    }, _react.default.createElement(_IconText.default, {
      cursor: true,
      iconColor: "gray-60",
      textColor: "gray-60",
      text: 'Delete',
      icon: "delete",
      className: "vh-delete-license ".concat(props.className ? props.className : ''),
      variant: "platform",
      data: {
        action: 'deleteLicense',
        id: item.id
      },
      onEvent: props.onEvent,
      onClose: props.onClose
    })), _react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, _react.default.createElement(_index2.default, {
      primary: true,
      onEvent: props.onEvent,
      data: {
        action: 'saveLicense',
        id: item.id
      },
      onClose: props.onClose,
      closeModal: props.closeModal,
      label: "Save"
    }))))
  });
};

VHModalLicenses.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalLicenses.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalLicenses;
exports.default = _default;