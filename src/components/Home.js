import React from "react";
import { name, city } from "../data/data.js";
const meStyle ={
  color:'firebrick'
    }
function Home() {
  
  // update the JSX being returned!
  return (
  
 <div id="home">Home

 <h1 style={meStyle}>{name} is a Web Developer from {city}</h1>
 </div>
 
 
  )
  ;
}

export default Home;
