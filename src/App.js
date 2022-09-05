import './App.css';
import React, {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    { name: 'go shopping', isComplete: false},
    { name: 'clean kitchen', isComplete: false}
  ]);
  const [newTask, setNewTask] = useState("")

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} className ={task.isComplete ? 'completed' : 'not-completed'}>
    <span>{task.name}</span>
    {task.isComplete ? <span className='completed'>✅</span> : <button onClick={() => completeTask(index)}>complete task</button>}
    </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, isComplete: false})
    setTasks(copyTasks)
    setNewTask("")
  };

  const completeTask = (index) => {
    const copyTasks = [...tasks]
    copyTasks[index].isComplete = true;
    setTasks(copyTasks)
  }

  return (
    <div className='app'>
      <h1>
        todo's
      </h1>
      <hr></hr>

      <ul>
          {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'> save task</label>
        <input id='new-task' type='text' onChange={handleTaskInput}/>
        <input type='submit' value='save new task'/>
      </form>
    </div>
  );
}

export default App;
