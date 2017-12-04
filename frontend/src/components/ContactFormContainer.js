import React, {Component} from 'react'
import {Field} from 'redux-form'
import { reduxForm} from 'redux-form'
import {Link ,Redirect   } from 'react-router-dom'
import {connect} from 'react-redux'
import '../App.css'
import validate from '../helpers/validate'
import renderField from './renderField'
import renderSelect from './renderSelect'
import renderTextarea from './renderTextarea'
import ContactFormFirstPage from './ContactFormFirstPage'
import ContactFormSecondPage from './ContactFormSecondPage'
import ContactFormThirdPage from './ContactFormThirdPage'

class ContactFormContainer extends Component {


    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
          page: 1
        }
      }
      componentWillMount(){
        document.body.style.backgroundColor = "#D2E1FF";
      }
      componentDidMount(){
        document.body.style.backgroundColor = "#D2E1FF";
      }
      componentWillUnMount(){
        document.body.style.backgroundColor = null;
      }
   

      nextPage() {
        this.setState({page: this.state.page + 1})
      }
    
      previousPage() {
        this.setState({page: this.state.page - 1})
      }


    onSubmit(values){
    
    //this.props.createUser(values, this.props.actionType,()=>  this.props.redirectHome ? window.location.replace("/") : '' )
        
    // this.props.History.push('/')

    }

    render(){
  
          const {handleSubmit,} = this.props;
          const{page} = this.state;
  
          return(
            <div className="contact-form-page">
             
                <div className="contact-form-page--container">
                    {page === 1 && <ContactFormFirstPage onSubmit={this.nextPage} />}
                    {page === 2 &&
                        <ContactFormSecondPage
                            previousPage={this.previousPage}
                            onSubmit={this.nextPage}
                        />}
                        {page === 3 &&
                        <ContactFormThirdPage
                            previousPage={this.previousPage}
                            onSubmit={this.onSubmit}
                        />}
                
                </div>
            </div>       
          );
      }
  }
 


export default reduxForm({
  validate,
  form:'ContactForm'
})(
 connect(null,null)(ContactFormContainer)
);

