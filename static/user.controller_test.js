//process.env.NODE_ENV = 'test';


// var expect  = require("chai").expect;
// var request = require("request");

let mongoose = require("mongoose");
let User = require('../app/models/user.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe.skip('users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => { 
           done();         
        });     
    });
/*
  * Test the /GET route
  */
//   describe.skip('/GET users', () => {
//     xit('it should GET all the users', (done) => {
//       chai.request(server)
//           .get('/users')
//           .end((err, res) => {
//               res.should.have.status(200);
//               res.body.should.be.a('array');
//               res.body.length.should.be.eql(0);
//             done();
//           });
//     });
// });

});