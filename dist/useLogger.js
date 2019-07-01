"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useReducerWithLogger = function (reducer, initialState) {
    console.log({
        state: state,
        dispatch: dispatch,
        "dispatch type": dispatch
    });
    return react_1.useReducer(reducer, initialState);
};
