"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Base = _interopRequireDefault(require("../../Components/Cards/Base"));

var _Text = _interopRequireDefault(require("../../Components/Text"));

var _LanguageList = _interopRequireDefault(require("../../Components/LanguageList"));

var _ButtonNew = _interopRequireDefault(require("../../Components/Button-New"));

var _ModalLanguageCertificate = _interopRequireDefault(require("../../Components/ModalLanguageCertificate/"));

var S = _interopRequireWildcard(require("./styles"));

var _Preloader = _interopRequireDefault(require("../../Components/Preloader"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHLanguageSection = function VHLanguageSection(props) {
  var certificates = props.certificates ? props.certificates : [];

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModalCertificate = _React$useState2[0],
      setOpenModalCertificate = _React$useState2[1];

  var items = props.typeList;

  var _React$useState3 = _react.default.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentCertificate = _React$useState4[0],
      setCurrentCertificate = _React$useState4[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openModalCertificate && /*#__PURE__*/_react.default.createElement(_ModalLanguageCertificate.default, {
    openModal: openModalCertificate,
    onClose: function onClose() {
      return setOpenModalCertificate(false);
    },
    closeModal: props.closeModalLanguageCertificate,
    modalLanguageCertificate: props.modalLanguageCertificate,
    items: items,
    controls: props.controls,
    onEvent: props.onEvent,
    currentItem: currentCertificate
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom: 2
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Languages",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_LanguageList.default, {
    languages: props.languages,
    controls: props.controls,
    onEvent: props.onEvent,
    secondList: props.proficiencyList,
    list: props.languageList,
    items: props.languages,
    data: "vanhack"
  }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true,
    marginBottom5: true,
    marginTop: 48
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: 'subtitle1',
    text: 'Language Certificate',
    color: 'black-100',
    onEvent: props.onEvent
  })), props.controls.language.loading ? /*#__PURE__*/_react.default.createElement(_Preloader.default, {
    type: "circle"
  }) : /*#__PURE__*/_react.default.createElement(_Grid.Row, null, certificates.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(S.Wrapper, {
      onClick: function onClick() {
        props.onEvent({
          type: "onClick",
          origin: "VHText",
          props: {
            data: {
              label: 'openModalCertificate',
              item: item
            }
          }
        });
        setCurrentCertificate(item);
        setOpenModalCertificate(true);
      }
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      paddingLeft: 7,
      marginBottom5: true,
      marginTop: 5
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'subtitle2',
      text: items[item.type].label,
      color: 'gradient-primary'
    })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true,
      justifySpaceAround: true
    }, /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'platform2',
      text: "".concat(item.listening, " Listening"),
      color: 'gray-90'
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'platform2',
      text: "".concat(item.reading, " Reading"),
      color: 'gray-90'
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'platform2',
      text: "".concat(item.writing, " Writing"),
      color: 'gray-90'
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'platform2',
      text: "".concat(item.speaking, " Speaking"),
      color: 'gray-90'
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'platform2',
      text: "".concat(item.overall, " Overall"),
      color: 'gray-90'
    })));
  })), certificates.length === 0 && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '30%'
  }, /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
    data: 'openModalLicenses',
    primary: true,
    onEvent: props.onEvent,
    closeModal: props.closeModalCertificates,
    onOpen: function onOpen() {
      setCurrentCertificate();
      setOpenModalCertificate(true);
    },
    label: "Add Certificate"
  }))))));
};

VHLanguageSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.object,
  className: _propTypes.default.string
};
var _default = VHLanguageSection;
exports.default = _default;