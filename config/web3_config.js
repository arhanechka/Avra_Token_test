//var Personal = require('web3-eth-personal');

// "Personal.providers.givenProvider" will be set if in an Ethereum supported browser.
//var personal = new Personal('ws://localhost:8545');
// exports.initWeb3 = function() {
//     // Initialize web3 and set the provider to the testRPC.
//     if (typeof web3 !== 'undefined') {
//         App.web3Provider = web3.currentProvider;
//         web3 = new Web3(web3.currentProvider);
//     } else {
//         // set the provider you want from Web3.providers
//         App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
//         web3 = new Web3(App.web3Provider);
//         return web3;
//     }
// }
// var Web3 = require('web3');
// var web3 = new Web3();
// web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var Web3 = require('web3');
//var web3 = new Web3('http://localhost:8545');
// or
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// change provider
//web3.setProvider('ws://localhost:8546');
// or
//web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

// Using the IPC provider in node.js
var net = require('net');
//var web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os path
// or
//var web3 = new Web3(new Web3.providers.IpcProvider('\\.\pipe\geth.ipc', net)); // mac os path
// on windows the path is: "\\\\.\\pipe\\geth.ipc"

if(!web3.isConnected)
    console.log("not connected");
else
    console.log("connected");

web3.personal.newAccount("password",function(error,result){
    if(!error){
        console.log(result);
    }
});

