// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
// import { BsCheckLg } from 'react-icons/bs';
// import { HiTrash } from "react-icons/hi2";


// function Todo() {
//   const [isCompleteScreen, setIsCompleteScreen] = useState(false);
//   const [allTodos, setTodos] = useState([]);
//   const [newTitle, setNewTitle] = useState('');
//   const [newDescription, setNewDescription] = useState('');
//   const [newDate,setNewDate]= useState("");
//   const [completedTodos, setCompletedTodos] = useState([]);
//   const [currentEdit, setCurrentEdit] = useState(null);
//   const [currentEditedItem, setCurrentEditedItem] = useState(null);
//   const [deletedTodos,setDeletedTodos] = useState([]);

//   const handleAddTodo = () => {
//     let now = new Date();
//      let dd = now.getDate();
//      let mm = now.getMonth() + 1;
//      let yyyy = now.getFullYear();
//      let h = now.getHours();
//      let m = now.getMinutes();
//      let s = now.getSeconds();
//      let createdOn =
//       dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;


//     if (newTitle.trim() && newDescription.trim() && newDate.trim()) {
//       let newTodoItem = {
//         title: newTitle,
//         description: newDescription,
//         due_date :newDate,
//         Createdon: createdOn
//       };
      

//       let updatedTodoArr = [...allTodos];
//       updatedTodoArr.push(newTodoItem);
//       setTodos(updatedTodoArr);
//       localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
//       setNewTitle('');
//       setNewDescription('');
//       setNewDate('');
//     } else {
//       alert('Please Fill All The Fields');
//     }

//     console.log(...allTodos);
//   };

//   const handleDeleteTodo = (index) => {
//     let now = new Date();
//     let dd = now.getDate();
//     let mm = now.getMonth() + 1;
//     let yyyy = now.getFullYear();
//     let h = now.getHours();
//     let m = now.getMinutes();
//     let s = now.getSeconds();
//     let deletedOn =
//       dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
//       let deletedlist = {
//         ...allTodos[index],
//         DeletedOn: deletedOn,
//       }; 

//       let newDeletedTodos = [...deletedTodos, deletedlist]; 
//       setDeletedTodos(newDeletedTodos);
//       localStorage.setItem('DeletedTodos', JSON.stringify(newDeletedTodos));    
//     let reducedTodo = [...allTodos];
//     reducedTodo.splice(index, 1);

//     localStorage.setItem('todolist', JSON.stringify(reducedTodo));
//     setTodos(reducedTodo);
//   };

//   const handleComplete = (index) => {
//     let now = new Date();
//     let dd = now.getDate();
//     let mm = now.getMonth() + 1;
//     let yyyy = now.getFullYear();
//     let h = now.getHours();
//     let m = now.getMinutes();
//     let s = now.getSeconds();
//     let completedOn =
//       dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;

//     let filteredItem = {
//       ...allTodos[index],
//       completedOn: completedOn,
//     };

//     let updatedCompletedArr = [...completedTodos];
//     updatedCompletedArr.push(filteredItem);
//     setCompletedTodos(updatedCompletedArr);
//     handleDeleteTodo(index);
//     localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
//     console.log(updatedCompletedArr);
//   };

//   const handleDeleteCompletedTodo = (index) => {
//     let now = new Date();
//     let dd = now.getDate();
//     let mm = now.getMonth() + 1;
//     let yyyy = now.getFullYear();
//     let h = now.getHours();
//     let m = now.getMinutes();
//     let s = now.getSeconds();
//     let deletedOn =
//       dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
//       let deletedlist = {
//         ...completedTodos[index],
//         DeletedOn: deletedOn,
//       };  

//       let newDeletedTodos = [...deletedTodos, deletedlist]; 
//       setDeletedTodos(newDeletedTodos);
//       localStorage.setItem('DeletedTodos', JSON.stringify(newDeletedTodos));  
//     let reducedTodo = [...completedTodos];
//     reducedTodo.splice(index, 1);

