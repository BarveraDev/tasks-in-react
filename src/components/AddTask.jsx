import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';



const AddTask = () => {
  const [inputData,  setInputData] = useState('');
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  return (
    <div className='add-task-container'>
      <input type="text" 
      value={inputData}
      onChange={handleInputChange} 
      className='add-task-input'
      />;

      <div className="add-task-button-container"></div>
      <Button>Adicionar</Button>
  </div>
  ) 
 }
 export default AddTask;