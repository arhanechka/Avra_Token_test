var Accounts = require('web3-eth-accounts');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//console.log(web3.version)
// Passing in the eth or web3 package is necessary to allow retrieving chainId, gasPrice and nonce automatically
// for accounts.signTransaction().
var accounts = new Accounts('ws://localhost:8545');

var net = require('net');
//web3.eth.net.isListening().then(console.log);
//console.log(web3.modules);
//var acc = web3.eth.accounts.create();
// var acc = web3.eth.getAccounts((error,response) => { if (!error) {return response}
// else(console.log(response))});
// console.log(acc)
var Wallet = web3.eth.accounts.wallet.create(1);
//console.log(Wallet)
//var accounts = web3.eth.getAccounts().then(console.log);

var acc = web3.eth.accounts.create("password");
console.log(acc)
console.log(acc.privateKey)



