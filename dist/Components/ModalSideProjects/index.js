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

var _Simple = _interopRequireDefault(require("../../Components/Input/Simple"));

var _index = _interopRequireDefault(require("../../Components/Text/index"));

var _index2 = _interopRequireDefault(require("../../Components/Button-New/index"));

var S = _interopRequireWildcard(require("./styles"));

var _index3 = require("../../util/index");

var _IconText = _interopRequireDefault(require("../../Components/IconText/"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHModalSideProjects = function VHModalSideProjects(props) {
  var item = props.currentItem ? props.currentItem : {};

  var _React$useState = _react.default.useState(item.title),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      title = _React$useState2[0],
      setDegreeTitle = _React$useState2[1];

  var _React$useState3 = _react.default.useState(item.description),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      description = _React$useState4[0],
      setSchoolName = _React$useState4[1];

  var _React$useState5 = _react.default.useState((0, _index3.getFormatedDate)(item.completedAt)),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      completedAt = _React$useState6[0],
      setStartYear = _React$useState6[1];

  var _React$useState7 = _react.default.useState(item.projectUrl),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      projectUrl = _React$useState8[0],
      setProjectUrl = _React$useState8[1];

  var _React$useState9 = _react.default.useState((0, _index3.getFormatedDate)(item.endDate)),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      endDate = _React$useState10[0],
      setEndYear = _React$useState10[1];

  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    width: "732",
    minWidth: "660",
    open: props.openModal,
    onClose: props.onClose,
    onEvent: props.onEvent,
    header: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
      title: 'Add Side Project',
      description: '',
      titleVariant: "h3",
      titleColor: "black-50",
      descriptionColor: "gray-90",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(_index.default, {
      text: "Projects listed in this section can be from either professional, volunteer, or academic roles. They might catch the eye of a recruiter or an employer and help you nail a job!",
      color: "black-50",
      variant: 'subtitle3'
    }))),
    content: /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      column: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Title"
    }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: title,
      data: {
        id: "modalSideProjects",
        field: "title"
      }
    }), props.modalSideProjects.title.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required")), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Description"
    }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: description,
      data: {
        id: "modalSideProjects",
        field: "description"
      }
    }), props.modalSideProjects.description.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required")), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Project link"
    }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
      placeholder: "",
      onEvent: props.onEvent,
      value: projectUrl,
      data: {
        id: "modalSideProjects",
        field: "projectUrl"
      }
    })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      justifySpaceBetween: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      width: '50%',
      marginRight: 4
    }, /*#__PURE__*/_react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "Start Date"
    }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
      placeholder: "",
      type: 'date',
      onEvent: props.onEvent,
      value: completedAt,
      data: {
        id: "modalSideProjects",
        field: "completedAt"
      }
    }), props.modalSideProjects.completedAt.messageError && /*#__PURE__*/_react.default.createElement(S.ErrorMessage, null, "Field required")), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      width: '50%'
    }, /*#__PURE__*/_react.default.createElement(_index.default, {
      color: "gray-90",
      variant: 'platform',
      text: "End Date"
    }), /*#__PURE__*/_react.default.createElement(_Simple.default, {
      placeholder: "",
      type: 'date',
      onEvent: props.onEvent,
      value: endDate,
      data: {
        id: "modalSideProjects",
        field: "endDate"
      }
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, item.id && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      alignItemsLeft: true
    }, /*#__PURE__*/_react.default.createElement(_IconText.default, {
      cursor: true,
      iconColor: "gray-60",
      textColor: "gray-60",
      text: 'Delete',
      icon: "delete",
      className: "vh-delete-education ".concat(props.className ? props.className : ''),
      variant: "platform",
      data: {
        action: 'deleteSideProjects',
        id: item.id
      },
      onEvent: props.onEvent,
      onClose: props.onClose
    })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      alignItemsRight: true
    }, /*#__PURE__*/_react.default.createElement(_index2.default, {
      primary: true,
      onEvent: props.onEvent,
      data: {
        action: 'saveSideProjects',
        id: item.id
      },
      onClose: props.onClose,
      closeModal: props.closeModal,
      label: "Save"
    }))))
  });
};

VHModalSideProjects.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalSideProjects.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalSideProjects;
exports.default = _default;