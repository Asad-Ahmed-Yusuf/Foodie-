import React, { Component } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';
import background from './images/background.png'
class NavBar extends React.Component {
    render() { 
         
        return <nav className="navbar ">
             
             <img className='background' src={background} alt="" />
             

      </nav>

      
    }
}
 
export  default NavBar;
 

