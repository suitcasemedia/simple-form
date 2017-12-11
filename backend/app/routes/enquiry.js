let mongoose = require('mongoose');
let Enquiry = require('../models/enquiry');

/*
 * GET /enquiry route to retrieve all the enquiries.
 */
function getEnquiries(req, res) {
	//Query the DB and if no errors, send all the enquiries
	let query = Enquiry.find({});
	query.exec((err, enquiries) => {
		if(err) res.send(err);
		//If no errors, send them back to the client
		res.json(enquiries);
	});
}

/*
 * POST /enquiry to save a new enquiry.
 */
function postEnquiry(req, res) {
	console.log("got a post")
	//Creates a new enquiry
	var newEnquiry = new Enquiry(req.body);
	console.log("req.body: ",req.body)
	//Save it into the DB.
	
	newEnquiry.save((err,enquiry) => {
		if(err) {
			res.send(err);
		}
		else { //If no errors, send it back to the client
			res.json({message: "Enquiry successfully added!", enquiry });
		}
	});
}

/*
 * GET /enquiry/:id route to retrieve a book given its id.
 */
function getEnquiry(req, res) {
	Enquiry.findById(req.params.id, (err, enquiry) => {
		if(err) res.send(err);
		//If no errors, send it back to the client
		res.json(enquiry);
	});		
}

/*
 * DELETE /enquiry/:id to delete a book given its id.
 */
function deleteEnquiry(req, res) {
	Enquiry.remove({_id : req.params.id}, (err, result) => {
		res.json({ message: "Enquiry successfully deleted!", result });
	});
}

/*
 * PUT /enquiry/:id to updatea a book given its id
 */
function updateEnquiry(req, res) {
	Enquiry.findById({_id: req.params.id}, (err, enquiry) => {
		if(err) res.send(err);
		Object.assign(enquiry, req.body).save((err, enquiry) => {
			if(err) res.send(err);
			res.json({ message: 'Enquiry updated!', enquiry });
		});	
	});
}

//export all the functions
module.exports = { getEnquiries, postEnquiry, getEnquiry, deleteEnquiry, updateEnquiry };