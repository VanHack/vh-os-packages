"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Mock = _interopRequireDefault(require("./Mock"));

var _stories = _interopRequireDefault(require("../../Sections/Education/stories"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  },
  sideProjectsSection: {
    loading: false,
    preLoading: false,
    success: false,
    error: false
  }
};
var experiences = {
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
var languages = [{
  value: 0,
  label: 'English'
}]; // Education

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
var modalEducation = {
  id: {
    value: null,
    messageError: false
  },
  degreeType: {
    value: 1,
    messageError: false
  },
  degreeTitle: {
    value: "new degree",
    messageError: false
  },
  schoolName: {
    value: "new school",
    messageError: false
  },
  startYear: {
    value: "2020-04-09",
    messageError: false
  },
  endYear: {
    value: undefined,
    messageError: false
  }
}; //End education
//Skills

var apiResponse = {
  position: {
    current: items[0],
    yearOfExperience: items[2]
  },
  workAs: {
    current: items
  },
  mainSkills: [{
    current: items[1],
    order: 0,
    yearOfExperience: items[1]
  }, {
    current: items[2],
    order: 1,
    yearOfExperience: items[1]
  }],
  openedPosition: true
}; //end Skills
//avatar

var baseDomain = 'https://api.vanhack.dev';
var accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY1MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJkdXJhbmRAdmFuaGFjay5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImVlMGI0YzIwLTc1NDQtNDU1YS1hMzM1LWI0NmM4YWNiNzE3OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkVtcGxveWVyIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMSIsInN1YiI6IjY1MiIsImp0aSI6IjdmODE3NDdjLTRkODktNGQyNy1iODBhLWIxODY4N2IxNDgxOSIsImlhdCI6MTU4NTA2ODg1MSwidG9rZW5fdmFsaWRpdHlfa2V5IjoiM2UxNzEwNjMtZjM5OC00OGVjLWEzYzItYTdjMjlmNzNhNjViIiwidXNlcl9pZGVudGlmaWVyIjoiNjUyQDEiLCJuYmYiOjE1ODUwNjg4NTEsImV4cCI6MTU4NTE1NTI1MSwiaXNzIjoiVmFuSGFjayIsImF1ZCI6IlZhbkhhY2sifQ.hhK8pcRDF4YLTrh7VD6UQ4dJjwy5X0cKPNipyvSueMI";
var accessTokenPRD = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjY1MiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJkdXJhbmRAdmFuaGFjay5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImVlMGI0YzIwLTc1NDQtNDU1YS1hMzM1LWI0NmM4YWNiNzE3OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJBZG1pbiIsIkVuZ2xpc2hUZXN0Q29uc3VsdGFudCJdLCJodHRwOi8vd3d3LmFzcG5ldGJvaWxlcnBsYXRlLmNvbS9pZGVudGl0eS9jbGFpbXMvdGVuYW50SWQiOiIxIiwic3ViIjoiNjUyIiwianRpIjoiODQ4MDUzYTMtYjg4NS00MGQwLTkxNmEtNDY1MzZiYmQ1Y2JiIiwiaWF0IjoxNTg1MDEzNDQ0LCJ0b2tlbl92YWxpZGl0eV9rZXkiOiIxYjZlYjY2Ni0xZmJmLTQxMDAtYjc2Mi03YjhkZDlhY2U2ZGIiLCJ1c2VyX2lkZW50aWZpZXIiOiI2NTJAMSIsIm5iZiI6MTU4NTAxMzQ0NCwiZXhwIjoxNTg1MDk5ODQ0LCJpc3MiOiJWYW5IYWNrIiwiYXVkIjoiVmFuSGFjayJ9.mqpXE0dlK8BWW9d9SS6IJectxvbLqyLMq-6zn58Xnnc";
var candidates = {
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  name: "Jeff Patterson",
  email: "jeffpatterson@gmail.com"
};
var User = {
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg",
  name: "Jeff Patterson",
  email: "jeffpatterson@gmail.com"
}; //end Avatar

(0, _react2.storiesOf)("Templates|Profile", module).add("default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    controls: controls,
    User: User,
    experience: experiences,
    modalExperience: modalExperience,
    languages: languages,
    item: items,
    modalEducation: modalEducation,
    apiResponse: apiResponse,
    baseDomain: baseDomain,
    accessToken: accessToken,
    accessTokenPRD: accessTokenPRD,
    candidates: candidates
  }));
}).add("preLoading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  });
}).add("loading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100%"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    experience: experiences,
    languages: languages,
    controls: controlsLoading
  }));
});