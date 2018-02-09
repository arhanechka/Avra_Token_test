var Wallet = require('../models/wallet.model.js');
//var Accounts = require('web3-eth-accounts');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//var accounts = new Accounts('ws://localhost:8545');
var Personal = require('web3-eth-personal');
var timeout = require('connect-timeout');
// "Personal.providers.givenProvider" will be set if in an Ethereum supported browser.
var personal = new Personal('ws://localhost:8546');
var net = require('net');


exports.create = function(req, res) {
    // Create and Save a new Wallet
    //var req_userId = req.body.userId;
    var req_userId = req.session.userName;
    console.log(req_userId);
    var req_public;
   // var acc = web3.eth.accounts.create("password");
    if(!web3.isConnected())
        console.log("not connected");
    else
        console.log("connected");

    web3.personal.newAccount("password",function(error,result){
        if(!error){
            timeout(120000);
            console.log("result" +result);
           req_public = result;
            console.log("req public "+req_public);
        }
    });
    console.log("req public after"+req_public);
    //terporary, for test
    req_public = "0x1wqe3nf4j34rfkwdwq3";
    var req_balance = 0;
    // var req_public = acc.address;
    if(req_userId == "" || req_public == "") {
        res.status(400).send({message: "Filelds can not be empty"});
    }

    var wallet = new Wallet({userId: req_userId, public: req_public, balance: req_balance});

    wallet.save(function(err, data) {
    //    console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error ocuured while creating the wallet."});
        } else {
          //  res.send(data);
           // res.redirect('/wallets')
         //   res.json({message: "Wallet successfully added!", data });
            res.locals.wallet = wallet;
            res.render('../views/wallets.ejs')
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all wallets from the database.
    var balanve= account.balance1;
    console.log("balance" +balanve);
    Wallet.find(function(err, data){
        if(err) {
            res.status(500).send({message: "Some error ocuured while retrieving wallets."});
        } else {
            //res.send(data);
            res.render('wallets.ejs', {wallets: data})
            res.json(data);
        }
    });
};

exports.findByUserId = function(req, res) {
    // Retrieve and return all wallets from the database corresponding to certain userId.
    Wallet.find({userId: req.params.userId},function(err, data){
        if(err) {
            res.status(500).send({message: "Some error ocuured while retrieving wallets."});
        } else {
            //res.send(data);
            //res.render('wallets.ejs', {wallets: data})
            res.json(data);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single wallet with a walletId
    Wallet.findById(req.params.walletId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve wallet with id " + req.params.walletId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a wallet identified by the walletId in the request
    Wallet.findById(req.params.walletId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a wallet with id " + req.params.walletId});
        }

        wallet.name = req.body.name;
        wallet.email = req.body.email;
        wallet.pass = req.body.pass;

        wallet.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update wallet with id " + req.params.walletId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a wallet with the specified userId in the request
    Wallet.remove({_id: req.params.walletId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete wallet with id " + req.params.id});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });
};

