import React, { Component , useState} from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';
import Card from './card';


export function Popup({ open ,props , onClose}){
    
    if(!open)return null;
    return(
        <div className='container'>
 
      
           <div class="callout" data-closable>
             <button onClick={onClose} class="close-button close__btn" aria-label="Close alert" type="button" data-close>
               <span aria-hidden="true">&times;</span>
                    </button>
                            <p className='close__body'>Close</p>
                               
                              <Card></Card>                                    
                                     </div>
                

    </div>

    )
}

export default Popup;
