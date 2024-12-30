import React, { useState } from 'react';
import './App.css';

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

function App() {
  const initialListOfTask = [
    {
      id: generateId(),
      name: 'Agua',
      dueDate: '2024-12-30',
    },
  ];

  const [listOfTasks, setListOfTasks] = useState(initialListOfTask);

  const removeTask = (id: string) => {
    const newListOfTasks = listOfTasks.filter((task) => task.id !== id);
    setListOfTasks(newListOfTasks);
  };

  const [nameOfTask, setNameOfTask] = useState('');
  const [dateOfTask, setDateOfTask] = useState(getTodayDate());

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskName = nameOfTask.trim() === '' ? 'Unnamed task' : nameOfTask.trim();

    const newTask = {
      id: generateId(),
      name: taskName,
      dueDate: dateOfTask,
    };

    const newListOfTasks = listOfTasks.concat(newTask);
    setNameOfTask('');
    setDateOfTask(getTodayDate());
    setListOfTasks(newListOfTasks);
  };

  return (
    <>
      <header className="center purplebox">
        <h1>TODO LIST</h1>
      </header>
      <main>
        <form onSubmit={addTask}>
          <h2>New task</h2>
          <label htmlFor="descriptionInput">Task name</label>
          <textarea
            value={nameOfTask}
            onChange={(e) => (e.target.value.length > 100 ? null : setNameOfTask(e.target.value))}
            id="descriptionInput"
          ></textarea>
          <label htmlFor="dateInput">Due Date</label>
          <input
            value={dateOfTask}
            onChange={(e) => setDateOfTask(e.target.value)}
            id="dateInput"
            type="date"
          />
          <button type="submit" id="mySubmitButton" className="center purplebox insertbutton">
            Create
          </button>
        </form>
        <section>
          {listOfTasks.length > 0 && <h2>Tasks</h2>}
          <ul id="list">
            {listOfTasks.map((task) => (
              <li className="item" key={task.id}>
                <p>{task.name}</p>
                <p>{task.dueDate}</p>
                <button onClick={() => removeTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
