import React, { Component } from 'react';
import {render} from "react-dom";
import './StyleSheet/Stylesheet.css';


class Heading extends React.Component {
    render() { 
        return <div>
            <h1 className="hero_header">Food Suggestor</h1>
    
        </div>;
    }
}
 
export default Heading;