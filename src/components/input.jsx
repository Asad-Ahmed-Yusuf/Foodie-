import React, { Component } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';


class Input extends React.Component {
    render() { 
        return <div class="input-group search__button input__container ">
          
        <input type="text" class="input" placeholder="Enter ingredients here..." />
        <button class="btn btn--accent input-btn ">Search</button>
       
      </div>
      
      

    }
}
 
export default Input;