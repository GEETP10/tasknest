import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#4CAF50',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'white'
    }}>
      <h2 style={{ margin: 0 }}>TaskNest 🪺</h2>
      <div>
        <Link to="/dashboard" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
        <Link to="/addtask" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Add Task</Link>
        <Link to="/weekly" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Weekly View</Link>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;