"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../assets/svg/icons/icon_delete.svg/index.js"));

var _index2 = _interopRequireDefault(require("../../assets/svg/icons/dot.svg/index.js"));

var _index3 = _interopRequireDefault(require("../../assets/svg/icons/icon_filter.svg/index.js"));

var _index4 = _interopRequireDefault(require("../../assets/svg/icons/icon_arrow_left.svg/index.js"));

var _index5 = _interopRequireDefault(require("../../assets/svg/icons/icon_swap_vert.svg/index.js"));

var _index6 = _interopRequireDefault(require("../../assets/svg/icons/mdi_search.svg/index.js"));

var _index7 = _interopRequireDefault(require("../../assets/svg/icons/icon_github.svg/index.js"));

var _index8 = _interopRequireDefault(require("../../assets/svg/icons/icon_linkedin_login.svg/index.js"));

var _index9 = _interopRequireDefault(require("../../assets/svg/icons/icon_globe.svg/index.js"));

var _index10 = _interopRequireDefault(require("../../assets/svg/flags/flag_usa.svg/index.js"));

var _index11 = _interopRequireDefault(require("../../assets/svg/flags/spain.svg/index.js"));

var _index12 = _interopRequireDefault(require("../../assets/svg/flags/flag_canada.svg/index.js"));

var _index13 = _interopRequireDefault(require("../../assets/svg/flags/flag_germany.svg/index.js"));

var _index14 = _interopRequireDefault(require("../../assets/svg/flags/flag_ireland.svg/index.js"));

var _index15 = _interopRequireDefault(require("../../assets/svg/flags/flag_netherlands.svg/index.js"));

var _index16 = _interopRequireDefault(require("../../assets/svg/flags/flag_uk.svg/index.js"));

var _index17 = _interopRequireDefault(require("../../assets/svg/flags/flag_brazil.svg/index.js"));

var _index18 = _interopRequireDefault(require("../../assets/svg/flags/flag_china.svg/index.js"));

var _index19 = _interopRequireDefault(require("../../assets/svg/flags/flag_india.svg/index.js"));

var _index20 = _interopRequireDefault(require("../../assets/svg/flags/flag_south_africa.svg/index.js"));

var _index21 = _interopRequireDefault(require("../../assets/svg/flags/flag_russia.svg/index.js"));

var _index22 = _interopRequireDefault(require("../../assets/svg/icons/icon_camera.svg/index.js"));

var _index23 = _interopRequireDefault(require("../../assets/svg/icons/icon_interview.svg/index.js"));

var _index24 = _interopRequireDefault(require("../../assets/svg/icons/icon_profile.svg/index.js"));

var _index25 = _interopRequireDefault(require("../../assets/svg/icons/icon_community.svg/index.js"));

var _index26 = _interopRequireDefault(require("../../assets/svg/icons/icon_arrow_right.svg/index.js"));

var _index27 = _interopRequireDefault(require("../../assets/svg/icons/icon_medal.svg/index.js"));

var _index28 = _interopRequireDefault(require("../../assets/svg/icons/icon_play.svg/index.js"));

var _index29 = _interopRequireDefault(require("../../assets/svg/icons/experience.svg/index.js"));

var _index30 = _interopRequireDefault(require("../../assets/svg/icons/skills.svg/index.js"));

var _index31 = _interopRequireDefault(require("../../assets/svg/icons/relocation.svg/index.js"));

var _index32 = _interopRequireDefault(require("../../assets/svg/icons/icon_user-circle.svg/index.js"));

