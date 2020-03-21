"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  location: {
    loading: false,
    success: true,
    error: false
  },
  industry: {
    loading: false,
    success: true,
    error: false
  },
  skillsUsed: {
    loading: false,
    success: true,
    error: false
  }
};
var data = {
  text: 'Company Size',
  items: [{
    name: 'Startup'
  }, {
    name: 'Midsize'
  }, {
    name: 'Corporate'
  }]
};
var skillsUsed = [{
  label: 'C#',
  value: 'c'
}, {
  label: 'Java',
  value: 'b'
}, {
  label: 'Python',
  value: 'o'
}];
var workAs = {
  current: skillsUsed
};
(0, _react2.storiesOf)('Components|Modal Experience', module).add('VHModalExperience', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    data: data,
    workAs: workAs,
    currentItem: currentItem,
    items: items,
    controls: controls,
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL0NvbXBvbmVudHMvTW9kYWxFeHBlcmllbmNlL3N0b3JpZXMuanMiXSwibmFtZXMiOlsiaXRlbXMiLCJ2YWx1ZSIsImxhYmVsIiwiY3VycmVudEl0ZW0iLCJjb250cm9scyIsImxvY2F0aW9uIiwibG9hZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsImluZHVzdHJ5Iiwic2tpbGxzVXNlZCIsImRhdGEiLCJ0ZXh0IiwibmFtZSIsIndvcmtBcyIsImN1cnJlbnQiLCJtb2R1bGUiLCJhZGQiLCJ3aWR0aCIsImhlaWdodCIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsRUFBQUEsS0FBSyxFQUFFLENBQVQ7QUFBWUMsRUFBQUEsS0FBSyxFQUFFO0FBQW5CLENBRFksRUFFWjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsQ0FBVDtBQUFZQyxFQUFBQSxLQUFLLEVBQUU7QUFBbkIsQ0FGWSxFQUdaO0FBQUVELEVBQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlDLEVBQUFBLEtBQUssRUFBRTtBQUFuQixDQUhZLEVBSVo7QUFBRUQsRUFBQUEsS0FBSyxFQUFFLENBQVQ7QUFBWUMsRUFBQUEsS0FBSyxFQUFFO0FBQW5CLENBSlksRUFLWjtBQUFFRCxFQUFBQSxLQUFLLEVBQUUsQ0FBVDtBQUFZQyxFQUFBQSxLQUFLLEVBQUU7QUFBbkIsQ0FMWSxDQUFkO0FBUUEsSUFBTUMsV0FBVyxHQUFHLENBQUNILEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBcEI7QUFFQSxJQUFNSSxRQUFRLEdBQUc7QUFBQ0MsRUFBQUEsUUFBUSxFQUFFO0FBQUNDLElBQUFBLE9BQU8sRUFBRSxLQUFWO0FBQWlCQyxJQUFBQSxPQUFPLEVBQUUsSUFBMUI7QUFBZ0NDLElBQUFBLEtBQUssRUFBRTtBQUF2QyxHQUFYO0FBQ0NDLEVBQUFBLFFBQVEsRUFBRTtBQUFDSCxJQUFBQSxPQUFPLEVBQUUsS0FBVjtBQUFpQkMsSUFBQUEsT0FBTyxFQUFFLElBQTFCO0FBQWdDQyxJQUFBQSxLQUFLLEVBQUU7QUFBdkMsR0FEWDtBQUVDRSxFQUFBQSxVQUFVLEVBQUU7QUFBQ0osSUFBQUEsT0FBTyxFQUFFLEtBQVY7QUFBaUJDLElBQUFBLE9BQU8sRUFBRSxJQUExQjtBQUFnQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQXZDO0FBRmIsQ0FBakI7QUFJQSxJQUFNRyxJQUFJLEdBQUc7QUFDWEMsRUFBQUEsSUFBSSxFQUFFLGNBREs7QUFFWFosRUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRWEsSUFBQUEsSUFBSSxFQUFFO0FBRFIsR0FESyxFQUlMO0FBQ0VBLElBQUFBLElBQUksRUFBRTtBQURSLEdBSkssRUFPTDtBQUNFQSxJQUFBQSxJQUFJLEVBQUU7QUFEUixHQVBLO0FBRkksQ0FBYjtBQWVBLElBQU1ILFVBQVUsR0FBRyxDQUNqQjtBQUNFUixFQUFBQSxLQUFLLEVBQUUsSUFEVDtBQUVFRCxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQURpQixFQUtqQjtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsTUFEVDtBQUVFRCxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQUxpQixFQVNqQjtBQUNFQyxFQUFBQSxLQUFLLEVBQUUsUUFEVDtBQUVFRCxFQUFBQSxLQUFLLEVBQUU7QUFGVCxDQVRpQixDQUFuQjtBQWVBLElBQU1hLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxPQUFPLEVBQUVMO0FBREksQ0FBZjtBQUlBLHVCQUFVLDZCQUFWLEVBQXlDTSxNQUF6QyxFQUNHQyxHQURILENBQ08sbUJBRFAsRUFDNEI7QUFBQSxzQkFDeEI7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkMsTUFBQUEsTUFBTSxFQUFFO0FBQTFCO0FBQVosa0JBQ0UsNkJBQUMsU0FBRDtBQUFtQixJQUFBLElBQUksRUFBRVIsSUFBekI7QUFBK0IsSUFBQSxNQUFNLEVBQUVHLE1BQXZDO0FBQ0EsSUFBQSxXQUFXLEVBQUVYLFdBRGI7QUFDMEIsSUFBQSxLQUFLLEVBQUVILEtBRGpDO0FBQ3dDLElBQUEsUUFBUSxFQUFFSSxRQURsRDtBQUM0RCxJQUFBLE9BQU8sRUFBRSxpQkFBQWdCLENBQUMsRUFBSTtBQUN0RUMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQUhILElBREYsQ0FEd0I7QUFBQSxDQUQ1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCI7XG5pbXBvcnQgVkhNb2RhbEV4cGVyaWVuY2UgZnJvbSBcIi5cIjtcblxuY29uc3QgaXRlbXMgPSBbXG4gIHsgdmFsdWU6IDAsIGxhYmVsOiAnTm8gZGVncmVlJyB9LFxuICB7IHZhbHVlOiAxLCBsYWJlbDogJ0NvbGxlZ2UgKHR3by15ZWFyIGRlZ3JlZSknIH0sXG4gIHsgdmFsdWU6IDIsIGxhYmVsOiAnQmFjaGVsb3LigJlzJyB9LFxuICB7IHZhbHVlOiAzLCBsYWJlbDogJ01hc3RlcuKAmXMnIH0sXG4gIHsgdmFsdWU6IDQsIGxhYmVsOiAnUGhEJyAgfVxuXVxuXG5jb25zdCBjdXJyZW50SXRlbSA9IFtpdGVtc1s0XV1cblxuY29uc3QgY29udHJvbHMgPSB7bG9jYXRpb246IHtsb2FkaW5nOiBmYWxzZSwgc3VjY2VzczogdHJ1ZSwgZXJyb3I6IGZhbHNlfSwgXG4gICAgICAgICAgICAgICAgICBpbmR1c3RyeToge2xvYWRpbmc6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCBlcnJvcjogZmFsc2V9LFxuICAgICAgICAgICAgICAgICAgc2tpbGxzVXNlZDoge2xvYWRpbmc6IGZhbHNlLCBzdWNjZXNzOiB0cnVlLCBlcnJvcjogZmFsc2V9fVxuXG5jb25zdCBkYXRhID0ge1xuICB0ZXh0OiAnQ29tcGFueSBTaXplJyxcbiAgaXRlbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU3RhcnR1cCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNaWRzaXplJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NvcnBvcmF0ZSdcbiAgICB9XG4gIF1cbn1cblxuY29uc3Qgc2tpbGxzVXNlZCA9IFtcbiAge1xuICAgIGxhYmVsOiAnQyMnLFxuICAgIHZhbHVlOiAnYydcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnSmF2YScsXG4gICAgdmFsdWU6ICdiJ1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICdQeXRob24nLFxuICAgIHZhbHVlOiAnbydcbiAgfSxcbl1cblxuY29uc3Qgd29ya0FzID0ge1xuICBjdXJyZW50OiBza2lsbHNVc2VkXG59XG5cbnN0b3JpZXNPZignQ29tcG9uZW50c3xNb2RhbCBFeHBlcmllbmNlJywgbW9kdWxlKVxuICAuYWRkKCdWSE1vZGFsRXhwZXJpZW5jZScsICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnLCBoZWlnaHQ6ICcxMDB2aCcgfX0+XG4gICAgICA8VkhNb2RhbEV4cGVyaWVuY2UgZGF0YT17ZGF0YX0gd29ya0FzPXt3b3JrQXN9XG4gICAgICBjdXJyZW50SXRlbT17Y3VycmVudEl0ZW19IGl0ZW1zPXtpdGVtc30gY29udHJvbHM9e2NvbnRyb2xzfSBvbkV2ZW50PXtlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9fS8+XG4gICAgPC9kaXY+XG4gICkpIl19