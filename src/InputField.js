// InputField.js
import React from 'react';
import './index.css'

const InputField = ({ label, value, onChange }) => {
  return (
    <div className='container-input'>
      <label>{label}</label> <br></br>
      <input type="number" value={value} onChange={onChange} placeholder='0' />
    </div>
  );
};

export default InputField;
