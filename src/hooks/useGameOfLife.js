import { useState, useEffect } from 'react';

const createEmptyGrid = () =>
  Array(25)
    .fill()
    .map(() => Array(25).fill(false));

const useGameOfLife = () => {
  const [grid, setGrid] = useState(createEmptyGrid);
  const [running, setRunning] = useState(false);

  const handleCellClick = (row, col) => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  };

  const nextGeneration = () => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);

      for (let row = 0; row < 25; row++) {
        for (let col = 0; col < 25; col++) {
          const aliveNeighbors = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],           [0, 1],
            [1, -1], [1, 0], [1, 1]
          ].reduce((acc, [dx, dy]) => {
            const newRow = row + dx;
            const newCol = col + dy;
            return acc + (prevGrid[newRow]?.[newCol] || 0);
          }, 0);

          newGrid[row][col] = prevGrid[row][col] ? (aliveNeighbors === 2 || aliveNeighbors === 3) : (aliveNeighbors === 3);
        }
      }

      return newGrid;
    });
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        nextGeneration();
      }, 100);
      return () => clearInterval(interval);
    }
  }, [running]);

  const reset = () => {
    setGrid(createEmptyGrid());
  };

  return {
    grid,
    running,
    setRunning,
    handleCellClick,
    reset,
  };
};

export default useGameOfLife;