let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//enquiry schema definition
let EnquirySchema = new Schema(
  {
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    emailAddress: { type: String, required: true },
    telephoneNumber : { type: Number, required: true, min: 1 },
    gender: { type: String, required: true },
    dayOfBirth: { type: Number, required: true },
    monthOfBirth: { type: Number, required: true },
    yearOfBirth: { type: Number, required: true  },  
    comments: { type: String,required: true },   
    createdAt: { type: Date, default: Date.now },  
  }, 
  { 
    versionKey: false
  }
);

// Sets the createdAt parameter equal to the current time
EnquirySchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

//Exports the EnquirySchema for use elsewhere.
module.exports = mongoose.model('enquiry', EnquirySchema);