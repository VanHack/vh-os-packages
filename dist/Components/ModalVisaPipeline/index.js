"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _Text = _interopRequireDefault(require("../Text"));

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var S = _interopRequireWildcard(require("./styles"));

var _Grid = require("../../Grid");

var _Modal = _interopRequireDefault(require("../Modal"));

var _Comments = _interopRequireDefault(require("../Comments"));

var _TimeLine = _interopRequireDefault(require("../TimeLine"));

var _Assign = _interopRequireDefault(require("../Assign"));

var _Textarea = _interopRequireDefault(require("../Textarea"));

var _IconText = _interopRequireDefault(require("../IconText"));

var _index = _interopRequireDefault(require("../Preloader/index"));

var _index2 = _interopRequireDefault(require("../Img/index"));

var _index3 = _interopRequireDefault(require("../../assets/svg/icons/icon_business.svg/index.js"));

var _index4 = _interopRequireDefault(require("../../assets/svg/icons/icon_skills.svg/index.js"));

var _index5 = _interopRequireDefault(require("../../assets/svg/icons/icon_passport.svg/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var VHModalVisaPipeline = function VHModalVisaPipeline(props) {
  var projectedDate = '';
  var showDate = false;

  if (props.projectedStartDate != null && _typeof(props.projectedStartDate) != undefined) {
    showDate = true;
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date(props.projectedStartDate);
    projectedDate = "".concat(monthNames[date.getMonth()], ", ").concat(date.getDate());
  }

  return /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    className: "vh-modal-visa-pipeline ".concat(props.className ? props.className : "")
  }, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    width: "70",
    minWidth: "660",
    open: true,
    header: /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      autoWidth: true,
      paddingRight8: true
    }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      image: props.user.avatar,
      size: "lg",
      showCursor: true
    })), /*#__PURE__*/_react.default.createElement(_TitleDescription.default, {
      title: props.user.name,
      description: props.user.email,
      titleVariant: "h4",
      titleColor: "gray-90",
      descriptionColor: "gray-80",
      descriptionVariant: "platform",
      onEvent: props.onEvent
    })),
    onEvent: props.onEvent,
    content: /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      alignItemsCenter: true
    }, /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: _index3.default,
      title: "company",
      xs: true
    })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.job.companyName), /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: _index4.default,
      title: "position",
      xs: true
    })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.job.position)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true,
      row: true,
      alignItemsCenter: true
    }, /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: _index5.default,
      title: "city",
      xs: true
    })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.job.location), /*#__PURE__*/_react.default.createElement(S.IconWrapper, null, /*#__PURE__*/_react.default.createElement(_index2.default, {
      source: _index4.default,
      title: "city",
      xs: true
    })), /*#__PURE__*/_react.default.createElement(S.Info, null, props.salary)), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, /*#__PURE__*/_react.default.createElement(_Textarea.default, {
      description: props.description,
      onEvent: props.onEvent
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      marginBottom5: true
    }, props.assignedSession.loading ? /*#__PURE__*/_react.default.createElement(_index.default, {
      size: "sm"
    }) : /*#__PURE__*/_react.default.createElement(_Assign.default, {
      items: props.assign.items,
      onEvent: props.onEvent
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      row: true
    }, /*#__PURE__*/_react.default.createElement(S.Wrapper, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_Comments.default, {
      data: props.user,
      loading: props.commentsSession.loading,
      comments: props.comments,
      onEvent: props.onEvent
    }))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
      margin: true
    }, props.activitiesSession.loading ? /*#__PURE__*/_react.default.createElement(_index.default, {
      size: "sm"
    }) : /*#__PURE__*/_react.default.createElement(_TimeLine.default, {
      items: props.timeLine.items,
      totalDays: props.timeLine.totalDays,
      onEvent: props.onEvent
    }), showDate && /*#__PURE__*/_react.default.createElement(S.InfoDate, null, "Projected Start Date: ", /*#__PURE__*/_react.default.createElement("b", null, projectedDate)))))
  }));
};

VHModalVisaPipeline.defaultProps = {
  onEvent: null,
  className: ""
};
VHModalVisaPipeline.propTypes = {
  onEvent: _propTypes.default.func,
  className: _propTypes.default.stringc
};
var _default = VHModalVisaPipeline;
exports.default = _default;