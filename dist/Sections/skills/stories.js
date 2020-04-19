"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

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
  }
};
var items = [{
  label: 'Item 1',
  value: 'c'
}, {
  label: 'Item 2',
  value: 'b'
}, {
  label: 'Item 3',
  value: 'o'
}];
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
};
(0, _react2.storiesOf)("Sections|Skills", module).add("Default", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    controls: controls,
    mainSkills: items,
    positions: items,
    data: apiResponse,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("error", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    controls: {
      positionSkill: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      yearsOfExperience: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      workAs: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      openForDifferentRole: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      topSkill: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      salaryExpectationCad: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    workAs: items,
    mainSkills: items,
    positions: items,
    data: apiResponse,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("loading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    controls: {
      positionSkill: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      yearsOfExperience: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      workAs: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      openForDifferentRole: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      topSkill: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      salaryExpectationCad: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    mainSkills: items,
    positions: items,
    data: apiResponse,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("preLoading", function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh",
      padding: "24px"
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    preLoading: true,
    controls: {
      positionSkill: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      yearsOfExperience: {
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      workAs: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      openForDifferentRole: {
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      topSkill: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      salaryExpectationCad: {
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    mainSkills: items,
    positions: items,
    data: apiResponse,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});