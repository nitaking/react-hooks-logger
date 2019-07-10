import { createContext, useContext } from "react";

type ContextProps = {
};

export const LoggerContext = createContext<Partial<ContextProps>>({});
// export const LoggerProvider = ({reducer, initialState, children}) =>(
//   <LoggerContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//     </LoggerContext.Provider>
// );


export const useLogger = () => useContext(LoggerContext);
