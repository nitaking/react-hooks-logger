import { useReducer as useOriginalReducer } from "react";

export const useLogState = ({ isDev = true, react }: any) => {
  const [visible, setVisible] = react.useState(isDev);

  return {
    visible,
    setVisible: (show: boolean) => setVisible(Boolean(show)),
  };
}

const logger = (message: string, ...subMessages: Object[]) => {
  console.log(message, ...subMessages);
}

export const useReducer = (reducer: any, initialState: any, react: any) => {
  const [state, dispatch] = react.useReducer(reducer, initialState);

  const watchDispatch = (action: any) => {
    logger("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    logger("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    logger("%cNext State:", "color: #47B04B; font-weight: 700;", reducer(state, action));
    dispatch(action);
  }

  return [state, watchDispatch];
};