var _index33 = _interopRequireDefault(require("../../assets/svg/icons/language.svg/index.js"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = {
  w: 18,
  h: 18
};
var defaultColor = "silver";

var VHIcon = function VHIcon(props) {
  switch (true) {
    default:
    case props.xs:
      size = {
        w: 18,
        h: 18
      };
      break;

    case props.sm:
      size = {
        w: 24,
        h: 24
      };
      break;

    case props.md:
      size = {
        w: 36,
        h: 36
      };
      break;

    case props.lg:
      size = {
        w: 48,
        h: 48
      };
      break;
  }

  switch (true) {
    case props.primary:
      defaultColor = "blue";
      break;

    case props.danger:
      defaultColor = "red";
      break;

    case props.warning:
      defaultColor = "yellow";
      break;

    case props.info:
      defaultColor = "silver";
      break;
  }

  if (props.color) {
    defaultColor = _Colors.default[props.color];
  }

  switch (props.icon) {
    case 'webSite':
      return /*#__PURE__*/_react.default.createElement(_index9.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "bullet":
      return /*#__PURE__*/_react.default.createElement(_index2.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "sort":
      return /*#__PURE__*/_react.default.createElement(_index5.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "filter":
      return /*#__PURE__*/_react.default.createElement(_index3.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "search":
      return /*#__PURE__*/_react.default.createElement(_index6.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case "arrow-left":
      return /*#__PURE__*/_react.default.createElement(_index4.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'github':
      return /*#__PURE__*/_react.default.createElement(_index7.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'world':
      return /*#__PURE__*/_react.default.createElement(_index9.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'linkedin':
      return /*#__PURE__*/_react.default.createElement(_index8.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'search':
      return /*#__PURE__*/_react.default.createElement(_index6.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'usa':
      return /*#__PURE__*/_react.default.createElement(_index10.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'canada':
      return /*#__PURE__*/_react.default.createElement(_index12.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'ireland':
      return /*#__PURE__*/_react.default.createElement(_index14.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'uk':
      return /*#__PURE__*/_react.default.createElement(_index16.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'germany':
      return /*#__PURE__*/_react.default.createElement(_index13.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'netherlands':
      return /*#__PURE__*/_react.default.createElement(_index15.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'brazil':
      return /*#__PURE__*/_react.default.createElement(_index17.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'china':
      return /*#__PURE__*/_react.default.createElement(_index18.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'india':
      return /*#__PURE__*/_react.default.createElement(_index19.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'south-africa':
      return /*#__PURE__*/_react.default.createElement(_index20.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'russia':
      return /*#__PURE__*/_react.default.createElement(_index21.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'camera':
      return /*#__PURE__*/_react.default.createElement(_index22.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'interview':
      return /*#__PURE__*/_react.default.createElement(_index23.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'community':
      return /*#__PURE__*/_react.default.createElement(_index25.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'profile':
      return /*#__PURE__*/_react.default.createElement(_index24.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'arrow-right':
      return /*#__PURE__*/_react.default.createElement(_index26.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'medal':
      return /*#__PURE__*/_react.default.createElement(_index27.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'play':
      return /*#__PURE__*/_react.default.createElement(_index28.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'delete':
      return /*#__PURE__*/_react.default.createElement(_index.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'experience':
      return /*#__PURE__*/_react.default.createElement(_index29.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'skills':
      return /*#__PURE__*/_react.default.createElement(_index30.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'relocation':
      return /*#__PURE__*/_react.default.createElement(_index31.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'user':
      return /*#__PURE__*/_react.default.createElement(_index32.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'language':
      return /*#__PURE__*/_react.default.createElement(_index33.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    case 'spain':
      return /*#__PURE__*/_react.default.createElement(_index11.default, {
        fill: defaultColor,
        width: "".concat(size.w, "px"),
        height: "".concat(size.h, "px"),
        className: "vh-icon ".concat(props.className ? props.className : '')
      });

    default:
      return /*#__PURE__*/_react.default.createElement("span", null);
  }
};

VHIcon.defaultProps = {
  className: ''
};
var IconPropTypes = {
  source: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  icon: _propTypes.default.string
};
exports.IconPropTypes = IconPropTypes;
VHIcon.propTypes = IconPropTypes;
var _default = VHIcon;
exports.default = _default;