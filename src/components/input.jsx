import React, { Component ,useState,useEffect } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';
import Popup from './popup';
import Card from './card';



export function Input(props){
  const [state, setState] = useState({isLoaded: false, data:''});

function getinfo (){
    var useinput = document.getElementById('input_data').value;
    const result = useinput.split(",");
    
    if(state.isLoaded == false){
      var items = [];
      var searchTerm = result.join('%2C').replace(/, ([^,]*)$/);
      fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&tags=under_30_minutes&q="+searchTerm, 
      {
       "method": "GET",
          "headers": {
              "x-rapidapi-host": "tasty.p.rapidapi.com",
              "x-rapidapi-key": "0c3c02b5f5msh7eae81c67d80793p1cee7bjsn813c49585a12"
          }
      })
      .then(function(response) { return response.json(); })
      .then(function(json) {
          json.results.map(data => {
             var item = {name: data.name, imgLink: data.thumbnail_url, description: data.description, instructions: data.instructions, video: data.original_video_url }
             if(item.video != undefined){
             items.push(item);
             }
          })
          console.log(items)
          setState({isLoaded: true, data: items})
  
          })
        }
  }



  return(
    <div>
      <div className="input-group input__container ">
          
          <input type="text" className="input input_placeholder"  id='input_data' placeholder="Enter ingredients seperated by comma , here..." />
          <button id='input_btn' onClick={getinfo} className="btn btn--accent input-btn ">Search</button>
        
        </div>

          {state.isLoaded == true && 
                    <div className='container'>
                    {state.data.map( data => <Card {...data}></Card>)}
                    </div>
          }
        <div className='Divider'></div>
        
        </div>
  )
}

export default Input;