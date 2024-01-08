import React, { useState, useEffect } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Redux: Action Type
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

// Redux: Action Creator
const incrementCounter = counterKey => ({
  type: INCREMENT_COUNTER,
  payload: counterKey
});

// Redux: Reducer
const initialState = {};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { 
        ...state, 
        [action.payload]: (state[action.payload] || 0) + 1 
      };
    default:
      return state;
  }
};

// Redux: Store
const store = createStore(counterReducer);

const componentRenderCount = {};
// React Component
function CounterComponent({ counterKey }) {
  const counterValue = useSelector(state => state[counterKey] || 0);
  const dispatch = useDispatch();

  useEffect(() => {
    componentRenderCount[counterKey] = (componentRenderCount[counterKey] || 0) + 1;
  });

  return (
    <div>
      <p>{counterKey} Value: {counterValue}</p>
      <button onClick={() => dispatch(incrementCounter(counterKey))}>
        Increment {counterKey}
      </button>
      <p>This component has rendered {componentRenderCount[counterKey] || 0} times.</p>
    </div>
  );
}

// App Component
function App() {
  const counterKeys = ["counter_1", "counter_2", "counter_3"]; // This array can be dynamic

  return (
    <Provider store={store}>
      {counterKeys.map(key => (
        <CounterComponent key={key} counterKey={key} />
      ))}
    </Provider>
  );
}

export default App;