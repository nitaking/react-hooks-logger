<div align="center">
  <h1>
    <br/>
    <br/>
    <br />
    react-hooks-logger
    <br />
    <br />
    <br />
    <br />
  </h1>
  <br />
  <br />
  <br />
  <br />
  <pre>npm i <a href="https://www.npmjs.com/package/react-hooks-logger">react-hooks-logger</a></pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

![image](https://user-images.githubusercontent.com/10850034/61999787-8ff92980-b103-11e9-9962-7b23c811ff7b.png)


Simple hooks logger.
(Respect [redux-logger](https://github.com/LogRocket/redux-logger) and [use-reducer-logger](https://github.com/jefflombard/use-reducer-logger))

[![Maintainability](https://api.codeclimate.com/v1/badges/41e77fee6a93bef8b9c4/maintainability)](https://codeclimate.com/github/nitaking/react-hooks-logger/maintainability)

## Usage

```jsx
import { useReducer } from 'react-hooks-logger';

function reducer(state, action) {
  switch (action.type) {
    case 'count-up':
      return { count: state.count + action.payload.count }

    case 'count-down':
      return { count: state.count - action.payload.count }
  }
}
const initialState = { count: 0 };

const Demo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
<div>
      <button
        onClick={() =>
          dispatch({
            type: "count-up",
            payload: { count: 1 }
          })
        }
      >
        +
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "count-down",
            payload: { count: 1 }
          })
        }
      >
        -
      </button>
      count: {state.count}
    </div>
  );
};
```

## Dev Environment
Create custom hooks.
```jsx
import { useReducer as _useReducer } from 'react';
import { useReducer as useReducerWithLog } from 'react-hooks-logger';

export const useMyReducer = 
  process.env.NODE_ENV === 'development' ? useReducerWithLog : _useReducer;
```

Import your hooks.

```jsx
import { useReducer } from './useMyReducer';

...
```

# Todo
- [ ] Another Hooks API logger
