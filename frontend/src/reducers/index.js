import { combineReducers } from 'redux';
 
import {reducer  as formReducer}  from 'redux-form' ;
import EnquiriesReducer from './reducer_enquiries' ; 

const rootReducer = combineReducers({
  
  form: formReducer,
  enquiries : EnquiriesReducer
});

export default rootReducer;
