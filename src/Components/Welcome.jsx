import React from 'react';
import "./Welcome.css";
import Image from "../Images/welcome.jpg"

function Welcome() {
    return (
        <div style = {{marginLeft:"8em",backgroundColor:"white"}}> 
            <div>
                <h3>Welcome to <span>Landkit.</span><br/>Develop anything. </h3>
                <p>Build a beautiful,modern website with flexible <br/> Bootstrap Components built from scratch</p>
                <div>
                    <button id = "btn1">View all pages {""}{""} <i class="fas fa-arrow-right"id="arrow"></i></button>
                    <button id = "btn2">Documentation</button>
                </div>
                <div>
                     <img src = {Image} alt = "error"className = "Welcome-img"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome
