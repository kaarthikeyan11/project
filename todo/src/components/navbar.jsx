// import React,{useEffect,useState} from "react";
// import './navigation.css';
// import { HiMiniBellAlert } from "react-icons/hi2";
// import { HiMiniUserCircle } from "react-icons/hi2";
// import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";

// export default function Navigation() {
//     const [notification,setNotification] =useState([])
//     useEffect(() => {
   
//         let notificationTodo = JSON.parse(localStorage.getItem('todolist'));
//         if (notificationTodo) {
//           setNotification(notificationTodo);
//         }
//       }, [...notification]);
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">My App</div>
//       <div className="navbar-menu" style={{gap:'4px'}}>
//         <div className="navbar-item">
//            <div className="icon">
//             < HiMiniBellAlert title="Notification"/>
            
//             </div>

            
//             </div>
//             <div className="navbar-item">
//            <div className="icon">
//             <HiMiniUserCircle title="Profile"/>
//             </div>
//             </div>
//             <div className="navbar-item">
//            <div className="icon">
//             <HiMiniArrowRightStartOnRectangle title="logout"/>
//             </div>
//             </div>
            
        
//       </div>
//     </nav>
//   );
// }
// ----------------------------------------------------------------------------------------------------



// import './navigation.css';

// import { useEffect, useState } from 'react';
// import {  HiMiniUserCircle, HiMiniArrowRightOnRectangle } from 'react-icons/hi2'; // Ensure correct icon import
// import { HiOutlineBell } from "react-icons/hi2";
// export default function Navigation() {
//   const [notification, setNotification] = useState([]);
//   const [showRedDot, setShowRedDot] = useState(false);

//   useEffect(() => {
//     const notificationTodo = JSON.parse(localStorage.getItem('todolist')) || [];
//     setNotification(notificationTodo);
//   }, []);

//   useEffect(() => {
//     if (notification.length > 0) {
//       const currentDate = new Date(); 
//       currentDate.setHours(0, 0, 0, 0);
//       const hasDueNotification = notification.some((item) => {
//         const dueDate = new Date(item.due_date); 
//         dueDate.setHours(0, 0, 0, 0);
//         return dueDate >= currentDate; 
//       });

//       setShowRedDot(hasDueNotification);
//     }
//   }, [notification]);

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">My App</div>
//       <div className="navbar-menu" style={{ gap: '4px' }}>
//         <div className="navbar-item">
//           <div className="icon" style={{ position: 'relative' }}>
//             <HiOutlineBell title="Notification" />
//             {showRedDot && (
//               <span
//                 style={{
//                   position: 'absolute',
//                   top: '-5px',
//                   right: '0px',
//                   width: '10px',
//                   height: '10px',
//                   backgroundColor: 'red',
//                   borderRadius: '50%',
//                 }}
//               />
//             )}
//           </div>
//         </div>
//         <div className="navbar-item">
//           <div className="icon">
//             <HiMiniUserCircle title="Profile" />
//           </div>
//         </div>
//         <div className="navbar-item">
//           <div className="icon">
//             <HiMiniArrowRightOnRectangle title="Logout" />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// =============================================
// import './navigation.css';
// import { useEffect, useState } from 'react';
// import { HiMiniBellAlert, HiMiniUserCircle, HiMiniArrowRightOnRectangle } from 'react-icons/hi2';

// export default function Navigation() {
//   const [notification, setNotification] = useState([]);
//   const [showRedDot, setShowRedDot] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false); 

//   useEffect(() => {
//     const notificationTodo = JSON.parse(localStorage.getItem('todolist')) || [];
//     setNotification(notificationTodo);
//   }, []);

//   useEffect(() => {
//     if (notification.length > 0) {
//       const currentDate = new Date(); 
//       currentDate.setHours(0, 0, 0, 0);
//       const hasDueNotification = notification.some((item) => {
//         const dueDate = new Date(item.due_date); 
//         dueDate.setHours(0, 0, 0, 0);
//         return dueDate > currentDate; 
//       });

//       setShowRedDot(hasDueNotification);
//     }
//   }, [notification]);

