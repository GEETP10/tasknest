import React,{useState} from 'react';
import Navbar from '../Layout/Navbar';
import{useNavigate} from 'react-router-dom';

function AddTask()
{
    const navigate =useNavigate();
    const[task, setTask]= useState({
        title: '',
        description:'',
        dueDate:'',
        priority:'Medium'
    });
    const handleChange=(e)=> {
        setTask({...task, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // get existing tasks
        const existing =JSON.parse(localStorage.getItem('tasks')) || [];
        //add new task
        const updatedTasks = [...existing,task];
        //console.log("Task Added:", task);
        localStorage.setItem('tasks',JSON.stringify(updatedTasks));
        // Later we'll store this to state or backend
        navigate('/dashboard');
    };
    
      return (
        <>
        <Navbar />
        <div style={{ backgroundColor: '#FFFFE0', minHeight: '100vh', padding: '40px' }}>
          <div style={{ maxWidth: '500px', margin: 'auto', backgroundColor: 'white', padding: '25px', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>➕ Add New Task</h2>
            <form onSubmit={handleSubmit}>
              <label>Title:</label>
              <input type="text" name="title" value={task.title} onChange={handleChange} required style={{ width: '100%', marginBottom: '15px', padding: '8px' }} />
    
              <label>Description:</label>
              <textarea name="description" value={task.description} onChange={handleChange} rows="3" style={{ width: '100%', marginBottom: '15px', padding: '8px' }} />
    
              <label>Due Date:</label>
              <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required style={{ width: '100%', marginBottom: '15px', padding: '8px' }} />
    
              <label>Priority:</label>
              <select name="priority" value={task.priority} onChange={handleChange} style={{ width: '100%', marginBottom: '20px', padding: '8px' }}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
    
              <button type="submit" style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>
                Save Task ✅
              </button>
            </form>
          </div>
        </div>
        </>
      );
 }
 export default AddTask;
    