import React from 'react'

const renderTextarea = (field)=> {
    const {meta : {touched , error}} = field;
    
    const className = `form-control ${touched && error ? 'is-invalid': ''}`
    return( 
       <div className="form-group">
            <label>{field.label}</label>
            <textarea
                className={className}
                type="text"
                {...field.input}
            >
            </textarea>
            <div className="text-help invalid-feedback">
                { touched ? error : ''}
            </div>
        </div>
   )       
}


export default renderTextarea
