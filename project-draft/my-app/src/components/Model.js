import React from 'react';
import '../index.css';

export function Model({ show, handleClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="backdrop">
      <div className="styled-model">
        <button className="close-button" onClick={handleClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Model;
