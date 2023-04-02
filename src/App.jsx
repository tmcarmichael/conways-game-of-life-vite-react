import React from 'react';
import { Grid, ControlButtons } from './components';
import useGameOfLife from './hooks/useGameOfLife';

const App = () => {
  const { grid, running, setRunning, handleCellClick, reset } = useGameOfLife();

  return (
    <div>
      <Grid grid={grid} handleCellClick={handleCellClick} />
      <ControlButtons running={running} setRunning={setRunning} reset={reset} />
    </div>
  );
}

export default App;
