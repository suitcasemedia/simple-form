
import * as enquiryAPIUtil from '../utils/api';
export const RECEIVE_ENQUIRIES= "RECEIVE_ENQUIRIES";
export const NEW_ENQUIRY= "NEW_ENQUIRY";

export const receiveEnquiries = enquiries => ({
  type: RECEIVE_ENQUIRIES,
  enquiries 
});

export const fetchEnquiries = () => dispatch => (
  enquiryAPIUtil
      .fetchEnquiries()
      .then((enquiries) => {dispatch(receiveEnquiries(enquiries))})    
);

export const newEnquiry = (enquiry) => ({
  type: NEW_ENQUIRY,
  enquiry
})

export const createEnquiry = (enquiry,callback) => dispatch => (
  enquiryAPIUtil
  .createEnquiry(enquiry)
  .then(enquiry => dispatch(newEnquiry(enquiry)))
  .then(()=> callback())
)