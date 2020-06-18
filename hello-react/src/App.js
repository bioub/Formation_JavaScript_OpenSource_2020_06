import React from 'react';
import Hello from './Hello';
import Clock from './Clock';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Hello name="Romain" />
      <Clock />
      <Counter />
    </div>
  );
}

export default App;
