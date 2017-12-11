import React , {Component} from 'react'
import {connect} from 'react-redux'
import{fetchEnquiries} from '../actions'
//import _ from 'lodash'

class ContactFormEnquiries  extends Component {
    constructor(props) {
        super(props)
        this.renderEnquiries = this.renderEnquiries.bind(this)
        
      }
    componentDidMount(){
        const {fetchEnquiries } = this.props; 
        fetchEnquiries()

    }
    renderEnquiries(enquiries){
        enquiries.map(enquiry => {
            return(<div style={{color:'#000', fontSize: '100px',display:'block'}}>sdfsdfsdfsdf<h1>{enquiry.lastName}</h1></div>)
        } )
       // _.map(enquiries, enquiry=> (enquiry.firstName)) 
       //_.map((enquiries, enquiry) => (<div>hellooooooo{enquiry.firstName}</div>))
    }
    render(){
       
        const{enquiries} = this.props
       console.log("enquiries in component", enquiries)
       
       if( enquiries) {
        return(
            <div>
                <h1>Enquiries</h1>
                <table border="1">
                    <tr>
                        <th>
                            First name
                        </th>
                        <th>
                            Surname
                        </th>
                        <th>
                            D.O.B
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Telephone 
                        </th>
                        <th>
                            Address
                       
                        </th>
                        <th>
                           Comments
                        </th>
                        
                    </tr>
                    
         {enquiries.map((enquiry) => {
                return(
                    <tr>
                        <td>
                            {enquiry.firstName}
                        </td>
                        <td>
                            {enquiry.surname}
                        </td>
                        <td>
                            { `${enquiry.dayOfBirth}/
                            ${enquiry.monthOfBirth}/
                            ${enquiry.yearOfBirth}/`}  
                        </td>
                        <td>
                            {enquiry.gender}
                        </td>
                        <td>
                            {enquiry.emailAddress }
                        </td>
                        <td>
                            {enquiry.telephoneNumber }
                        </td>
                        <td>
                            Address
                        </td>
                        <td>
                            {enquiry.comments }
                        </td>
                    </tr>)    
                })}
                </table>       
            </div>
        )
    }
        else{
            return(
                <div>
                   
                </div>
            )
        }
    }
}  

function mapDispatchToProps(dispatch){
    return{
        fetchEnquiries: ()=> dispatch(fetchEnquiries())
    }

}
function mapStateToProps({ enquiries}){

    return{
        "enquiries":enquiries.enquiries
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactFormEnquiries)