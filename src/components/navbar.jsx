import React, { Component } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';
import icon from './images/icon.png'
import salad from './images/salad.png'
import hotpot from './images/hotpot.png'
class NavBar extends React.Component {
    render() { 
         
        return <nav className="navbar  navbar-dark bg-dark ">
       
        <img src={icon} alt="" srcset=""className="icon" />
        <img src={salad} alt="" srcset=""className="icon" />
        <img src={hotpot} alt="" srcset=""className="icon" />
        <div className="container-fluid  collapse navbar-collapse container">
             
        
        <span className='list-span'>
        
            <ul class="list-group list-group-horizontal mr-auto ">
            <button type="button" class="btn btn-primary btn-login">Popular</button>
            <button type="button" class="btn btn-primary btn-login">Recipe</button>
            <button type="button" class="btn btn-primary btn-login">Health</button>
           
            </ul>
            
           
        </span>
        
        </div>
        
        <button type="button" class="btn btn-primary btn-login">Login</button>

      </nav>

      
    }
}
 
export  default NavBar;
 

