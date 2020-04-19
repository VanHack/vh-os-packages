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

var _ButtonNew = _interopRequireDefault(require("../../Components/Button-New"));

var _UserCompanyPositonExperience = _interopRequireDefault(require("../../Components/UserCompanyPositonExperience"));

var _ModalExperience = _interopRequireDefault(require("../../Components/ModalExperience"));

var _reactPreloadSkeleton = require("react-preload-skeleton");

var _Preloader = _interopRequireDefault(require("../../Components/Preloader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHUserCompanyExperienceSection = function VHUserCompanyExperienceSection(props) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openModal = _React$useState2[0],
      setOpenModal = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      newExperience = _React$useState4[0],
      _setNewExperience = _React$useState4[1];

  var experience = props.experience.experiences ? props.experience.experiences : [];

  var _React$useState5 = _react.default.useState({}),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currentItem = _React$useState6[0],
      _setCurrentItem = _React$useState6[1]; // const [profileReviewInProgress, setProfileReviewInProgress] = React.useState(profileReviewInProgress || props.reviewInProgress);
  // React.useEffect(() => {
  //   setProfileReviewInProgress(profileReviewInProgress || props.reviewInProgress);
  // }, [profileReviewInProgress || props.reviewInProgress])


  function calcDate(date) {
    var df = new Date(date);
    var dt = new Date();
    var allYears = dt.getFullYear() - df.getFullYear();
    var partialMonths = dt.getMonth() - df.getMonth();

    if (partialMonths < 0) {
      allYears--;
      partialMonths = partialMonths + 12;
    }

    return "".concat(allYears, " years, ").concat(partialMonths, " months");
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, openModal && /*#__PURE__*/_react.default.createElement(_ModalExperience.default, {
    openModal: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    modalExperience: props.modalExperience,
    currentItem: currentItem,
    controls: props.controls,
    onEvent: props.onEvent,
    newExperience: newExperience,
    countries: props.countries,
    companyList: props.companyList,
    industryList: props.industryList,
    positions: props.positions,
    closeModalExperience: props.closeModalExperience
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    mmarginBottom: 2
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Experience ".concat(experience.length > 0 ? calcDate(props.experience.firstExperienceDate) : ''),
    color: "black-50",
    variant: "h2"
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, props.controls.experienceSection.loading ? /*#__PURE__*/_react.default.createElement(_Preloader.default, {
    type: "circle"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.preLoading ? /*#__PURE__*/_react.default.createElement(_reactPreloadSkeleton.PostDescriptionSkeleton, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, experience.map(function (userPosition) {
    return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom: 10,
      paddingRight: 10
    }, /*#__PURE__*/_react.default.createElement(_UserCompanyPositonExperience.default, {
      item: userPosition,
      companyList: props.companyList,
      industryList: props.industryList,
      onOpen: function onOpen() {
        setOpenModal(true);
      },
      onEvent: props.onEvent,
      setCurrentItem: function setCurrentItem() {
        return _setCurrentItem(userPosition);
      }
    }));
  }), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    marginRight: 4,
    autoWidth: true
  }, /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
    nowrap: true,
    primary: true,
    onEvent: props.onEvent,
    data: "AddExperience",
    label: "Add Experience",
    closeModal: props.closeModal,
    onOpen: function onOpen() {
      _setCurrentItem({});

      setOpenModal(true);
    },
    setNewExperience: function setNewExperience() {
      _setNewExperience(true);
    }
  })), props.experience.canRequestReview && !props.reviewInProgress && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_ButtonNew.default, {
    outline: true,
    primary: true,
    onEvent: props.onEvent,
    data: "RequestProfileReview",
    label: "Request Profile Review"
  })), !props.experience.canRequestReview && props.experience.canRequestReviewInDays > 0 && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "You can request another rpofile review in ".concat(props.canRequestReviewInDays, " days")
  })), props.reviewInProgress && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Your profile is under review"
  })), props.experience.profileReviewInProgress && /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "platform2",
    color: "gray-80",
    text: "Your profile is under review"
  }))))))));
};

VHUserCompanyExperienceSection.propTypes = {
  onEvent: _propTypes.default.func,
  title: _propTypes.default.string.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHUserCompanyExperienceSection;
exports.default = _default;