import React from 'react';

const Cell = ({ cell, rowIndex, colIndex, handleCellClick }) => (
  <td
    style={{
      width: 20,
      height: 20,
      backgroundColor: cell ? 'black' : 'white',
      border: '1px solid gray',
    }}
    onClick={() => handleCellClick(rowIndex, colIndex)}
  ></td>
);

export default Cell;
