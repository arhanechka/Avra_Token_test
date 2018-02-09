var expect  = require("chai").expect;
var request = require("request");

describe("Server API", function() {

    describe("Return index.html", function() {
  
      var url = "http://localhost:3000/";
  
      it("returns status 200", function(done) {
        request(url, function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
  
      it("returns empty body", function(done) {
        request(url, function(error, response, body) {
          expect(body).to.equal("");
          done();
        });
      });
  
    });
  });