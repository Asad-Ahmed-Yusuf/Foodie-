import React, { Component } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';
import search from './images/search.png';

class Input extends React.Component {
    render() { 
        return          <div class="input-group">
        <input type="text" class="input" placeholder="Enter ingredients here..." />
        <button class="btn btn--accent input-btn ">Search</button>
       
      </div>
      
      

    }
}
 
export default Input;