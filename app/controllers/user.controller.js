var User = require('../models/user.model.js');
var mongoose = require('mongoose');
var crypto = require('crypto');

exports.loginPage = function (req, res) {
    res.render('../views/login', {
        topicHead: " Login"
    });
};

var encryptPassword = function (password, salt) {
    return (crypto.createHmac('sha1', salt).update(password).digest('hex'));
};

// User.virtual('password')
//     .set(function(password) {
//         this._plainPassword = password;
//         this.salt = Math.random() + '';
//         this.pass = this.encryptPassword(password);
//     })
//     .get(function() { return this._plainPassword; });


var checkPassword = function (password, salt, hashedPassword) {
    return encryptPassword(password, salt) === hashedPassword;
};
exports.login = function (req, res) {

    if (req.body.logemail && req.body.logpassword) {
        User.findOne({'email': req.body.logemail}, function (error, user) {
            if (error || !user) {
                res.status(401).send({message: 'Wrong email or password.'});
            } else {
                console.log(user.salt);
                if (checkPassword(req.body.logpassword, user.salt, user.pass)) {
                    req.session.user = res.locals.user = user;
                    console.log(user._id);
                   // req.session.userName = user.name;
                   // res.locals.user = user;
                    res.render('../views/cabinet.ejs');
                }
                else {
                    res.status(401).send({message: 'Wrong password.'});
                }
            }
        });
    }

    else {
        res.status(400).send({message: 'All fields required.'});
    }
}
;

exports.register = function (req, res) {
    res.render('../views/register', {
        topicHead: " register"
    });
};

exports.create = function (req, res) {
    // Create and Save a new User
    var req_name = req.body.name;
    console.log(req_name);

    var req_email = req.body.email;
    console.log(req_email);

    var req_pass = req.body.pass;
    console.log(req_pass);

    if (req_name == "" || req_email == "" || req_pass == "") {
        res.status(400).send({message: "Filelds can not be empty"});
    }
    var salt = Math.random() + '';
    var hashedPassword = encryptPassword(req_pass, salt);
    var user = new User({name: req_name, email: req_email, pass: hashedPassword, salt: salt});

    user.save(function (err, data) {
        //console.log(data);
        if (err) {
            console.log(err);
            res.status(500).send({message: "Some error ocuured while creating the User."});
        } else {
            // res.json({message: "User successfully added!", data });
            req.session.userId = user.id;
            req.session.user = user;
            res.locals.user = user;
            //res.send(data);
            res.render('../views/cabinet.ejs');
        }
    });
};

exports.findAll = function (req, res) {
    // Retrieve and return all users from the database.
    User.find(function (err, data) {
        if (err) {
            res.status(500).send({message: "Some error ocuured while retrieving users."});
        } else {
            res.json(data);
            //res.render('users.ejs', {users: data})
        }
    });
};

exports.findOne = function (req, res) {
    // Find a single User with a userId
    User.findById(req.params.userId, function (err, data) {
        if (err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.userId});
        } else {
            res.json(data);
        }
    });
};

exports.update = function (req, res) {
    // Update a user identified by the userId in the request
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            res.status(500).send({message: "Could not find a user with id " + req.params.userId});
        }

        user.name = req.body.name;
        user.email = req.body.email;
        user.pass = req.body.pass;

        user.save(function (err, data) {
            if (err) {
                res.status(500).send({message: "Could not update user with id " + req.params.userId});
            } else {
                res.json({message: "User successfully updated!", data});
            }
        });
    });
};

exports.delete = function (req, res) {
    // Delete a user with the specified userId in the request
    User.remove({_id: req.params.userId}, function (err, data) {
        if (err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.json({message: "User deleted successfully!"})
        }
    });
};
 exports.logout = function (req, res) {
     req.session.destroy();
     res.render('../views/index.ejs');
 };
