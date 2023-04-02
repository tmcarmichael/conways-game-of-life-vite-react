import React from 'react';

const ControlButtons = ({ running, setRunning, reset }) => (
  <div>
    <button onClick={() => setRunning(!running)}>
      {running ? 'Stop' : 'Play'}
    </button>
    <button onClick={reset}>Reset</button>
  </div>
);

export default ControlButtons;
