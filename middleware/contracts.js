// const { compileContract } = require('../lib/compileContract');
// const { deployContract } = require('../lib/deployContract');
//
// const compile = (req, res, next) => {
//  // if (req.body && req.body.contractName) {
//   //  var contractName = req.body.contractName;
//   //  var contractNames = new Array {'TutorialToken', 'BasicToken', 'ERC20', 'SafeMath','StandartToken'}
//   ///  compileContract(contractNames);
//     var contractName = ['BasicToken.sol', 'ERC20.sol', 'ERC20Basic.sol', 'TutorialToken.sol','SafeMath.sol', 'StandardToken.sol'];
//     compileContract(contractName);
//   //  compileContract(contractName);
//     console.log('Successfully compiled the contract using Express.js Middleware');
//     next();
//   // } else {
//   //   res.status(401).json({
//   //     message: "Error: No Contract Name provided"
//   //   });
//   //   console.error('Error: No Contract Name provided: ');
//   //   //next(error);
//   //   return;
//   // }
// }
//
// const deploy = (req, res, next) => {
//   var contractName = req.body.contractName;
//   var contractAddress = deployContract(contractName);
//   res.contractAddress = contractAddress;
//   console.log('Successfully deployed the contract using Express.js Middleware');
//   next();
// }
//
// const getContractAddress = (req, res) => {
//   contractAddress = res.contractAddress;
//   // Return contract address in response object
//   res.json({
//     contractAddress: contractAddress
//   })
// }
//
// module.exports = {
//   compile: compile,
//   deploy: deploy,
//   getContractAddress: getContractAddress
// }
