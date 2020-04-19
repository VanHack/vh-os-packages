"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var vanhack_loading = function vanhack_loading(props) {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.width || "71px",
    height: props.height || "71px",
    fill: props.fill || "undefined",
    viewBox: props.viewBox || "0 0 71 71"
  }, "1px\" height=\"71px\" viewBox=\"0 0 71 71\">", /*#__PURE__*/React.createElement("g", {
    id: "StyleGuide",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "VH---Style-Guide",
    transform: "translate(-888.000000, -10699.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "vh-/-brand-/-vanhack-favicon-copy-3",
    transform: "translate(888.000000, 10699.000000)"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "#0675CE",
    x: "0",
    y: "0",
    width: "71",
    height: "71",
    rx: "8"
  }), /*#__PURE__*/React.createElement("g", {
    id: "icon",
    transform: "translate(11.000000, 15.000000)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.94614647,10.1699408 L10.6242405,23.3433136 C10.865153,22.5111834 11.077156,21.8513018 11.2698859,21.186568 C13.2726717,14.3402959 15.2698362,7.4964497 17.2613794,0.655029586 C17.4131542,0.128579882 17.6299755,0 18.1503464,0 C21.0412962,0.0266863905 23.9467008,0.0121301775 26.8448779,0.0121301775 L27.5290694,0.0121301775 C27.0111076,1.7904142 26.5148278,3.50319527 26.0137299,5.2135503 C22.6120456,16.8310256 19.2151796,28.4493097 15.8231319,40.0684024 C15.6424475,40.6918935 15.401535,40.8811243 14.7607078,40.8689941 C12.3202644,40.8253254 9.87741179,40.8398817 7.43455922,40.8689941 C7.07213681,40.9161787 6.72853012,40.6940307 6.62027502,40.3425444 C4.54682159,35.67 2.45891341,31.0031164 0.356550474,26.3418935 C0.231750281,26.0999819 0.198365299,25.8206829 0.262594606,25.555858 C1.49365739,20.4878698 2.69581068,15.4247337 3.94614647,10.1699408",
    id: "path18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.8833387,0.0800591716 C49.4256049,1.65940828 48.9750986,3.23390533 48.5125466,4.81810651 C45.0578616,16.6070217 41.6047827,28.3967456 38.1533099,40.1872781 C38.0063533,40.6943195 37.808805,40.864142 37.2739793,40.8592899 C34.2842554,40.8301775 31.2945315,40.8447337 28.3048076,40.8447337 C28.1939878,40.8447337 28.080759,40.8277515 27.8928472,40.8156213 C28.331308,39.3114793 28.7601322,37.8437278 29.1889564,36.3759763 C30.164652,33.0328994 31.130711,29.6849704 32.1304978,26.3491716 C32.3015457,25.7814793 32.2027716,25.6383432 31.6173542,25.6431953 C29.0395907,25.6674556 26.459418,25.6431953 23.8816544,25.6431953 C22.9782326,25.6431953 22.9710052,25.6431953 23.2095086,24.735858 C23.932246,22.0114201 24.6670291,19.2894083 25.3777209,16.5601183 C25.5029954,16.0749112 25.7101802,15.8953846 26.2136872,15.9026627 C28.950453,15.9463314 31.6872188,15.9390533 34.4239846,15.9972781 C35.0238567,16.0094083 35.240678,15.7910651 35.3876346,15.2427811 C36.7993817,10.3300592 38.2400384,5.42704142 39.6710585,0.521597633 C39.757787,0.225621302 39.834879,-0.0024260355 40.2468394,8.29582713e-15 C43.4027929,0.024260355 46.551519,0.019408284 49.7002452,0.024260355 C49.7630784,0.0362285828 49.8244592,0.0549347244 49.8833387,0.0800591716",
    id: "path20"
  }))))));
};

var _default = vanhack_loading;
exports.default = _default;