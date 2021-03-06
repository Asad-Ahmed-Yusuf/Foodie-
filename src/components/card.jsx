import React, { Component } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';
import sour from './images/sour.jpg'





 export function Card(props){
     //                        <p className='card__discription'>{props.description}</p>

     function openLink() {
        window.open(props.video, '_blank');
     }
     return(
        <div> 
            <div className="card">
                    <div className="card__body">
                        <img className='card__image' src={props.imgLink} alt="" srcset="" />
                        <h2 className='card__tittle'>{props.name}</h2>
                        </div>
                        <button className='card__btn' onClick={openLink}>Watch Video</button>
                </div>       
     </div>

     )
 }

 export default Card;