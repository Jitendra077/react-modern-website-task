import React from 'react';
import Image from "../Images/curlyHairs.jpg";
import "./AirbnbCard.css";

const AirbnbCard = () => {
    return (
            <div className="card">
                    <img src= {Image} alt="Avatar" style={{width:"30%"}} className = "avatar" />
                <div class="container">
                     <h4><b><i class="fab fa-airbnb"/>airbnb</b></h4>
                     <p>"Landkit is hands down the most useful front <br/>end Bootstrap theme  I've ever used 
                     . I can't <br/> wait to use it again for my next project." </p>   
                 </div>   
             </div>
    )
}

export default AirbnbCard
