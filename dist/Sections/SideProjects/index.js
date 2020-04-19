"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _TitleDescription = _interopRequireDefault(require("../../Components/TitleDescription"));

var _ModalSideProjects = _interopRequireDefault(require("../../Components/ModalSideProjects"));

var _ButtonNew = _interopRequireDefault(require("../../Components/Button-New"));

var _Base = _interopRequireDefault(require("../../Components/Cards/Base/"));

var _Text = _interopRequireDefault(require("../../Components/Text/"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

var _Preloader = _interopRequireDefault(require("../../Components/Preloader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHSideProjectsSection = function VHSideProjectsSection(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModal = _React$useState2[0],
      setOpenModal = _React$useState2[1];

  var sideProjects = props.sideProjects ? props.sideProjects : [];

  var _React$useState3 = _react.default.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentItem = _React$useState4[0],
      _setCurrentItem = _React$useState4[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openModal && /*#__PURE__*/_react.default.createElement(_ModalSideProjects.default, _defineProperty({
    openModal: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    closeModal: props.closeModalSideProjects,
    modalSideProjects: props.modalSideProjects,
    currentItem: props.currentItem,
    controls: props.controls,
    onEvent: props.onEvent
  }, "currentItem", currentItem)), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-sideProjects-section-title ".concat(props.className ? props.className : ''),
    text: "Side Projects",
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-sideProjects-section-card ".concat(props.className ? props.className : '')
  }, props.controls.sideProjectsSection.loading ? /*#__PURE__*/_react.default.createElement(_Preloader.default, {
    type: "circle"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.preLoading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.CardSkeleton, null), /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.CardSkeleton, {
    button: true
  })) : /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    column: true
  }, sideProjects.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
      hover: true,
      pointer: true,
      title: item.title,
      titleColor: "primary-light",
      description: item.description,
      titleVariant: "subtitle1",
      descriptionVariant: "platform",
      onEvent: props.onEvent,
      data: {
        label: 'openModalSideProjects',
        item: item
      },
      onOpen: function onOpen() {
        return setOpenModal(true);
      },
      setCurrentItem: function setCurrentItem() {
        return _setCurrentItem(item);
      }
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      cursor: true,
      hover: true,
      variant: 'platform',
      text: item.projectUrl ? item.projectUrl : '',
      onEvent: props.onEvent,
      color: 'primary-light'
    }), /*#__PURE__*/_react.default.createElement(_Text.default, {
      variant: 'caption',
      text: "".concat(new Date(item.completedAt).getFullYear(), " - ").concat(item.endDate ? new Date(item.endDate).getFullYear() : 'Present'),
      color: 'gray-90',
      onEvent: props.onEvent
    }));
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    width: '20%'
  }, /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
    data: 'openModal',
    primary: true,
    onEvent: props.onEvent,
    closeModal: props.closeModalSideProjects,
    onOpen: function onOpen() {
      _setCurrentItem({});

      setOpenModal(true);
    },
    label: "Add Side Projects"
  }))))));
};

VHSideProjectsSection.propTypes = {
  onEvent: _propTypes.default.func,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHSideProjectsSection;
exports.default = _default;