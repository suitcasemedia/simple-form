import React, {Component} from 'react'
import {Field} from 'redux-form'
import { reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import '../App.css'
import validate from '../helpers/validate'
import renderField from './renderField'
import renderSelect from './renderSelect'


class ContactFormSecondPage extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
         open: false
        }
      }

    componentDidMount(){
        setTimeout(()=>this.setState({open : true}) , 20);
        
    }
render(){
    const {handleSubmit, currentPage, selectPage} = this.props;
        return(
            <form onSubmit={handleSubmit}>
                 
                <div className="contact-form-page--section">
                    <div   onClick={()=> this.props.selectPage(2) } className="contact-form-page--step p-3 my-1">
                        Step 2: More comments
                    </div>
                    { currentPage === 2 &&
                        <div className={`contact-form-page--inner-section p-3 ${this.state.open  ? '' : 'closed'}`}>
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
                                        label=" "
                                        name="monthOfBirth"
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
                                <div className="col-md-9">
                                    
                                </div>

                                <div className="col-md-3 ">
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
    connect(null,null)(ContactFormSecondPage)
);

