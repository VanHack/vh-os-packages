"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = require("../../Grid");

var _index = _interopRequireDefault(require("../Text/index"));

var _index2 = _interopRequireDefault(require("../Cards/Base/index"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VHTimer = function VHTimer(props) {
  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      seconds = _React$useState2[0],
      setSeconds = _React$useState2[1];

  var _React$useState3 = _react.default.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      minutes = _React$useState4[0],
      setMinutes = _React$useState4[1];

  var _React$useState5 = _react.default.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      hours = _React$useState6[0],
      setHours = _React$useState6[1];

  var _React$useState7 = _react.default.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      days = _React$useState8[0],
      setDays = _React$useState8[1];

  var start = function start(endDate, countdownFunction) {
    requestAnimationFrame(function () {
      var now = new Date();
      var currentDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000); // Find the distance between now and the count down date

      var distance = endDate - currentDate; // Time calculations for days, hours, minutes and seconds

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(distance % (1000 * 60) / 1000); // If the count down is finished, write some text

      if (distance < 0) {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);

        if (props.onEndTime) {
          props.onEndTime();
        }

        clearInterval(countdownFunction);
      } else {
        if (props.debugger) {
          console.log({
            "Seconds": seconds,
            "Minutes": minutes,
            "Hours": hours,
            "Days": days
          });
        }

        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDays(days);
      }
    });
  };

  _react.default.useEffect(function () {
    console.log(props.endDate);
    var countdownFunction = setInterval(function () {
      start(new Date(props.endDate), countdownFunction);
    }, 1000);
  }, []);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.TimerContainer, null, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    row: true,
    alignItemsCenter: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 1,
    marginLeft: 2
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    height: 1,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "h4",
    color: "black-90",
    text: days
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "caption",
    color: "gray-40",
    text: "Days"
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 1
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    height: 1,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "h4",
    color: "black-90",
    text: hours
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "caption",
    color: "gray-40",
    text: "Hours"
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 1
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    height: 1,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "h4",
    color: "black-90",
    text: minutes
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "caption",
    color: "gray-40",
    text: "Min"
  })))), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    marginRight: 3
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    noHover: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    alignItemsCenter: true,
    height: 1,
    style: {
      justifyContent: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "h4",
    color: "black-90",
    text: seconds
  }), /*#__PURE__*/_react.default.createElement(_index.default, {
    variant: "caption",
    color: "gray-40",
    text: "Sec"
  })))))));
};

var _default = VHTimer;
exports.default = _default;