import React from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Home from './components/Dashboard/Home';
import AddTask from './components/Dashboard/AddTask';
import WeeklyView from './components/Dashboard/WeeklyView';

function App() {
  return (
   <BrowserRouter basename="/tasknest">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/addtask" element={<AddTask/>} />  
        <Route path ="/weekly" element={<WeeklyView/>}/>
       </Routes>
    </BrowserRouter>
   
  );
}

export default App;
