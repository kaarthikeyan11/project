// import React,{useEffect, useState} from "react";
// import './delete.css';
// export default function Deleteddata(){
//     const[deletedlist,setDeletedlist] = useState([]);

//     useEffect(() => {
//         let savedDeletedTodo = JSON.parse(localStorage.getItem('DeletedTodos'));
//         if (savedDeletedTodo) {
//           setDeletedlist(savedDeletedTodo);
//         } 
//       }, []);
    
//     return(
//         <div className="App">
//       <div className="todo-wrapper">
//         <div className="todo-list">
//         <div className="todo-list-item" >
//                     <div>
//                       <h3>{deletedlist.length}</h3>
//                       <p>fgfgfgfg</p>
//                     </div> </div>
//         </div>
//       </div>
//     </div>
//   );
        
    
// }

import React, { useEffect, useState } from "react";
import './delete.css';

export default function Deleteddata() {
  const [deletedlist, setDeletedlist] = useState([]);

  useEffect(() => {
   
    let savedDeletedTodo = JSON.parse(localStorage.getItem('DeletedTodos'));
    if (savedDeletedTodo) {
      setDeletedlist(savedDeletedTodo);
    }
  }, [...deletedlist]);

  return (
    <div className="App">
        <div className="todo-wrapper">
      <div className="todobox">
        <h2 style={{ textAlign: 'center' }}>Deleted Task</h2>
        <div className="todo-list">
          {deletedlist.length === 0 ? (
            <p>No deleted todos.</p>
          ) : (
            deletedlist.map((todo, index) => (
              <div className="todo-list-item" key={index}>
                <div>
                  <h3>{todo.title}</h3>  
                  <p>{todo.description}</p>  
                  <small>Deleted On: {todo.DeletedOn}</small> 
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
