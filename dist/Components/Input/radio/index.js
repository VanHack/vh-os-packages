"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var S = _interopRequireWildcard(require("./styles"));

var _Text = _interopRequireDefault(require("../../Text"));

var _Simple = _interopRequireDefault(require("../../Input/Simple"));

var _Grid = require("../../../Grid");

var _util = require("../../../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHInputRadio = function VHInputRadio(props) {
  var _useState = (0, _react.useState)(props.checked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = (0, _react.useState)(props.value),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  _react.default.useEffect(function () {
    setChecked(props.checked);
  }, [props.checked]);

  return _react.default.createElement(_Grid.Row, {
    column: true,
    alignItemsLeft: true,
    className: "vh-radio ".concat(props.className ? props.className : '')
  }, _react.default.createElement(_Grid.Row, {
    marginBottom5: true
  }, _react.default.createElement(_Text.default, {
    variant: props.variant,
    color: props.color,
    text: props.text
  })), _react.default.createElement(S.Wrapper, null, _react.default.createElement(S.Input, {
    name: props.text,
    id: 'Yes',
    checked: checked,
    disabled: props.disabled,
    type: "radio",
    onClick: function onClick() {
      setChecked(true), props.onEvent({
        type: "OnClick",
        origin: "VHInputRadio",
        props: {
          data: props.data,
          checked: checked
        }
      });
    }
  }), _react.default.createElement(S.Label, {
    for: props.text
  }, 'Yes'), _react.default.createElement(S.Input, {
    name: props.text,
    id: "No",
    checked: !checked,
    disabled: props.disabled,
    type: "radio",
    onClick: function onClick() {
      setChecked(false), props.onEvent({
        type: "OnClick",
        origin: "VHInputRadio",
        props: {
          data: props.data,
          checked: checked
        }
      });
    }
  }), _react.default.createElement(S.Label, {
    for: props.text
  }, 'No'), props.input && checked && /*#__PURE__*/_react.default.createElement(S.Container, null, /*#__PURE__*/_react.default.createElement(_Simple.default, {
    maxLength: '4',
    type: "text",
    data: 'passportExpirationDate',
    pattern: "([0-9]{2}[/]?){2}",
    placeholder: 'Expiration: mm/yy',
    value: value,
    onEvent: props.onEvent
  }))));
};

VHInputRadio.defaultProps = {
  title: "",
  color: "gray-90",
  variant: "platform1",
  onEvent: null,
  data: null,
  checked: null,
  disabled: null,
  className: ''
};
VHInputRadio.propTypes = {
  title: _propTypes.default.string,
  color: _propTypes.default.string,
  variant: _propTypes.default.string,
  onEvent: _propTypes.default.func.isRequired,
  data: _propTypes.default.string,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = VHInputRadio;
exports.default = _default;