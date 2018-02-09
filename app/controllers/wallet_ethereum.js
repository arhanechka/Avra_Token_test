// var lightwallet = require('eth-lightwallet');
//
// var Web3=require('web3');
// // the seed is stored encrypted by a user-defined password
//
// //var password = prompt('Enter password for encryption', 'password');
// var password = '1111';
// var keystore = new lightwallet.keystore(password);
//
// var secretSeed = lightwallet.keystore.generateRandomSeed();
//
// // the seed is stored encrypted by a user-defined password
// //var password = prompt('Enter password for encryption', 'password');
// exports.ethWallet = lightwallet.keystore.deriveKeyFromPassword(password, function (err, pwDerivedKey) {
//
//     var ks = new lightwallet.keystore(secretSeed, pwDerivedKey);
//
// // generate five new address/private key pairs
// // the corresponding private keys are also encrypted
//     ks.generateNewAddress(pwDerivedKey, 5);
//     var addr = ks.getAddresses();
//     console.log(addr);
// // Create a custom passwordProvider to prompt the user to enter their
// // password whenever the hooked web3 provider issues a sendTransaction
// // call.
//     ks.passwordProvider = function (callback) {
//        // var pw = prompt("Please enter password", "Password");
//         callback(null, pw);
//     };
//
// // Now set ks as transaction_signer in the hooked web3 provider
// // and you can start using web3 using the keys/addresses in ks!
// });
// // exports.createE = keystore.createVault({
// //
// //     password: password,
// //     // seedPhrase: seedPhrase, // Optionally provide a 12-word seed phrase
// //     // salt: fixture.salt,     // Optionally provide a salt.
// //     // A unique salt will be generated otherwise.
// //     // hdPathString: hdPath    // Optional custom HD Path String
// // }, function (err, ks) {
// //     var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// //     console.log("Connected to Web3 Status: " + web3.isConnected());
// //     // Some methods will require providing the `pwDerivedKey`,
// //     // Allowing you to only decrypt private keys on an as-needed basis.
// //     // You can generate that value with this convenient method:
// //     ks.keyFromPassword(password, function (err, pwDerivedKey) {
// //         if (err) throw err;
// //
// //         // generate five new address/private key pairs
// //         // the corresponding private keys are also encrypted
// //         ks.generateNewAddress(pwDerivedKey, 5);
// //         var addr = ks.getAddresses();
// //         console.log(addr);
// //         ks.passwordProvider = function (callback) {
// //             var pw = prompt("Please enter password", "Password");
// //             callback(null, pw);
// //         };
// //
// //         // Now set ks as transaction_signer in the hooked web3 provider
// //         // and you can start using web3 using the keys/addresses in ks!
// //     });
// // });
