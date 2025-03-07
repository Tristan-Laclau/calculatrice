import React from 'react';

const Display = ({ leftNumber, operator, rightNumber }) => {
    return (
      <div className="display">
        <div className="first-part">
          <span>{leftNumber !== null ? leftNumber : ''}</span> <span>{operator != null ? operator : ''}</span>
        </div>
        <div className="second-part">
          <span>{rightNumber}</span>
        </div>
      </div>
    );
  };

export default Display;