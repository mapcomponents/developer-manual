import React, { useState, useContext, useEffect } from 'react';

// Create a Context
const MyContext = React.createContext();

// Context Provider Component
function MyProvider({ children }) {
  const [state, setState] = useState({ counter_1: 0, counter_2: 0, counter_3: 0 });

  // Function to increment a counter
  const incrementCounter = (counterKey) => {
    setState(prevState => ({ ...prevState, [counterKey]: prevState[counterKey] + 1 }));
  };

  return (
    <MyContext.Provider value={{ state, incrementCounter }}>
      {children}
    </MyContext.Provider>
  );
}

const componentRenderCount = {};

// A Component that consumes the context
function MyComponent({ counterKey }) {
  const { state, incrementCounter } = useContext(MyContext);

  // Increment render count each time the component renders
  useEffect(() => {
    componentRenderCount[counterKey] = (componentRenderCount[counterKey] || 0) + 1;
  });

  return (
    <div>
      <p>{counterKey} Value: {state[counterKey]}</p>
      <button onClick={() => incrementCounter(counterKey)}>Increment {counterKey}</button>
      <p>This component has rendered {componentRenderCount[counterKey] || 0} times.</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <MyProvider>
      <MyComponent counterKey="counter_1" />
      <MyComponent counterKey="counter_2" />
      <MyComponent counterKey="counter_3" />
    </MyProvider>
  );
}

export default App;