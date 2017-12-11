
let express = require('express');
let app = express();
let mongoose = require('mongoose');

let morgan = require('morgan');
let bodyParser = require('body-parser');
const cors = require('cors')
let port = 8080;
let enquiry = require('./app/routes/enquiry');
let config = require('config'); //we load the db location from the JSON files

//db options
let options = { 
				server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 },
                useMongoClient: true, } 
              }; 

//db connection      
mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
	//use morgan to log at command line
	app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.get("/", (req, res) => res.json({message: "Welcome to our enquirystore!"}));

app.route("/enquiry")
	.get(enquiry.getEnquiries)
	.post(enquiry.postEnquiry);
app.route("/enquiry/:id")
	.get(enquiry.getEnquiry)
	.delete(enquiry.deleteEnquiry)
	.put(enquiry.updateEnquiry);


app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing