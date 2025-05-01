import Navbar from '../Layout/Navbar';
import React, {useEffect, useState} from 'react';
function WeeklyView(){
    const [task,setTasks]=useState([]);

    useEffect(() => {
        const storedTasks =JSON.parse(localStorage.getItem('tasks')) || [];
        const today = new Date();
        const endOfWeek =new Date();
        endOfWeek.setDate(today.getDate()+ (7 - today.getDay()));
        
        const filtered = storedTasks.filter(task => {
            const due = new Date(task.dueDate);
            return due >=today && due <= endOfWeek;
        });

        setTasks(filtered);
    },[]);
    
    return (
        <>
        <Navbar />
        <div style={{ backgroundColor: '#FFF9DB',minHeight:'100vh',padding: '30px'}}>
            <h1 style ={{textAlign:'center',fontFamily:'Poppins, sans-serif'}}> 🗓️ Tasks this Week! </h1>
            <h3 style ={{textAlign:'center',marginBottom:'30px',color:'#555'}}> Tasks Due this Week!</h3>            {task.length ===0 ? (
                <p style={{textAlign:'center'}}> No Tasks due this week!!  </p>
            ):(
                <ul style ={{maxWidth:'600px',margin:'auto '}}>
                    {task.map((task,index) => (
                        <li key ={index} style ={{marginBottom:'20px',listStyleImage: 'none',background:'#fff',padding:'15px',borderRadius:'8px',boxShadow:'0 2px 5px rgba(0,0,0,0.1)'
                        }}>
                            <h4 style={{marginBottom:'5px '}}></h4> {task.tittle}
                            <p style={{ margin:'0'}}>{task.description}</p>
                            <p style={{fontSize:'14px', color:'#555'}}>Due:{task.dueDate} | Priority{task.priority} </p>
                        </li>
                    ))}
                </ul>
            )

        }
        </div>
        </>
    );
}
export default WeeklyView;
