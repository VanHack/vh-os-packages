"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _skeleton = _interopRequireDefault(require("./skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Components|Cards/Visa Process', module).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Manuel Barros Reyes",
    companyName: "Bank of America",
    positionName: "Fron-End Developer",
    cityName: "Vancouver, BC",
    time: 6,
    comments: "6",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    avgTime: 4
  }));
}).add('Invoiced', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Manuel Barros Reyes",
    companyName: "Bank of America",
    positionName: "Fron-End Developer",
    cityName: "Vancouver, BC",
    time: 6,
    comments: "6",
    invoiced: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    avgTime: 4
  }));
}).add('Favorite', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Manuel Barros Reyes",
    companyName: "Bank of America",
    positionName: "Fron-End Developer",
    cityName: "Vancouver, BC",
    time: 3,
    comments: "6",
    favorite: true,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    avgTime: 4
  }));
}).add('skeleton', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_skeleton.default, null));
}).add('skeleton multiply', function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      width: "300px",
      padding: "24px"
    }
  }, _react.default.createElement(_skeleton.default, {
    random: true
  }));
});