import React, {Component} from 'react'
import {Field} from 'redux-form'


const renderField = (field) =>{
    const {meta : {touched , error}} = field;
    
    const className = `form-control ${touched && error ? 'is-invalid': ''}`
    return( 
       <div className="form-group">
            <label>{field.label}</label>
            <input
                className={className}
                type="text"
                {...field.input}
            >
            </input>
            <div className="text-help invalid-feedback">
                { touched ? error : ''}
            </div>
        </div>
   )       
}
export default renderField