import React from 'react'
import SubComponent1 from './SubComponent1'
import SubComponent2 from "./SubComponent2";
import SubComponent3 from "./SubComponent3"

function SubComponents() {
    return (
        <div style = {{marginLeft:"8em",backgroundColor:"white"}}>
            <SubComponent1/>
            <SubComponent2/>
            <SubComponent3/>
        </div>
    )
}

export default SubComponents
