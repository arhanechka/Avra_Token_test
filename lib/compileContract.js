// FIXME: Running `node scripts/compileContract.js Peerism`
// Bugs: Does not work when use comments in the contract
var solc = require('solc');
var fs = require('fs');
var path = require('path');
var Pudding = require('ether-pudding');


const compileContract = (contractName) => {
    var input = {};

    var i;
    for (i in contractName) {
        var file = contractName[i];
        input[file] = fs.readFileSync('contracts/' + file, 'utf8');
    }
    var output = solc.compile({sources: input}, 1);
    // for (var contractName in output.contracts) {
    //     console.log(contractName + ': ' + output.contracts[contractName].bytecode)
    // }
    // console.log(Object.keys(output.contracts))

    // var compiledCode = solc.compile({sources: inputs}, 1, findImports)
    // var source = fs.readFileSync(
    // path.join(__dirname, '../contracts')+'/'+contractName+'.sol',{encoding: 'utf8'}).toString()
    // .replace(/\n/g,' ');
    //  console.log(source);

    //console.log(Object.keys(compiled.contracts))
    // if(!compiled.contracts[':'+contractName]) {
    //   console.log('Contract must have same name as file!');
    //   process.exit(1);
    // }
    for (var compiled in output.contracts) {
        var bytecode = output.contracts[compiled].bytecode;
        var interfaceC = output.contracts[compiled].interface;

        var contract_data = {
            abi: JSON.parse(interfaceC),
            binary: bytecode,
            address: '0x0000011111222223333344444555556666677777'
        };

        var expectedFilepath = path.join(__dirname, '../build/contracts') + '/' + contractName + '.json';
        //console.log(contract_data);
        Pudding.save(contract_data, expectedFilepath)
            .then(function () {
                console.log('File ' + 'api/build/contracts/' + contractName + '.sol.js was created with the JS contract!');
            })
            .catch(function (err) {
                console.log('Error saving contract', err);
            });
    }
}

run = (contractName) => {
  compileContract(contractName);
}

// Process Routes for API
module.exports = {
  compileContract: compileContract
}

// Process CLI (i.e. `node lib/compileContract.js Peerism`)
// Reference: http://coding.pstodulka.com/2014/10/22/node-modules-as-cli/
if(require.main == module) {
  if(process.argv.length < 3) {
    console.log('Error: Contract Name as argument is required');
    process.exit(1);
  }
  var contractName = process.argv[2];
  run(contractName);
}
