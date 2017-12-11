import React from 'react'
import {Link} from 'react-router-dom'

const ThankYouBanner = ({values}) =>{
    const { firstName,
            surname ,
            telephoneNumber,
            gender, 
            dayOfBirth, 
            monthOfBirth, 
            yearOfBirth,
            comments,
            emailAddress} = values 
    return(
        <div className="panel">
            <h2>Thank you for your message</h2>
            <strong>The details we have are:</strong><br/> 
            <strong>Firstname:</strong> {firstName}, <br/> 
            <strong>Surname:</strong> {surname }, <br/> 
            <strong>Telephone number: </strong>{telephoneNumber}, <br/> 
            <strong>Gender: </strong> {gender}, <br/> 
            <strong>Date of birth:</strong> {dayOfBirth}/{ monthOfBirth}/{yearOfBirth}, <br/> 
            <strong>Email address:</strong>  {emailAddress}<br/> 
            <strong>Comments:</strong> {comments}. <br/>
            <h3>All the messages received so far can be viewed <Link to="/admin">here</Link></h3>
        </div>
    )
}
export default ThankYouBanner