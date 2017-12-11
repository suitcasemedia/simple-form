import React from 'react'



 const renderSelect= (field)=> {
    const {meta : {touched , error}} = field;

    return(
        <div className="">
            <label>{field.label}</label>
            <select className="form-control form-control"  {...field.input}>
                <option >Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="trans">Prefer not to say</option>
            </select>  
            <div className="text-help invalid-feedback">
                { touched ? error : ''}
            </div>
        </div>

    )

  }
  export default renderSelect