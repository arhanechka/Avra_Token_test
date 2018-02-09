var mongoose = require('mongoose');
var User = require('./user.model');

var WalletSchema = mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    userId: { type: String, required: true },
    public: { type : String, required: true, unique: true},
  //  private: { type : String, required: true, unique: true},
    balance: Number
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Wallet', WalletSchema);
