import {RECEIVE_ENQUIRIES ,
    NEW_ENQUIRY
   
    } from '../actions' ;

//maybe import lodash

export default function(state = {}, action){
switch (action.type){
    case RECEIVE_ENQUIRIES:{
        console.log("inside reducer")
        const { enquiries} = action;
        console.log("enquiries in reducer", enquiries)
        
       
        return {
            ...state,
            "enquiries":[...enquiries]
        }
    }
    case NEW_ENQUIRY:{
        const {enquiry} = action;
       
        const { enquiries} = state 
        
        return {
            ...state,
           // [enquiries]: [ ...enquiries , enquiry],
        }
    }
    
    default:
        return state;
}   
}