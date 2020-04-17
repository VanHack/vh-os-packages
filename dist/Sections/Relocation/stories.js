"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var education = [{
  title: 'Specilist, Interaction Desing',
  subTitle: 'Pontifícia Universidade Católica de Minas Gerais'
}, {
  title: 'Specilist, Interaction Desing',
  subTitle: 'Pontifícia Universidade Católica de Minas Gerais'
}];
var items = [{
  value: 0,
  label: 'No degree'
}, {
  value: 1,
  label: 'College (two-year degree)'
}, {
  value: 2,
  label: 'Bachelor’s'
}, {
  value: 3,
  label: 'Master’s'
}, {
  value: 4,
  label: 'PhD'
}];
var currentItem = [items[4]];
var controls = {
  id: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  firstName: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  lastName: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  email: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  resume: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  image: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  citizenship: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  location: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  gender: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  phone: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  onboarding: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  positionSkill: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  positionName: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  yearsOfExperience: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  openForDifferentRole: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  workAs: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  userPositions: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  topSkill: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  secondarySkill: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  openForRemoteJobs: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  targetLocation: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  salaryExpectationCad: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  salaryExpectationEur: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  salaryRangeCad: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  salaryRangeEur: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  visaStatusCanadian: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  visaStatusEU: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  passportExpirationDate: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  passportValid: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  leadershipExperience: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  companySize: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  activelyLookingForJob: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  noticePeriod: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  linkedin: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  git: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  webSite: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  degreeType: {
    preLoading: false,
    loading: false,
    error: false,
    success: true
  },
  experienceSection: {
    loading: false,
    preLoading: false,
    success: true,
    error: false
  },
  educationSection: {
    loading: false,
    preLoading: false,
    success: true,
    error: false
  },
  language: {
    loading: false,
    preLoading: false,
    success: false,
    error: false
  }
};
(0, _react2.storiesOf)("Sections|Relocation", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    },
    id: 'Relocation'
  }, _react.default.createElement(_.default, {
    education: education,
    items: items,
    currentItem: currentItem,
    controls: controls,
    loading: true,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("preloading", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    },
    id: 'Relocation'
  }, _react.default.createElement(_.default, {
    education: education,
    items: items,
    currentItem: currentItem,
    controls: controls,
    preLoading: true,
    loading: true,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});