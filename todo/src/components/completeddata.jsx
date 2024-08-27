import React, { useEffect, useState } from "react";
import './completed.css';

export default function Completeddata() {
  const [completedlist, setCompletedlist] = useState([]);

  useEffect(() => {
   
    let savedcompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedcompletedTodo) {
      setCompletedlist(savedcompletedTodo);
    }
  }, [...completedlist]);

  return (
    <div className="App">
        <div className="todo-wrapper">
      <div className="todobox">
        <h2 style={{ textAlign: 'center' }}>Completed Task</h2>
        <div className="todo-list">
          {completedlist.length === 0 ? (
            <p>No Completed Task.</p>
          ) : (
            completedlist.map((todo, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{todo.title}</h3>  
                  <p>{todo.description}</p>  
                  <small>completed On: {todo.completedOn}</small> 
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
