import Navbar from '../Layout/Navbar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: '#FFF9DB', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to TaskNest 🪺</h1>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => navigate('/addtask')}
          style={{ padding: '10px 20px', backgroundColor: '#69A969', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          + Add New Task
        </button>
      </div>

      <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Your Tasks:</h2>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        {tasks.length === 0 ? (
          <p style={{ textAlign: 'center' }}>(No tasks yet. Start by adding one 🎯!)</p>
        ) : (
          tasks.map((task, index) => (
            <div
              key={index}
              style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '15px', backgroundColor: '#fff' }}
            >
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => toggleDone(index)}
                style={{ marginRight: '10px' }}
              />
              <span style={{ textDecoration: task.isDone ? 'line-through' : 'none', fontWeight: 'bold' }}>{task.title}</span>
              <p style={{ margin: '5px 0' }}>{task.description}</p>
              <p style={{ fontSize: '12px' }}>
                Due : {task.dueDate} | <em>Priority:{task.priority}</em>
              </p>
              <button
                onClick={() => deleteTask(index)}
                style={{ padding: '5px 10px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '3px' }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
}

export default Home;