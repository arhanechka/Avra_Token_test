var Wallet = require('app/models/wallet.model');
//var Accounts = require('web3-eth-accounts');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//var accounts = new Accounts('ws://localhost:8545');
var Personal = require('web3-eth-personal');
var timeout = require('connect-timeout');
// "Personal.providers.givenProvider" will be set if in an Ethereum supported browser.
var personal = new Personal('ws://localhost:8546');
var net = require('net');


exports.create = async function (req, res) {
    // Create and Save a new Wallet

    var req_userId = req.session.user._id;
     console.log("user id " +req_userId);
    var req_public;
    var password = req.session.user.pass;
  //  var password = "1234";
    console.log("req_password" + password);
   // req_public =web3.eth.personal.newAccount(password).then(function(result) {
   //      create(result)
   //  })
   //      .catch(function(error){
   //          console.log(error);
   //      });
   //  function create (result) {
   //      //console.log("Nazar" +new Wallet({userId: req_userId, public: result, balance: req_balance}));
   //     // return  new Wallet({userId: req_userId, public: result, balance: req_balance});return result;}
    var req_public = await web3.eth.personal.newAccount(password);
   //
    if(req_userId == "" || req_public == "") {
        res.status(400).send({message: "Filelds can not be empty"});

    }
    console.log("req public after" + req_public);

    var req_balance = 0;

    var wallet = new Wallet({userId: req_userId, public: req_public, balance: req_balance});
    console.log("created wallet: " +wallet);
    res.global.wallet = wallet;
    wallet.save(function(err, data) {
    //    console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error ocuured while creating the wallet."});
        } else {
          //  res.send(data);
           // res.redirect('/wallets')
         //   res.json({message: "Wallet successfully added!", data });

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

exports.findByUserId = function(req, res, userId) {
    // Retrieve and return all wallets from the database corresponding to certain userId.
    // if (req){
    //     console.log ("Some error with wallet handling")
    // }
    // else{
    //var userId = req.session.user._id;
    Wallet.find(userId,function(err, data){
        if(err) {
            res.status(500).send({message: "Some error ocuured while retrieving wallets."});
        } else {
            //res.send(data);
            //res.render('wallets.ejs', {wallets: data})
            //res.json(data);
            console.log("this is wallet found" +data)
            return data;
        }
    })
// }
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

