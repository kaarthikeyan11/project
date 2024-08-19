// import React, { useState } from "react";
// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [tasks, setTasks] = useState([]);
// function addTask(){
//     if (inputValue.trim()) {
//       setTasks([...tasks, inputValue]);
//       setInputValue("");
//     }
//   };
//   console.log(tasks);
//   const deleteTask = (indexToDelete) => {
//     const updatedTasks = [...tasks]; 
//     updatedTasks.splice(indexToDelete); 
//     setTasks(updatedTasks); 
//   };
//   return (
//     <div>
//       <h1 className="flex justify-center text-xl py-2 px-4 mb-6">Welcome to Todo List</h1>
//       <div className="mt-5 flex justify-center">
//         <div className="col-md-5">
//           <div className="flex gap-2 items-center">
//             <input
//               type="text"
//               className="form-control text-xl py-2 px-4"
//               placeholder="Enter your Task"
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button
//               className="bg-blue-500 text-white hover:bg-blue-600 text-xl py-2 px-4 rounded"
//               onClick={addTask}
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       </div>

//       <ul className="mt-5">
//         {tasks.map((task, index) => (
//           <li key={index} className="flex justify-between items-center text-xl py-1">
//             <span>{task}</span>
//             <button
//               className="bg-red-500 text-white hover:bg-red-600 text-sm py-1 px-2 rounded"
//               onClick={() => deleteTask(index)}
//             >
//               Clear
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// import { createPortal } from 'react-dom';

// export default function App() {
//   return (
//     <div style={{ border: '2px solid black' }}>
//       <p>This child is placed in the parent div.</p>
//       {createPortal(
//         <p>This child is placed in the document body.</p>,
//         document.body
//       )}
//     </div>
//   );
// }



import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <button onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}>
        Toggle theme
      </button>
    </>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <button>Sign up</button>
      <button>Log in</button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
