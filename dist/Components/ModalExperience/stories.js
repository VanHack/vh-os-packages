"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var positions = [{
  value: 'zero',
  label: "AR/VR Developer"
}, {
  value: 1,
  label: "Backend	Developer"
}, {
  value: 2,
  label: "Blockchain Developer"
}];
var workExperiences = [{
  id: {
    value: 146675,
    messageError: false
  },
  positionId: {
    value: 1,
    messageError: false
  },
  startDate: {
    value: "2020-03-02T00:00:00",
    messageError: false
  },
  endDate: {
    value: null,
    messageError: false
  },
  description: {
    value: "just a description",
    messageError: false
  }
}];
var modalExperience = {
  id: {
    value: 146675,
    messageError: false
  },
  companyName: {
    value: "FInal company",
    messageError: false
  },
  countryId: {
    value: 3469034,
    messageError: false
  },
  companySize: {
    value: 2,
    messageError: false
  },
  industryId: {
    value: 1,
    messageError: false
  },
  workExperiences: workExperiences
};
var industryList = [{
  value: 0,
  label: "Accounting"
}, {
  value: 1,
  label: "Airlines/Aviation"
}, {
  value: 2,
  label: "Animation"
}, {
  value: 3,
  label: "Architecture & Planning"
}, {
  value: 4,
  label: "Automotive"
}, {
  value: 5,
  label: "Banking"
}, {
  value: 6,
  label: "Biotechnology"
}, {
  value: 7,
  label: "Broadcast Media"
}, {
  value: 8,
  label: "Civil Engineering"
}, {
  value: 9,
  label: "Computer & Network Security"
}, {
  value: 10,
  label: "Computer Hardware"
}, {
  value: 11,
  label: "Computer Networking"
}, {
  value: 12,
  label: "Computer Software"
}, {
  value: 13,
  label: "Construction"
}, {
  value: 14,
  label: "Consumer Electronics"
}, {
  value: 15,
  label: "Consumer Goods"
}, {
  value: 16,
  label: "Consumer Services"
}, {
  value: 17,
  label: "Defense & Space"
}, {
  value: 18,
  label: "Design"
}, {
  value: 19,
  label: "E-Commerce"
}, {
  value: 20,
  label: "Education Management"
}, {
  value: 21,
  label: "E-Learning"
}, {
  value: 22,
  label: "Entertainment"
}, {
  value: 23,
  label: "Environmental Services"
}, {
  value: 24,
  label: "Events Services"
}, {
  value: 25,
  label: "Financial Services"
}, {
  value: 26,
  label: "Gambling & Casinos"
}, {
  value: 27,
  label: "Graphic Design"
}, {
  value: 28,
  label: "Games"
}, {
  value: 29,
  label: "Health, Wellness and Fitness"
}, {
  value: 30,
  label: "Higher Education"
}, {
  value: 31,
  label: "Hospital & Health Care"
}, {
  value: 32,
  label: "Hospitality"
}, {
  value: 33,
  label: "Human Resources"
}, {
  value: 34,
  label: "Insurance"
}, {
  value: 35,
  label: "Internet"
}, {
  value: 36,
  label: "Information Technology"
}, {
  value: 37,
  label: "Investment Management"
}, {
  value: 38,
  label: "Judiciary"
}, {
  value: 39,
  label: "Law Enforcement"
}, {
  value: 40,
  label: "Law Practice"
}, {
  value: 41,
  label: "Legal Services"
}, {
  value: 42,
  label: "Legislative Office"
}, {
  value: 43,
  label: "Logistics and Supply Chain"
}, {
  value: 44,
  label: "Market Research"
}, {
  value: 45,
  label: "Marketing and Advertising"
}, {
  value: 46,
  label: "Medical Devices"
}, {
  value: 47,
  label: "Medical Practice"
}, {
  value: 48,
  label: "Military"
}, {
  value: 49,
  label: "Music"
}, {
  value: 50,
  label: "Nanotechnology"
}, {
  value: 51,
  label: "Non-Profit"
}, {
  value: 52,
  label: "Oil & Energy"
}, {
  value: 53,
  label: "Online Media"
}, {
  value: 54,
  label: "Outsourcing/Offshoring"
}, {
  value: 55,
  label: "Performing Arts"
}, {
  value: 56,
  label: "Pharmaceuticals"
}, {
  value: 57,
  label: "Professional Training & Coaching"
}, {
  value: 58,
  label: "Public Relations and Communications"
}, {
  value: 59,
  label: "Publishing"
}, {
  value: 60,
  label: "Real Estate"
}, {
  value: 61,
  label: "Religious Institutions"
}, {
  value: 62,
  label: "Research"
}, {
  value: 63,
  label: "Retail"
}, {
  value: 64,
  label: "Security and Investigations"
}, {
  value: 65,
  label: "Staffing and Recruiting"
}, {
  value: 66,
  label: "Telecommunications"
}, {
  value: 67,
  label: "Wireless"
}, {
  value: 68,
  label: "Other"
}];
(0, _react2.storiesOf)('Components|Modal Experience', module).add('VHModalExperience', function () {
  return _react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, _react.default.createElement(_.default, {
    positions: positions,
    modalExperience: modalExperience,
    industryList: industryList,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});