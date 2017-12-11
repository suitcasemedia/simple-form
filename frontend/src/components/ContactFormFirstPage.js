import React, {Component} from 'react'
import {Field} from 'redux-form'
import { reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import '../App.css'
import renderField from './renderField'
import validate from '../helpers/validate'


class ContactFormFirstPage extends Component {

   
    componentWillMount(){
        document.body.style.backgroundColor = "#d2e1ff";
    }
    componentWillUnmount(){
        document.body.style.backgroundColor = null;
    }

    render(){
  
        const {handleSubmit, currentPage} = this.props;
  
        return(
          
            <form onSubmit={handleSubmit}>
                <div className="contact-form-page--section">
                    <div  onClick={()=> this.props.selectPage(1) }className="contact-form-page--step p-3">
                        Step 1: Your details
                    </div>
                  { currentPage === 1 &&
                      <div className="contact-form-page--inner-section p-3">
                      <div className="row">
                          <div className="col-md-4">
                              <Field
                                  label="First Name"
                                  name="firstName"
                                  component={renderField}
                              />
                          </div>
                          <div className="col-md-4">
                              <Field
                                  label="Surname"
                                  name="surname"
                                  component={renderField}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-4">
                              <Field
                                  label="Email Address"
                                  name="emailAddress"
                                  component={renderField}
                              />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-9">
                          </div>
                          <div className="col-md-3 float-right">
                              <button type="submit" className="btn-primary py-1 px-5"  > Next > </button>
                          </div>          
                      </div>      
                  </div>



                  }  
                </div> 
               
            </form> 
                  
          );
      }
  }
  

export default reduxForm({
  validate,
  form:'ContactForm'
})(
 connect(null,null)(ContactFormFirstPage)
);

