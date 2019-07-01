import React from 'react';
import logo from './logo.svg';
// import { useReducerWithLogger } from 'hooks-logger';
import './App.css';

const useReducerWithLogger = (reducer: any, initialState: any) => {
const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log({
    reducer,
  });

  const watchDispatch = (props) => {
    console.log({
      type: props.type,
      payload: props.payload
    })
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", props);
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", );
    dispatch(props);
  }

  return [state, watchDispatch];
};

export const TYPES = {
  COUNT_UP : 'count-up',
  COUNT_DOWN : 'count-down',
}

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case TYPES.COUNT_UP:
      if (action.payload !== 0) {
        return { count: state.count + action.payload.count }
      }
      return { count: state.count + 1 };

    case TYPES.COUNT_DOWN:
        if (action.payload !== 0) {
          return { count: state.count - action.payload.count }
        }
      return { count: state.count - 1 };
  }
}

const initialState = { count: 0 };

function App() {
  const [state, dispatch] = useReducerWithLogger(reducer, initialState);
  const inputRef = React.createRef();

  return (
    <div className="App">
      <header className="App-header">
      <input ref={inputRef} defaultValue={1} />

      <button
        style={{ height: '20px', width: '100px', backgroundColor: 'green' }}
        onClick={() =>
          dispatch({
            type: TYPES.COUNT_UP,
            payload: { count: Number(inputRef.current.value) }
          })
        }
      />

      <button
        style={{ height: '20px', width: '100px', backgroundColor: 'blue' }}
        onClick={() =>
          dispatch({
            type: TYPES.COUNT_DOWN,
            payload: { count: Number(inputRef.current.value) }
          })
        }
      />

      count: {state.count}

      </header>
    </div>
  );
}

export default App;
