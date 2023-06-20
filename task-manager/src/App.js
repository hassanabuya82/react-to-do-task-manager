import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTask] = useState(
    [
        {
          "id": 1,
          "text": "Doctors Appointment",
          "day": "Feb 5th at 2:30pm",
          "reminder": true
        },
        {
          "id": 2,
          "text": "Meeting at School",
          "day": "Feb 6th at 1:30pm",
          "reminder": true
        },
        {
          "id": 3,
          "text": "Do Something",
          "day": "Feb 7th at 1:30pm",
          "reminder": false
        },
]
)

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random * 10000) + 1

  const newTask = {id, ...task}
  setTask([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTask(tasks.filter((task) => task.id !== id) )
}

// ToggleReminder
const toggleReminder = (id) => {
  setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks '}
    </div>
  );
}

export default App;
