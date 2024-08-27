import { data } from "autoprefixer";
import React from "react";
import './home.css'
export default function Homepage(){
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn =
      dd + '-' + mm + '-' + yyyy ;
    console.log(completedOn);
    return(
        <div  className="home">

            <h1>
                Welcome to Todo List 
                <p>{completedOn}</p>
            </h1>
           
                
            
        </div>
    )
}