import React, { useReducer } from 'react';
import { LoggerProvider } from 'hooks-logger';
import './App.css';

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


const Counter = (props) => {
  console.log({
    props
  })
  const inputRef = React.createRef();
  const [state, dispatch] = useReducer(reducer, initialState);

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

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState, React);
  // const { visible, setVisible } = useLogState({
  //   isDev: process.env.NODE_ENV !== 'development',
  //   react: React
  // });
  // console.log({ visible} )
  // const { visible: visible2 } = useLogState({ react: React });
  // console.log({ visible2 } )

  return (
      <Counter />
  );
}



export default App;
