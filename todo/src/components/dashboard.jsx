import React, { useState,useEffect } from 'react';
import './home.css';

const Dash = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [list, setlist] = useState([]);
  const [complete,setComplete] = useState([]);
  const [deletes,setDelete] = useState([]);

  useEffect(() => {
   
    let savedDeletedTodo = JSON.parse(localStorage.getItem('DeletedTodos'));
    if (savedDeletedTodo) {
      setDelete(savedDeletedTodo);
    }
  }, [...deletes]);
  useEffect(()=>{
  let savedlistTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedlistTodo) {
      setlist(savedlistTodo);
    }
  }, [...list]);
  useEffect(()=>{
    let savedcompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
      if (savedcompletedTodo) {
        setComplete(savedcompletedTodo);
      }
    }, [...complete]);
  

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="homedashboard">
      
     
      <div className=" fixed flex flex-col " style={{ width: '70%' }}>
       
        <div className="p-6 bg-gray-100 flex-grow">
          <h3 className="text-2xl mb-4 text-black ">Overview</h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           
            <div className="  bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-black">Task In Progress</h4>
              <p className="mt-2 text-gray-600">{list.length}</p>
            </div>
            <div className="  bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-black">Completed Task</h4>
              <p className="mt-2 text-gray-600">{complete.length}</p>
            </div>
            <div className=" bg-white p-6 shadow-md rounded-lg">
              <h4 className="text-lg font-semibold text-black">Deleted Task</h4>
              <p className="mt-2 text-gray-600">{deletes.length}</p>
            </div>
            
          </div>
        </div>
      </div>










    </div>
  );
};

export default Dash;
