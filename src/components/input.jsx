import React, { Component ,useState } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';
import Popup from './popup';
import Card from './card';

export function Input(props){
 
   const[isOpen, setIsOpen]=useState(false);

  

  return(
    <div>
      <div class="input-group input__container ">
          
          <input type="text" class="input" placeholder="Enter ingredients here..." />
          <button onClick={()=> setIsOpen(true)} class="btn btn--accent input-btn ">Search</button>
         
        </div>
        <Popup open = {isOpen} onClose={()=> setIsOpen(false)}></Popup>
        
        </div>
  )
}

export default Input;