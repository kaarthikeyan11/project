
import React, { useState } from 'react';
import { FaBars, FaHome, FaUser } from 'react-icons/fa';
import Todo from '../Todos'; // Import the Todo component
import './Sidebar.css';
import Homepage from './home';
import { GrAchievement } from "react-icons/gr";
import { HiTrash } from "react-icons/hi2";
import Deleteddata from './deleteddata';
import Completeddata from './completeddata';
import Navigation from './navbar';
import Logo from './logo';
import Dash from './dashboard';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('home'); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    setActiveComponent('todo'); 
  };
  const HomeClick=()=>{
    setActiveComponent('home');
  }
  const Deleteds=()=>{
    setActiveComponent('deleted');
  }
  const Completed=()=>{
    setActiveComponent('completed');
  }

  return (
    <div>
        
        <Navigation/>
    <div className="app-container">
   
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header flex gap-2 px-2 py-1 items-center">
  <Logo className="pr-1" />
  <span className="pl-1 text-green-500 text-xl">My Todos</span>
</div>

  <div className="sidebar-toggle" onClick={toggleSidebar}>
       
          <FaBars />
        </div>
        <div className="sidebar-content" style={{paddingTop:'3px'}}>
        
          <div className="sidebar-item" onClick={HomeClick}>
            <FaHome className="icon" />
            <span>Home</span>
          </div>
          <div className="sidebar-item" onClick={handleProfileClick}>
            <FaUser className="icon" />
            <span>Todo List</span>
          </div>
          <div className="sidebar-item" onClick={Completed}>
            <GrAchievement className="icon" />
            <span>Completed Task</span>
          </div>
          <div className="sidebar-item" onClick={Deleteds}>
            <HiTrash className="icon" />
            <span>Deleted Task</span>
          </div>
          
        </div>
      </div>

      <div className="content">
        {activeComponent==='todo' &&<Todo />} 
        {activeComponent==='home' && <Dash/>}
        {activeComponent==='deleted' && <Deleteddata/>}
        {activeComponent==='completed' && <Completeddata/>}
      </div>
    </div>
    </div>
  );
};

export default Sidebar;



