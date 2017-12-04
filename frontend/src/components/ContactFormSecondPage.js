import React, {Component} from 'react'
import {Field} from 'redux-form'
import { reduxForm} from 'redux-form'
import {Link ,Redirect   } from 'react-router-dom'
import {connect} from 'react-redux'
import '../App.css'
import validate from '../helpers/validate'
import renderField from './renderField'
import renderSelect from './renderSelect'


class ContactFormSecondPage extends Component {

  
render(){
  
          const {handleSubmit} = this.props;
  
          return(
                <form onSubmit={handleSubmit}>
                    <div className="contact-form-page--section">
                        <div className="contact-form-page--step p-3">
                            Step 1: Your details
                        </div>
                        
                    </div>
                    <div className="contact-form-page--section">
                        <div className="contact-form-page--step p-3 my-1">
                            Step 2: More comments
                        </div>
                        <div className="contact-form-page--inner-section p-3">

                            <div className="row">
                                <div className="col-md-4">
                                    <Field
                                        label="Telephone Number"
                                        name="telephoneNumber"
                                        component={renderField}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <Field 
                                        name="gender"
                                        label="Gender"
                                        component={renderSelect}
                                    >  
                                    </Field>
                                </div>
                                
                            </div>
                            <div className="row">
                               
                                <div className="col-2 col-md-1 pr-0">
                               
                                    <Field
                                        label="Date of birth"
                                        name="dayOfBirth"
                                        component={renderField}
                                    />                                       
                                </div>
                                <div className="col-2  col-md-1 pt-2 pr-0">
                                <Field
                                        name="monthOfBirth "
                                     
                                        component={renderField}
                                    />
                                    
                                </div>
                                <div className="col-2 col-md-1 pt-2 pr-0">
                                <Field
                                        label=" "
                                        name="yearOfBirth"
                                        component={renderField}
                                    />
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-10 ">
                                
                            </div>

                            <div className="col-md-2 ">
                                <button type="submit" className="btn-primary p-1"  > Next > </button>
                                </div> 
                            </div>
                        </div> 
                        <div className="contact-form-page--step p-3 my-1">
                            Step 3: Final comments
                        </div>
                    </div>
                   
                  
                  
                 
                </form> 
                 
          );
      }
  }
  



export default reduxForm({
  validate,
  form:'ContactForm'
})(
 connect(null,null)(ContactFormSecondPage)
);

