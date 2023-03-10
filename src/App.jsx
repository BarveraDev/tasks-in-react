import React, { useState } from 'react'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './app.css'

const App = () => {
  // let message = "hello world!"
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]);

  return  ( 
    <div>
      <div className='container'>
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
};

export default App;