//   // Toggle notification list visibility on bell icon click
//   const handleBellClick = () => {
//     setShowNotifications(!showNotifications);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">My App</div>
//       <div className="navbar-menu" style={{ gap: '4px' }}>
//         <div className="navbar-item">
//           <div className="icon" style={{ position: 'relative' }} onClick={handleBellClick}>
//             <HiMiniBellAlert title="Notification" />
//             {showRedDot && (
//               <span
//                 style={{
//                   position: 'absolute',
//                   top: '-5px',
//                   right: '-5px',
//                   width: '10px',
//                   height: '10px',
//                   backgroundColor: 'red',
//                   borderRadius: '50%',
//                 }}
//               />
//             )}
//           </div>

//           {/* Notification list, visible when the bell icon is clicked */}
//           {showNotifications && showRedDot && (
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '40px',
//                 right: '10px',
//                 width: '200px',
//                 backgroundColor: '#fff',
//                 border: '1px solid #ccc',
//                 borderRadius: '5px',
//                 padding: '10px',
//                 boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//                 zIndex: 10, // Ensure it's above other elements
//               }}
//             >
//               <ul>
//                 {notification.length > 0 ? (
//                   notification.map((item, index) => (
//                     <li key={index}>
//                         <h5>{item.title}</h5>
//                       <strong>Due Date:</strong> {new Date(item.due_date).toLocaleDateString()}
//                     </li>
//                   ))
//                 ) : (
//                   <li>No notifications</li>
//                 )}
//               </ul>
//             </div>
//           )}
//         </div>
//         <div className="navbar-item">
//           <div className="icon">
//             <HiMiniUserCircle title="Profile" />
//           </div>
//         </div>
//         <div className="navbar-item">
//           <div className="icon">
//             <HiMiniArrowRightOnRectangle title="Logout" />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
// +++++++++++++++++++++++++++++++++++++=
import './navigation.css';
import { useEffect, useState } from 'react';
import {HiOutlineBell, HiMiniUserCircle, HiMiniArrowRightOnRectangle } from 'react-icons/hi2';

export default function Navigation() {
  const [notification, setNotification] = useState([]);
  const [showRedDot, setShowRedDot] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false); 
  useEffect(() => {
    const notificationTodo = JSON.parse(localStorage.getItem('todolist')) || [];
    setNotification(notificationTodo);
  }, []);

  useEffect(() => {
    if (notification.length > 0) {
      const currentDate = new Date(); 
      currentDate.setHours(0, 0, 0, 0); 
      const hasDueNotification = notification.some((item) => {
        const dueDate = new Date(item.due_date);
        dueDate.setHours(0, 0, 0, 0); 
        return dueDate <= currentDate; 
      });

      setShowRedDot(hasDueNotification);
    } else {
      setShowRedDot(false);
    }
  }, [notification]);

 
  const handleBellClick = () => {
    if (showRedDot) {
      setShowNotifications(!showNotifications);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <div className="navbar-menu" style={{ gap: '4px' }}>
        <div className="navbar-item">
          <div className="icon" style={{ position: 'relative' }} onClick={handleBellClick}>
            < HiOutlineBell title="Notification" />
            {showRedDot && (
              <span
                style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '0px',
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'red',
                  borderRadius: '50%',
                }}
              />
            )}
          </div>

         
          {showNotifications && (
            <div
              style={{
                position: 'absolute',
                top: '40px',
                right: '10px',
                width: '200px',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
              }}
            >
              <ul>
                {notification.length > 0 ? (
                  notification.map((item, index) => {
                    const dueDate = new Date(item.due_date);
                    dueDate.setHours(0, 0, 0, 0);
                    const currentDate = new Date();
                    currentDate.setHours(0, 0, 0, 0);
                    if (dueDate <= currentDate) { 
                      return (
                        <li key={index}>
                            <h5>{item.title}</h5>
                          <strong>Due Date:</strong> {dueDate.toLocaleDateString()}
                          <hr/>
                        </li>
                      );
                    }
                    return null;
                  })
                ) : (
                  <li>No notifications</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="navbar-item">
          <div className="icon">
            <HiMiniUserCircle title="Profile" />
          </div>
        </div>
        <div className="navbar-item">
          <div className="icon">
            <HiMiniArrowRightOnRectangle title="Logout" />
          </div>
        </div>
      </div>
    </nav>
  );
}





