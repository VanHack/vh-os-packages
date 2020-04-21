"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: Roboto;\n  font-size: 0.675rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ErrorMessage = _styledComponents.default.p(_templateObject(), _Colors.default['red']);

exports.ErrorMessage = ErrorMessage;