//     localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
//     setCompletedTodos(reducedTodo);

//   };

//   useEffect(() => {
//     let savedTodo = JSON.parse(localStorage.getItem('todolist'));
//     let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
//     if (savedTodo) {
//       setTodos(savedTodo);
//     }

//     if (savedCompletedTodo) {
//       setCompletedTodos(savedCompletedTodo);
//     }
//   }, []);

//   const handleEdit = (ind, item) => {
//     setCurrentEdit(ind);
//     setCurrentEditedItem({ ...item });
//   };

//   const handleUpdateTitle = (value) => {
//     setCurrentEditedItem((prev) => {
//       return { ...prev, title: value };
//     });
//   };

//   const handleUpdateDescription = (value) => {
//     setCurrentEditedItem((prev) => {
//       return { ...prev, description: value };
//     });
//   };
//   const handleDueDate =(value)=>{
//     setCurrentEditedItem((prev)=>{
//       return {...prev,due_date:value};
//     });
//   }

//   const handleUpdateToDo = () => {
    
//     let newToDo = [...allTodos];
//     newToDo[currentEdit] = currentEditedItem;
//     setTodos(newToDo);
//     localStorage.setItem('todolist', JSON.stringify(newToDo));
//     setCurrentEdit(null);
//   };

//   return (
    // <div className="App">
    //    <div className="todo-wrapper">
    //     <div className="todo-input">
    //       <div className="todo-input-item">
    //         <label>Title <span style={{color:'red'}}>*</span></label>
    //         <input
    //           type="text"
    //           value={newTitle}
    //           onChange={(e) => setNewTitle(e.target.value)}
    //           placeholder="Enter your task title"
    //         />
    //       </div>
    //       <div className="todo-input-item">
    //         <label>Description <span style={{color:'red'}}>*</span></label>
    //         <input
    //           type="text"
    //           value={newDescription}
    //           onChange={(e) => setNewDescription(e.target.value)}
    //           placeholder="Enter your  task description"
    //         />
    //       </div>
    //       <div className="todo-input-item">
    //     <label>Due Date <span style={{color:'red'}}>*</span></label>
    //     <input
    //       className="custom-date-input"
    //       type="date"
    //       value={newDate}
    //       onChange={(e) => setNewDate(e.target.value)}
    //       placeholder="Select your task due date"
    //     />
    //   </div>

    //       <div className="todo-input-item">
    //         <button
    //           type="button"
    //           onClick={handleAddTodo}
    //           className="primaryBtn"
    //         >
    //           Add
    //         </button>
    //       </div>
    //     </div>

    //     <div className="btn-area">
    //       <button
    //         className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
    //         onClick={() => setIsCompleteScreen(false)}
    //       >
    //         Todo
    //       </button>
    //       <button
    //         className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
    //         onClick={() => setIsCompleteScreen(true)}
    //       >
    //         Completed
    //       </button>
    //     </div>

    //     <div className="todo-list">
    //       {isCompleteScreen === false &&
    //         allTodos.map((item, index) => {
    //           if (currentEdit === index) {
    //             return (
    //               <div className="edit__wrapper" key={index}>
    //                 <label>Title <span style={{color:'red'}}>*</span></label>
    //                 <input
    //                   placeholder="Updated Title"
    //                   onChange={(e) => handleUpdateTitle(e.target.value)}
    //                   value={currentEditedItem.title}
    //                 />
    //                 <label>Description <span style={{color:'red'}}>*</span></label>
    //                 <textarea
    //                   placeholder="Updated Description"
    //                   rows={4}
    //                   onChange={(e) =>
    //                     handleUpdateDescription(e.target.value)
    //                   }
    //                   value={currentEditedItem.description}
    //                 />
    //                 <label>Due Date <span style={{color:'red'}}>*</span></label>
    //                 <input
    //                   className="custom-date-input"
    //                   type="date"
    //                   placeholder="Updated Due Date"
    //                   onChange={(e) => handleDueDate(e.target.value)}
    //                   value={currentEditedItem.due_date}
    //                 />
    //                 <button
    //                   type="button"
    //                   onClick={handleUpdateToDo}
    //                   className="primaryBtn"
    //                 >
    //                   Update
    //                 </button>
    //                 <br/>
    //                 <hr style={{color:'red'}}/>
    //               </div>
    //             );
    //           } else {
    //             return (
    //               <div className="todo-list-item" key={index}>
    //                 <div>
    //                   <h3>Title :  {item.title}</h3>
    //                   <p>Description  : {item.description}</p>
    //                   <p>Due Date : {item.due_date}</p>
    //                   <small>Created On : {item.Createdon}</small>
    //                 </div>

    //                 <div>
    //                   <HiTrash
    //                     className="icon"
    //                     onClick={() => handleDeleteTodo(index)}
    //                     title="Delete"
    //                   />
    //                   <BsCheckLg
    //                     className="check-icon"
    //                     onClick={() => handleComplete(index)}
    //                     title="Complete"
    //                   />
    //                   <AiOutlineEdit
    //                     className="check-icon"
    //                     onClick={() => handleEdit(index, item)}
    //                     title="Edit"
    //                   />
    //                 </div>
    //               </div>
    //             );
    //           }
    //         })}

    //       {isCompleteScreen === true &&
    //         completedTodos.map((item, index) => {
    //           return (
    //             <div className="todo-list-item" key={index}>
    //               <div>
    //                 <h3>{item.title}</h3>
    //                 <p>{item.description}</p>
    //                 <p>
    //                   <small>Completed on: {item.completedOn}</small>
    //                 </p>
    //               </div>

    //               <div>
    //                 <HiTrash
    //                   className="icon"
    //                   onClick={() => handleDeleteCompletedTodo(index)}
    //                   title="Delete"
    //                 />
    //               </div>
    //             </div>
    //           );
    //         })}
    //     </div>
    //   </div>
    // </div>
    
