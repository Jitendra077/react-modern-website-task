import React from 'react';
import "./FormComponent.css"

const FormSideInfo = () => {
    return (
             <div className = "formSideInfo">
                    <p id = "fHeading"> The most useful resourse <br/><span>ever created for dev|</span> </p>
                    <p>Using Landkit to build your site means never worrying <br/> about designing another page
                     or cross browser <br/> compatability. our ever-growing library of components <br/>
                     and pre-designed layouts will amke your life easier</p>
                     <br/>
                     <div id = "form-side-info-list">
                        <p id = "lifetime-updates"><i class="fas fa-check"></i> Lifetime updates </p>
                        <p id ="tech-support"> <i class="fas fa-check"></i>Tech Support</p>
                        <p id ="tons-of-assets" > <i class="fas fa-check"></i>Tons of assets</p>
                        <p id = "integration-ready"> <i class="fas fa-check"></i>Integration ready</p>
                     </div>
             </div>
    )
}

export default FormSideInfo
