import React, {Component} from 'react'
import validate from '../helpers/validate'
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
      onSubmit(values){
        this.props.handleSubmit(values)  
      
    }
    render(){
    
            const {handleSubmit, onSubmit,currentPage} = this.props;
    
            return(
                 <form onSubmit={handleSubmit}>
                   
                    <div className="contact-form-page--section">
                        <div   onClick={()=> this.props.selectPage(3)}  className="contact-form-page--step p-3 my-1">
                            Step 3: Final comments
                        </div>
                        { currentPage === 3 &&
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
                                    <div className="col-md-9">
                                        
                                    </div>

                                    <div className="col-md-3">
                                        <button type="submit" className="btn-primary py-1 px-5" > Next > </button>
                                        </div> 
                                    </div>
                            </div> 
                        }
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
      

