import React, {Component} from 'react'
import validate from '../helpers/validate'
import renderField from './renderField'
import renderSelect from './renderSelect'
import {Field} from 'redux-form'
import { reduxForm} from 'redux-form'
import renderTextarea from './renderTextarea'


class ContactFormThirdPage extends Component {

    componentWillMount(){
        document.body.style.backgroundColor = "#d2e1ff";
      }
      componentDidMount(){
        document.body.style.backgroundColor = "#d2e1ff";
      }
      componentWillUnMount(){
        document.body.style.backgroundColor = null;
      }

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
                            Step 2: more comments
                        </div>
                        
                    </div>
                    <div className="contact-form-page--section">
                        <div className="contact-form-page--step p-3 my-1">
                            Step 3: Final comments
                        </div>
                        <div className="contact-form-page--inner-section p-3">

                            <div className="row">
                                <div className="col-md-4">
                                    <Field
                                        label="Comments"
                                        name="comments"
                                        component={renderTextarea}
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
                    </div>
                </form> 
            )
        }
    }
export default reduxForm({
    validate,
    form:'ContactForm'
    })(
    (ContactFormThirdPage)
    );
      

