"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _VisaProcess = _interopRequireDefault(require("../Cards/VisaProcess"));

var _Grid = require("../../Grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Column", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    name: "Offers Accepeted",
    avgTime: 4,
    total: 14
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_VisaProcess.default, {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Manuel Barros Reyes",
    companyName: "Bank of America",
    positionName: "Fron-End Developer",
    cityName: "Vancouver, BC",
    time: 4,
    comments: "6",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    avgTime: 4
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_VisaProcess.default, {
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
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_VisaProcess.default, {
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
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_VisaProcess.default, {
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
  })));
}).add("loading", function () {
  return /*#__PURE__*/_react.default.createElement(_.default, {
    name: "Offers Accepeted",
    avgTime: 4,
    total: 4,
    loading: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_VisaProcess.default, {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
    name: "Manuel Barros Reyes",
    companyName: "Bank of America",
    positionName: "Fron-End Developer",
    cityName: "Vancouver, BC",
    time: 4,
    comments: "6",
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    avgTime: 4
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_VisaProcess.default, {
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
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_VisaProcess.default, {
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
  })), /*#__PURE__*/_react.default.createElement(_Grid.Row, {
    style: {
      marginTop: "1rem"
    }
  }, /*#__PURE__*/_react.default.createElement(_VisaProcess.default, {
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
  })));
});