"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = [{
  color: '#00B8D9',
  isFixed: true,
  label: 'Item 1',
  value: 'c'
}, {
  color: '#0052CC',
  isDisabled: false,
  label: 'Item 2',
  value: 'b'
}, {
  color: '#0052CC',
  isDisabled: true,
  label: 'Item 3',
  value: 'o'
}];
(0, _react2.storiesOf)("Sections|General", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f7f7f7",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      gender: {
        loading: false,
        preLoading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      citizenship: {
        preLoading: false,
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      location: {
        preLoading: false,
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      phone: {
        preLoading: true,
        loading: true,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    options: {
      gender: {
        items: items,
        currentItem: [items[1]]
      },
      currentLocation: {
        items: items,
        currentItem: [items[0]]
      },
      citizenship: {
        items: items,
        currentItem: [items[2]]
      }
    },
    phone: "",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("Initial", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f7f7f7",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      gender: {
        loading: false,
        preLoading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      citizenship: {
        preLoading: false,
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      location: {
        preLoading: false,
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      phone: {
        preLoading: false,
        loading: false,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    options: {
      gender: {
        items: items,
        currentItem: [items[1]]
      },
      currentLocation: {
        items: items,
        currentItem: [items[0]]
      },
      citizenship: {
        items: items,
        currentItem: [items[2]]
      }
    },
    phone: "",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("Error", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f7f7f7",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      gender: {
        loading: false,
        preLoading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      citizenship: {
        preLoading: false,
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      location: {
        preLoading: false,
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      },
      phone: {
        preLoading: false,
        loading: false,
        error: true,
        success: false,
        message: 'Database error'
      }
    },
    options: {
      gender: {
        items: items,
        currentItem: [items[1]]
      },
      currentLocation: {
        items: items,
        currentItem: [items[0]]
      },
      citizenship: {
        items: items,
        currentItem: [items[2]]
      }
    },
    phone: "",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("Success", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f7f7f7",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      gender: {
        loading: false,
        preLoading: false,
        error: false,
        success: true,
        message: 'Database error'
      },
      citizenship: {
        preLoading: false,
        loading: false,
        error: false,
        success: true,
        message: 'Database error'
      },
      location: {
        preLoading: false,
        loading: false,
        error: false,
        success: true,
        message: 'Database error'
      },
      phone: {
        preLoading: false,
        loading: false,
        error: false,
        success: true,
        message: 'Database error'
      }
    },
    options: {
      gender: {
        items: items,
        currentItem: [items[1]]
      },
      currentLocation: {
        items: items,
        currentItem: [items[0]]
      },
      citizenship: {
        items: items,
        currentItem: [items[2]]
      }
    },
    phone: "",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("Loading", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f7f7f7",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      gender: {
        loading: true,
        preLoading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      citizenship: {
        loading: true,
        preLoading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      location: {
        loading: true,
        preLoading: false,
        error: false,
        success: false,
        message: 'Database error'
      },
      phone: {
        loading: true,
        preLoading: false,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    options: {
      gender: {
        items: items,
        currentItem: [items[1]]
      },
      currentLocation: {
        items: items,
        currentItem: [items[0]]
      },
      citizenship: {
        items: items,
        currentItem: [items[2]]
      }
    },
    phone: "",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
}).add("Pre-loaging", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f7f7f7",
      height: "100vh",
      padding: "24px"
    }
  }, _react.default.createElement(_.default, {
    controls: {
      gender: {
        loading: false,
        preLoading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      citizenship: {
        loading: false,
        preLoading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      location: {
        loading: false,
        preLoading: true,
        error: false,
        success: false,
        message: 'Database error'
      },
      phone: {
        loading: false,
        preLoading: true,
        error: false,
        success: false,
        message: 'Database error'
      }
    },
    options: {
      gender: {
        items: items,
        currentItem: [items[1]]
      },
      currentLocation: {
        items: items,
        currentItem: [items[0]]
      },
      citizenship: {
        items: items,
        currentItem: [items[2]]
      }
    },
    phone: "",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }));
});