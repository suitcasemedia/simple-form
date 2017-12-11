import {v4 } from 'node-uuid';
const api = "http://localhost:8080"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  
}


export const fetchEnquiries = () =>
  fetch(`${api}/enquiry`, { headers })
  .then(res => { return res.json()})
  
   
 
 
export const createEnquiry = (values) =>
  fetch(`${api}/enquiry`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },  
    body: JSON.stringify({
      firstName: values.firstName,
      surname : values.surname ,
      telephoneNumber : values. telephoneNumber,
      gender :  values.gender, 
      dayOfBirth : values.dayOfBirth, 
      monthOfBirth : values.monthOfBirth, 
      yearOfBirth : values.yearOfBirth,
      comments :values.comments,
      emailAddress :  values.emailAddress
    })
  })
  .then(res => res.json())
  

