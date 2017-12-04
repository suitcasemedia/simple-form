
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
   if(!values.telephoneNumber){
        errors.telephoneNumber= "Please enter a numeric telephone number"

    }
    if(!values.dateOfBirth){
        errors.dateOfBirth = "Enter some content please"

    }
   if(!values.comments){
        errors.author = "Enter some content please"

}

return errors;
  
}

export default validate