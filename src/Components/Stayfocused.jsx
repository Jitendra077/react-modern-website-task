import React from 'react';
import "./Stayfocussed.css";
import Image from "../Images/yoga.jpg"

const Stayfocused = () => {
    return (
        <div className = "stay-focussed">
            <h3>Stay focused on your business .<br/><span>Let us handle the design.</span></h3>
            <img src = {Image} alt = "error"width = "40%" className = "yoga"/>
            <p>You have a business to run. Stop worring about cross- <br/> browser bugs, designing new pages, keeping your <br/>components up to date. Let us do that for you. </p>
        <div className = "fair-price-for-all">
        
            <h4><b>Fair simple price for all.</b></h4>
            <p>All types of businesses need access to development resources , so we <br/>give you option to decide how much you need to use. <br/>
           <span> Annual {""} <i class="fas fa-toggle-off "></i> {""} Monthly </span> </p>
          
        </div>
        </div>
    )
}

export default Stayfocused
