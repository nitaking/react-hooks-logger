import { useReducer, useState } from "react";
import { LoggerContext } from './useLogger';

export const LoggerProvider = ({reducer, initialState, children}: any) => {
  const [visible, setVisibleLogger] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoggerContext.Provider
      value={{
        visible,
        setVisibleLogger,
        setDisableLogger: (disabled: boolean) => setVisibleLogger(!disabled),
        state,
        dispatch
      }}
    >
      {children}
    </LoggerContext.Provider>
  )
};
