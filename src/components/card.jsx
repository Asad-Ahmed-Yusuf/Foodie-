import React, { Component } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';
import sour from './images/sour.jpg'

 class Card extends React.Component {
     render() { 
         return <div>
            
                <div className="container">
                    <div className="card">
                        <div className="card__body">
                            <img className='card__image' src={sour} alt="" srcset="" />
                            <h2 className='card__tittle'>Salad</h2>
                            <p className='card__discription'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <button className='card__button btn-primary'>View Recipe</button>
                    </div>
                    <div className="card">
                        <div className="card__body">
                            <img className='card__image' src={sour} alt="" srcset="" />
                            <h2 className='card__tittle'>Chicken</h2>
                            <p className='card__discription'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <button className='card__button btn-primary'>View Recipe</button>
                    </div>
                    <div className="card">
                        <div className="card__body">
                            <img className='card__image' src={sour} alt="" srcset="" />
                            <h2 className='card__tittle'>Pizza</h2>
                            <p className='card__discription'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <button className='card__button btn-primary'>View Recipe</button>
                    </div>
                </div>
           
         </div>;
     }
 }
  
 export default Card;