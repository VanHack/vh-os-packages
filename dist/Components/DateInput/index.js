"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VHDateInput = /*#__PURE__*/function (_React$Component) {
  _inherits(VHDateInput, _React$Component);

  function VHDateInput(props) {
    var _this;

    _classCallCheck(this, VHDateInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VHDateInput).call(this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.keyPressFunc = _this.keyPressFunc.bind(_assertThisInitialized(_this));
    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(VHDateInput, [{
    key: "keyPressFunc",
    value: function keyPressFunc(e) {
      if (e.which === 8) {
        var val = this.state.value;
        console.log(val);

        if (val.length == 3 || val.length == 6) {
          val = val.slice(0, val.length - 1);
          console.log(val);
          this.setState({
            value: val
          });
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var val = e.target.value;
      console.log('called', val);

      if (val.length === 2) {
        val += '/';
      } else if (val.length === 5) {
        val += '/';
      }

      this.setState({
        value: val
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var placeholder = 'DAY / MONTH / YEAR';
      return _react.default.createElement("input", {
        type: "text",
        value: value,
        placeholder: placeholder,
        onChange: this.handleChange,
        onKeyDown: this.keyPressFunc
      });
    }
  }]);

  return VHDateInput;
}(_react.default.Component);

var _default = VHDateInput;
exports.default = _default;