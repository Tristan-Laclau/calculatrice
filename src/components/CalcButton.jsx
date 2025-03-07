import React from 'react';

const CalcButton = ({ value, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default CalcButton;