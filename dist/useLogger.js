"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLogState = function (_a) {
    var _b = _a.isDev, isDev = _b === void 0 ? true : _b, react = _a.react;
    var _c = react.useState(isDev), visible = _c[0], setVisible = _c[1];
    return {
        visible: visible,
        setVisible: function (show) { return setVisible(Boolean(show)); },
    };
};
var logger = function (message) {
    var subMessages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        subMessages[_i - 1] = arguments[_i];
    }
    console.log.apply(console, [message].concat(subMessages));
};
exports.useReducer = function (reducer, initialState, react) {
    var _a = react.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var watchDispatch = function (action) {
        logger("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
        logger("%cAction:", "color: #00A7F7; font-weight: 700;", action);
        logger("%cNext State:", "color: #47B04B; font-weight: 700;", reducer(state, action));
        dispatch(action);
    };
    return [state, watchDispatch];
};
