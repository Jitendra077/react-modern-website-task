import React from 'react';
import "./FormComponent.css"
import Image from "../Images/formImg.jpg"

  const FormComponent = () => {
    return (
        <div className = "body">
            <form class="w3-container">
                <div style = {{backgroundColor : "white",marginTop:"4em"}}>
                     <img src = {Image} alt ="error" className = "formImg"/>
                     <input type = "text" placeholder = "Name" />
                    <input type = "email"placeholder = "Email" />
                     <input type = "password"placeholder = "Password" />
                     <button id ="btn3">Download a sample</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent
