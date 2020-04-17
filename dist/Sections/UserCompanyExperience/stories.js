"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var experience = {
  "experiences": [{
    "workExperiences": [{
      "companyName": "Drift Way Sidecorp",
      "countryId": 661882,
      "country": "Colombia",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": "Computer Software",
      "industryId": 3,
      "positionId": 7,
      "position": "DevOps Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-12T00:00:00",
      "endDate": "2020-03-27T00:00:00",
      "description": "[{\"Id\":0,\"Value\":\"new role\",\"Skills\":[]}]",
      "skills": [],
      "id": 146671
    }, {
      "companyName": "Drift Way Sidecorp",
      "countryId": 661882,
      "country": "Colombia",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": "Computer Software",
      "industryId": 3,
      "positionId": 1,
      "position": "Backend Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-12T00:00:00",
      "endDate": "2020-03-27T00:00:00",
      "description": "[{\"Id\":0,\"Value\":\"new role\",\"Skills\":[]}]",
      "skills": [],
      "id": 146672
    }, {
      "companyName": "Drift Way Sidecorp",
      "countryId": 661882,
      "country": "Colombia",
      "companySize": 1,
      "companySizeStr": "Startup",
      "industry": "Computer Software",
      "industryId": 3,
      "positionId": 3,
      "position": "Full Stack Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-05T00:00:00",
      "endDate": "2020-03-02T00:00:00",
      "description": "[{\"Id\":0,\"Value\":\"new role\",\"Skills\":[]}]",
      "skills": [],
      "id": 146669
    }],
    "companyName": "Drift Way Sidecorp",
    "countryId": 661882,
    "country": "Colombia",
    "companySize": 1,
    "companySizeStr": "Startup",
    "industry": "Computer Software",
    "industryId": 3,
    "id": 146671
  }, {
    "workExperiences": [{
      "companyName": "Mircrosoft",
      "countryId": 3469034,
      "country": "Brazil",
      "companySize": 2,
      "companySizeStr": "Mid Size",
      "industry": "Computer Development",
      "industryId": 12,
      "positionId": 7,
      "position": "Full Stack Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-02T00:00:00",
      "endDate": null,
      "description": "[{\"Id\":0,\"Value\":\"new role\",\"Skills\":[]}]",
      "skills": [],
      "id": 146675
    }],
    "companyName": "Mircrosoft",
    "countryId": 3469034,
    "country": "Brazil",
    "companySize": 3,
    "companySizeStr": "Corporate",
    "industry": "Computer Development",
    "industryId": 12,
    "id": 146675
  }, {
    "workExperiences": [{
      "companyName": "Wave communication",
      "countryId": 3469034,
      "country": "Brazil",
      "companySize": 2,
      "companySizeStr": "Mid Size",
      "industry": "Computer Development",
      "industryId": 12,
      "positionId": 7,
      "position": "Full Stack Engineer",
      "isCurrentRole": null,
      "startDate": "2020-03-02T00:00:00",
      "endDate": null,
      "description": "[{\"Id\":0,\"Value\":\"new role\",\"Skills\":[]}]",
      "skills": [],
      "id": 119938
    }],
    "companyName": "Wave communication",
    "countryId": 3469034,
    "country": "Brazil",
    "companySize": 2,
    "companySizeStr": "Mid Size",
    "industry": "Computer Development",
    "industryId": 12,
    "id": 119938
  }]
};
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
var modalExperience = {
  id: {
    value: null,
    messageError: false
  },
  companyName: {
    value: undefined,
    messageError: false
  },
  countryId: {
    value: undefined,
    messageError: false
  },
  companySize: {
    value: undefined,
    messageError: false
  },
  industryId: {
    value: undefined,
    messageError: false
  },
  workExperiences: [{
    positionId: {
      value: undefined,
      messageError: false
    },
    startDate: {
      value: undefined,
      messageError: false
    },
    endDate: {
      value: undefined,
      messageError: false
    },
    description: {
      value: undefined,
      messageError: false
    },
    isCurrentRole: {
      value: undefined,
      messageError: false
    }
  }]
};
(0, _react2.storiesOf)("Sections|User Company Experience", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    yearsOfExperience: "- 6yrs 3 mos",
    modalExperience: modalExperience,
    experience: experience,
    controls: controls,
    onEvent: function onEvent(e) {
      return console.log(e);
    }
  }));
}).add("preloading", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    yearsOfExperience: "- 6yrs 3 mos",
    modalExperience: modalExperience,
    experience: experience,
    controls: controls,
    onEvent: function onEvent(e) {
      return console.log(e);
    },
    preLoading: true
  }));
});