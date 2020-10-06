import React from 'react';
import "./FormComponent.css"
import FormComponent from './FormComponent'

function FormParentComponent() {
    return (
        <div className = "form-parent">
            <FormComponent/>
        </div>
    )
}

export default FormParentComponent
