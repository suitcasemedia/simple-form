//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Enquiry = require('../app/models/enquiry');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Enquiries', () => {
    beforeEach((done) => { //Before each test we empty the database
        Enquiry.remove({}, (err) => { 
           done();         
        });     
    });
/*
  * Test the /GET route
  */
  describe('/GET enquiry', () => {
      it('it should GET all the enquiries', (done) => {
        chai.request(server)
            .get('/enquiry')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });




/*
  * Test the /POST route
  */
  describe('/POST enquiry', () => {
    it('it should not POST an enquiry without a comments field', (done) => {
      let enquiry = {
        firstName: "bob",
        surname: "hoskins",
        telephoneNumber: 939483948,
        gender: "male",
        dayOfBirth: 17,
        monthOfBirth: 5,
        yearOfBirth: 1978,
        //comments: "hello",
        emailAddress: "jimmsrrs@gmail.com",
       
      }
      chai.request(server)
          .post('/enquiry')
          .send(enquiry)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('errors');
              res.body.errors.should.have.property('comments');
              res.body.errors.comments.should.have.property('kind').eql('required');
            done();
          });
    });
    it('it should POST an enquiry ', (done) => {
        let enquiry = {
            firstName: "bob",
            surname: "hoskins",
            telephoneNumber: 939483948,
            gender: "male",
            dayOfBirth: 17,
            monthOfBirth: 5,
            yearOfBirth: 1978,
            comments: "hello", // this time its here!
            emailAddress: "jimmsrrs@gmail.com",
           
          }
        chai.request(server)
            .post('/enquiry')
            .send(enquiry)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Enquiry successfully added!');
                res.body.enquiry.should.have.property('firstName');
                res.body.enquiry.should.have.property('surname');
                res.body.enquiry.should.have.property('telephoneNumber');
                res.body.enquiry.should.have.property('gender');
                res.body.enquiry.should.have.property('dayOfBirth');
                res.body.enquiry.should.have.property('monthOfBirth');
                res.body.enquiry.should.have.property('yearOfBirth');
                res.body.enquiry.should.have.property('comments');
                res.body.enquiry.should.have.property('emailAddress');
                
              done();
            });
      });
  });
 /*
  * Test the /GET/:id route
  */
  describe('/GET/:id enquiry', () => {
    it('it should GET an enquiry by the given id', (done) => {
      let enquiry = new Enquiry({ firstName: "bob",surname: "hoskins",telephoneNumber: 939483948,gender: "male",dayOfBirth: 17,monthOfBirth: 5,yearOfBirth: 1978,comments: "hello", emailAddress: "jimmsrrs@gmail.com" });
      enquiry.save((err, enquiry) => {
          chai.request(server)
          .get('/enquiry/' + enquiry.id)
          .send(enquiry)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('firstName');
              res.body.should.have.property('surname');
              res.body.should.have.property('telephoneNumber');
              res.body.should.have.property('gender');
              res.body.should.have.property('dayOfBirth');
              res.body.should.have.property('monthOfBirth');
              res.body.should.have.property('yearOfBirth');
              res.body.should.have.property('comments');
              res.body.should.have.property('emailAddress');
              res.body.should.have.property('_id').eql(enquiry.id);
            done();
          });
      });

    });
});
 /*
  * Test the /PUT/:id route
  */
  describe('/PUT/:id enquiry', () => {
    it('it should UPDATE an enquiry given the id', (done) => {
        let enquiry = new Enquiry({ firstName: "Claire",surname: "Rayner",telephoneNumber: 939483948,gender: "female",dayOfBirth: 10,monthOfBirth: 2,yearOfBirth: 1948,comments: "can i help you", emailAddress: "clair@gmail.com" });
      enquiry.save((err, enquiry) => {
              chai.request(server)
              .put('/enquiry/' + enquiry.id)
              .send({ firstName: "Claire",surname: "Rayner",telephoneNumber: 939483948,gender: "female",dayOfBirth: 10,monthOfBirth: 2,yearOfBirth: 1948,comments: "can i help you", emailAddress: "clairrayner@gmail.com" })
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Enquiry updated!');
                  res.body.enquiry.should.have.property('emailAddress').eql("clairrayner@gmail.com");
                done();
              });
        });
    });
});
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id enquiry', () => {
    it('it should DELETE an enquiry given the id', (done) => {
      let enquiry = new Enquiry({ firstName: "Claire",surname: "Rayner",telephoneNumber: 939483948,gender: "female",dayOfBirth: 10,monthOfBirth: 2,yearOfBirth: 1948,comments: "can i help you", emailAddress: "clair@gmail.com" })
      enquiry.save((err, enquiry) => {
              chai.request(server)
              .delete('/enquiry/' + enquiry.id)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('Enquiry successfully deleted!');
                  res.body.result.should.have.property('ok').eql(1);
                  res.body.result.should.have.property('n').eql(1);
                done();
              });
        });
    });
});
});
