"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../../Grid");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _LanguageList = _interopRequireDefault(require("../LanguageList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SixStep = function SixStep(props) {
  var userPositions = [];

  if (props.userPositions) {
    props.userPositions.map(function (item) {
      if (item.id) {
        userPositions.push({
          value: item.id,
          label: item.name
        });
      } else {
        userPositions.push({
          value: item,
          label: item.label ? item.label : positions.find(function (element) {
            return element.value === item;
          }).label
        });
      }
    });
  }

  return _react.default.createElement(_Grid.Row, {
    column: true
  }, _react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom: 10
  }, _react.default.createElement(_Grid.Row, {
    width: '10%'
  }, _react.default.createElement(_Icon.default, {
    icon: 'language',
    title: "city",
    md: true
  })), _react.default.createElement(_Grid.Row, {
    width: '70%'
  }, _react.default.createElement(_Text.default, {
    variant: "h4",
    color: "gray-90",
    text: 'Languages'
  }))), _react.default.createElement(_Grid.Row, {
    column: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, null, /*#__PURE__*/_react.default.createElement(_LanguageList.default, {
    languages: props.languages,
    controls: props.controls,
    onEvent: props.onEvent,
    secondList: props.proficiencyList,
    list: props.languageList,
    items: props.languages,
    data: "vanhack"
  }))));
};

SixStep.defaultProps = {
  className: ""
};
SixStep.propTypes = {
  className: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired
};
var _default = SixStep;
exports.default = _default;