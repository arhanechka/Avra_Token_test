module.exports = function(app) {

    var wallet = require('app/controllers/wallet.controller.js');

     // Create a new Wallet
     app.post('/wallet', wallet.create);

     // Retrieve all wallets
     app.get('/wallets', wallet.findAll);

     // Retrieve a single Wallet with walletId
     app.get('/wallet/:walletId', wallet.findOne);

     // Retrieve all wallets by userId (user wallets)
     app.get('/wallets/:userId', wallet.findByUserId);

     // Update a Wallet with userId
     app.put('/users/:walletId', wallet.update);

     // Delete a Wallet with walletId
     app.delete('/users/:walletId', wallet.delete);
    // Create a Wallet
      app.post('/generate', wallet.create);
};
