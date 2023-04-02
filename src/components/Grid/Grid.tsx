import React from 'react';
import Cell from '../Cell';

const Grid = ({ grid, handleCellClick }) => (
  <table>
    <tbody>
      {grid.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              cell={cell}
              rowIndex={rowIndex}
              colIndex={colIndex}
              handleCellClick={handleCellClick}
            />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