//   );
// }

// export default Todo;


// const handleAddTodo = () => {
  //   let now = new Date();
  //    let dd = now.getDate();
  //    let mm = now.getMonth() + 1;
  //    let yyyy = now.getFullYear();
  //    let h = now.getHours();
  //    let m = now.getMinutes();
  //    let s = now.getSeconds();
  //    let createdOn =
  //     dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;


  //   if (newTitle.trim() && newDescription.trim() && newDate.trim()) {
  //     let newTodoItem = {
  //       title: newTitle,
  //       description: newDescription,
  //       due_date :newDate,
  //       Createdon: createdOn
  //     };
      

  //     let updatedTodoArr = [...allTodos];
  //     updatedTodoArr.push(newTodoItem);
  //     setTodos(updatedTodoArr);
  //     localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
  //     setNewTitle('');
  //     setNewDescription('');
  //     setNewDate('');
  //   } else {
  //     alert('Please Fill All The Fields');
  //   }

  //   console.log(...allTodos);
  // };
// --------------------------------------------------------------------------------------------------------------------------


import React, { useState, useEffect } from 'react';
import './App.css';
import {  AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { HiTrash } from "react-icons/hi2";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function Todo() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate,setNewDate]= useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState('');
  const [currentEditedItem, setCurrentEditedItem] = useState('');
  const [deletedTodos,setDeletedTodos] = useState([]);

  
  
  const handleAddTodo = () => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let createdOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
  
    
    let dueDate = new Date(newDate);
    
   
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
  
    
    if (newTitle.trim() && newDescription.trim() && newDate.trim()) {
      if (dueDate >= currentDate) {
        let newTodoItem = {
          title: newTitle,
          description: newDescription,
          due_date: newDate,
          Createdon: createdOn,
        };
  
        let updatedTodoArr = [...allTodos];
        updatedTodoArr.push(newTodoItem);
        setTodos(updatedTodoArr);
        localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
        setNewTitle('');
        setNewDescription('');
        setNewDate('');
        toast.success(`Todo List Title: ${newTitle} successfully created`);
      } else {
        toast.error(`Due date must be greater than or equal to Current date`);
      }
    } else {
      toast.error(`Please fill all the fields`);
      
    }
  
    console.log(...allTodos);
  };
  // const handleDeleteTodo = (index) => {
  //   let now = new Date();
  //   let dd = now.getDate();
  //   let mm = now.getMonth() + 1;
  //   let yyyy = now.getFullYear();
  //   let h = now.getHours();
  //   let m = now.getMinutes();
  //   let s = now.getSeconds();
  //   let deletedOn =
  //     dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
  //     let deletedlist = {
  //       ...allTodos[index],
  //       DeletedOn: deletedOn,
  //     }; 

  //     let newDeletedTodos = [...deletedTodos, deletedlist]; 
  //     setDeletedTodos(newDeletedTodos);
  //     localStorage.setItem('DeletedTodos', JSON.stringify(newDeletedTodos)); 
  //     toast.success(`Todo List Title: ${deletedlist.title} successfully Deleted`);   
  //   let reducedTodo = [...allTodos];
  //   reducedTodo.splice(index, 1);

  //   localStorage.setItem('todolist', JSON.stringify(reducedTodo));
  //   setTodos(reducedTodo);
    
  // };
   
  
  const handleDeleteTodo = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let deletedOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
    let existingDeletedTodos = JSON.parse(localStorage.getItem('DeletedTodos')) || [];
    let deletedTodo = {
      ...allTodos[index],
      DeletedOn: deletedOn,
    };
    let newDeletedTodos = [...existingDeletedTodos, deletedTodo]; 
    setDeletedTodos(newDeletedTodos);
    localStorage.setItem('DeletedTodos', JSON.stringify(newDeletedTodos));
    toast.success(`Todo List Title: ${deletedTodo.title} successfully deleted`);
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    setTodos(reducedTodo);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
  };

  // const handleComplete = (index) => {
  //   let now = new Date();
  //   let dd = now.getDate();
  //   let mm = now.getMonth() + 1;
  //   let yyyy = now.getFullYear();
  //   let h = now.getHours();
  //   let m = now.getMinutes();
  //   let s = now.getSeconds();
  //   let completedOn =
  //     dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;

  //   let filteredItem = {
  //     ...allTodos[index],
  //     completedOn: completedOn,
  //   };

  //   let updatedCompletedArr = [...completedTodos];
  //   updatedCompletedArr.push(filteredItem);
  //   setCompletedTodos(updatedCompletedArr);
  //   handleDeleteTodo(index);
  //   localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
  //   console.log(updatedCompletedArr);
  // };

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
    let existingCompletedTodos = JSON.parse(localStorage.getItem('completedTodos')) || [];
    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };
    let updatedCompletedArr = [...existingCompletedTodos, filteredItem];
    setCompletedTodos(updatedCompletedArr);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1); 
    setTodos(reducedTodo);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    toast.success(`Todo List Title: ${filteredItem.title} successfully Completed`)
    };

  const handleDeleteCompletedTodo = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let deletedOn =
      dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;
      let existingDeletedTodos = JSON.parse(localStorage.getItem('DeletedTodos')) || [];
      let deletedlist = {
        ...completedTodos[index],
        DeletedOn: deletedOn,
      };  

      let newDeletedTodos = [...existingDeletedTodos, deletedlist]; 
      setDeletedTodos(newDeletedTodos);
      localStorage.setItem('DeletedTodos', JSON.stringify(newDeletedTodos));  
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
    toast.success(`Todo List Title: ${deletedlist.title} successfully deleted`)

  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) {
      setTodos(savedTodo);
    }

    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  };

  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, title: value };
    });
  };

  const handleUpdateDescription = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, description: value };
    });
  };
  const handleDueDate =(value)=>{
    setCurrentEditedItem((prev)=>{
      return {...prev,due_date:value};
    });
  }

  const handleUpdateToDo = () => {
    let dueDate = new Date(currentEditedItem.due_date);
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 
    if (currentEditedItem.title.trim() && currentEditedItem.description.trim() && currentEditedItem.due_date.trim()) {
    if(dueDate >= currentDate){
    let newToDo = [...allTodos];
    newToDo[currentEdit] = currentEditedItem;
    setTodos(newToDo);
    localStorage.setItem('todolist', JSON.stringify(newToDo));
    setCurrentEdit('');
    toast.success(`Todo List Title: ${currentEditedItem.title} successfully Updated`);
    }else{
      toast.error(`Due date must be greater than or equal to Current date`);
    }}else{
      toast.error(`Please Fill All The Fields`);
    }
    
  };

  return (
    <div className="App">
       <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title <span style={{color:'red'}}>*</span></label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Enter your task title"
            />
          </div>
          <div className="todo-input-item">
            <label>Description <span style={{color:'red'}}>*</span></label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Enter your  task description"
            />
          </div>
          <div className="todo-input-item">
        <label>Due Date <span style={{color:'red'}}>*</span></label>
        <input
          className="custom-date-input"
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          placeholder="Select your task due date"
        />
      </div>

          <div className="todo-input-item">
            <button
              type="button"
              onClick={handleAddTodo}
              className="primaryBtn"
              
            >
              Add
            </button>
            <ToastContainer />
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

       <div className="todo-list">

           {isCompleteScreen === false &&
            allTodos.map((item, index) => {
              if (currentEdit === index) {
                return (
                  <div className="edit__wrapper" key={index}>
                    <label>Title <span style={{color:'red'}}>*</span></label>
                    <input
                      placeholder="Updated Title"
                      onChange={(e) => handleUpdateTitle(e.target.value)}
                      value={currentEditedItem.title}
                    />
                    <label>Description <span style={{color:'red'}}>*</span></label>
                    <textarea
                      placeholder="Updated Description"
                      rows={4}
                      onChange={(e) =>
                        handleUpdateDescription(e.target.value)
                      }
                      value={currentEditedItem.description }
                    />
                    <label>Due Date <span style={{color:'red'}}>*</span></label>
                    <input
                      className="custom-date-input"
                      type="date"
                      placeholder="Updated Due Date"
                      onChange={(e) => handleDueDate(e.target.value)}
                      value={currentEditedItem.due_date }
                    />
                    <button
                      type="button"
                      onClick={handleUpdateToDo}
                      className="primaryBtn"
                    >
                      Update
                    </button>
                    <br/>
                    <hr style={{color:'red'}}/>
                  </div>
                  
                );
              } else {
                return (
                  <div className="todo-list-item" key={index}>
                    <div>
                      <h3>Title: {item.title} </h3>
                      <p>Description : {item.description} </p>
                      <p>Due Date : {item.due_date} </p>
                      <small>Created On : {item.Createdon}</small>
                    </div>

                    <div>
                      <HiTrash
                        className="icon"
                        onClick={() => handleDeleteTodo(index)}
                        title="Delete"
                      />
                      <BsCheckLg
                        className="check-icon"
                        onClick={() => handleComplete(index)}
                        title="Complete"
                      />
                      <AiOutlineEdit
                        className="check-icon"
                        onClick={() => handleEdit(index, item)}
                        title="Edit"
                      />
                    </div>
                  </div>
                  
                );
              }
            })}

          {isCompleteScreen === true &&
            completedTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>
                      <small>Completed on: {item.completedOn}</small>
                    </p>
                  </div>

                  <div>
                    <HiTrash
                      className="icon"
                      onClick={() => handleDeleteCompletedTodo(index)}
                      title="Delete"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
    
  );
}

export default Todo;