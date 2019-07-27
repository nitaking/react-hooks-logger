const { useReducer: _useReducer } = require("react");

const logger = (message, ...subMessages) => {
  console.log(message, ...subMessages);
};

const styles = {
  prevState: "color: #9E9E9E; font-weight: 700;",
  action: "color: #00A7F7; font-weight: 700;",
  nextState: "color: #47B04B; font-weight: 700;"
};

const useReducer = (reducer, initialState) => {
  const [state, dispatch] = _useReducer(reducer, initialState);

  const watchDispatch = action => {
    logger("%cPrevious State:", styles.prevState, state);
    logger("%cAction:", styles.action, action);
    logger("%cNext State:", styles.nextState, reducer(state, action));
    dispatch(action);
  };

  return [state, watchDispatch];
};

export { useReducer };
