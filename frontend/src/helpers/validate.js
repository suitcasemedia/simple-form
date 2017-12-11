
function validate(values) {
  const errors = {}
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  //   valitate the inputs from 'values'
    if(!values.firstName|| values.firstName.length < 3){
        errors.firstName = "Please enter a first name  least 3 characters long"

    }
    if(!values.surname|| values.surname.length < 3){
        errors.surname = "Please enter a surname  least 3 characters long"

    }
    if(!values.emailAddress||! emailRegEx.test(values.emailAddress)){
        errors.emailAddress = "Please enter a valid email address"

    }
    if(!values.telephoneNumber || (isNaN(parseFloat(values.telephoneNumber)) && !isFinite(values.telephoneNumber) ) || values.telephoneNumber.length < 6){
        errors.telephoneNumber= "Please enter a numeric telephone number at least 6 characters long"
    }
    if(!values.gender || values.gender === "Select Gender"){
        errors.gender= "Please select your gender"
    }
    if(!values.dayOfBirth || (isNaN(parseFloat(values.dayOfBirth )) && !isFinite(values.dayOfBirth ) )){
        errors.dayOfBirth= "Please enter a numeric value for the day of your birth"
    }
    if(!values.monthOfBirth  || (isNaN(parseFloat(values.monthOfBirth)) && !isFinite(values.monthOfBirth) ) ||( values.monthOfBirth >12 || values.monthOfBirth < 1)){
        errors.monthOfBirth = "Please enter a numeric value for the month of your birth between 1 and 12"
    }
    
    if(!values.yearOfBirth  || (isNaN(parseFloat(values.yearOfBirth)) && !isFinite(values.yearOfBirth)) ){
        errors.yearOfBirth = "Please enter a numeric value for the year of your birth "
    }
   
   if(!values.comments){
        errors.comments = "Enter some content please"
    }
return errors;
  
}

export default validate