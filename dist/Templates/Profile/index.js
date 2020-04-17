"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _General = _interopRequireDefault(require("../../Sections/General"));

var _skills = _interopRequireDefault(require("../../Sections/skills"));

var _Relocation = _interopRequireDefault(require("../../Sections/Relocation"));

var _Education = _interopRequireDefault(require("../../Sections/Education"));

var _Social = _interopRequireDefault(require("../../Sections/Social"));

var _UserCompanyExperience = _interopRequireDefault(require("../../Sections/UserCompanyExperience"));

var _index = _interopRequireDefault(require("../PageSection/index"));

var _LanguageSection = _interopRequireDefault(require("../../Sections/LanguageSection"));

var _VHUserPhotoIconTitleDescription = _interopRequireDefault(require("../../Components/VHUserPhotoIconTitleDescription"));

var _File = _interopRequireDefault(require("../../Components/Input/File/"));

var _SideProjects = _interopRequireDefault(require("../../Sections/SideProjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VHProfileTemplate = function VHProfileTemplate(props) {
  return _react.default.createElement(_Grid.Container, {
    md: true,
    style: {
      maxWidth: "732px"
    }
  }, _react.default.createElement(_Grid.Row, {
    marginBottom: 16
  }, _react.default.createElement(_VHUserPhotoIconTitleDescription.default, {
    avatar: props.image ? props.image : '',
    name: "".concat(props.firstName ? props.firstName : 'Loading...', " ").concat(props.lastName ? props.lastName : ''),
    email: props.User.email,
    onEvent: props.onEvent
  })), _react.default.createElement(_Grid.Row, {
    marginBottom: 16
  }, _react.default.createElement("div", {
    id: "general"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_General.default, _extends({}, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 16
  }, _react.default.createElement("div", {
    id: "skills"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_skills.default, _extends({
      preLoading: props.controls.gender.preLoading
    }, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 16
  }, _react.default.createElement("div", {
    id: "relocation"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_Relocation.default, _extends({
      preLoading: props.controls.gender.preLoading
    }, props, {
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 16
  }, _react.default.createElement(_Social.default, _extends({
    preLoading: props.controls.linkedin.preLoading
  }, props, {
    onEvent: props.onEvent
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 16
  }, _react.default.createElement("div", {
    id: "language"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_LanguageSection.default, _extends({}, props, {
      preLoading: props.controls.language.preLoading,
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 16
  }, _react.default.createElement("div", {
    id: "experience"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_UserCompanyExperience.default, _extends({}, props, {
      preLoading: props.controls.experienceSection.preLoading,
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 16
  }, _react.default.createElement("div", {
    id: "education"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_Education.default, _extends({}, props, {
      preLoading: props.controls.educationSection.preLoading,
      onEvent: props.onEvent
    }))
  }))), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement("div", {
    id: "sideProject"
  }, _react.default.createElement(_index.default, {
    content: _react.default.createElement(_SideProjects.default, _extends({}, props, {
      preLoading: props.controls.sideProjectsSection.preLoading,
      onEvent: props.onEvent
    }))
  }))));
};

VHProfileTemplate.defaultProps = {};
VHProfileTemplate.propTypes = {};
var _default = VHProfileTemplate;
exports.default = _default;