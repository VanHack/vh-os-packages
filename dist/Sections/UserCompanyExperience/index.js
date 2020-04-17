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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return _react.default.createElement(_react.default.Fragment, null, openModal && _react.default.createElement(_ModalExperience.default, {
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
  }), _react.default.createElement(_Grid.Row, {
    mmarginBottom: 2
  }, _react.default.createElement(_Text.default, {
    className: "vh-skills-section-title ".concat(props.className ? props.className : ''),
    text: "Experience ".concat(experience.length > 0 ? calcDate(props.experience.firstExperienceDate) : ''),
    color: "black-50",
    variant: "h2"
  })), _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    className: "vh-skills-section-card ".concat(props.className ? props.className : '')
  }, props.controls.experienceSection.loading ? _react.default.createElement(_Preloader.default, {
    type: "circle"
  }) : _react.default.createElement(_react.default.Fragment, null, props.preLoading ? _react.default.createElement(_reactPreloadSkeleton.PostDescriptionSkeleton, null) : _react.default.createElement(_react.default.Fragment, null, experience.map(function (userPosition) {
    return _react.default.createElement(_Grid.Row, {
      marginBottom: 10,
      paddingRight: 10
    }, _react.default.createElement(_UserCompanyPositonExperience.default, {
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
  }), _react.default.createElement(_Grid.Row, {
    row: true
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    marginRight: 4,
    autoWidth: true
  }, _react.default.createElement(_ButtonNew.default, {
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