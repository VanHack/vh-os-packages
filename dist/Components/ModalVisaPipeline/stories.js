"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commentsSession = {
  loading: false,
  error: false,
  success: true
};
var assignedSession = {
  loading: false,
  error: false,
  success: true
};
var activitiesSession = {
  loading: false,
  error: false,
  success: true
};
var commentsSessionLoading = {
  loading: true,
  error: false,
  success: true
};
var assignedSessionLoading = {
  loading: true,
  error: false,
  success: true
};
var activitiesSessionLoading = {
  loading: true,
  error: false,
  success: true
};
var user = {
  "id": 141394.0,
  "name": "Ivan Avdonin",
  "email": "vh@mailinator.com",
  "avatar": "https://vanhackblobstorageprod.blob.core.windows.net/img/User/-1.jpg",
  "isPremium": false
};
var comments = [{
  "createdOn": "4 days",
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
var job = {
  "location": "Vancouver, Canada",
  "position": "iOS Developer",
  "companyName": "Kickstarter",
  "id": 199
};
var timeLineData = {
  totalDays: "21 days",
  items: [{
    createdOn: "2019-09-16T13:52:28.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 2:45 am"
    }]
  }, {
    createdOn: "2019-09-22T18:32:11.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 6:33 pm"
    }, {
      columnName: "Work Permit Processes",
      userName: "Esther Flores - 8:45 pm"
    }]
  }, {
    createdOn: "2019-09-24T13:24:28.657",
    items: [{
      columnName: "LMIA Approved",
      userName: "Esther Flores - 5:45 am"
    }]
  }]
};
var assignData = {
  items: [{
    id: 0,
    name: "Carlos",
    email: "carlos@gmail.com",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg"
  }, {
    id: 1,
    name: "Fabio",
    email: "fabio@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  }, {
    id: 2,
    name: "Fred",
    email: "fred@gmail.com",
    avatar: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
  }, {
    id: 3,
    name: "Jose",
    email: "jose@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  }]
};
var descriptionData = {
  description: "Relocation bonus: CA$ 3,000 (half on signing and half upon  arrival in Canada)"
};
(0, _react2.storiesOf)('Components|Modal Visa Pipeline', module).add('VHModalVisaPipeline', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    job: job,
    user: user,
    activitiesSession: activitiesSession,
    assignedSession: assignedSession,
    commentsSession: commentsSession,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    comments: comments,
    timeLine: _objectSpread({}, timeLineData),
    assign: _objectSpread({}, assignData),
    description: descriptionData.description
  }));
}).add('loading', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    job: job,
    user: user,
    activitiesSession: activitiesSessionLoading,
    assignedSession: assignedSessionLoading,
    commentsSession: commentsSessionLoading,
    onEvent: function onEvent(event) {
      return console.log(event);
    },
    comments: comments,
    timeLine: _objectSpread({}, timeLineData),
    assign: _objectSpread({}, assignData),
    description: descriptionData.description
  }));
});