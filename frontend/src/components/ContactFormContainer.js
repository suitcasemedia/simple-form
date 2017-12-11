import React, {Component} from 'react'
import { reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import '../App.css'
import validate from '../helpers/validate'
import ContactFormFirstPage from './ContactFormFirstPage'
import ContactFormSecondPage from './ContactFormSecondPage'
import ContactFormThirdPage from './ContactFormThirdPage'
import ThankYouBanner from './ThankYouBanner'
import {createEnquiry}from '../actions'
import {reset} from 'redux-form';
class ContactFormContainer extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.selectPage= this.selectPage.bind(this)
        this.onSubmit= this.onSubmit.bind(this)
        this.state = {
          page: 1,
          showThankYouBanner: false,
          values:{},
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

      selectPage(pageNumber){
        this.setState({page: Number(pageNumber)})

      }
    onSubmit(values){
       this.props.createEnquiry(values, ()=> {
        this.props.dispatch(reset('ContactForm'))
        this.setState({page:  1})
        this.setState({values,showThankYouBanner: true,})
       })
    }

    render(){
          const {handleSubmit,createEnquiry} = this.props;
          const{page, showThankYouBanner,values} = this.state;
  
          return(
            <div className="contact-form-page">
              {showThankYouBanner && <ThankYouBanner values={values}/>}
             
              <div className="contact-form-page--container">
                <ContactFormFirstPage 
                  onSubmit={this.nextPage} 
                  currentPage={page} 
                  selectPage={this.selectPage}
                />
                <ContactFormSecondPage
                  previousPage={this.previousPage}
                  onSubmit={this.nextPage}
                  currentPage={page} 
                  selectPage={this.selectPage}
                />
                <ContactFormThirdPage
                  previousPage={this.previousPage}
                  onSubmit={this.onSubmit}
                  currentPage={page} 
                  selectPage={this.selectPage}
                />
              </div>
            </div>       
          );
      }
  }
function mapDispatchToProps(dispatch){
  return {
      createEnquiry : (values,callback)=>{ dispatch(createEnquiry(values,callback)) ;}
  }
}
export default reduxForm({
  validate,
  form:'ContactForm'
})(
 connect(null,mapDispatchToProps)(ContactFormContainer)
);

