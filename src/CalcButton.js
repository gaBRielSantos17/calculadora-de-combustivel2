// CalcButton.js
import React from 'react';
import './index.css'

const CalcButton = ({ onClick, label }) => {
  return <div className='container-input'> <button onClick={onClick}>{label}</button></div>;
};

export default CalcButton;
