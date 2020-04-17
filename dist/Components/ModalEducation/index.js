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

var VHModalEducation = function VHModalEducation(props) {
  var item = props.currentItem ? props.currentItem : {};

  var _React$useState = _react.default.useState({
    value: item.degreeType,
    label: item.degreeTypeStr
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      degreeType = _React$useState2[0],
      setDegreeType = _React$useState2[1];

  var _React$useState3 = _react.default.useState(item.degreeTitle),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      degreeTitle = _React$useState4[0],
      setDegreeTitle = _React$useState4[1];

  var _React$useState5 = _react.default.useState(item.schoolName),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      schoolName = _React$useState6[0],
      setSchoolName = _React$useState6[1];

  var _React$useState7 = _react.default.useState((0, _index3.getFormatedDate)(item.startDate)),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      startYear = _React$useState8[0],
      setStartYear = _React$useState8[1];

  var _React$useState9 = _react.default.useState((0, _index3.getFormatedDate)(item.endDate)),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      endYear = _React$useState10[0],
      setEndYear = _React$useState10[1];

  return _react.default.createElement(_Modal.default, {
    width: "732",
    minWidth: "660",
    open: props.openModal,
    onClose: props.onClose,
    onEvent: props.onEvent,
    header: _react.default.createElement(_Grid.Row, {
      row: true
    }, _react.default.createElement(_TitleDescription.default, {
      title: 'Add Education',
      description: '',
      titleVariant: "h3",
      titleColor: "black-50",
      descriptionColor: "gray-90",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    content: _react.default.createElement(_Grid.Row, {
      column: true
    }, _react.default.createElement("div", {
      style: {
        width: '50%'
      }
    }, _react.default.createElement(_Select.default, {
      caption: "Degree Type",
      captionColor: "gray-90",
      className: "vh-general-section-degree ".concat(props.className ? props.className : ''),
      currentItem: degreeType,
      data: "degree",
      onEvent: props.onEvent,
      items: props.items,
      color: "gray-90"
    }), props.modalEducation.degreeType.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Degree Title"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: degreeTitle,
      data: {
        id: "ModalEducation",
        field: "degreeTitle"
      }
    }), props.modalEducation.degreeTitle.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, _react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Institution"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: schoolName,
      data: {
        id: "ModalEducation",
        field: "schoolName"
      }
    }), props.modalEducation.schoolName.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      justifySpaceBetween: true
    }, _react.default.createElement(_Grid.Row, {
      width: '50%',
      marginRight: 4
    }, _react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Start Date"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      type: 'date',
      onEvent: props.onEvent,
      value: startYear,
      data: {
        id: "ModalEducation",
        field: "startYear"
      }
    }), props.modalEducation.startYear.messageError && _react.default.createElement(S.ErrorMessage, null, "Field required")), _react.default.createElement(_Grid.Row, {
      width: '50%'
    }, _react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "End Date"
    }), _react.default.createElement(_Simple.default, {
      placeholder: "",
      type: 'date',
      onEvent: props.onEvent,
      value: endYear,
      data: {
        id: "ModalEducation",
        field: "endYear"
      }
    }))), _react.default.createElement(_Grid.Row, {
      row: true
    }, item.id && _react.default.createElement(_Grid.Row, {
      alignItemsLeft: true
    }, _react.default.createElement(_IconText.default, {
      cursor: true,
      iconColor: "gray-60",
      textColor: "gray-60",
      text: 'Delete',
      icon: "delete",
      className: "vh-delete-education ".concat(props.className ? props.className : ''),
      variant: "platform",
      data: {
        action: 'deleteEducation',
        id: item.id
      },
      onEvent: props.onEvent,
      onClose: props.onClose
    })), _react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, _react.default.createElement(_index2.default, {
      primary: true,
      onEvent: props.onEvent,
      data: 'saveEducation',
      onClose: props.onClose,
      closeModal: props.closeModal,
      label: "Save"
    }))))
  });
};

VHModalEducation.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalEducation.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalEducation;
exports.default = _default;