import React, { useState, useEffect } from 'react';
import { observable, action, makeObservable } from 'mobx';
import { observer } from 'mobx-react';

// MobX: Store
class CounterStore {
  counters = observable.map();

  constructor() {
    makeObservable(this, {
      counters: observable,
      incrementCounter: action
    });
  }

  incrementCounter = (counterKey) => {
    const currentCount = this.counters.get(counterKey) || 0;
    this.counters.set(counterKey, currentCount + 1);
  };
}

const store = new CounterStore();

const componentRenderCount = {};

// React Component
const CounterComponent = observer(({ counterKey }) => {

  useEffect(() => {
    componentRenderCount[counterKey] = (componentRenderCount[counterKey] || 0) + 1;
  });

  return (
    <div>
      <p>{counterKey} Value: {store.counters.get(counterKey) || 0}</p>
      <button onClick={() => store.incrementCounter(counterKey)}>Increment {counterKey}</button>
      <p>This component has rendered {componentRenderCount[counterKey] || 0} times.</p>
    </div>
  );
});

// App Component
function App() {
  const counterKeys = ["counter_1", "counter_2", "counter_3"]; // This array can be dynamic

  return (
    <div>
      {counterKeys.map(key => (
        <CounterComponent key={key} counterKey={key} />
      ))}
    </div>
  );
}

export default App;