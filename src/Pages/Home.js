import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../components/navbar";
import Input from "../components/input";
import Card from '../components/card';
import Popup from '../components/popup';
import Heading from '../components/heading';
import getRecipes from "../backend/Api";
import { useState, useEffect } from "react";





const dumpydata1 = {
    imglink: "https://i.insider.com/51892a656bb3f75617000003?width=1200&format=jpeg",
    title: "Burger",
    description: "American Burger with fries",
}

var LoadApi = false;

const arr = [dumpydata1]

function Home () {
    const [state, setState] = useState({isLoaded: false, data:''});

     useEffect(() => {
         if(LoadApi == true){
        if(state.isLoaded == false){
            var items = [];

            fetch("https://tasty.p.rapidapi.com/feeds/list?size=20&timezone=%2B0700&vegetarian=true&from=0", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "tasty.p.rapidapi.com",
                    "x-rapidapi-key": "0c3c02b5f5msh7eae81c67d80793p1cee7bjsn813c49585a12"
                }
            })
            .then(function(response) { return response.json(); })
            .then(function(json) {
                json.results.map(data => {
                   if(data.item == undefined){return}
                    console.log(data.item)
                   var item = {name: data.item.name, imgLink: data.item.thumbnail_url, description: data.item.description, instructions: data.item.instructions, video: data.item.original_video_url }
                   items.push(item);
                })
                setState({isLoaded: true, data: items})
        
              })
            }
        }
    },[])
     return(
        <div>
            <NavBar></NavBar>
            <Heading></Heading>
            
            <div><Input></Input></div>
          
            
           
                {state.isLoaded == true && 
                    <div className='container'>
                    {state.data.map( data => <Card {...data}></Card>)}
                    </div>
                }
        </div>

    )
}

export default Home;