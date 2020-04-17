"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Text", module).add("Types", function () {
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'h1',
    text: "H1 - Nunito Sans - 48 - light ",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'h2',
    style: {
      marginBottom: '24px'
    },
    text: "H2 - Nunito Sans - 34 - Light",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'h3',
    style: {
      marginBottom: '24px'
    },
    text: "H3 - Nunito Sans - 24 - Regular",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'h4',
    text: "H4 - Nunito Sans - 22 - Bold",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'h5',
    text: "H5 - Nunito Sans - 22 - Regular",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'h6',
    text: "H6 - Nunito Sans - 20 - Regular",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'subtitle1',
    text: "Subtitle1  - Roboto - 18 - Regular",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'subtitle2',
    text: "Subtitle2 - Roboto - 16 - Bold",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'subtitle3',
    text: "Subtitle3 - Roboto - 16 - light",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'BodyWeb',
    text: "BodyWeb - Roboto - 16 - Regular",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'platform1',
    text: "Platform1 - Roboto - 14 - Regular",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'platform2',
    text: "Platform2 - Roboto - 14 - Bold",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), _react.default.createElement("div", {
    style: {
      marginBottom: '12px'
    }
  }, _react.default.createElement(_.default, {
    variant: 'caption',
    text: "Caption - Roboto - 12 - Regular",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })));
});