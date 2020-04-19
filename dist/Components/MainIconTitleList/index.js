"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../IconText/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHMainIconTitleList = function VHMainIconTitleList(props) {
  return props.items.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_index.default, {
      iconColor: "primary-light",
      textColor: "primary-light",
      text: item.label,
      icon: "bullet",
      className: "vh-main-icon-title-list ".concat(props.className ? props.className : ''),
      variant: "caption",
      data: props.data,
      onEvent: props.onEvent
    });
  });
};

VHMainIconTitleList.propTypes = {
  onEvent: _propTypes.default.func,
  items: _propTypes.default.array.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  className: _propTypes.default.string
};
var _default = VHMainIconTitleList;
exports.default = _default;