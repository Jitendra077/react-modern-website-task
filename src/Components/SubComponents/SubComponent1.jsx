import React from 'react';
import "./SubComponents.css"

function SubComponent1() {
    return (
        <div className ="subComponent1">
            <i style = {{color:"blue"}} class="fas fa-toggle-off fa-2x "></i> <br/>
            <i style = {{color:"grey"}} class="fas fa-toggle-on fa-2x"></i>
            <h4>Built for developers</h4>
            <p>Landkit is built to make your life easier.<br/>Variables , build tooling , documentation ,<br/> and reusable components</p>
        </div>
    )
}

export default SubComponent1
