import React, { useState, useEffect } from 'react';
import './App.css';

type Task = {
  id: string;
  name: string;
  dueDate: string;
};

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
  const [listOfTasks, setListOfTasks] = useState<Task[]>([]);
  const [nameOfTask, setNameOfTask] = useState('');
  const [dateOfTask, setDateOfTask] = useState(getTodayDate());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5001/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks. Please try again later.');
        }
        const tasksFromServer: Task[] = await response.json();
        setListOfTasks(tasksFromServer);
        setError(null);
      } catch (err) {
        setError((err as Error).message || 'An unexpected error occurred.');
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskName = nameOfTask.trim() === '' ? 'Unnamed task' : nameOfTask.trim();
    const newTask: Task = {
      id: generateId(),
      name: taskName,
      dueDate: dateOfTask,
    };

    try {
      const response = await fetch('http://localhost:5001/tasks', {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to add task. Please try again.');
      }

      setListOfTasks([...listOfTasks, newTask]);
      setNameOfTask('');
      setDateOfTask(getTodayDate());
      setError(null);
    } catch (err) {
      setError((err as Error).message || 'An unexpected error occurred.');
    }
  };

  const removeTask = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5001/tasks/${id}`, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error('Failed to delete task. Please try again.');
      }

      setListOfTasks(listOfTasks.filter((task) => task.id !== id));
      setError(null);
    } catch (err) {
      setError((err as Error).message || 'An unexpected error occurred.');
    }
  };

  return (
    <>
      <header className="center purplebox">
        <h1>TODO LIST</h1>
      </header>
      <main>
        {error && <p className="error">{error}</p>} {}
        <form onSubmit={addTask}>
          <h2>New task</h2>
          <label htmlFor="descriptionInput">Task name</label>
          <textarea
            value={nameOfTask}
            onChange={(e) => setNameOfTask(e.target.value)}
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
