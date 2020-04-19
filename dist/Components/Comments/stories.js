"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var comments = [{
  "createdOn": "3 days",
  "note": "Adding a comment 007",
  "user": {
    "id": 141394.0,
    "name": "Anybal Silva",
    "email": "anybal@vanhack.com",
    "avatar": "https://vanhackblobstorageprod.blob.core.windows.net/img/User/1498bcb6-6bb6-4def-bd1a-8c2414e21330.jpg",
    "isPremium": false
  },
  "id": 9021
}];
(0, _react2.storiesOf)("Components|Comments", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '589px',
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    comments: comments,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
}).add("loading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '589px',
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    loading: true,
    comments: comments,
    onEvent: function onEvent(event) {
      return console.log(event);
    }
  }));
});