var util = require('util');

var PhraseError = function (message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";


var HTTPError = function (status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HTTPError);

};

util.inherits(HTTPError, Error);
HTTPError.prototype.name = "HTTPError";

exports.HTTPError = HTTPError;
exports.PhraseError = PhraseError;

