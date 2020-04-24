"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

var _ModalEducation = _interopRequireDefault(require("../../Components/ModalEducation"));

var _ButtonNew = _interopRequireDefault(require("../../Components/Button-New"));

var _Base = _interopRequireDefault(require("../../Components/Cards/Base/"));

var _Text = _interopRequireDefault(require("../../Components/Text/"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

var _Preloader = _interopRequireDefault(require("../../Components/Preloader"));

var _Select = _interopRequireDefault(require("../../Components/Input/Select/"));

var _ModalLicenses = _interopRequireDefault(require("../../Components/ModalLicenses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHEducationSection = function VHEducationSection(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModal = _React$useState2[0],
      setOpenModal = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openModalLicenses = _React$useState4[0],
      setOpenModalLicenses = _React$useState4[1];

  var education = props.education ? props.education : [];
  var licenses = props.licenses ? props.licenses : [];
  var items = props.degreeTypeList;

  var _React$useState5 = _react.default.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentItem = _React$useState6[0],
      _setCurrentItem = _React$useState6[1];

  var _React$useState7 = _react.default.useState({}),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      currentItemLicense = _React$useState8[0],
      setCurrentItemLicense = _React$useState8[1];

  var degreeType = props.degreeType != undefined ? items.find(function (element) {
    return element.value === props.degreeType;
  }) : {};
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openModal && /*#__PURE__*/_react.default.createElement(_ModalEducation.default, _defineProperty({
    openModal: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    closeModal: props.closeModal,
    modalEducation: props.modalEducation,
    currentItem: props.currentItem,
    items: items,
    controls: props.controls,
    onEvent: props.onEvent
  }, "currentItem", currentItem)), openModalLicenses && /*#__PURE__*/_react.default.createElement(_ModalLicenses.default, {
    openModal: openModalLicenses,
    onClose: function onClose() {
      return setOpenModalLicenses(false);
    },
    closeModal: props.closeModalLicenses,
    modalLicenses: props.modalLicenses,
    items: items,
    controls: props.controls,
    onEvent: props.onEvent,
    currentItem: currentItemLicense
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 2
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-education-section-title ".concat(props.className ? props.className : ''),
    text: "Education",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-education-section-card ".concat(props.className ? props.className : '')
  }, props.controls.educationSection.loading ? /*#__PURE__*/_react.default.createElement(_Preloader.default, {
    type: "circle"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.preLoading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.CardSkeleton, null), /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.CardSkeleton, {
    button: true
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: 'subtitle1',
    text: 'Formal Education',
    color: 'black-100',
    onEvent: props.onEvent
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    paddingTop: '5',
    paddingRight8: true,
    id: "education-level",
    width: '50%'
  }, /*#__PURE__*/_react.default.createElement(_Select.default, {
    caption: "What is your educational level?",
    captionColor: "gray-90",
    className: "vh-general-section-degree ".concat(props.className ? props.className : ''),
    currentItem: degreeType,
    data: "degreeType",
    onEvent: props.onEvent,
    items: items,
    color: "gray-90"
  }))), education.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
      hover: true,
      pointer: true,
      title: item.degreeTitle,
      titleColor: "primary-light",
      description: "".concat(item.degreeTypeStr != null ? item.degreeTypeStr : '', " - ").concat(item.schoolName != null ? item.schoolName : ''),
      titleVariant: "h4",
      descriptionVariant: "bodyweb",
      onEvent: props.onEvent,
      data: _objectSpread({
        label: 'openModalEducation'
      }, item),
      onOpen: function onOpen() {
        return setOpenModal(true);
      },
      setCurrentItem: function setCurrentItem() {
        return _setCurrentItem(item);
      }
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'caption',
      text: "".concat(new Date(item.startDate).getFullYear(), " - ").concat(item.endDate ? new Date(item.endDate).getFullYear() : 'Present'),
      color: 'gray-90',
      onEvent: props.onEvent
    }));
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%'
  }, /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
    data: 'openModal',
    primary: true,
    onEvent: props.onEvent,
    closeModal: props.closeModal,
    onOpen: function onOpen() {
      _setCurrentItem({});

      setOpenModal(true);
    },
    label: "Add Education"
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom5: true,
    marginTop: 48
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: 'subtitle1',
    text: 'Licenses and Certifications',
    color: 'black-100',
    onEvent: props.onEvent
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, licenses.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
      hover: true,
      pointer: true,
      title: item.title,
      titleColor: "primary-light",
      description: item.institution,
      titleVariant: "h4",
      descriptionVariant: "bodyweb",
      onEvent: props.onEvent,
      data: _objectSpread({
        label: 'openModalLicenses'
      }, item),
      onOpen: function onOpen() {
        return setOpenModalLicenses(true);
      },
      setCurrentItem: function setCurrentItem() {
        return setCurrentItemLicense(item);
      }
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'caption',
      text: "".concat(new Date(item.yearOfComplete).getFullYear()),
      color: 'gray-90',
      onEvent: props.onEvent
    }));
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '30%'
  }, /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
    data: 'openModalLicenses',
    primary: true,
    onEvent: props.onEvent,
    closeModal: props.closeModalLicenses,
    onOpen: function onOpen() {
      setCurrentItemLicense({});
      setOpenModalLicenses(true);
    },
    label: "Add Certifications"
  })))))));
};

VHEducationSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHEducationSection;
exports.default = _default;