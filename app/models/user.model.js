var mongoose = require('mongoose');
var util = require('util');
var crypto = require('crypto');

Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type : String, required: true, unique: true},
    pass: { type: String, required: true },
    salt: { type: String, required: true
},
}, {
    timestamps: true,
    versionKey: false
});
module.exports = mongoose.model('User', UserSchema);

//
// UserSchema.methods.encryptPassword = function(password) {
//     return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
// };
//
// UserSchema.virtual('password')
//     .set(function(password) {
//         this._plainPassword = password;
//         this.salt = Math.random() + '';
//         this.pass = this.encryptPassword(password);
//     })
//     .get(function() { return this._plainPassword; });


// UserSchema.methods.checkPassword = function(password) {
//     return this.encryptPassword(password) === this.pass;
// };
// UserSchema.statics.authorize = function(username, password, callback) {
//     var User = this;
//
//     async.waterfall([
//         function(callback) {
//             User.findOne({username: username}, callback);
//         },
//         function(user, callback) {
//             if (user) {
//                 if (user.checkPassword(password)) {
//                     callback(null, user);
//                 } else {
//                     callback(new AuthError("Пароль неверен"));
//                 }
//             } else {
//                 res.status(401).send({ message: 'Wrong email or password.' });
//         }}
//     ], callback);
// };
//
//
// function AuthError(message) {
//     Error.apply(this, arguments);
//     Error.captureStackTrace(this, AuthError);
//
//     this.message = message;
// }
//
// util.inherits(AuthError, Error);
//
// AuthError.prototype.name = 'AuthError';
//
// exports.AuthError = AuthError;
// exports.User = mongoose.model('User', UserSchema);
